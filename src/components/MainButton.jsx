import React from "react";
import { styled } from "styled-components";

const MainButton = (props) => {
  return (
    <Button
      to={props.to}
      target={props.target ? "__blank" : ""}
      className={`action-button ${props.secondary ? "secondary" : "primary"} `}
    >
      {props.text}
      {props.icon}
    </Button>
  );
};

export default MainButton;

const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  border-radius: 2rem;
  border: 1px;
  cursor: pointer;
  padding: 13px 24px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease-in-out;
  font-weight: 700;
  &.primary {
    background-color: #fffcf8;
    color: #000;
    &:hover {
      background-color: #d8d8d8;
      /* border: 3px solid white; */
      outline: 3px solid #4287f5;
    }
  }
  &.secondary {
    background-color: #fffcf81a;
    color: #fff;
    border: 1px solid #fffcf833;
    &:hover {
      background-color: #fffcf828;
      color: #fff;
    }
  }
`;
