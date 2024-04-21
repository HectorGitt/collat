import React from "react";
import styled from "styled-components";
import CardObj from "../components/CardObj";
import HeadingPill from "../components/HeadingPill";
import { device } from "../breakpoint";
import search from "../assets/images/search.png";
import offer from "../assets/images/offer.png";
import data from "../assets/images/data.png";
import fund from "../assets/images/fund.png";

const HowSection = () => {
  return (
    <How id="how">
      <div>
        <HeadingPill dataAos="fade-up" text="Step-by-step guide" />
        <h2 data-aos="fade-up">How It Works</h2>
        <div className="cards">
          <CardObj
            title="Step 1: Item Evaluation"
            text="Submit item details to a decentralized Pawn Node. AI assesses value quickly, ensuring fair, transparent valuation."
            icon={search}
            dataAos="fade-right"
          />
          <CardObj
            title="Step 2: Loan Offer"
            text="Receive immediate, clear loan offer after AI evaluation. Offer includes interest rates, loan duration, and repayment conditions."
            icon={offer}
            dataAos="zoom-in-up"
          />
          <CardObj
            title="Step 3: Collateral Tokenization"
            text="Accepted offers lead to collateral being tokenized on Solana blockchain. Tokenized units are listed on the marketplace for contributor purchase."
            icon={data}
            dataAos="zoom-in-up"
          />
          <CardObj
            title="Step 4: Quick Funding"
            text="Funds disbursed to your account once offer is filled. Experience swift access to liquidity, often within hours."
            icon={fund}
            dataAos="fade-up"
          />
        </div>
      </div>
    </How>
  );
};

const How = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  & > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    h2 {
      font-size: 2.5rem;
      margin: 2rem 0;
    }
    .cards {
      display: flex;
      gap: 1rem;
      justify-content: center;
      margin: 2rem 0;
      text-align: left;
      width: 80%;
    }
  }
  @media screen and (${device.md}) {
    .cards {
      flex-direction: column;
    }
  }
`;

export default HowSection;
