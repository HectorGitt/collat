import React from "react";
import styled from "styled-components";
import { device } from "../breakpoint";
import { FaTwitter, FaDiscord } from "react-icons/fa";
import { BsMedium } from "react-icons/bs";
import logo from "../assets/images/logo.png";
import { BiLogoTelegram } from "react-icons/bi";

const FooterSection = () => {
  return (
    <Footer>
      <div className="nav-content">
        <div>
          <nav>
            <img
              className="logo"
              src={logo}
              alt="logo"
              data-aos="zoom-in-right"
              data-aos-offset="-200"
            />
            <ul>
              <li data-aos="zoom-in-up" data-aos-offset="0">
                <a target="__blank" href="/learn">
                  {" "}
                  Blog
                </a>
              </li>
              <li data-aos="zoom-in-up" data-aos-offset="0">
                <a target="__blank" href="/docs">
                  {" "}
                  Contact
                </a>
              </li>
              <li data-aos="zoom-in-up" data-aos-offset="0">
                <a target="__blank" href="/disclaimer">
                  {" "}
                  Privacy Policy
                </a>
              </li>
              <li data-aos="zoom-in-up" data-aos-offset="0">
                <a target="__blank" href="/blog">
                  {" "}
                  Terms of Service
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <hr data-aos="fade-up" data-aos-offset="0" />
        <div className="copy-section">
          {/*copyright*/}
          <p>&copy; 2024 Collat Finance. All Rights Reserved</p>
          <div className="icons">
            <a target="__blank" href="https://twitter.com/CollatFinance">
              {" "}
              <FaTwitter />
            </a>
            <a target="__blank" href="https://t.me/collatfinance">
              {" "}
              <BiLogoTelegram />
            </a>
            <a target="__blank" href="https://discord.gg/QrtvFgGn7r">
              {" "}
              <FaDiscord />
            </a>
            <a target="__blank" href="https://discord.gg/QrtvFgGn7r">
              {" "}
              <BsMedium />{" "}
            </a>
          </div>
        </div>
      </div>
    </Footer>
  );
};

const Footer = styled.footer`
  display: flex;
  min-height: 50vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1%;
  }
  .logo {
    filter: opacity(0.3) sepia(1);
  }
  ul {
    display: flex;
    justify-content: space-between;
    list-style: none;
    color: #bcbcbc;
    width: 55%;
  }

  .nav-content {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    width: 80%;
    height: 100%;

    hr {
      border: 1px solid #fffcf81a;
    }
    nav {
      gap: 2rem;
      margin: 20px 0;
    }

    .copy-section {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 0.8rem;
      width: 100%;
    }
  }
  .icons {
    display: flex;
    justify-content: space-between;
    gap: 2rem;

    & > * {
      font-size: 1.5rem;
      width: 2rem;
      height: 2rem;
      padding: 0.2rem 0.2rem;
      border-radius: 50%;
      color: #fff;
    }
  }

  @media screen and (${device.md}) {
    min-height: 50vh;
    nav,
    .copy-section {
      flex-direction: column-reverse;
    }
    nav ul {
      width: 100%;
    }
    .copy-section p {
      margin-top: 10%;
    }
    nav img {
      align-self: self-start;
    }
    .icons {
      margin-top: 2rem;
      min-width: 100%;
      gap: 0;
    }
    .nav-content {
      width: 80%;
    }
    ul {
      margin: 1rem 0;
      display: flex;
      flex-direction: column;
      text-align: left;
      align-self: self-start;
      gap: 2rem;
    }
  }
`;

export default FooterSection;
