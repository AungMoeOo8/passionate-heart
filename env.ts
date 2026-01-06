const { WORDPRESS_DOMAIN, REVALIDATE_DURATION } = process.env

function getWordpressDomain() {
    if (!WORDPRESS_DOMAIN) throw Error("Wordpress domain env is undefined.")
    return WORDPRESS_DOMAIN
}

function getRevalidateDuration() {
    if (!REVALIDATE_DURATION) throw Error("Revalidate duration env is undefined.")
    return parseInt(REVALIDATE_DURATION)
}

type ENV = {
    WordpressDomain: string,
    RevalidateDuration: number
}

const Env: ENV = {
    WordpressDomain: getWordpressDomain(),
    RevalidateDuration: getRevalidateDuration()
}

export default Env;