import React, { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "👋": "Wave",
  "❤️": "Heart",
  "🐵": "Monke",
  "😳": "Baka",
  "🤣": "Funne"
};

var emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");
  function emojiInputHandler(event) {
    var emoji = event.target.value;

    var meaning = emojiDictionary[emoji];

    if (meaning === undefined) meaning = "Not in our database";

    setMeaning(meaning);
  }

  function emojiClickHandler(emoji){
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }
  return (
    <div className="App">
      <h1>emojiPedia</h1>

      <input onChange={emojiInputHandler}></input>

      <h2> {meaning} </h2>
      <h3>emojis we know</h3>
      {
        emojisWeKnow.map(function (emoji) {
          return (
            <span 
            onClick={() => emojiClickHandler(emoji)}
            style={{fontSize:"1.8rem",padding: "0.5rem"}} key={emoji}> 
            {emoji}{" "}</span>
          );
        })
      }
    </div>
  );
}

/**
 * class --> className
 * style --> takes object
 */
