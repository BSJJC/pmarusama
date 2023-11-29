import axios from 'axios';

/**
 * Represents a social media platform.
 */
type TSocialMedia = {
  name: string; // The name of the social media platform.
  url: string; // The URL of the social media profile.
  imgID: string; // An identifier for the social media platform's image.
};

/**
 * Fetches social media data from the specified API endpoint.
 * @returns {Promise<TSocialMedia[]>} A promise that resolves to an array of social media data.
 */
export default async function getSocialMediaData(): Promise<TSocialMedia[]> {
  try {
    // Send an HTTP GET request to the API endpoint to fetch social media data.
    const response = await axios.get('http://localhost:5000/api/socialMedia/get');

    // Extract and return the social media data from the response.
    return response.data.socialMedias;
  } catch (error) {
    // Handle and log any errors that occur during the API request.
    console.error('Error occurred while fetching social media data:', error);
    throw error; // Rethrow the error for higher-level error handling, if needed.
  }
}
