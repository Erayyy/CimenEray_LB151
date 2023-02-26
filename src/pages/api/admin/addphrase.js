import prisma from "../../../utils/prisma"
import { getServerSession } from "next-auth/next"
import { authOptions } from "../auth/[...nextauth]"

export default async function handler(req, res) {
    
    const session = await getServerSession(req, res, authOptions)

    if (session.user.id != "26624740") {
        return
    }

    if (req.method !== 'POST') {
        res.status(405).send({ message: 'Only POST requests allowed' })
        return
    }

    const body = JSON.parse(req.body)
    await prisma.phrase.create({
        data: {
            phrase: body.phrase,
            category: body.category
        }
    })
}