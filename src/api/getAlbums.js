import axios from "axios";

const getAlbums = async () => {
  return axios
    .get(`https://jsonplaceholder.typicode.com/albums?userId=${3}`)
    .then(response => response.data)
    .catch(error => console.error('Error fetching albums: ', error));
}

export default getAlbums;