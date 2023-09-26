import axios from "axios";

// Define the data structure for individual discography items
interface IDiscographyItem {
    title: string; // The title of the discography item (e.g., album title)
    coverID: string; // An identifier for the cover image of the item
}

// Define the data structure for discography data received from the API
type DiscographyType = {
    releaseDate: string; // Release date of the discography item
    name: string; // Name or title of the discography item
    coverObjectIDs: Array<string>; // Array of cover image identifiers
    stprLink: string; // Link to the discography item on an online store
    songs: Array<{
        name: string; // Name of a song within the discography item
        credits: string; // Credits or contributors for the song
    }>;
}

// Asynchronously fetch discography data and return a Promise
export async function getDiscographyData(): Promise<IDiscographyItem[]> {
    try {
        // Make an HTTP GET request to retrieve discography data from the API
        const response = await axios.get("http://localhost:5000/api/discography/get");
        const data = response.data.discographies;

        // Map and transform the raw data into an array of IDiscographyItem objects
        const discographyData: IDiscographyItem[] = data.map((item: DiscographyType) => ({
            title: item.name,
            coverID: item.coverObjectIDs[0]
        }));

        // Return the transformed discography data
        return discographyData;
    } catch (error) {
        // Handle errors, e.g., log the error or throw a custom error
        console.error("Error fetching discography data:", error);
        throw error;
    }
}