import prisma from "../../utils/prisma";


export default async function handler(req, res) {
    const allPhrases = await prisma.phrase.findMany();
    res.json(allPhrases);
}