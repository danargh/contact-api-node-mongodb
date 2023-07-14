import { PrismaClient } from "@prisma/client";
import { logger } from "./logging.js";

const prisma = new PrismaClient({
   log: [
      {
         emit: "event",
         level: "query",
      },
      {
         emit: "stdout",
         level: "error",
      },
      {
         emit: "stdout",
         level: "info",
      },
      {
         emit: "stdout",
         level: "warn",
      },
   ],
});

prisma.$on("error", (e) => {
   logger.error(e);
});

prisma.$on("warn", (e) => {
   logger.warn(e);
});

prisma.$on("info", (e) => {
   logger.info(e);
});

prisma.$on("query", (e) => {
   logger.info(e);
});

async function main() {
   await prisma.user.create({
      data: {
         username: "Falal",
         email: "falal@gmail.com",
         password: "12345",
         token: "1234567890",
         contacts: {
            create: {
               firstName: "Falal",
               lastName: "Maulana",
               phone: "081234567890",
            },
         },
      },
   });

   const allUsers = await prisma.user.findMany();
   console.dir(allUsers, { depth: null });
}

main()
   .then(async () => {
      await prisma.$disconnect();
   })

   .catch(async (e) => {
      console.error(e);

      await prisma.$disconnect();

      process.exit(1);
   });

export { prisma };
