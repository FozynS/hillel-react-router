import axios from "axios";

const getPhotos = async (albumId) => {
  const url = `https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`;
  
  try {
    const response = await axios.get(url);
    const data = response.data;
    return {url, data};
  } catch (error) {
    console.error("Error fetching albums: ", error);
    throw error;
  }
}

export default getPhotos;