import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const createUser = async (userData: any) => {
  return await prisma.user.create({
    data: userData,
  });
};

export const getUserByEmail = async (email: string) => {
  return await prisma.user.findUnique({
    where: { email },
  });
};
