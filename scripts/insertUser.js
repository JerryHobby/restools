const { PrismaClient } = require('@prisma/client')

async function main() {
  const prisma = new PrismaClient()

  try {
    const newUser = await prisma.user.create({
      data: {
        email: `jerry+${Date.now()}@example.com`,
        name: 'Jerry Test User'
      }
    })

    console.log('User created successfully:', newUser)
  } catch (error) {
    console.error('Error creating user:', error)
  } finally {
    await prisma.$disconnect()
  }
}

main()
