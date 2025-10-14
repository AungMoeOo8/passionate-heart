import { CourseProps } from "../../types";
const { WORDPRESS_DOMAIN } = process.env

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
    const res = await fetch(`${WORDPRESS_DOMAIN}/wp-json/api/organization/courses`)
    const data: CourseResponse[] = await res.json()

    return data
}