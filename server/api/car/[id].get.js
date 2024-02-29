import cars from '@/data/cars.json'

export default defineEventHandler(async (event) => {
    const {id} = getRouterParams(event);
    const car = cars.find(car => car.id === parseInt(id));
    if(!car){
        throw createError({
            statusCode: 404,
            statusMessage: 'Car not found'
        })
    }
    return car
})