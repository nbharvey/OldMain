"use client";

import {
  Footer,
  FooterBrand,
  FooterCopyright,
  FooterDivider,
  FooterIcon,
  FooterLink,
  FooterLinkGroup,
  FooterTitle,
} from "flowbite-react";
import { BsFacebook, BsInstagram } from "react-icons/bs";

export default function MyFooter() {
  return (
    <Footer container className="!bg-brandBlack py-6">
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
          <FooterTitle className="!text-brandSilver" title="Menu" />
          <FooterLinkGroup col>
            <FooterLink className="!text-brandSilver" href="#">
              Food
            </FooterLink>
            <FooterLink className="!text-brandSilver" href="#">
              Drinks
            </FooterLink>
          </FooterLinkGroup>
        </div>
        <div>
          <FooterTitle className="!text-brandSilver" title="Old Main" />
          <FooterLinkGroup col>
            <FooterLink className="!text-brandSilver" href="#">
              About
            </FooterLink>
            <FooterLink className="!text-brandSilver" href="#">
              Jobs
            </FooterLink>
            <FooterLink className="!text-brandSilver" href="#">
              Contact Us
            </FooterLink>
          </FooterLinkGroup>
        </div>
        <div className="text-center">
          <FooterTitle className="!text-brandSilver" title="Follow Us" />
          <FooterLinkGroup col className="items-center justify-center">
            <FooterIcon href="https://facebook.com/OldMainBarAndGrill" icon={BsFacebook} />
            <FooterIcon href="https://instagram.com" icon={BsInstagram} />
          </FooterLinkGroup>
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
      <div className="mt-4 flex justify-center space-x-6 sm:mt-0">
        <FooterIcon href="https://facebook.com/OldMainBarAndGrill" icon={BsFacebook} />
        <FooterIcon href="https://instagram.com" icon={BsInstagram} />
      </div>
    </div>
  </div>
</Footer>
  );
}