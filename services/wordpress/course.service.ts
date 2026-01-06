import Env from "../../env";

export type CourseResponse = {
    "id": number,
    "title": string,
    "duration": string,
    "guestLecturer": string,
    "outlines": string[],
    "instructorName": string,
    "instructorPosition": string
}

export async function getCourses() {
    const res = await fetch(`${Env.WordpressDomain}/wp-json/api/organization/courses`, { next: { revalidate: Env.RevalidateDuration } })
    const data: CourseResponse[] = await res.json()

    return data
}