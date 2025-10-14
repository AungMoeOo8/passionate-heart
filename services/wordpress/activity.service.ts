import { ActivityProps } from "../../types";

const { WORDPRESS_DOMAIN } = process.env

export async function getActivities() {
    const res = await fetch(`${WORDPRESS_DOMAIN}/wp-json/api/activities`)
    const data: ActivityProps[] = await res.json();

    return data
}