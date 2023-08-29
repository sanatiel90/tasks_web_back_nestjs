import { PrismaClient } from '@prisma/client';

const prismaClient = new PrismaClient();
async function main() {
  await prismaClient.profile.createMany({
    data: [
      { id: 1, name: 'Administrador', slug: 'ADMINISTRADOR' },
      { id: 2, name: 'Coordenador', slug: 'COORDENADOR' },
      { id: 3, name: 'Supervisor', slug: 'SUPERVISOR' },
      { id: 4, name: 'Operador', slug: 'OPERADOR' },
    ],
  });
}

main()
  .then(async () => {
    await prismaClient.$disconnect();
  })
  .catch(async (error) => {
    console.error(error);
    await prismaClient.$disconnect();
    process.exit(1);
  });
