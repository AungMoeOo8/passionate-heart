import { revalidatePath } from "next/cache";

export async function POST() {
    revalidatePath("/members")
}   