import { Navbar, NavbarBrand, NavbarToggle, NavbarCollapse, Dropdown } from "flowbite-react";
import { Link } from "react-router-dom";

export default function MyNavbar() {
  return (
    <Navbar fluid className="!bg-brandBlack text-brandSilver w-full">
      {/* Brand / Logo */}
      <NavbarBrand href="/">
        <img src="/SVGLogoCropped.svg" className="mr-3 h-16" alt="Old Main Logo" />
        <span className="self-center whitespace-nowrap text-xl font-bold">
        Old Main Restaurant + Bar
        </span>
      </NavbarBrand>

      {/* Toggle for mobile */}
      <NavbarToggle />

      {/* Collapsible menu */}
      <NavbarCollapse>
        <Link to="/" className="block py-2 px-4 hover:bg-brandBrick">
          Home
        </Link>

        {/* Menu dropdown */}
        <Dropdown label="Menu" inline>
          <Link to="/menu/food" className="block px-4 py-2 hover:bg-brandBrick">
            Food
          </Link>
          <Link to="/menu/drinks" className="block px-4 py-2 hover:bg-brandBrick">
            Drinks
          </Link>
        </Dropdown>

        <Link to="/events" className="block py-2 px-4 hover:bg-brandBrick">
          Events
        </Link>
        <Link to="/order" className="block py-2 px-4 hover:bg-brandBrick">
          Order Now!
        </Link>
        <Link to="/about" className="block py-2 px-4 hover:bg-brandBrick">
          About
        </Link>
        <Link to="/jobs" className="block py-2 px-4 hover:bg-brandBrick">
          Jobs
        </Link>
      </NavbarCollapse>
    </Navbar>
  );
}