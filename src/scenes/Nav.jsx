import React, { useState } from "react";
import { CgMenu } from "react-icons/cg";
import { IoCloseCircleOutline } from "react-icons/io5";
import { FaDiscord } from "react-icons/fa";
import MainButton from "../components/MainButton";
import logo from "../assets/images/logo.png";
import styled from "styled-components";
import { device } from "../breakpoint";
//import 'reactjs-popup/dist/index.css';

const Nav = () => {
  const [nav, setNav] = useState(false);
  const toggleNav = () => {
    setNav(!nav);
  };
  const closeNav = () => {
    setNav(false);
  };
  return (
    <NavBar>
      <a href="/" data-aos="zoom-in-right">
        <img alt="CardanoGPT logo" src={logo} />
      </a>
      <ul className="navlist-pc" data-aos="zoom-in-down">
        <li className="active">
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#how">How it Works</a>
        </li>
        <li>
          <a href="#col">COL TOken</a>
        </li>
        <li>
          <a href="#litepaper">LitePaper</a>
        </li>
        <li>
          <a href="#community">Community</a>
        </li>
        <li>
          <a href="#presale">Presale</a>
        </li>
      </ul>
      <MainButton
        target
        className="modal-button"
        to="/buy"
        text="Join Discord"
        secondary
        icon={<FaDiscord />}
        dataAos="zoom-in-left"
      />

      <CgMenu
        onClick={toggleNav}
        className="menu-button"
        id="menu"
        size="4rem"
      />

      <div className={nav ? "navlist navlist-mobile" : "navlist"}>
        <div className="top-mobile">
          <img alt="CardanoGPT logo" src={logo} />
          <IoCloseCircleOutline
            onClick={closeNav}
            className="menu-button-mobile"
            id="menu"
            size="4rem"
          />
        </div>
        <ul>
          <li onClick={closeNav}>
            <a href="#home">Home</a>
          </li>
          <li onClick={closeNav}>
            <a href="#about">About</a>
          </li>
          <li onClick={closeNav}>
            <a href="#how it Works">How it Works</a>
          </li>
          <li onClick={closeNav}>
            <a href="col">COL TOken</a>
          </li>
          <li onClick={closeNav}>
            <a href="litepaper">LitePaper</a>
          </li>
          <li onClick={closeNav}>
            <a href="community">Community</a>
          </li>
          <li onClick={closeNav}>
            <a href="presale">Presale</a>
          </li>
        </ul>
        {/* <Popup trigger={<button className='modal-button'>Buy CGI</button>} position="right center" modal>
            <div className='popup'>Coming Soon!!</div>
            </Popup> */}
        <MainButton target to="/buy" text="Join Discord" />
      </div>
    </NavBar>
  );
};

export default Nav;

const NavBar = styled.nav`
  margin: 1rem 0;
  /* .modal-button {
    border-radius: 8px;
    border: 1px;
    font-size: 1.2rem;
    cursor: pointer;
    padding: 13px 24px;
    box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.08);
    transition: all 0.3s ease-in-out;
    background-color: #01cc9c;
    color: #000;
    &:hover {
      background-color: #3d70c1;
      border: 3px solid white;
      outline: 3px solid #4287f5;
    }
  } */
  .menu-button {
    display: none;
  }

  width: 95%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1%;

  ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style: none;
    border-radius: 2rem;
    border: 1px solid #fffcf833;
    padding: 0.4rem 0.8rem;
    background: #fffcf80d;
    color: white;
    min-width: 40rem;
    width: 50%;
    gap: 1rem;
    li.active {
      background: #fffcf8;
      border-radius: 2rem;
      padding: 0.5rem 1rem;
      box-shadow: 0px 19px 12px 0px #1f004799;
    }
    li.active a {
      color: black;
    }
  }
  ul.navlist-pc {
    font-size: 0.7rem;
  }
  .navlist-mobile {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: #19202b;
    background-image: linear-gradient(315deg, #19202b 0%, #19202b 74%);
    display: flex;
    flex-direction: column;
    z-index: 100;
    padding: 2%;
    ul {
      width: 100%;
      display: flex;
      flex-direction: column;
      text-align: start;
      margin: 2rem 0;
    }
    li {
      margin: 1rem;
      font-size: 1.5rem;
      cursor: pointer;
    }
    .action-button {
      display: inline-block;
      width: 70%;
      text-align: center;
    }
  }
  .navlist {
    display: none;
  }
  .top-mobile {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }
  @media screen and (${device.md}) {
    .navlist-pc {
      display: none;
    }
    .menu-button {
      display: flex;
    }
    .navlist-mobile {
      display: block;
    }
    & > .action-button {
      display: none;
    }
  }
`;
