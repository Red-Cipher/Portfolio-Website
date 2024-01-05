import React from "react";

const navLinks = {
  home: {
    label: "Home",
    href: "/home"
  },
  projects: {
    label: "Projects",
    href: "/projects"
  },
  about: {
    label: "About Us",
    href: "/about"
  },
  contact: {
    label: "Contact Us",
    href: "/contact"
  }
};

function NavBar(props) {

  return (
    <ul>
      {Object.entries(props.links).map(entry => {
        const [key, value] = entry;
        return (
          <li key={key}><a href={value.href}>{value.label}</a></li>
        );
      })}
    </ul>
  );
}

function Header() {
  return (
    <>
      <h1>Adam Zeineddine - Software Developer</h1>
      <NavBar links={navLinks} />
    </>
  );
}

export default Header;
