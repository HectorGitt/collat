import React from "react";
import styled from "styled-components";
import designer from "../assets/images/designer.png";
import developer from "../assets/images/developer.png";
import { BiLogoLinkedin } from "react-icons/bi";
import HeadingPill from "../components/HeadingPill";

const ProfileCard = ({ image, name, role, icon }) => {
  return (
    <Profile>
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
  &:nth-last-of-type(1) {
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
      <HeadingPill text="Our Team" />
      <h2>
        Meet the super <span>team</span>
      </h2>
      <div className="cards">
        <ProfileCard
          image={designer}
          name={"Ines Rodriguez Piola"}
          role={"Product Designer"}
        />
        <ProfileCard
          image={developer}
          name={"Igor Stojanovic"}
          role={"Smart Contract Developer"}
        />
      </div>
    </Team>
  );
};

const Team = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  .cards {
    display: flex;
    width: 80%;
    justify-content: space-evenly;
    align-items: start;
    margin-top: 2rem;
    flex-wrap: wrap;
  }
`;

export default TeamSection;