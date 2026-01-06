import Env from "../../env";
import { PersonProps } from "../../types";

export async function getPeople() {
    const res = await fetch(`${Env.WordpressDomain}/wp-json/api/persons`, { next: { revalidate: Env.RevalidateDuration } })
    const data: PersonProps[] = await res.json();

    console.log(data)

    return data
}

export async function getProfessionals() {
    const res = await fetch(`${Env.WordpressDomain}/wp-json/api/organization/persons?position=professional`, { next: { revalidate: Env.RevalidateDuration } })
    const data: PersonProps[] = await res.json();

    return data
}

export async function getMembers() {
    const url = `${Env.WordpressDomain}/wp-json/api/organization/persons?position=member`
    console.log(url)
    const res = await fetch(url, { next: { revalidate: Env.RevalidateDuration } })
    const data: PersonProps[] = await res.json();

    console.log(data)

    return data
}

export async function getPersonById(id: number) {
    const res = await fetch(`${Env.WordpressDomain}/wp-json/api/persons/${id}`, { next: { revalidate: Env.RevalidateDuration } })
    const data: PersonProps = await res.json()

    return data
}

export async function getPersonByName(name: string) {
    const res = await fetch(`${Env.WordpressDomain}/wp-json/api/persons/byname?name=${name}`, { next: { revalidate: Env.RevalidateDuration } })

    if (!res.ok) {
        return null
    }

    const data: PersonProps = await res.json()

    return data
}