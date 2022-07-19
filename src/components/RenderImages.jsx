import React, { useState } from "react";
 
let arryOfIds = [];
const RenderImages = () => {
  let [score, setScore] = useState(0);
  let [maxScore, setMaxScore] = useState(score);
   
  let imagesArray = [
    { src: "./images/img1.jpg", id: 1 },
    { src: "./images/img2.jpg", id: 2 },
    { src: "./images/img3.jpg", id: 3 },
    { src: "./images/img4.jpg", id: 4 },
    { src: "./images/img5.jpg", id: 5 },
    { src: "./images/img6.jpg", id: 6 },
    { src: "./images/img7.jpg", id: 7 },
    { src: "./images/img8.jpg", id: 8 },
    { src: "./images/img9.jpg", id: 9 },
    { src: "./images/img10.jpg", id: 10 },
    { src: "./images/img11.jpg", id: 11 },
  ];
  let [imageArray, setImageArray] = useState(imagesArray);

  function shuffle(imagesArray, event) {
    imagesArray.sort(() => Math.random() - 0.5);
  //  console.log("shuffle Clicked");
    setImageArray(imagesArray);

    if (!arryOfIds.includes(event.target.id) || arryOfIds === []) {
      arryOfIds.push(event.target.id);
   //   console.log("arryOfIds", arryOfIds);
      setScore(score + 1);
   //   console.log("current score", score);
    } else {
      maxScore < score && setMaxScore(score);
      setScore(0);
      arryOfIds = [];
     // console.log("duplicate clicked quit the game");
     // console.log(score, "displaying the max score");
    }
  }

  return (
    <div className="col">
      {/* <img src="images/img1.jpg" alt="img"></img> */}
      <h1>Max Score is {maxScore}</h1>
      <h2>current score is {score}</h2>
      <div>
        {imageArray.map((element) => {
          return (
            <img
              src={element.src}
              alt="img"
              width="400px"
              height="350px"
              id={element.id}
              onClick={(event) => shuffle(imagesArray, event)}
              // onClick={(event) => console.log(event.target.id)}
            ></img>
          );
        })}
      </div>
    </div>
  );
};

export default RenderImages;
