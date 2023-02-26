import prisma from "../../../utils/prisma"
import { getServerSession } from "next-auth/next"
import { authOptions } from "../auth/[...nextauth]"

export default async function handler(req, res) {
    
    const session = await getServerSession(req, res, authOptions)

    if (!session) {
        res.status(401)
        return
    }

    if (req.method !== 'POST') {
        res.status(405).send({ message: 'Only POST requests allowed' })
        return
    }

    const body = JSON.parse(req.body);

    await prisma.game.create({
        data: {
            idPhrase: body.phrase.id,
            idUser: session.user.id,
            cntrounds: body.stats.attempts,
            moneyamount: body.stats.moneyAmount
        }
    })

    res.status(200)
    return
}