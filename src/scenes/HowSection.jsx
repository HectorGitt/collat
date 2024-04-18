import React from "react";
import styled from "styled-components";
import CardObj from "../components/CardObj";
import HeadingPill from "../components/HeadingPill";
import { FaClipboardList } from "react-icons/fa";
import { BsClipboard2DataFill } from "react-icons/bs";
import { FaDatabase } from "react-icons/fa";
import { FaMoneyCheck } from "react-icons/fa6";

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
            icon={<FaClipboardList />}
            dataAos="fade-right"
          />
          <CardObj
            title="Step 2: Loan Offer"
            text="Receive immediate, clear loan offer after AI evaluation. Offer includes interest rates, loan duration, and repayment conditions."
            icon={<BsClipboard2DataFill />}
            dataAos="zoom-in-up"
          />
          <CardObj
            title="Step 3: Collateral Tokenization"
            text="Accepted offers lead to collateral being tokenized on Solana blockchain. Tokenized units are listed on the marketplace for contributor purchase."
            icon={<FaDatabase />}
            dataAos="zoom-in-up"
          />
          <CardObj
            title="Step 4: Quick Funding"
            text="Funds disbursed to your account once offer is filled. Experience swift access to liquidity, often within hours."
            icon={<FaMoneyCheck />}
            dataAos="fade-left"
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
    padding: 0 5%;
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
      gap: 2rem;
      justify-content: center;
      flex-wrap: wrap;
      margin: 2rem 0;
      text-align: left;
    }
  }
`;

export default HowSection;
