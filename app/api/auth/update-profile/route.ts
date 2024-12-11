import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/prisma/client';
import { auth } from '@/auth';
import bcrypt from 'bcryptjs';
import { z } from 'zod';

const updateSchema = z.object({
  email: z.string().email().optional(),
  currentPassword: z.string().min(6).optional(),
  newPassword: z.string().optional(),
  unumber: z.union([z.string(), z.null()]).optional(),
  function: z.union([z.string(), z.null()]).optional(),
  location: z.union([z.string(), z.null()]).optional(),
});

export async function POST(request: NextRequest) {
  try {
    const session = await auth();
    if (!session?.user) {
      return NextResponse.json(
        { message: 'Not authenticated' },
        { status: 401 }
      );
    }

    const body = await request.json();
    console.log('Received update request:', {
      ...body,
      currentPassword: body.currentPassword ? '[REDACTED]' : undefined,
      newPassword: body.newPassword ? '[REDACTED]' : undefined,
    });

    // Convert empty strings to null
    const sanitizedBody = {
      ...body,
      unumber: body.unumber || null,
      function: body.function || null,
      location: body.location || null,
    };

    const validatedData = updateSchema.parse(sanitizedBody);

    // Get current user
    const user = await prisma.user.findUnique({
      where: { id: session.user.id },
    });

    if (!user) {
      return NextResponse.json(
        { message: 'User not found' },
        { status: 404 }
      );
    }

    // If changing password, verify current password
    if (validatedData.newPassword) {
      if (!validatedData.currentPassword) {
        return NextResponse.json(
          { message: 'Current password is required to change password' },
          { status: 400 }
        );
      }

      if (!user.password) {
        return NextResponse.json(
          { message: 'Cannot change password for OAuth account' },
          { status: 400 }
        );
      }

      const passwordValid = await bcrypt.compare(
        validatedData.currentPassword,
        user.password
      );

      if (!passwordValid) {
        return NextResponse.json(
          { message: 'Current password is incorrect' },
          { status: 400 }
        );
      }
    }

    // Prepare update data
    const updateData: any = {};
    
    if (validatedData.email) updateData.email = validatedData.email;
    if (validatedData.newPassword) updateData.password = validatedData.newPassword;
    
    // Handle optional fields that can be null
    updateData.unumber = validatedData.unumber ?? user.unumber;
    updateData.function = validatedData.function ?? user.function;
    updateData.location = validatedData.location ?? user.location;

    console.log('Updating user with data:', {
      ...updateData,
      password: updateData.password ? '[REDACTED]' : undefined,
    });

    // Update user
    const updatedUser = await prisma.user.update({
      where: { id: session.user.id },
      data: updateData,
      select: {
        id: true,
        name: true,
        email: true,
        image: true,
        role: true,
        unumber: true,
        function: true,
        location: true,
      }
    });

    console.log('User updated successfully');

    return NextResponse.json({
      message: 'Profile updated successfully',
      user: updatedUser
    }, { status: 200 });
  } catch (error) {
    console.error('Profile update error:', error);

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { message: 'Invalid input data', errors: error.errors },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { message: 'An error occurred while updating profile', error: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}
