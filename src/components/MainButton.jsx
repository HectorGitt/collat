import React from "react";
import { styled } from "styled-components";

const MainButton = (props) => {
  return (
    <Button
      href={props.to}
      target={props.target ? "__blank" : ""}
      className={`action-button ${props.secondary ? "secondary" : "primary"} `}
      data-aos={props.dataAos}
      data-aos-delay={props.dataAosDelay}
      data-aos-offset={props.dataAosOffset}
    >
      {props.text}
      {props.icon}
    </Button>
  );
};

export default MainButton;

const Button = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  border-radius: 2rem;
  border: 1px;
  cursor: pointer;
  padding: 13px 24px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease-in-out;
  font-weight: 600;
  font-size: 0.8rem;
  animation: wiggle 2s linear infinite;
  @keyframes wiggle {
    0%,
    7% {
      transform: rotateZ(0);
    }
    15% {
      transform: rotateZ(-15deg);
    }
    20% {
      transform: rotateZ(10deg);
    }
    25% {
      transform: rotateZ(-10deg);
    }
    30% {
      transform: rotateZ(6deg);
    }
    35% {
      transform: rotateZ(-4deg);
    }
    40%,
    100% {
      transform: rotateZ(0);
    }
  }
  &.primary {
    background-color: #fffcf8;
    color: #000;
    &:hover {
      background-color: #d8d8d8;
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
