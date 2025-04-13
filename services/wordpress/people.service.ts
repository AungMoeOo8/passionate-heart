import { PersonProps } from "../../types";
const { WORDPRESS_DOMAIN } = process.env

export async function getPeople() {
    const res = await fetch(`${WORDPRESS_DOMAIN}/phweb/wp-json/api/people`)
    const data = await res.json() as { isSuccess: boolean, message: string, data: PersonProps[] };

    return data
}

export async function getPersonById(id: string) {
    const res = await fetch(`${WORDPRESS_DOMAIN}/phweb/wp-json/api/people/${id}`)
    const data = await res.json() as { isSuccess: boolean, message: string, data: PersonProps };

    return data
}