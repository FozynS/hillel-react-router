import axios from "axios";

const getPhotos = (albumId) => {
  return axios
    .get(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`)
    .then(response => response.data)
    .catch(error => console.error('Error fetching albums: ', error));
}

export default getPhotos;