import {PrismaClient} from '@prisma/client';

const prisma = new PrismaClient();
export default defineEventHandler(async (event) => {
    const {id} = getRouterParams(event);
    const car = prisma.car.findUnique({
        where: {
            id: parseInt(id)
        }
    })
    if(!car){
        throw createError({
            statusCode: 404,
            statusMessage: 'Car not found'
        })
    }
    return car
})