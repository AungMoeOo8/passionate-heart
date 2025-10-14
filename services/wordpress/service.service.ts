import { ServiceProps } from "../../types";
const { WORDPRESS_DOMAIN } = process.env

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
    const res = await fetch(`${WORDPRESS_DOMAIN}/wp-json/api/organization/services`)
    const data: ServiceResponse[] = await res.json()

    return data
}   

export async function getServiceById(id: number) {
    const res = await fetch(`${WORDPRESS_DOMAIN}/wp-json/api/services/${id}`)
    const data: ServiceProps = await res.json()

    return data
}