import React, { useState, useEffect } from "react";
import sha256 from "sha256";
import "./gate.css";

const Gate = () => {
  const [value, setValue] = useState("");

  useEffect(() => {
    const navigate = () => {
      console.log("navigate function runs");
      let password = sha256(value.toLowerCase());
    
      switch(value.toLowerCase()){
        case 'zoro':
          window.open("https://www.youtube.com/watch?v=luzpbvmNsjE", "_blank");
        case 'sanji':
          window.open("https://www.youtube.com/watch?v=OH8-BJ3s4l0", "_blank");
        case 'yuşa':
          window.open("https://www.instagram.com/one.piece.turkiye/", "_blank");
          

      }


      //
      if (
        password ===
          "8fce9b966dcd6bf5afb0e54f67ed71aba50336b9dbc44c86e51a8bbe1dd4be26" ||
        password ===
          "dd8a3af07bf0ed457e80ebfa07a8d2a7d834bb30aaee2cbf97d3b6120e6238b8"
      ) {
        console.log("navigation completed");
        //navigation to another app
        window.open("https://www.youtube.com/watch?v=ijl7KutqDUY", "_blank");
      }
    };

    navigate();
  }, [value]);

  return (
    <section className="gate section" id="gate">
      <div className="gate__form-div">
        <form className="gate__form">
          <label className="gate__form-tag">🍖⚔️💰🤥🍽️🩺🌸🧰🎻🐟</label>
          <input
            type="password"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            name="password"
            className="gate__form-input"
            placeholder="Zoro mu Sanji mi?"
          />
        </form>
      </div>
    </section>
  );
};

export default Gate;
