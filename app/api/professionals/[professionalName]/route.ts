import { revalidatePath } from "next/cache";
import { NextRequest } from "next/server";

export async function POST(_req: NextRequest, ctx: RouteContext<'/api/professionals/[professionalName]'>) {
    const { professionalName } = await ctx.params
    revalidatePath(`/professionals/${professionalName}`)
}