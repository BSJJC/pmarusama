import axios from 'axios';

/**
 * Represents an item in the discography.
 */
type TDiscographyItem = {
  title: string; // The title of the discography item.
  coverID: string; // An identifier for the discography item's cover image.
};

/**
 * Represents a discography entry.
 */
type DiscographyType = {
  releaseDate: string; // The release date of the discography entry.
  name: string; // The name or title of the discography entry.
  coverObjectIDs: Array<string>; // Identifiers for cover images associated with the entry.
  stprLink: string; // A link to the entry on a music platform (e.g., Spotify).
  songs: Array<{
    name: string; // The name of a song in the discography entry.
    credits: string; // Credits or contributors for the song.
  }>;
};

/**
 * Fetches discography data from the specified API endpoint.
 * @returns {Promise<TDiscographyItem[]>} A promise that resolves to an array of discography items.
 */
export default async function getDiscographyData(): Promise<TDiscographyItem[]> {
  try {
    const response = await axios.get('http://localhost:5000/api/discography/get');
    const data = response.data.discographies;

    // Map the received data to create an array of simplified discography items.
    const discographyData: TDiscographyItem[] = data.map((item: DiscographyType) => ({
      title: item.name,
      coverID: item.coverObjectIDs[0], // Assuming the first cover image is used.
    }));

    return discographyData;
  } catch (error) {
    console.error('Error fetching discography data:', error);
    throw error;
  }
}
