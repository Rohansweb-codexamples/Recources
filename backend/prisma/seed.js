import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';
import { generateResource, listCategories } from '../src/generator.js';

const prisma = new PrismaClient();

async function main() {
  const adminPassword = await bcrypt.hash('admin123', 10);
  const admin = await prisma.user.upsert({
    where: { email: 'admin@rohansresources.com' },
    update: {},
    create: { email: 'admin@rohansresources.com', password: adminPassword, name: 'Rohan Admin', role: 'ADMIN' }
  });

  const teacherPassword = await bcrypt.hash('teacher123', 10);
  await prisma.user.upsert({
    where: { email: 'teacher@rohansresources.com' },
    update: {},
    create: { email: 'teacher@rohansresources.com', password: teacherPassword, name: 'Sample Teacher', role: 'TEACHER' }
  });

  const types = ['LABELS', 'BANNER', 'DISPLAY', 'FLASHCARDS'];
  let count = 0;

  for (const category of listCategories()) {
    for (const type of types) {
      const result = generateResource(category, type, '');
      const existing = await prisma.resource.findFirst({ where: { title: result.title } });
      if (!existing) {
        await prisma.resource.create({
          data: {
            title: result.title,
            description: result.description,
            category,
            type,
            content: result.content,
            tags: [category.toLowerCase(), type.toLowerCase()],
            createdBy: admin.id
          }
        });
        count++;
      }
    }
  }

  console.log(`Seed complete! Created ${count} resources across ${listCategories().length} categories.`);
  console.log('Admin: admin@rohansresources.com / admin123');
  console.log('Teacher: teacher@rohansresources.com / teacher123');
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
