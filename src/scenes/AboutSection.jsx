import React from "react";
import styled from "styled-components";
import unionImg from "../assets/images/Union.svg";
import { device } from "../breakpoint";

const AboutSection = () => {
  return (
    <About id="about">
      <div>
        <h2 className="main" data-aos="fade-up">
          Unique decentralized RWA backed private credit lending on Solana
        </h2>
        <p data-aos="fade-right">
          Collat Finance is a decentralized private credit lending service with
          a unique on-chain and off-chain CeDeFi architecture where individuals
          can access blockchain based loans with their tangible real world
          assets as collateral.
        </p>

        <h2 className="mission" data-aos="fade-up">
          <span>Our mission is simple;</span> to democratize access to financial
          services by making lending and borrowing as accessible and
          straightforward as possible.
        </h2>
      </div>
      <img className="background" src={unionImg} alt="" />
    </About>
  );
};

const About = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;
  margin-top: 4rem;
  padding-top: 2rem;
  .background {
    position: absolute;
    top: 0;
    z-index: -1;
    width: 100%;
  }
  & > div {
    padding: 0 10%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 80%;
    text-align: center;
    p {
      font-size: 1.2rem;
      color: #ffffffb1;
      text-align: center;
    }
    .main {
      margin: 1rem 0;
    }
    .mission {
      margin: 2rem 0;
    }
  }
  @media screen and (${device.md}) {
    & > div {
      width: 100%;
    }
  }
`;
export default AboutSection;
