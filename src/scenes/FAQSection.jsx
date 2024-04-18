import React from "react";
import styled from "styled-components";
import FAQ from "./Accordion";
import unionImg2 from "../assets/images/Union2.svg";
import grid from "../assets/images/grid.svg";

const FAQSection = () => {
  return (
    <FAQCont>
      <h2 data-aos="zoom-in-up">FAQS</h2>
      <FAQ />
      <img className="background" src={unionImg2} alt="" />
      <img className="grid" src={grid} alt="" />
    </FAQCont>
  );
};

const FAQCont = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  padding: 2rem 0;
  .background {
    position: absolute;
    bottom: 0;
    z-index: -1;
    width: 100%;
  }
  .grid {
    position: absolute;
    z-index: -1;
    top: -8rem;
    width: 100%;
  }
  h2 {
    text-align: center;
  }
`;

export default FAQSection;
