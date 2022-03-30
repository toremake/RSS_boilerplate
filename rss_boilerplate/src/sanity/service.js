import client from "./client";

export const hentAlleVarer = async () => {
    const varer = await client.fetch(`*[_type == "vare"]{varenavn, mengde}`)
    console.log("hentAlleVarer: " + varer)
    return varer
}