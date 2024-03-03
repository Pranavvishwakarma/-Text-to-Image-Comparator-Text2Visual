import React, { useState, useEffect } from "react";
import { FiDownload } from "react-icons/fi";
import { BsDisplay } from "react-icons/bs";
import { size } from "lodash";
// import CircularProgress from "@mui/material/CircularProgress"; // Import CircularProgress
// import Box from "@mui/material/Box";
// import Loader from "./Loader";
// import CircularProgress from "@mui/material/CircularProgress";


const Detail = ({
  name,
  prompt,
  photo1,
  photo2,
  photo3,
  photo4,
  setNumber,
  showcase,
  loading,
  imageGenerationTime1,
  imageGenerationTime2,
  imageGenerationTime3,
  imageGenerationTime4,
}) => {
  // const [isLoading, setIsLoading] = useState(false);

  const [imageQuality1, setImageQuality1] = useState(null);
  const [imageQuality2, setImageQuality2] = useState(null);
  const [imageQuality3, setImageQuality3] = useState(null);
  const [imageQuality4, setImageQuality4] = useState(null);
  const [imageDimensions1, setImageDimensions1] = useState(null);
  const [imageDimensions2, setImageDimensions2] = useState(null);
  const [imageDimensions3, setImageDimensions3] = useState(null);
  const [imageDimensions4, setImageDimensions4] = useState(null);

  useEffect(() => {
    checkImage(photo1, imageGenerationTime1, setImageQuality1, setImageDimensions1);
    checkImage(photo2, imageGenerationTime2, setImageQuality2, setImageDimensions2);
    checkImage(photo3, imageGenerationTime3, setImageQuality3, setImageDimensions3);
    checkImage(photo4, imageGenerationTime4, setImageQuality4, setImageDimensions4);
  }, [photo1, photo2, photo3, photo4, imageGenerationTime1, imageGenerationTime2, imageGenerationTime3, imageGenerationTime4]);

  const checkImage = (imageElement, executionTime, setImageQuality, setImageDimensions) => {
    const image = new Image();
    image.src = imageElement;

    image.onload = () => {
      const width = image.width;
      const height = image.height;

      // Check image quality using your own criteria, for example, image dimensions or file size
      const isGoodQuality = width >= 800 && height >= 600 && executionTime <= 2000; // Adjust criteria as needed

      setImageQuality(isGoodQuality ? "Good" : "Low");
      setImageDimensions(`${width} x ${height}`);
    };

    image.onerror = () => {
      setImageQuality("Failed to load");
    };
  };

  const downloadImage = (photo) => {
    const link = document.createElement("a");
    link.href = photo;
    link.download = "downloaded_image.png"; // You can customize the filename here
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="w-full flex flex-col md:flex-row py-6 md:py-12 min-h-[70vh] items-center relative sm:px-20 px-6">
      <div className="flex w-full mt-16 md:mt-0 md:w-6/12 justify-center">
        <div>
          <img
            src={photo1}
            alt=""
            className="w-full sm:w-8/12 aspect-square select-none pointer-events-none rounded-md"
            draggable="false"
          />
          <br />
          Model: Stable-Diffusion-v1-5
          <br />
          <br />
          <p id="output">Speed and Latency : {imageGenerationTime1} ms</p>
          <br />
          <p>Image Metrics: {imageQuality1}</p>
          <br />
          <p>Dimensions: {imageDimensions1}</p>
          <button
            onClick={() => downloadImage(photo1)}
            className="text-green py-3 px-6 sm:text text-sm bg-green_opaque text-[1.15rem] font-poppins rounded-md sm:w-auto w-full mt-2"
          >
            Download Image
          </button>
        </div>
      </div>

      <div className="flex w-full mt-16 md:mt-0 md:w-6/12 justify-center">
        <div>
          <img
            src={photo2}
            alt=""
            className="w-full sm:w-8/12 aspect-square select-none pointer-events-none rounded-md"
            draggable="false"
          />
          <br />
          Model: OpenJourney
          <br />
          <br />
          <p id="output">Speed and Latency: {imageGenerationTime2} ms</p>
          <br />
          <p>Image Metrics: {imageQuality2}</p>
          <br />
          <p>Dimensions: {imageDimensions2}</p>
          <button
            onClick={() => downloadImage(photo2)}
            className="text-green py-3 px-6 sm:text text-sm bg-green_opaque text-[1.15rem] font-poppins rounded-md sm:w-auto w-full mt-2"
          >
            Download Image
          </button>
        </div>
      </div>

      <div className="flex w-full mt-16 md:mt-0 md:w-6/12 justify-center">
        <div>
          <img
            src={photo4}
            alt=""
            className="w-full sm:w-8/12 aspect-square select-none pointer-events-none rounded-md"
            draggable="false"
          />
          <br />
          Model: Dell-e
          <br />
          <br />
          <p id="output">Speed and Latency : {imageGenerationTime4} ms</p>
          <br />
          <p>Image Metrics: {imageQuality4}</p>
          <br />
          <p>Dimensions: {imageDimensions4}</p>
          <button
            onClick={() => downloadImage(photo4)}
            className="text-green py-3 px-6 sm:text text-sm bg-green_opaque text-[1.15rem] font-poppins rounded-md sm:w-auto w-full mt-2"
          >
            Download Image
          </button>
        </div>
      </div>

      <div className="flex w-full mt-16 md:mt-0 md:w-6/12 justify-center">
        <div>
          <img
            src={photo3}
            alt=""
            className="w-full sm:w-8/12 aspect-square select-none pointer-events-none rounded-md"
            draggable="false"
          />
          <br />
          Model: AI Textration
          <br />
          <br />
          <p id="output">Speed and Latency : {imageGenerationTime3} ms</p>
          <br />
          <p>Image Metrics: {imageQuality3}</p>
          <br />
          <p>Dimensions: {imageDimensions3}</p>
          <button
            onClick={() => downloadImage(photo3)}
            className="text-green py-3 px-6 sm:text text-sm bg-green_opaque text-[1.15rem] font-poppins rounded-md sm:w-auto w-full mt-2"
          >
            Download Image
          </button>
        </div>
      </div>

      <div className="flex flex-col w-full md:w-6/12 relative">
        <p className="font-lg text-green text-[1.4rem] py-2">
          Name: <span className="text-light_slate font-poppins">{name}</span>
        </p>
        <p className="font-lg text-green text-[1.4rem] py-2">
          Prompt: <span className="text-light_slate font-poppins">{prompt}</span>

        </p>
        

        <div className="flex justify-between sm:w-[80%] gap-[.8rem] w-full py-7">
          {loading ? (
            <button
              disabled
              className="text-navy sm:text text-sm py-3 px-6 opacity-50 bg-green_opaque text-[1.15rem] font-poppins rounded-md sm:w-auto w-full"
            >
              Saving image...
            </button>
          ) : (
            <button
              onClick={showcase}
              className="text-navy py-3 px-6 sm:text text-sm bg-green_opaque text-[1.15rem] font-poppins rounded-md sm:w-auto w-full"
            >
              Model
            </button>
          )}
         
          <button
            className="border py-2 px-4 sm:text text-sm border-green hover:bg-[rgba(255,255,255,0.12)] text-green font-poppins rounded-md sm:w-auto w-full"
            onClick={() => setNumber(2)}
          >
            Enter a New Prompt
            
          </button>
        </div>
      </div>
      
    </div>
  );
};

export default Detail;
