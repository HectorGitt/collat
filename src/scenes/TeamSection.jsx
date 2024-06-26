import React from "react";
import styled from "styled-components";
import designer from "../assets/images/designer.png";
import developer from "../assets/images/developer.png";
import product from "../assets/images/product.png";
import { BiLogoLinkedin } from "react-icons/bi";
import HeadingPill from "../components/HeadingPill";
import line from "../assets/images/line.svg";

const ProfileCard = ({ image, name, role, icon, dataAos }) => {
  return (
    <Profile data-aos={dataAos}>
      <img src={image} alt="" />
      <h3>{name}</h3>
      <p>{role}</p>
      <div className="icon">
        <BiLogoLinkedin />
      </div>
    </Profile>
  );
};

const Profile = styled.div`
  background: #fffcf80d;
  border: 1px solid #fffcf833;
  border-radius: 2rem;
  padding: 1rem;
  width: 100%;
  max-width: 300px;
  img {
    width: 100%;
  }
  &:nth-of-type(2) {
    margin-top: 2rem;
  }
  h3 {
    font-weight: 600;
  }
  h3,
  p {
    margin: 0.5rem 0;
    margin-left: 1rem;
  }
  p {
    font-weight: 400;
  }
  .icon {
    justify-self: flex-end;
    text-align: right;
    & > * {
      font-size: 2rem;
      margin-right: 1rem;
    }
  }
`;

const TeamSection = () => {
  return (
    <Team id="team">
      <HeadingPill text="Our Team" dataAos="zoom-in-up" />
      <h2 data-aos="zoom-in-up">
        Meet the super <span>team</span>
      </h2>
      <div className="cards">
        <ProfileCard
          image={designer}
          name={"Ines Rodriguez Piola"}
          role={"Product Designer"}
          dataAos="fade-right"
        />
        <ProfileCard
          image={developer}
          name={"Igor Stojanovic"}
          role={"Smart Contract Developer"}
          dataAos="fade-up"
        />
        <ProfileCard
          image={product}
          name={"Mit Sachani"}
          role={"Product Manager"}
          dataAos="fade-up"
        />
      </div>
      <img src={line} className="lines" alt="" />
    </Team>
  );
};

const Team = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  z-index: 1;
  .lines {
    position: absolute;
    bottom: 20%;
    width: 100%;
    z-index: -2;
  }
  .cards {
    display: flex;
    width: 80%;
    justify-content: center;
    gap: 2rem;
    align-items: start;
    margin-top: 2rem;
    flex-wrap: wrap;
  }
`;

export default TeamSection;
