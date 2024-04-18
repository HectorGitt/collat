import React from "react";
import styled from "styled-components";

const HeadingPill = ({ text, dataAos }) => {
  return <Pill data-aos={dataAos}>{text}</Pill>;
};

const Pill = styled.h1`
  background: #fffcf81a;
  border: 1px solid #fffcf833;
  border-radius: 20px;
  font-size: 0.7rem;
  padding: 0.3rem 0.6rem;
  margin-top: 6rem;
`;

export default HeadingPill;
