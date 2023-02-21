import prisma from "../../utils/prisma";


export default async function handler(req, res) {

    if (req.method !== 'POST') {
        res.status(405).send({ message: 'Only POST requests allowed' })
        return
    }

    const body = JSON.parse(req.body)

    console.log(body)

    await prisma.phrase.create({
        data: {
            phrase: body.phrase,
            category: body.category
        }
    })
}