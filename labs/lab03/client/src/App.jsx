import { useState } from "react";

const BASE_URL = "http://localhost:8000/";

const App = () => {
  const [singleImageDisplayUrl, setSingleImageDisplayUrl] = useState(null);
  const [multipleImagesDisplayUrls, setMultipleImagesDisplayUrls] = useState(
    []
  );
  const [dogImageDisplayUrl, setDogImageDisplayUrl] = useState(null);

  const [singleFile, setSingleFile] = useState(null);

  const [message, setMessage] = useState("");

  // Handlers
  const handleSingleFileChange = (e) => {
    if (e.target.files.length > 0) {
      setSingleFile(e.target.files[0]);
    }
  };

  // fetch functions -> fetch a random single image
  const fetchSingleFile = async () => {
    try {
      const response = await fetch(`${BASE_URL}fetch/single`);

      const blob = await response.blob(); // we made a blob - Binary Large Object
      // but thats not an image, so we need to make an image element

      // using createObjectURL
      const imageUrl = URL.createObjectURL(blob);
      setSingleImageDisplayUrl(imageUrl);
    } catch (error) {
      console.error("Error fetching single file:", error);
    }
  };

  // fetch functions -> save single
  const handleSubmitSingleFile = async (e) => {
    e.preventDefault();
    if (!singleFile) {
      setMessage("Please select a file before uploading.");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("file", singleFile);

      const response = await fetch(`http://localhost:8000/save/single`, {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Image upload failed");
      }
      setMessage("File uploaded successfully!");
    } catch (error) {
      console.log("Error:", error);
    }
  };

  const fetchMultipleFiles = async () => {
    try {
      const response = await fetch(`${BASE_URL}fetch/multiple`);
      const fileNames = await response.json();

      const blobs = await Promise.all(
        fileNames.map((fileName) =>
          fetch(`${BASE_URL}fetch/file/${fileName}`).then((response) =>
            response.blob()
          )
        )
      );

      const imageUrls = blobs.map((blob) => URL.createObjectURL(blob));
      setMultipleImagesDisplayUrls(imageUrls);
    } catch (error) {
      console.error("Error fetching multiple files:", error);
    }
  };

  const fetchDogImage = async () => {
    try {
      const response = await fetch(`https://dog.ceo/api/breeds/image/random`);
      const data = await response.json();
      console.log(data);
      setDogImageDisplayUrl(data.message);
    } catch (error) {
      console.error("Error fetching dog image:", error);
    }
  };

  // fetch functions -> save dog image [TODO]

  return (
    <div className="container">
      <p>{message}</p>
      <section>
        <h2>Fetch Single Random Image</h2>
        <button onClick={fetchSingleFile}>Fetch Single File</button>
        {singleImageDisplayUrl && (
          <div>
            <h3>Single File</h3>
            <img
              src={singleImageDisplayUrl}
              alt="Display Image"
              style={{ width: "200px", marginTop: "10px" }}
            />
          </div>
        )}
        <form onSubmit={handleSubmitSingleFile}>
          <h2>Upload Single File</h2>
          <input type="file" onChange={handleSingleFileChange} />
          <button type="submit">Upload Single File</button>
        </form>
      </section>
      <section>
        <h2>Fetch Multiple Files</h2>
        <button onClick={fetchMultipleFiles}>Fetch Multiple Files</button>
        {multipleImagesDisplayUrls.length > 0 && (
          <div>
            <h3>Multiple Files</h3>
            <ul className="imageContainer">
              {multipleImagesDisplayUrls.map((url, index) => (
                <li key={index}>
                  <img
                    src={url}
                    alt={`Display Image ${index}`}
                    style={{ width: "200px", marginTop: "10px" }}
                  />
                </li>
              ))}
            </ul>
          </div>
        )}
      </section>
      <section>
        <h2>Fetch Dog Image</h2>
        <button onClick={fetchDogImage}>Fetch Dog Image</button>
        {dogImageDisplayUrl && (
          <div>
            <h3>Dog Image</h3>
            <img
              src={dogImageDisplayUrl}
              alt="Dog Image"
              style={{ width: "200px", marginTop: "10px" }}
            />
          </div>
        )}
      </section>
    </div>
  );
};

export default App;
