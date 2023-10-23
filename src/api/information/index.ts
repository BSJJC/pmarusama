import axios from 'axios';

/**
 * Represents an item in the information
 */
type TInformation = {
  date: number; // Information release time.
  title: string; // Information title.
};

/**
 * Fetches information from the information API endpoint.
 * @returns {Promise<TInformation[]>} A promise that resolves to an array of information.
 */
export async function getInformation(): Promise<TInformation[]> {
  try {
    // Send an HTTP GET request to the API endpoint to fetch information.
    const response = await axios.get('http://localhost:5000/api/information/get');

    // Extract and return the information from the response.
    return response.data.informations;
  } catch (error) {
    // Handle and log any errors that occur during the API request.
    console.error('Error occurred while fetching information:', error);
    throw error; // Rethrow the error for higher-level error handling, if needed.
  }
}
