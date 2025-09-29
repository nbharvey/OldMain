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
    <Footer container className="bg-gray-900 text-white py-6 mt-16">
      <div className="w-full">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          {/* Brand */}
          <div>
            <FooterBrand
              href="/"
              src="/favicon.svg"
              alt="Old Main Logo"
              name="Old Main Bar & Grill"
            />
            <p className="mt-2 text-sm text-gray-400">
              1103 Main St, Crete, NE 68333
            </p>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <FooterTitle title="Menu" />
              <FooterLinkGroup col>
                <FooterLink href="#">Food</FooterLink>
                <FooterLink href="#">Drinks</FooterLink>
              </FooterLinkGroup>
            </div>
            <div>
              <FooterTitle title="Company" />
              <FooterLinkGroup col>
                <FooterLink href="#">About</FooterLink>
                <FooterLink href="#">Events</FooterLink>
                <FooterLink href="#">Jobs</FooterLink>
              </FooterLinkGroup>
            </div>
            <div>
              <FooterTitle title="Follow Us" />
              <FooterLinkGroup col>
                <FooterIcon href="https://facebook.com/OldMainBarAndGrill" icon={BsFacebook} />
                <FooterIcon href="https://instagram.com" icon={BsInstagram} />
              </FooterLinkGroup>
            </div>
          </div>
        </div>

        <FooterDivider />

        {/* Copyright */}
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <FooterCopyright
            href="#"
            by="Old Main Bar & Grill™"
            year={2025}
          />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <FooterIcon href="https://facebook.com/OldMainBarAndGrill" icon={BsFacebook} />
            <FooterIcon href="https://instagram.com" icon={BsInstagram} />
          </div>
        </div>
      </div>
    </Footer>
  );
}