import axios from "axios";

type SocialMediaType = {
    name: string,
    url: string,
    imgID: string
}

/**
 * get social medias
 * @returns social medias data
 */
export async function getSocialMediaData(): Promise<SocialMediaType[]> {
    let socialMedias: SocialMediaType[] = []

    await axios.get
        ("http://localhost:5000/api/socialMedia/get")
        .then(res => {
            socialMedias = res.data.socialMedias
        })

    return socialMedias
}