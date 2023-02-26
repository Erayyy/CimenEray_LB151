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

    const gamesPlayed = await prisma.game.findMany({
        where: {
            idUser: session.user.id
        }
    })

    const phrases = await prisma.phrase.findMany()

    if (gamesPlayed.length === 0) {
        res.json(phrases[0]);
        return;
    }

    let unusedPhrase = null
    for (let playedGame of gamesPlayed) {
        for (let phrase of phrases) {
            if (playedGame.idPhrase != phrase.id) {
                unusedPhrase = phrase
            }
        }
    }

    return res.json(unusedPhrase)
}