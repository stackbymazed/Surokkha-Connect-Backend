import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const createAlert = async (alertData: any) => {
  return await prisma.alert.create({
    data: {
      ...alertData,
      userId: Number(alertData.userId),
    },
  });
};

export const getAllAlerts = async () => {
  return await prisma.alert.findMany({
    include: { user: true },
    orderBy: { createdAt: 'desc' },
  });
};
