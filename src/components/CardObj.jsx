import React from "react";
import styled from "styled-components";
import { device } from "../breakpoint";

const CardObj = ({ title, text, icon, dataAos }) => {
  return (
    <Card data-aos={dataAos}>
      <div className="icon">{icon}</div>
      <h3>{title}</h3>
      <p>{text}</p>
    </Card>
  );
};
const Card = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 150px;
  width: 100%;
  border-radius: 10px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.08);
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
    .icon {
      align-self: center;
    }
  }
`;

export default CardObj;
