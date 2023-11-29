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
export default async function getInformationList(): Promise<TInformation[]> {
  try {
    const response = await axios.get('http://localhost:5000/api/information/getInformationList');

    return response.data.informations;
  } catch (error) {
    console.error('Error occurred while fetching information:', error);
    throw error;
  }
}
