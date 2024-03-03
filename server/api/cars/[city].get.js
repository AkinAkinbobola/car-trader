import {PrismaClient} from '@prisma/client';

const prisma = new PrismaClient();
export default defineEventHandler((event) => {
    const {city} = getRouterParams(event);
    const {make, min, max} = getQuery(event);

    const filters = {
        city: city.toLowerCase()
    }

    if (make){
        filters.make = make
    }
    if(min || max){
        filters.price = {}
    }
    if(min){
        filters.price.gte = parseInt(min)
    }
    if(max){
        filters.price.lte = parseInt(max)

    }
    return prisma.car.findMany({
        where: filters
    })
});