import prisma from "../../../utils/prisma"
import { getServerSession } from "next-auth/next"
import { authOptions } from "../auth/[...nextauth]"

export default async function handler(req, res) {
    
    const session = await getServerSession(req, res, authOptions)

    if (!session) {
        res.status(401)
        return
    }

    if (req.method !== 'GET') {
        res.status(405).send({ message: 'Only GET requests allowed' })
        return
    }

    const rand = getRandomArbitrary(0, 100);
    if (rand < 99) {
        const moneyBonus = getRandomInt(0, 100);
        res.json({bankruptcy: false, moneyBonus: moneyBonus})
        return
    } else {
        res.json({bankruptcy: true, moneyBonus: 0})
        return
    }
}

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}