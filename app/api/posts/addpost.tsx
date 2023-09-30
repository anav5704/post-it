import client from "../../../prisma/client"
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/pages/api/auth/[...nextauth]"
import type { NextApiRequest, NextApiResponse } from "next"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const session = await getServerSession(req, res, authOptions)
    if (!session) {
      return res
        .status(401)
        .json({ message: "Please signin to create a post." })
    }

    const title: string = req.body.title
    
    const prismaUser = await client.user.findUnique({
      where: { email: session?.user?.email },
    })

    if (!title.length) {
      return res
        .status(403)
        .json({ message: "Please write something before we can post it." })
    }

    try {
      const result = await client.post.create({
        data: {
          title,
          userId: prismaUser.id,
        },
      })
      res.status(200).json(result)
    } catch (err) {
      res.status(403).json({ err: "Error has occured while making a post" })
    }
  }
}