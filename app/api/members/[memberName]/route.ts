import { revalidatePath } from "next/cache";
import { NextRequest } from "next/server";

export async function POST(_req: NextRequest, ctx: RouteContext<'/api/members/[memberName]'>) {
    const { memberName } = await ctx.params
    revalidatePath(`/members/${memberName}`)

    return Response.json({ success: true })
}