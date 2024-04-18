import React from "react";
import styled from "styled-components";

const Paper = ({ icon, title, text, className, colorCode, dataAos }) => {
  return (
    <PaperCont
      className={className}
      style={{ background: `${colorCode}` }}
      data-aos={dataAos}
    >
      {icon && <img src={icon} alt="" />}
      <h3>{title}</h3>
      <p>{text}</p>
    </PaperCont>
  );
};

const PaperCont = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem 2rem;
  border-radius: 10px;
  border: 1px solid #fffcf833;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.08);
  background: #fffcf80d;
  width: 300px;
  height: 250px;
  backdrop-filter: blur(2rem);

  img {
    align-self: self-start;
    height: 5rem;
  }

  h3 {
    margin: 1rem 0;
    font-size: 1rem;
  }
  p {
    color: #ffffffb1;
    font-size: 0.7rem;
  }
`;

export default Paper;
