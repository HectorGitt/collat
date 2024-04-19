import React from "react";
import styled from "styled-components";
import Paper from "../components/Paper";
import background from "../assets/images/Layer_1.png";
import HeadingPill from "../components/HeadingPill";
import { device } from "../breakpoint";

const FeatureSection = () => {
  return (
    <Features>
      <div>
        <HeadingPill text="Our Features" dataAos="zoom-in-up" />
        <h2 data-aos="zoom-in-up">
          The future of <span>Tokenized RWA</span> in one place
        </h2>
        <div className="group1">
          <Paper
            className="second"
            title="Unmatched Security & Clarity"
            text="Every transaction is fortified with blockchain technology, offering unmatched security and complete transparency."
            colorCode="#1F004724"
            dataAos="fade-right"
          />
          <Paper
            className="first"
            title="Effortless Accessibility"
            text="Secure loans effortlessly from anywhere, without the need for a physical branch visit. Experience convenience right from your home."
            colorCode="#1F004724"
            dataAos="fade-left"
          />
        </div>
        <div className="group2">
          <Paper
            className="third"
            title="Optimized Fairness & Adaptability"
            text="Enjoy highly competitive rates and adaptable loan terms, backed by AI-driven valuations for precision and fairness."
            colorCode="#1F004724"
            dataAos="fade-up"
          />
        </div>
      </div>
    </Features>
  );
};

const Features = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  min-height: 100vh;
  justify-content: center;
  background-image: url(${background});
  background-size: auto;
  background-repeat: no-repeat;
  background-position: center;
  & > div {
    padding: 0 5%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    text-align: center;
    h3,
    p {
      text-align: left;
      margin: 0;
    }
    h3 {
      font-size: 1.5rem;
      font-weight: 500;
      margin-bottom: 0.5rem;
    }
    p {
      font-size: 0.8rem;
    }
    .group1 {
      display: flex;
      gap: 2rem;
      align-items: end;
      justify-content: center;
      flex-wrap: wrap;
      .first {
        margin-bottom: 4rem;
      }
    }
    .group1 > div,
    .group2 > div {
      width: 100%;
      max-width: 400px;
      height: fit-content;
      border-radius: 2rem;
    }
    .group2 {
      margin-left: 4rem;
      margin-top: 2rem;
    }
    .papers {
      /* display: grid;
      grid-template-columns: repeat(12, 1fr);
      grid-template-rows: repeat(9, 1fr);
      grid-auto-flow: row; */
      display: flex;
      gap: 2rem;
      width: 80%;
      height: 40rem;
    }
  }
  @media screen and (${device.md}) {
    & > div .group2 {
      margin: 0;
    }
  }
`;

export default FeatureSection;
