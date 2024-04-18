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
        <h2 data-aos="fade-up">
          Revolutionize your <span>financial flexibility</span>
        </h2>
        <p data-aos="fade-up" data-aos-offset="-100" data-aos-delay="500">
          Collat Finance is an on-chain lending platform backed by tokenzied RWA
          collateral built on the Solana Blockchain.
        </p>
        <div className="hero-actions">
          <MainButton
            text="Learn More"
            to="/buy"
            dataAos="fade-right"
            dataAosDelay="1000"
            dataAosOffset="0"
          />
          <MainButton
            text="Join Telegram"
            to="/discord"
            secondary
            icon={<FaTelegram size={"1.2rem"} />}
            dataAos="fade-left"
            dataAosDelay="1000"
            dataAosOffset="0"
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
    align-items: center;
    width: 70%;
    max-width: 1000px;
    text-align: center;
    height: 100%;
    h2 {
      font-size: 4rem;
      max-width: 30rem;
      animation: float 2s linear infinite;
      @keyframes float {
        0% {
          text-shadow: 0 5px 15px 0px rgba(0, 0, 0, 0.6);
          transform: translatey(0px);
        }
        50% {
          text-shadow: 0 25px 15px 0px rgba(0, 0, 0, 0.2);
          transform: translatey(-20px);
        }
        100% {
          text-shadow: 0 5px 15px 0px rgba(0, 0, 0, 0.6);
          transform: translatey(0px);
        }
      }
    }
    p {
      font-size: 1rem;
      color: #ffffffb1;
      text-align: center;
      margin: 1rem 0;
      max-width: 30rem;
    }
    .hero-actions {
      display: flex;
      justify-content: center;
      gap: 1rem;
    }
  }
  img {
    position: absolute;
    @keyframes floatimg {
      0% {
        transform: translateY(0px) scale(1);
      }
      50% {
        transform: translateY(20px) scale(0.9);
      }
      100% {
        transform: translateY(0px) scale(1);
      }
    }
  }
  .first {
    top: 30%;
    left: 10%;
    z-index: -1;
    width: 15rem;
    animation: floatimg 6s linear infinite;
  }
  .second {
    top: 0;
    right: 10%;
    z-index: -2;
    animation: floatimg 4s linear infinite;
  }
  .third {
    bottom: 0;
    right: 10%;
    z-index: -3;
    animation: floatimg 5s linear infinite;
  }
`;

export default HeroSection;
