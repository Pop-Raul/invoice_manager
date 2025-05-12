import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  await prisma.invoice.deleteMany();
  await prisma.user.deleteMany();

  const users = await Promise.all([
    prisma.user.create({
      data: {
        email: 'raul_test@example.com',
        name: 'Raul',
        hashPass: '$2b$10$ID3JFV/ZLDX2rT5mCku7ieskfddLwdvth0TnlrUWLxZLOezRc9XMq',
      },
    }),
    prisma.user.create({
      data: {
        email: 'bob@example.com',
        name: 'Bob',
        hashPass: '$2b$10$ID3JFV/ZLDX2rT5mCku7ieskfddLwdvth0TnlrUWLxZLOezRc9XMq',
      },
    }),
    prisma.user.create({
      data: {
        email: 'test@example.com',
        name: 'Test',
        hashPass: '$2b$10$ID3JFV/ZLDX2rT5mCku7ieskfddLwdvth0TnlrUWLxZLOezRc9XMq',
      },
    }),
  ]);

  console.log('✅ Users seeded:', users.map(u => ({ id: u.id, email: u.email })));

  const invoices = await Promise.all([
    prisma.invoice.create({
      data: {
        vendorName: 'ACME Corp.',
        amount: 1500.0,
        dueDate: new Date('2025-06-15'),
        description: 'Servicii de consultanță IT',
        paid: false,
        user: { connect: { id: users[0].id } },
      },
    }),
    prisma.invoice.create({
      data: {
        vendorName: 'Tech Supplies SRL',
        amount: 299.99,
        dueDate: new Date('2025-05-30'),
        description: 'Echipamente de birou',
        paid: true,
        user: { connect: { id: users[1].id } },
      },
    }),
    prisma.invoice.create({
      data: {
        vendorName: 'Design Studio',
        amount: 750.5,
        dueDate: new Date('2025-07-01'),
        description: 'Design grafic și branding',
        paid: false,
        user: { connect: { id: users[2].id } },
      },
    }),
  ]);

  console.log('✅ Invoices seeded:', invoices.map(inv => ({ id: inv.id, vendor: inv.vendorName })));
}

main()
  .catch((e) => {
    console.error('Seed error:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
