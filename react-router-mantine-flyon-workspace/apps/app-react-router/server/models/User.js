/* eslint-disable no-undef */
import { prisma } from '../prisma/prismaClient'

export const allUsers = async () => {
    return await prisma.user.findMany({})
}