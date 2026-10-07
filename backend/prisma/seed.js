import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

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

  const resources = [
    {
      title: 'Keyboard Shortcut Labels',
      description: 'Printable labels showing common keyboard shortcuts for computing displays.',
      category: 'COMPUTING_LABELS',
      type: 'LABELS',
      tags: ['computing', 'keyboard', 'shortcuts', 'printable'],
      content: {
        items: [
          { label: 'Ctrl + C', value: 'Copy' },
          { label: 'Ctrl + V', value: 'Paste' },
          { label: 'Ctrl + Z', value: 'Undo' },
          { label: 'Ctrl + S', value: 'Save' },
          { label: 'Ctrl + P', value: 'Print' },
          { label: 'Ctrl + X', value: 'Cut' },
          { label: 'Ctrl + A', value: 'Select All' },
          { label: 'Ctrl + F', value: 'Find' },
          { label: 'Alt + Tab', value: 'Switch Windows' },
          { label: 'Ctrl + Shift + T', value: 'Reopen Closed Tab' },
          { label: 'Win + L', value: 'Lock Screen' },
          { label: 'Ctrl + Shift + N', value: 'New Folder' }
        ]
      }
    },
    {
      title: 'Computer Parts Display Labels',
      description: 'Labels identifying the main parts of a computer for classroom displays.',
      category: 'COMPUTING_LABELS',
      type: 'LABELS',
      tags: ['computing', 'hardware', 'display'],
      content: {
        items: [
          { label: 'Monitor', value: 'Displays information from the computer' },
          { label: 'Keyboard', value: 'Used to type text and commands' },
          { label: 'Mouse', value: 'Controls the cursor on screen' },
          { label: 'CPU', value: 'The brain of the computer' },
          { label: 'Printer', value: 'Produces paper copies of documents' },
          { label: 'Speaker', value: 'Outputs sound from the computer' },
          { label: 'Headphones', value: 'Personal audio output device' },
          { label: 'Webcam', value: 'Captures video and images' }
        ]
      }
    },
    {
      title: 'Computing Vocabulary Display',
      description: 'Key computing vocabulary terms for a computing corner display.',
      category: 'COMPUTING_LABELS',
      type: 'DISPLAY',
      tags: ['computing', 'vocabulary', 'display'],
      content: {
        items: [
          { label: 'Algorithm', value: 'A set of step-by-step instructions' },
          { label: 'Debugging', value: 'Finding and fixing errors in code' },
          { label: 'Variable', value: 'A container for storing data' },
          { label: 'Loop', value: 'Repeating a set of instructions' },
          { label: 'Function', value: 'A reusable block of code' },
          { label: 'Input', value: 'Data sent to a computer' },
          { label: 'Output', value: 'Data produced by a computer' },
          { label: 'Network', value: 'Connected computers sharing data' }
        ]
      }
    },
    {
      title: 'Autumn Leaf Types Display',
      description: 'Beautiful autumn leaf identification display with colourful leaf types.',
      category: 'AUTUMN',
      type: 'DISPLAY',
      tags: ['autumn', 'leaves', 'nature', 'display', 'seasonal'],
      content: {
        items: [
          { label: 'Oak Leaf', value: 'Lobed leaves, turn brown and red in autumn' },
          { label: 'Maple Leaf', value: 'Star-shaped, turns bright red and orange' },
          { label: 'Birch Leaf', value: 'Oval with serrated edges, turns golden yellow' },
          { label: 'Sycamore Leaf', value: 'Large maple-like leaves, turns amber' },
          { label: 'Beech Leaf', value: 'Oval with wavy edges, turns copper bronze' },
          { label: 'Ash Leaf', value: 'Compound leaves, turns pale yellow' }
        ]
      }
    },
    {
      title: 'Autumn Welcome Banner',
      description: 'Colourful autumn-themed welcome banner for classroom doors and displays.',
      category: 'AUTUMN',
      type: 'BANNER',
      tags: ['autumn', 'banner', 'welcome', 'seasonal', 'display'],
      content: {
        title: 'Welcome to Autumn',
        subtitle: 'A Season of Learning and Growth',
        decorations: ['\u{1F342} Falling Leaves', '\u{1F330} Conkers', '\u{1F344} Mushrooms', '\u{1F994} Hedgehogs'],
        message: "Welcome to our wonderful autumn term! Let's explore, learn, and grow together this season."
      }
    },
    {
      title: 'Solar System Display',
      description: 'Comprehensive solar system display with planet facts and labels.',
      category: 'SPACE',
      type: 'DISPLAY',
      tags: ['space', 'solar system', 'planets', 'science', 'display'],
      content: {
        items: [
          { label: 'Mercury', value: 'The smallest planet, closest to the Sun' },
          { label: 'Venus', value: 'The hottest planet, covered in thick clouds' },
          { label: 'Earth', value: 'Our home planet, the only one known to have life' },
          { label: 'Mars', value: 'The Red Planet, home to the largest volcano' },
          { label: 'Jupiter', value: 'The largest planet, has a Great Red Spot storm' },
          { label: 'Saturn', value: 'Famous for its beautiful ring system' },
          { label: 'Uranus', value: 'An ice giant that rotates on its side' },
          { label: 'Neptune', value: 'The windiest planet, deep blue in colour' }
        ]
      }
    },
    {
      title: 'Space Mission Labels',
      description: 'Labels for famous space missions and spacecraft for space-themed displays.',
      category: 'SPACE',
      type: 'LABELS',
      tags: ['space', 'missions', 'science', 'display'],
      content: {
        items: [
          { label: 'Apollo 11', value: 'First manned mission to the Moon (1969)' },
          { label: 'Voyager 1', value: 'Furthest human-made object in space' },
          { label: 'ISS', value: 'International Space Station, orbiting since 1998' },
          { label: 'Hubble Telescope', value: 'Space telescope launched in 1990' },
          { label: 'Mars Rover', value: 'Robotic vehicles exploring the Mars surface' },
          { label: 'James Webb', value: 'Most powerful space telescope (2021)' }
        ]
      }
    },
    {
      title: 'Classroom Welcome Banner',
      description: 'A bright and cheerful welcome banner for any classroom.',
      category: 'DISPLAY_RESOURCES',
      type: 'BANNER',
      tags: ['display', 'banner', 'welcome', 'classroom'],
      content: {
        title: 'Welcome to Our Class',
        subtitle: 'Where Learning is an Adventure',
        decorations: ['\u{2B50} Stars', '\u{1F308} Rainbow', '\u{1F4DA} Books', '\u{270F}\u{FE0F} Pencils'],
        message: "Welcome to our wonderful classroom! Let's learn, grow, and have fun together."
      }
    }
  ];

  for (const resource of resources) {
    const existing = await prisma.resource.findFirst({ where: { title: resource.title } });
    if (!existing) {
      await prisma.resource.create({ data: { ...resource, createdBy: admin.id } });
    }
  }

  console.log('Seed complete!');
  console.log('Admin: admin@rohansresources.com / admin123');
  console.log('Teacher: teacher@rohansresources.com / teacher123');
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
