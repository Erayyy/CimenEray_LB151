import prisma from "../../../utils/prisma"
import { getServerSession } from "next-auth/next"
import { authOptions } from "../auth/[...nextauth]"

export default async function handler(req, res) {
       const session = await getServerSession(req, res, authOptions)
       await transfer(session, session.user.id, session.user.name)
       return res.json(201)
}

async function transfer(session, sessionId, username) {
       return await prisma.$transaction(async (tx) => {

              // Verify that the client has a session
              if (!session)
                     throw new Error("Client is hasn't got a session.")


              const user = await tx.user.findUnique({
                     where: {
                            id: sessionId,
                     }
              })
       
              // Verify that the user doesn't already exist in our system
              if (user)
                     throw new Error("This User already exists.");

              const newUser = await tx.user.create({
                     data: {
                            id: sessionId,
                            name: username
                     },
              })

              return newUser;
       })
}
 