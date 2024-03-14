import axios from "axios";

const getAlbums = async (userId) => {
  const url = `https://jsonplaceholder.typicode.com/albums?userId=${userId}`;

  try {
    const response = await axios.get(url);
    const data = response.data;
    return {url, data};
  } catch (error) {
    console.error("Error fetching albums: ", error);
    throw error;
  }
  
}

export default getAlbums;