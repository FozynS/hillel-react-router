import { BrowserRouter, Route, Routes } from "react-router-dom";
import Albums from "./components/albums/albums";
import UsersList from "./components/users-list/usersList";
import Photos from "./components/photos/photos";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UsersList />}>
          <Route path="albums/:userId" element={<Albums />} > 
            <Route path="photos/:albumId" element={<Photos />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
