import React, { useEffect, useState } from "react";
import "./Home.scss";
// import loginImg from "../../assets/login.svg";
import { Link } from "react-router-dom";
import Info from "../Components/Info/Info";
import Partner from "../Components/Partners/Partner";
import Impact from "../Components/Impact/Impact";
import Restore from "../Components/Restore/Restore";

const WORDS = ["Re-Fi", "Recycling", "Collecting", "Processing"];

const Swapper = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => (prevCount + 1) % WORDS.length);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return <span>{WORDS[count]}.</span>;
};

const Home = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/public/whitepaper.pdf";
    link.download = "whitepaper.pdf";
    link.click();
  };

  return (
    <div>
      <section className="hero">
        <div className="hero-text --pad">
          <p>
            <span>EarthFi </span> &nbsp; &nbsp;
            <Swapper /> &nbsp; &nbsp;
          </p>

          <p>Explore the world of plastic recycling with ease.</p>

          <div className="hero-buttons --flex-start">
            <button className="--btn --btn-success">
              <Link to="/get-started">Get Started</Link>
            </button>

            {/* <button
              onClick={handleDownload}
              className="--btn --btn-primary"
              target="_blank"
            >
              whitepaper
            </button> */}
          </div>
        </div>
      </section>
      <Restore />
      {/* <Info /> */} 
      <Impact />
      <Partner />
    </div>
  );
};

export default Home;
