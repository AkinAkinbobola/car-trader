import {PrismaClient} from '@prisma/client';
import Joi from 'joi';

const schema = Joi.object({
    email: Joi.string().email({
        minDomainSegments: 2,
        tlds: {allow: ['com', 'net']}
    }),
    phone: Joi.string().length(11).required(),
    name: Joi.string().required(),
    message: Joi.string().min(20).required()
})

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
    const body = await readBody(event);
    const {listingId} = getRouterParams(event);
    const {error, value} = schema.validate(body);

    if (error) {
        throw createError({
            statusCode: 412,
            statusMessage: error.message
        })
    }

    const {
        email,
        phone,
        name,
        message
    } = body

    return prisma.message.create({
        data: {
            email,
            phone,
            name,
            message,
            listingId: parseInt(listingId)
        }
    })
})