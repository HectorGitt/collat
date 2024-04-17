import React from "react";
import styled from "styled-components";
import MainButton from "../components/MainButton";
import layer1 from "../assets/images/Layer_1.png";
import layer2 from "../assets/images/Layer_2.png";
import layer3 from "../assets/images/Layer_3.png";
import { FaTelegram } from "react-icons/fa6";

const HeroSection = () => {
  return (
    <Hero>
      <div>
        <h2>
          Revolutionize your <span>financial flexibility</span>
        </h2>
        <p>
          Collat Finance is an on-chain lending platform backed by tokenzied RWA
          collateral built on the Solana Blockchain.
        </p>
        <div className="hero-actions">
          <MainButton text="Learn More" to="/buy" />
          <MainButton
            text="Join Telegram"
            to="/discord"
            secondary
            icon={<FaTelegram size={"1.2rem"} />}
          />
        </div>
      </div>
      <img src={layer1} className="first" alt="" />
      <img src={layer2} className="second" alt="" />
      <img src={layer3} className="third" alt="" />
    </Hero>
  );
};

const Hero = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  height: 100vh;
  max-height: 700px;
  position: relative;
  & > div {
    padding: 0 10%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 70%;
    max-width: 1000px;
    text-align: center;
    height: 100%;
    h2 {
      font-size: 4rem;
      max-width: 30rem;
    }
    p {
      font-size: 1rem;
      color: #ffffffb1;
      text-align: center;
      margin: 1rem 0;
      width: 20rem;
    }
    .hero-actions {
      display: flex;
      justify-content: center;
      gap: 1rem;
    }
  }
  img {
    position: absolute;
  }
  .first {
    top: 30%;
    left: 10%;
    z-index: -1;
    width: 15rem;
  }
  .second {
    top: 0;
    right: 10%;
    z-index: -2;
  }
  .third {
    bottom: 0;
    right: 10%;
    z-index: -3;
  }
`;

export default HeroSection;
