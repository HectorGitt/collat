import React from "react";
import styled from "styled-components";
import MainButton from "../components/MainButton";

const JoinSection = () => {
  return (
    <Join>
      <div>
        <h2>Join Our Team</h2>
        <p>
          We are seeking individuals with a strong understanding of the Solana
          blockchain technology and are passionate about developing
          decentralized applications.
        </p>
        <p>Interested In Becoming a part of our team?</p>
        <MainButton text="Apply Here" />
      </div>
    </Join>
  );
};

const Join = styled.div`
  width: 100%;
  display: flex;
  text-align: center;
  margin: 3rem 0;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
  & > div {
    width: 50%;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    align-items: center;
  }
  button {
  }
`;

export default JoinSection;
