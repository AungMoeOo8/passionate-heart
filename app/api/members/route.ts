import { revalidatePath } from "next/cache";
import { NextRequest } from "next/server";

export async function POST(_req: NextRequest) {
    revalidatePath("/members")
}   