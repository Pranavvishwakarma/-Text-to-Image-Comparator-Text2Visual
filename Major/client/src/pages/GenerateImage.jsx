
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Name, Prompt, Detail, Toast } from "../components";
import { Helmet } from "react-helmet";
import OG from '../../public/assets/img/CRUL_CREATE_OG.png';
import axios from 'axios';
const GenerateImage = () => {
  const navigate = useNavigate();
  const [image_url1, setImage_url1] = useState("");
  const [image_url2, setImage_url2] = useState("");
  const [image_url3, setImage_url3] = useState("");
  const [image_url4, setImage_url4] = useState("");
  const [name, setName] = useState("");
  const [prompt, setPrompt] = useState(""); // User-input prompt
  const [photo, setPhoto] = useState("");
  const [generatingImg, setGeneratingImg] = React.useState(false);
  const [number, setNumber] = React.useState(1);
  const [loading, setLoading] = React.useState(false);
  const doc = { name, prompt, photo };
  const [imageGenerationTime1, setImageGenerationTime1] = useState(null);
  const [imageGenerationTime2, setImageGenerationTime2] = useState(null);
  const [imageGenerationTime3, setImageGenerationTime3] = useState(null);
  const [imageGenerationTime4, setImageGenerationTime4] = useState(null);


  const showcase = async () => {
    if (prompt && photo) {
      setLoading(true);
      try {
        // Your API request here...
        navigate("/showcase");
      } catch (Error) {
        alert(Error);
        console.log(Error);
      } finally {
        setLoading(false);
      }
    } else {
      alert("Please enter a prompt and generate an image");
    }
  };

  const [isNumber, setIsNumber] = React.useState(0);
  const text = [
    'Generating Image...',
    'Give it a min, it should be done',
    'Hmmm, chill a bit',
    'Wait for it'
  ];

  const generateImage = async () => {
    if (prompt) {
      try {
        setGeneratingImg(true);
        const startTime1 = new Date();
      // //   // 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
      // //   //new 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
      // //   //purani  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
        const Api = "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";
        const response = await fetch("https://api-inference.huggingface.co/models/runwayml/stable-diffusion-v1-5", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${Api}`,
          },
          body: JSON.stringify({ inputs: prompt }),
        });
        const blob = await response.blob();
        setImage_url1(URL.createObjectURL(blob));
        const endTime1 = new Date(); // Record the end time
        const elapsedTime1 = endTime1 - startTime1; // Calculate the elapsed time in milliseconds
       setImageGenerationTime1(elapsedTime1);
       
       const startTime2 = new Date();
       const API_TOKEN = "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";
         // Replace with your actual API token
        const response2 = await axios.post(
          "https://api-inference.huggingface.co/models/prompthero/openjourney",
          { inputs:prompt},
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${API_TOKEN}`,
            },
            responseType: "blob",
          }
        );
  
        if (response2.status === 200) {
          const blob = new Blob([response2.data]);
          const imageUrl2 = URL.createObjectURL(blob);
          setImage_url2(imageUrl2);
        } else {
          console.error("Failed to generate image");
        }
        const endTime2 = new Date(); // Record the end time
        const elapsedTime2 = endTime2 - startTime2; // Calculate the elapsed time in milliseconds
       setImageGenerationTime2(elapsedTime2);
      
     
    //  setGeneratingImg(true);
      // const startTime3 = new Date();
      // const thirdApiRequest = {
      //   method: "POST",
      //   url: "https://texttoimage.p.rapidapi.com/image",
      //   headers: {
      //     "Content-Type": "application/json",
      //     // 4f4b3de8bdmsh62a0c9b113d1c7fp15e863jsn11618dfb12b5
      //     //5288777387msheb5705d130f644ap195a8fjsnbd554477e60b
      //     "X-RapidAPI-Key": "5288777387msheb5705d130f644ap195a8fjsnbd554477e60b",
          
      //     "X-RapidAPI-Host": "texttoimage.p.rapidapi.com",
      //   },
      //   data: JSON.stringify({
      //     search_text: prompt,
      //     num_images: 1,
      //     pro_blog: true,
      //   }),
      // };
   
      const startTime3 = new Date();
      const Api1 = "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";
      const thirdApiRequest  = await fetch("https://api-inference.huggingface.co/models/stabilityai/stable-diffusion-2-1", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Authorization": `Bearer ${Api1}`,
            },
            body: JSON.stringify({ inputs: prompt }),
          });
          const blob1 = await thirdApiRequest.blob();
          setImage_url3(URL.createObjectURL(blob1));
       

      
      const endTime3 = new Date(); // Record the end time
        const elapsedTime3 = endTime3 - startTime3; // Calculate the elapsed time in milliseconds
       setImageGenerationTime3(elapsedTime3);
    
