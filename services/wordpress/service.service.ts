import { ServiceProps } from "../../types";
const { WORDPRESS_DOMAIN } = process.env

export async function getServices() {
    const res = await fetch(`${WORDPRESS_DOMAIN}/phweb/wp-json/api/service`)
    const data = await res.json() as { isSuccess: boolean, message: string, data: ServiceProps[] };

    return data
}

export async function getServiceById(id: string) {
    const res = await fetch(`${WORDPRESS_DOMAIN}/phweb/wp-json/api/service/${id}`)
    const data = await res.json() as { isSuccess: boolean, message: string, data: ServiceProps };

    return data
}