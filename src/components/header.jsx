import React from "react";

const urlOne = "Placeholder string"
const urlTwo = "Placeholder string"
const urlThree = "Placeholder string"
const urlFour = "Placeholder string"

function NavBar(props) {
  return (
    <ul>
      <li href={urlOne.props}>Home</li>
      <li href={urlTwo.props}>Projects</li>
      <li href={urlThree.props}>About Us</li>
      <li href={urlFour.props}>Contact Us</li>
    </ul>
  );
}

function Header() {
  return (
    <>
      <h1>Adam Zeineddine - Software Developer</h1>
      <NavBar />
    </>
  );
}

export default Header;
