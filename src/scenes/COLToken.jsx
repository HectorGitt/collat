import React from "react";
import styled from "styled-components";
import FlexSection from "../components/FlexSection";
import coins from "../assets/images/coins.png";
import Hanger from "../components/Hanger";
import HeadingPill from "../components/HeadingPill";

const COLToken = () => {
  return (
    <COLCont id="col">
      <HeadingPill text="COL tokens" dataAos="fade-up" />
      <FlexSection id="about" title="About Us" imgSrc={coins} imgAlt="about us">
        <h2 data-aos="fade-up">
          Decentralized utility token for all
          <br />
          {/* <span className="waivy">Cardano</span> */}
        </h2>
        <p>
          Collat Finance’s $COL Utility token is the utility token of the Collat
          ecosystem with numerous use cases like incentivizing participation in
          the decentralized node as you can own a certain amount of $COL tokens,
          stake it and become a validator.
        </p>
        <p>
          COL token holders will also have priority access to tokenized RWA
          collateral listings on our marketplace and also holders can stake
          their COL tokens to earn more
        </p>
      </FlexSection>
      <ul className="token-details" data-aos="fade-up">
        <li data-aos="fade-up">
          <h6>Token Name</h6>
          <p>Collat Finance</p>
        </li>
        <li data-aos="fade-up">
          <h6>Blockchain</h6>
          <p>Solana</p>
        </li>
        <li data-aos="fade-up">
          <h6>Total Supply</h6>
          <p>50,000,000</p>
        </li>
        <li data-aos="fade-up">
          <h6>Token Symbol</h6>
          <p>$COL</p>
        </li>
        <li data-aos="fade-up">
          <h6>Decimal</h6>
          <p>5</p>
        </li>
        <li data-aos="fade-up">
          <h6>Contact Address</h6>
          <p>TBA</p>
        </li>
      </ul>
      <div className="hanger-list" data-aos="zoom-in-up">
        <Hanger title="Team & Advisors" value="14%" />
        <Hanger title="Presale" value="50%" />
        <Hanger title="Liquidity / Exchange Listings" value="10%" />
        <Hanger title="Vault" value="11%" />
        <Hanger title="Staking Rewards / Farming Pool" value="15%" />
      </div>
    </COLCont>
  );
};

const COLCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  h1 {
    align-self: self-start;
    margin-left: 5%;
  }
  .token-details {
    list-style: none;
    display: flex;
    justify-content: space-evenly;
    align-self: center;
    width: 80%;
    background: #fffcf80d;
    border: 1px solid #fffcf833;
    border-radius: 1.5rem;
    padding: 2rem 0;

    h6 {
      font-size: 0.8rem;
      color: #ffffffb2;
      font-weight: normal;
      margin-bottom: 0.2rem;
    }
  }
  .hanger-list {
    display: flex;
    justify-content: space-between;
    width: 80%;
    align-self: center;
    flex-wrap: wrap;
  }
`;

export default COLToken;
