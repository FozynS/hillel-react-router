import axios from "axios";

const getUsers = async () => {
  return axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.data)
    .catch((error) => console.error("Error fetching users: ", error));
};

export default getUsers;