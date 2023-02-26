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

    const games = await prisma.game.findMany();
    const users = await prisma.user.findMany();

    games.map((game, i) => {
        users.map((user) => {
            if (game.idUser == user.id) {
                games[i].name = user.name;
            }
        })
    })

    return res.json(games)
}