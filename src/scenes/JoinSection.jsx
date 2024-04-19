import React from "react";
import styled from "styled-components";
import MainButton from "../components/MainButton";

const JoinSection = () => {
  return (
    <Join>
      <div>
        <h2 data-aos="zoom-in-up">
          Join Our <span>Team</span>
        </h2>
        <p className="main" data-aos="zoom-in-up">
          We are seeking individuals with a strong understanding of the Solana
          blockchain technology and are passionate about developing
          decentralized applications.
        </p>
        <p className="interest" data-aos="zoom-in-up">
          Interested In Becoming a part of our team?
        </p>
        <MainButton text="Apply Here" dataAos="zoom-in-up" />
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
  p {
    width: 70%;
    color: #ffffffb2;
    font-weight: 400;
  }
  .interest {
    font-weight: 600;
  }
`;

export default JoinSection;
