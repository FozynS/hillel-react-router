import axios from "axios";

const getUsers = async () => {
  const url = "https://jsonplaceholder.typicode.com/users";
  
  try {
    const response = await axios.get(url);
    const data = response.data;
    return {url, data};
  } catch (error) {
    console.error("Error fetching users: ", error);
    throw error;
  }

};

export default getUsers;