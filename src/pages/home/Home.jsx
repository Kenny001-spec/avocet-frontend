import React, { useState, useEffect } from "react";
import "./Home.scss";
import Loader from "../../components/loader/Loader";
import { Link, useNavigate } from "react-router-dom";
import Statistics from "../statistics/Statistics";
import Product from "../product/Product";
import AppInner from "../app-inner/AppInner";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Partner from "../statistics/Partner";
import { ShowOnLogout } from "../../components/protect/hiddenLink";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  });

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Header />
          {/* hero section */}

          <section className=" hero">
            <div className="hero-text">
              <h1>AVOCET <span className="headingBig">SOLUTIONS</span>.</h1>

              {/* <small>...Tokenizing Waste through Web3</small> */}

              <p>
                Avocet is your gateway to a sustainable future. We are a
                waste-to-wealth platform committed to revolutionizing the way we
                handle waste and turning it into valuable resources. 
              </p>

              <div className="hero-buttons --flex-start">
                <ShowOnLogout>
                  <button className="--btn --btn-secondary center">
                    <Link to="/get-started">Get Started</Link>
                  </button>
                </ShowOnLogout>
              </div>

              {/* <Partner/> */}
            </div>
          </section>
          {/* <Statistics /> */}
          <hr />

          {/* <Product /> */}
          {/* <AppInner /> */}

          {/* <Footer /> */}
        </>
      )}
    </>
  );
};

export default Home;
