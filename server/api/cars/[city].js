import cars from '@/data/cars.json'

export default defineEventHandler((event) => {
    const {city} = getRouterParams(event);
    const {make, min, max} = getQuery(event);

    let filteredCars = cars.filter(car => car.city.toLowerCase() === city.toLowerCase());
    if (make){
        filteredCars = filteredCars.filter(car => car.make.toLowerCase() === make.toLowerCase());
    }
    if(min){
        filteredCars = filteredCars.filter(car => car.price >= parseInt(min));
    }
    if(max){
        filteredCars = filteredCars.filter(car => car.price <= parseInt(max));
    }
    return filteredCars
});