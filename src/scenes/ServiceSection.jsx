import React from "react";
import styled from "styled-components";
import Paper from "../components/Paper";
import package_icon from "../assets/images/package_icon.png";
import hand from "../assets/images/hand_icon.png";
import coins from "../assets/images/coins.png";
import HeadingPill from "../components/HeadingPill";
import ellipse from "../assets/images/Ellipse.svg";

const ServiceSection = () => {
  return (
    <Services>
      <div>
        <HeadingPill text="Collat.Finance Services" dataAos="zoom-in-up" />
        <h2 data-aos="zoom-in-up">
          Secure, blockchain powered private credit lending services backed by
          <span> Tokenized RWA</span>
        </h2>
        <div className="papers">
          <Paper
            icon={hand}
            title="Digital Pawn Loans"
            text="Quick, blockchain-enabled loans against your valuable assets."
            dataAos="zoom-in-right"
          />
          <Paper
            icon={coins}
            title="Asset Tokenization"
            text="Convert your physical valuables into digital tokens for ease of transaction and investment."
            dataAos="zoom-in-up"
          />
          <Paper
            icon={package_icon}
            title="Item Sales"
            text="A platform to sell your items directly for immediate liquidity."
            dataAos="zoom-in-left"
          />
        </div>
      </div>
      <img className="ellipse" src={ellipse} alt="" />
    </Services>
  );
};

const Services = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;
  .ellipse {
    position: absolute;
    top: 70%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  & > div {
    padding: 0 5%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 90%;
    text-align: center;

    .papers {
      display: flex;
      justify-content: center;
      gap: 2rem;
      margin: 2rem 0;
      width: 100%;
      text-align: left;
      flex-wrap: wrap;
      align-items: center;
    }
  }
`;

export default ServiceSection;