// // fourth Dell-e api Bearer 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

const startTime4 = new Date();
const API_KEY_OPENAI = "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"; 

// Replace with your OpenAI API key
// const API_KEY_OPENAI = "YOUR_API_KEY"; // Replace with your OpenAI API key
// const prompt = "Your prompt here"; // Replace with your prompt

const fourthApiRequest = 
 {
    method: "POST",
    headers: {
      Authorization: `Bearer ${API_KEY_OPENAI}`,
      "Content-Type": "application/json"
    
    },
    body: JSON.stringify({
      prompt: prompt,
      n: 1,
      size: "512x512",
    })
  }
  try{
    const response4 = await fetch('https://api.openai.com/v1/images/generations',fourthApiRequest)
    const data4=await response4.json()
    if (data4.data && data4.data.length > 0) {
      const image_url4 = data4.data[0].url;
      setImage_url4(image_url4);
    } else {
      console.error("No image data found in the response.");
    }
  }
  catch(error){
    console.error(error)
  }
const endTime4 = new Date(); // Record the end time
        const elapsedTime4 = endTime4 - startTime4; // Calculate the elapsed time in milliseconds
       setImageGenerationTime4(elapsedTime4);
    }
         
    catch (error) {
        // alert(error?.response.data.error.message);
        console.log(error);
      } 

     
   
    
      finally {
        setNumber(3);
        setGeneratingImg(false);
        setIsNumber(1);
      }
    } else {
      alert("Please enter a prompt");
    }
  };

  return (
    <>
      <Helmet>
      <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1"
        />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="description" content="Generate AI Image using CRUL" />
        <title>Generate Image</title>
        <meta name="theme-color" content="#0a192f" />
        {/* <link rel="shortcut icon" href={faviconHref} sizes="any" /> */}
        <link rel="manifest" href="../../public/manifest.json" />
        <link rel="apple-touch-icon" href="/icons/icon-192x192.png"></link>
        <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
        <meta name="author" content="Emmanuel Omoiya"></meta>
        <meta name="robots" content="index,follow" />
        <meta
          name="keywords"
          content="AI Artificial Intelligence Emmanuel Omoiya Developer OpenAi DALL-E image generator Aniyikaye coding web-development server MERN mongodb expressjs reactjs"
        />

        {/* Og */}
        <meta property="og:title" content="Generate Image - CRUL" />
        <meta
          property="og:description"
          content="Generate AI Image using CRUL"
        />
        <meta property="og:site_name" content="CRUL" />
        {/* <meta property="og:url" content={currentURL} key="ogurl" /> */}
                <meta property="og:image" content='https://crul.vercel.app/assets/img/CRUL_CREATE_OG.png' />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@Emmanuel_Omoiya" />
        <meta name="twitter:title" content="Generate AI Image - CRUL" />
        <meta
          name="twitter:description"
          content="Generate AI Image using CRUL"
        />
        <meta name="twitter:image" content="https://crul.vercel.app/assets/img/CRUL_CREATE_OG.png" />
        <meta name="twitter:image:alt" content="Generate Image - CRUL"></meta>
        <meta name="twitter:domain" content="https://crul.vercel.app/" />
      </Helmet>
      {number === 1 && (
        <Name name={name} setName={setName} setNumber={setNumber} />
      )}
      {number === 2 && (
        <Prompt
          prompt={prompt}
          setNumber={setNumber}
          setPrompt={setPrompt}
          generatingImg={generatingImg}
          generateImage={generateImage}
          text={text}
          isNumber={isNumber}
          setIsNumber={setIsNumber}
        />
      )}
      {number === 3 && (
        <Detail
          name={name}
          setNumber={setNumber}
          prompt={prompt}
          photo1={image_url1}
          photo2={image_url2}
          photo3={image_url3}
          photo4={image_url4}
          showcase={showcase}
          loading={loading}
          imageGenerationTime1={imageGenerationTime1}
          imageGenerationTime2={imageGenerationTime2}
          imageGenerationTime3={imageGenerationTime3}
          imageGenerationTime4={imageGenerationTime4}
        />
      )}
    </>
  );
};

export default GenerateImage;
