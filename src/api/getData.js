import axios from "axios";

const getData = async (way) => {
  const url = `https://jsonplaceholder.typicode.com/${way}`;
  
  try {
    const response = await axios.get(url);
    const data = response.data;
    return {url, data};
  } catch (error) {
    console.error("Error fetching users: ", error);
    throw error;
  }

};

export default getData;