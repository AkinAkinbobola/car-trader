import Joi from 'joi';
import {PrismaClient} from '@prisma/client';

const prisma = new PrismaClient();

const schema = Joi.object({
    make: Joi.string().required(),
    model: Joi.string().required(),
    year: Joi.number().min(1886).max(new Date().getFullYear() + 1).required(),
    miles: Joi.number().required().min(0),
    city: Joi.string().required().min(2),
    numberOfSeats: Joi.number().max(1000).min(1).required(),
    features: Joi.array().items(Joi.string()).required(),
    image: Joi.string().required(),
    listerId: Joi.string().required(),
    price: Joi.number().required().min(0),
    name: Joi.string().required(),
    description: Joi.string().min(20).required()
})

export default defineEventHandler(async (event) => {
    const body = await readBody(event);

    const {error, value} = schema.validate(body);

    if (error) {
        throw createError({
            statusCode: 412,
            statusMessage: error.message
        })
    }
    const {
        image,
        name,
        numberOfSeats,
        miles,
        price,
        features,
        description,
        listerId,
        city,
        model,
        make
    } = body

    const car = await prisma.car.create({
        data: {
            model,
            image,
            name,
            numberOfSeats,
            miles,
            price,
            features,
            description,
            listerId,
            city: city.toLowerCase(),
            make
        }
    });
    return car;
})