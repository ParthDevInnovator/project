
import { prismaClient } from "@/app/lib/db";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const createStreamSchema = z.object({
  createrId: z.string(),
  url: z.string(),
});


export async function POST(req: NextRequest) {
  try {
    const data = createStreamSchema.parse(await req.json());
    prismaClient.stream.create({
            
    })
    return NextResponse.json({
      message: "Stream added successfully",
      data,
    });
  } catch (error) {
    return NextResponse.json(
      {
        message: "Error while adding a stream",
      },
      {
        status: 411,
      }
    );
  }
}
