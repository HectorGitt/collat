import React from "react";
import styled from "styled-components";
import coin from "../assets/images/coin.png";
import line from "../assets/images/greenline.png";

const Hanger = ({ title, value }) => {
  return (
    <HangerCont data-aos="zoom-in-up">
      <h6>{title}</h6>
      <div className="hanger-foot">
        <p>{value}</p>
        <img data-aos="zoom-in-up" className="line" src={line} alt="" />
        <img data-aos="flip-left" className="coin" src={coin} alt="" />
      </div>
    </HangerCont>
  );
};

const HangerCont = styled.div`
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  align-items: start;
  height: 12rem;
  justify-content: space-between;
  min-width: 150px;
  h6 {
    margin-left: 0.3rem;
    font-size: 0.8rem;
    color: #ffffffb2;
    font-weight: normal;
    width: 7.5rem;
  }
  .hanger-foot {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 83%;
  }
  p {
    font-size: 1.5rem;
  }
  .coin {
    width: 3rem;
  }
`;

export default Hanger;
