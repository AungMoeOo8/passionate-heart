import { revalidatePath } from "next/cache";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest, ctx: RouteContext<'/api/activities'>) {
    revalidatePath("/activities")

    return Response.json({ success: true })
}