import React from "react";
import ReactDom from "react-dom";

const fname = "Ayon";
const lname = "Enso";
const number = "69";
const customStyle = {
  color: "",
  fontSize: "20px",
  border: "1px solid yellow"
};
const date = new Date();
const currentTime = date.getHours();

let greeting;

if (currentTime < 12) {
  greeting = "Good Morning";
  customStyle.color = "red";
} else if (currentTime < 18) {
  greeting = "Good Afternoon";
  customStyle.color = "green";
} else {
  greeting = "Good Night";
  customStyle.color = "blue";
}

customStyle.border = "solid black";

const img = "https://picsum.photos/200/300";
ReactDom.render(
  <div>
    <h1 className="heading" style={customStyle}>
      {greeting} {fname} {lname}!
    </h1>
    <p>Your lucky number is {number} </p>
    <p>My favourit games are</p>
    <ul style={customStyle}>
      <li>The Witcher</li>
      <li>Elden Ring</li>
      <li>God of War</li>
    </ul>
    <p>My favourit book is The Witcher Saga </p>
    <div>
      <img alt="random" className="img-style" src={img + "?grayscale"} />
    </div>
  </div>,
  document.getElementById("root")
);
