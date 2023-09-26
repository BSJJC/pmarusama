import axios from "axios";

// Define the data structure for social media items
type SocialMediaType = {
    name: string; // The name of the social media platform (e.g., Facebook, Twitter)
    url: string;  // The URL of the social media profile or page
    imgID: string; // An ID for the social media icon or image
}

// Asynchronously fetch social media data and return a Promise
export async function getSocialMediaData(): Promise<SocialMediaType[]> {
    try {
        // Make an HTTP GET request to retrieve social media data from the API
        const response = await axios.get("http://localhost:5000/api/socialMedia/get");

        // Return the social media data from the response
        return response.data.socialMedias;
    } catch (error) {
        // Handle errors, e.g., log the error or throw a custom error
        console.error("Error occurred while fetching social media data:", error);
        throw error;
    }
}