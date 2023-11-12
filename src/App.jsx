import React, { useState } from "react";
import "./App.css";
import Card from "./components/Card.jsx";
import JSONData from "./ImageDataset.json";

function App() {
  const [label, setLabel] = useState("BBVA");
  const [customerName, setcustomerName] = useState("AD-GAR");
  const [cardNumber, setcardNumber] = useState("4152 6140 5774 0311");
  const [expiryDate, setexpiryDate] = useState(" ");

  return (
    <div className="App">
      <h1>💵🚀 Card </h1>
      <p></p>
      <div className="cardGallery">
        {JSONData.map((key, index) => (
          <div key={index}>
            <Card
              label={label}
              customerName={customerName}
              cardNumber={cardNumber}
              expiryDate={expiryDate}
              backgroundImage={key.img}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

