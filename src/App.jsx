import { useEffect, useState } from "react";
import axios from "axios";
import UsersList from "./components/users-list/users-list";

function App() {
  const [users, setUsers] = useState([]);
  const [albums, setAlbums] = useState([]);
  const [photos, setPhotos] = useState({});
  const [selectedUserId, setSelectedUserId] = useState(null);

  const toggleVisible = (setState, state) => {
    setState(!state);
  }

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => setUsers(response.data))
      .catch((error) => console.error("Error fetching users: ", error));
  }, []);

  const handleAlbums = (userId) => {
    axios.get(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`)
      .then(response => setAlbums(response.data.slice(0, 5)))
      .catch(error => console.error('Error fetching albums: ', error));
  }

  const handlePhotos = (albumId) => {
    axios.get(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`)
      .then(response => setPhotos((prevState) => ({
        ...prevState,
        [albumId]: response.data.slice(0, 5)
      })))
      .catch(error => console.error('Error fetching albums: ', error));
  }

  return (
    <>
      <h1>User List</h1>
      <UsersList
        users={users}
        albums={albums}
        photos={photos}
        handleAlbums={handleAlbums}
        handlePhotos={handlePhotos}
        selectedUserId={selectedUserId}
        setSelectedUserId={setSelectedUserId}
        toggleVisible={toggleVisible}
      />
    </>
  );
}

export default App;
