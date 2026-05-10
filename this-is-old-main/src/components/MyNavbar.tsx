import {
  Navbar,
  NavbarBrand,
  NavbarToggle,
  NavbarCollapse,
  Dropdown,
} from "flowbite-react";
import { Link } from "react-router-dom";
import { colors } from "../utils/colors";

export default function MyNavbar() {
  const linkStyle = {
    color: colors.vintage_linen,
  };

  const hoverOn = (e: React.MouseEvent<HTMLElement>) => {
    e.currentTarget.style.color = colors.antique_gold;
  };

  const hoverOff = (e: React.MouseEvent<HTMLElement>) => {
    e.currentTarget.style.color = colors.vintage_linen;
  };

  return (
    <Navbar
      fluid
      className="w-full border-b"
      style={{
        backgroundColor: colors.espresso_black,
        borderColor: colors.antique_gold,
      }}
    >
      <NavbarBrand href="/">
        <img
          src="/SVGLogoCropped.svg"
          className="mr-3 h-16"
          alt="Old Main Logo"
        />

        <span
          className="self-center whitespace-nowrap text-xl font-bold"
          style={linkStyle}
        >
          Old Main Restaurant + Bar
        </span>
      </NavbarBrand>

      <NavbarToggle />

      <NavbarCollapse>
        <Link
          to="/"
          className="block py-2 px-4 transition"
          style={linkStyle}
          onMouseEnter={hoverOn}
          onMouseLeave={hoverOff}
        >
          Home
        </Link>

        <Dropdown
  label={
    <span
      style={{
        color: colors.vintage_linen,
      }}
    >
      Menu
    </span>
  }
  inline
>          <Link to="/menu/food" className="block px-4 py-2">
            Food
          </Link>
          <Link to="/menu/drinks" className="block px-4 py-2">
            Drinks
          </Link>
        </Dropdown>

        {[
          { to: "/events", label: "Events" },
          { to: "/order", label: "Order Now!" },
          { to: "/about", label: "About" },
          // { to: "/jobs", label: "Jobs" },
        ].map((link) => (
          <Link
            key={link.to}
            to={link.to}
            className="block py-2 px-4 transition"
            style={linkStyle}
            onMouseEnter={hoverOn}
            onMouseLeave={hoverOff}
          >
            {link.label}
          </Link>
        ))}
      </NavbarCollapse>
    </Navbar>
  );
}