import React from "react";
import TypeWriterEffect from "react-typewriter-effect";

const Landing = () => {
  const typingeffect = document.querySelector(".scrollable-div");
  return (
    <div className="landing-wrapper">
      <h6>Hello, I'm</h6>
      <h1 className="gradient">Amresh Prasad Sinha</h1>
      <p className="typingeffect" id="typingeffect"></p>
      <TypeWriterEffect
        textStyle={{
          color: "#F08A5D",
          fontSize: "1.25rem",
          textAlign: "center",
          marginTop: -24,
          fontFamily: "Fira Code",
        }}
        startDelay={400}
        cursorColor="white"
        text="Open Source Developer with ❤️️"
        multiTextDelay={1500}
        typeSpeed={100}
        scrollArea={typingeffect}
      />
    </div>
  );
};

export default Landing;
