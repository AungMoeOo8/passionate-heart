import Env from "../../env";
import { ServiceProps } from "../../types";

export type Fee = {
    type?: string,
    amount?: number,
    description?: string
}

export type ServiceResponse =
    {
        "id"?: number,
        "name": string,
        "provider"?: string,
        "description": string,
        "ending": string,
        "fees": Fee[],
        "providedBy"?: number,
        "providedByName"?: string,
        "providedByPosition"?: string
    }

export async function getServices() {
    const res = await fetch(`${Env.WordpressDomain}/wp-json/api/organization/services`, { next: { revalidate: Env.RevalidateDuration } })
    const data: ServiceResponse[] = await res.json()

    return data
}

export async function getServiceById(id: number) {
    const res = await fetch(`${Env.WordpressDomain}/wp-json/api/services/${id}`, { next: { revalidate: Env.RevalidateDuration } })
    const data: ServiceProps = await res.json()

    return data
}