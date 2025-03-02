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

  const getBlobUrl = async (url) => {
    const response = await fetch(url);
    const blob = await response.blob();
    return URL.createObjectURL(blob);
  };

  // fetch functions -> fetch a random single image
  const fetchSingleFile = async () => {
    try {
      const imageUrl = await getBlobUrl(`${BASE_URL}fetch/single`);
      setSingleImageDisplayUrl(imageUrl);
    } catch (error) {
      console.error("Error fetching single file:", error);
    }
  };

  const uploadFileToServer = async (file) => {
    try {
      const formData = new FormData();
      formData.append("file", file);

      const response = await fetch(`${BASE_URL}save/single`, {
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

  // fetch functions -> save single
  const handleSubmitSingleFile = async (e) => {
    e.preventDefault();
    if (!singleFile) {
      setMessage("Please select a file before uploading.");
      return;
    }

    uploadFileToServer(singleFile);
  };

  const fetchMultipleFiles = async () => {
    try {
      const response = await fetch(`${BASE_URL}fetch/multiple`);
      const fileNames = await response.json();

      const imageUrls = await Promise.all(
        fileNames.map((fileName) =>
          getBlobUrl(`${BASE_URL}fetch/file/${fileName}`)
        )
      );
      setMultipleImagesDisplayUrls(imageUrls);
    } catch (error) {
      console.error("Error fetching multiple files:", error);
    }
  };

  const fetchDogImage = async () => {
    try {
      const response = await fetch(`https://dog.ceo/api/breeds/image/random`);
      const data = await response.json();
      setDogImageDisplayUrl(data.message);
    } catch (error) {
      console.error("Error fetching dog image:", error);
    }
  };

  const uploadDogImageToServer = async () => {
    if (!dogImageDisplayUrl) {
      setMessage("Please fetch a dog image before uploading.");
      return;
    }

    // create a blob from the image URL
    const response = await fetch(dogImageDisplayUrl);
    const blob = await response.blob();
    //create a file data with timestamp name
    const file = new File([blob], `${Date.now()}.jpg`, { type: "image/jpeg" });
    uploadFileToServer(file);
  };

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
              style={{ width: "200px", margin: "10px", display: "block" }}
            />
            <button onClick={uploadDogImageToServer}>Upload Dog Image</button>
          </div>
        )}
      </section>
    </div>
  );
};

export default App;
