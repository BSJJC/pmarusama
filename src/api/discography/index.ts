import axios from "axios";

type DiscographyType = {
    releaseDate: string,
    name: string,
    coverObjectIDs: string[],
    stprLink: string,
    songs: {
        name: string,
        credits: string
    }[]
}

/**
 * get discography data, includes title and coverID
 * @returns discographies data
 */
export async function getDiscograhyData(): Promise<{
    title: string,
    coverID: string
}[]> {
    const discographyData: {
        title: string,
        coverID: string
    }[] = []

    await axios.get
        ("http://localhost:5000/api/discography/get")
        .then(res => {
            const data = res.data.discographies

            data.forEach((item: DiscographyType, index: number) => {
                discographyData[index] = (
                    {
                        title: item.name,
                        coverID: item.coverObjectIDs[0]
                    }
                )
            });
        })

    return discographyData
}