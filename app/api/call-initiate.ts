// app/api/call-initiate.ts
import { NextApiRequest, NextApiResponse } from "next";
import { pusherServer } from "@/libs/pusher";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { room, username } = req.body;

    try {
      await pusherServer.trigger(`private-${room}`, "call-initiated", {
        room,
        username,
      });

      res.status(200).json({ message: "Call initiated" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Failed to initiate call" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
