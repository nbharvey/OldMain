"use client";

import {
  Footer,
  FooterBrand,
  FooterCopyright,
  FooterDivider,
  FooterLinkGroup,
  FooterTitle,
} from "flowbite-react";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function MyFooter() {
  return (
    <Footer container className="!bg-brandBlack py-6 rounded-none">
      <div className="w-full">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          {/* Brand */}
          <div className="text-center sm:text-left">
            <FooterBrand href="/" src="/SVGLogo.svg" alt="Old Main Logo">
              <span className="!text-brandSilver font-bold text-lg">
                Old Main Restaurant and Grill
              </span>
            </FooterBrand>
            <p className="mt-2 text-sm !text-brandSilver font-sans">
              1103 Main St, Crete, NE 68333
            </p>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <FooterTitle className="!text-brandSilver" title="menu" />
              <FooterLinkGroup col>
                <Link
                  to="/menu/food"
                  className="block !text-brandSilver py-1 hover:text-brandBrick"
                >
                  Food
                </Link>
                <Link
                  to="/menu/drinks"
                  className="block !text-brandSilver py-1 hover:text-brandBrick"
                >
                  Drinks
                </Link>
              </FooterLinkGroup>
            </div>
            <div>
              <FooterTitle className="!text-brandSilver" title="Old Main" />
              <FooterLinkGroup col>
                <Link
                  to="/about"
                  className="block !text-brandSilver py-1 hover:text-brandBrick"
                >
                  About
                </Link>
                <Link
                  to="/jobs"
                  className="block !text-brandSilver py-1 hover:text-brandBrick"
                >
                  Jobs
                </Link>
                <Link
                  to="/contact"
                  className="block !text-brandSilver py-1 hover:text-brandBrick"
                >
                  Contact Us
                </Link>
              </FooterLinkGroup>
            </div>
            <div className="text-center">
              <FooterTitle className="!text-brandSilver" title="Follow Us" />
              <div className="flex justify-center gap-4 mt-2 text-2xl">
                <a
                   href="https://www.facebook.com/ombgcrete/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brandSilver hover:text-brandBrick"
                >
                  <BsFacebook />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brandSilver hover:text-brandBrick"
                >
                  <BsInstagram />
                </a>
              </div>
            </div>
          </div>
        </div>

        <FooterDivider />

        {/* Copyright */}
        <div className="w-full sm:flex sm:items-center sm:justify-between text-center">
          <FooterCopyright
            className="!text-brandSilver"
            href="#"
            by="Old Main Restaurant and Grill™"
            year={2025}
          />
        </div>
      </div>
    </Footer>
  );
}