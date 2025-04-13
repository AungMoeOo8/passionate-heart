import { CourseProps } from "../../types";
const { WORDPRESS_DOMAIN } = process.env

export async function getCourses() {
    const res = await fetch(`${WORDPRESS_DOMAIN}/phweb/wp-json/api/course`)
    const data = await res.json() as { isSuccess: boolean, message: string, data: CourseProps[] };

    return data
}

export async function getCourseById(id: string) {
    const res = await fetch(`${WORDPRESS_DOMAIN}/phweb/wp-json/api/course/${id}`)
    const data = await res.json() as { isSuccess: boolean, message: string, data: CourseProps };

    return data
}