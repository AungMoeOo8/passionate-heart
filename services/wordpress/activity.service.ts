import Env from "../../env";
import { ActivityProps } from "../../types";

export async function getActivities() {
    const res = await fetch(`${Env.WordpressDomain}/wp-json/api/activities`, { next: { revalidate: Env.RevalidateDuration } })
    const data: ActivityProps[] = await res.json();

    return data
}