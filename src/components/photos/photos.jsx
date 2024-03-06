function Photos ({ photos, albumId }) {
  return (
    <>
      {photos[albumId] && photos[albumId].length > 0 && (
        <ul>
          {photos[albumId].map((photo) => (
            <li key={photo.id}>
              <img src={photo.thumbnailUrl} alt={photo.title} />
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default Photos;

