import axios from 'axios';

/**
 * Fetches detailed information for a specific date from the API.
 *
 * @param {string} date - The date for which information is to be fetched (format: 'YYYY-MM-DD').
 * @returns {Promise<{
 *   components: {
 *     componentName: string;
 *     data: object;
 *   }[];
 * }>} - A Promise that resolves to an object with a 'components' property, where 'components' is an array of objects with a 'componentName' (string) and 'data' (object).
 */
export default async function getInformationDetail(date: string): Promise<{
  components: {
    componentName: string;
    data: object;
  }[];
}> {
  try {
    const response = await axios.get(`http://localhost:5000/api/information/getInformationDetail/${date}`);

    return response.data.data;
  } catch (error) {
    console.error('Error occurred while fetching information detail:', error);

    throw error;
  }
}
