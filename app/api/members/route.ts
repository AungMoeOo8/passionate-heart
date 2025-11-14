import { revalidatePath } from "next/cache";
import { NextRequest } from "next/server";

export async function POST(_req: NextRequest, ctx: RouteContext<'/api/members'>) {
    revalidatePath("/members")

    return Response.json({ success: true })
}   