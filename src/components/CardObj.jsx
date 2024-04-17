import React from "react";
import styled from "styled-components";

const CardObj = ({ title, text, icon }) => {
  return (
    <Card>
      <div className="icon">{icon}</div>
      <h3>{title}</h3>
      <p>{text}</p>
    </Card>
  );
};
const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 350px;
  max-width: 20%;
  margin: 1rem;
  padding: 1rem;
  border-radius: 10px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.08);
  h3 {
    margin: 1rem 0;
    text-align: left;
    font-size: 1rem;
  }
  p {
    color: #ffffffb1;
    font-size: 0.7rem;
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
`;

export default CardObj;
