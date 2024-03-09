# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


## TODO

0. Correct structure
- App
- Users (state -> users, APICall - getUsers)
- User (state -> albums, APICall - getAlbums)
- Album ...Photos
- Photo
//DONE 

1. use router (add static page - about)
   https://reactrouter.com/en/main/route/route
   https://reactrouter.com/en/main/components/outlet
   <Routes>
    <Route path="/" element={<Users />}>
      <Route path="/:userId/albums" element={<Albums />}>
        <Route path="/:albumId/photos" element={<Photos />} />
      </Route>
    </Route>
    <Route path="/about" element={<About />} />
   </Routes>

/5/albums/3/photos - use Links
https://ui.dev/react-router-url-parameters

2. update api calls
   separate functions into separate files
   use each API in right place
// DONE 

3. update cache
