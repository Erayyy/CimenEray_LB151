import prisma from "../../../utils/prisma"
import { getServerSession } from "next-auth/next"
import { authOptions } from "../auth/[...nextauth]"

export default async function handler(req, res) {

    const session = await getServerSession(req, res, authOptions)

    if (session.user.id != "26624740") {
        return
    }

    const allPhrases = await prisma.phrase.findMany();
    res.json(allPhrases);
}