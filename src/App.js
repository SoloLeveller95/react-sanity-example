// import { useEffect, useState } from "react";
import "./App.css";
// import { client, urlFor } from "./client";
import Slider from "./Slider";

function App() {
  // const [authors, setAuthors] = useState([{ name: "string" }]);
  // const [images, setImages] = useState(null);

  // const query = `*[_type == "author"]`;
  // const slides = `*[_type == "slides"]`;

  // useEffect(() => {
  //   client
  //     .fetch(slides)
  //     .then((images) => {
  //       setImages(images);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, [slides]);

  // console.log(images);

  return (
    <div className="App">
      <Slider />
    </div>
  );
}

export default App;

// {
//   /* <h1>{authors[0].name}</h1> */
// }
// {
//   /* {images && <img src={urlFor(images[0].imgUrl)} alt={images[0].title} />} */
// }
