import { Navbar, NavbarBrand, NavbarToggle, NavbarCollapse, Button } from "flowbite-react";
import { Link } from "react-router-dom";

export default function MyNavbar() {
  return (
    <Navbar fluid rounded className="bg-gray-900 text-white w-full">
      {/* Brand / Logo */}
      <NavbarBrand href="/">
        <img src="/oldmain-example.svg" className="mr-3 h-8" alt="Old Main Logo" />
        <span className="self-center whitespace-nowrap text-xl font-bold">
          Old Main Restaurant and Bar
        </span>
      </NavbarBrand>

      {/* Toggle for mobile */}
      <NavbarToggle />

      {/* Collapsible menu */}
      <NavbarCollapse>
        <Link to="/" className="block py-2 px-4 hover:bg-gray-700 rounded">
          Home
        </Link>
        <Link to="/menu" className="block py-2 px-4 hover:bg-gray-700 rounded">
          Menu
        </Link>
        <Link to="/drinks" className="block py-2 px-4 hover:bg-gray-700 rounded">
          Drinks
        </Link>
        <Link to="/events" className="block py-2 px-4 hover:bg-gray-700 rounded">
          Events
        </Link>
        <Link to="/order" className="block py-2 px-4 hover:bg-gray-700 rounded">
          Order
        </Link>
        <Link to="/about" className="block py-2 px-4 hover:bg-gray-700 rounded">
          About
        </Link>
        <Link to="/jobs" className="block py-2 px-4 hover:bg-gray-700 rounded">
          Jobs
        </Link>
      </NavbarCollapse>
    </Navbar>
  );
}