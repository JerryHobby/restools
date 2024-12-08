import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function testConnection() {
  try {
    // Test database connection by creating a user
    const user = await prisma.user.create({
      data: {
        email: `test-${Date.now()}@example.com`,
        name: 'Test User'
      }
    })
    console.log('Database connection successful!')
    console.log('Created test user:', user)

    // Optional: Clean up the test user
    await prisma.user.delete({
      where: { id: user.id }
    })
  } catch (error) {
    console.error('Database connection failed:', error)
  } finally {
    await prisma.$disconnect()
  }
}

testConnection()
