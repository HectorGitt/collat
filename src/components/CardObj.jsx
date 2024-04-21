import React from "react";
import styled from "styled-components";
import { device } from "../breakpoint";

const CardObj = ({ title, text, icon, dataAos }) => {
  return (
    <Card data-aos={dataAos}>
      <div className="case">
        <span></span>
        <span className="line"></span>
        <span></span>
      </div>

      <div className="content">
        <div className="icon">
          <img src={icon} alt="" />
        </div>

        <div>
          <h3>{title}</h3>
        </div>

        <p>{text}</p>
      </div>
    </Card>
  );
};
const Card = styled.div`
  display: flex;

  .case {
    display: flex;
    flex-direction: column;
    margin-right: 1rem;
    height: 100%;
  }
  .line {
    border-left: 3px solid #0cc91beb;
    height: 1rem;
    margin-top: 4.3rem;
  }
  .content {
    display: flex;
    flex-direction: column;
    min-width: 150px;
    width: 100%;
    border-radius: 10px;
    box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.08);
  }
  h3 {
    margin: 1rem 0;
    text-align: left;
    font-size: 1rem;
    font-weight: 500;
  }
  p {
    color: #ffffffb1;
    font-size: 0.8rem;
    font-weight: 400;
  }
  .icon {
    background: #fffcf81a;
    display: flex;
    align-items: center;
    justify-content: center;
    align-self: self-start;
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    color: #00ffa7;
  }
  @media screen and (${device.md}) {
    align-items: center;
    max-width: 300px;
    width: 100%;
    text-align: center;
    h3 {
      text-align: center;
    }
    .icon {
      align-self: center;
    }
  }
`;

export default CardObj;
