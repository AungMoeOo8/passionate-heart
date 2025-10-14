import { PersonProps } from "../../types";
const { WORDPRESS_DOMAIN } = process.env

export async function getPeople() {
    const res = await fetch(`${WORDPRESS_DOMAIN}/wp-json/api/persons`)
    const data: PersonProps[] = await res.json();

    console.log(data)

    return data
}

export async function getProfessionals() {
    const res = await fetch(`${WORDPRESS_DOMAIN}/wp-json/api/organization/persons?position=professional`)
    const data: PersonProps[] = await res.json();

    return data
}

export async function getMembers() {
    const url = `${WORDPRESS_DOMAIN}/wp-json/api/organization/persons?position=member`
    console.log(url)
    const res = await fetch(url)
    const data: PersonProps[] = await res.json();

    console.log(data)

    return data
}

export async function getPersonById(id: number) {
    const res = await fetch(`${WORDPRESS_DOMAIN}/wp-json/api/persons/${id}`)
    const data: PersonProps = await res.json()

    return data
}

export async function getPersonByName(name: string) {
    const res = await fetch(`${WORDPRESS_DOMAIN}/wp-json/api/persons/byname?name=${name}`)

    if (!res.ok) {
        return null
    }

    const data: PersonProps = await res.json()

    return data
}