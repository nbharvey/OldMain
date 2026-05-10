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
import { colors } from "../utils/colors";

export default function MyFooter() {
  const textStyle = {
    color: colors.vintage_linen,
  };

  const mutedTextStyle = {
    color: colors.muted_gold,
  };

  return (
    <Footer
      container
      className="rounded-none py-8 border-t"
      style={{
        backgroundColor: colors.espresso_black,
        borderColor: colors.antique_gold,
      }}
    >
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid gap-10 md:grid-cols-3">

          {/* Brand */}
          <div className="text-center md:text-left">
            <FooterBrand href="/" src="/SVGLogo.svg" alt="Old Main Logo">
              <span
                className="font-bold text-xl"
                style={textStyle}
              >
                Old Main Restaurant + Bar
              </span>
            </FooterBrand>

            <p
              className="mt-3 text-sm"
              style={mutedTextStyle}
            >
              1103 Main St, Crete, NE 68333
            </p>
          </div>

          {/* Navigation */}
          <div className="grid grid-cols-2 gap-8 text-center md:text-left">

            {/* Menu Links */}
            <div>
              <FooterTitle
                title="Menu"
                style={textStyle}
              />

              <FooterLinkGroup col>
                <Link
                  to="/menu/food"
                  className="py-1 transition"
                  style={mutedTextStyle}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color =
                      colors.antique_gold;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color =
                      colors.muted_gold;
                  }}
                >
                  Food
                </Link>

                <Link
                  to="/menu/drinks"
                  className="py-1 transition"
                  style={mutedTextStyle}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color =
                      colors.antique_gold;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color =
                      colors.muted_gold;
                  }}
                >
                  Drinks
                </Link>
              </FooterLinkGroup>
            </div>

            {/* Old Main Links */}
            <div>
              <FooterTitle
                title="Old Main"
                style={textStyle}
              />

              <FooterLinkGroup col>
                {[
                  { to: "/about", label: "About" },
                  { to: "/jobs", label: "Careers" },
                  { to: "/contact", label: "Contact Us" },
                ].map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    className="py-1 transition"
                    style={mutedTextStyle}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color =
                        colors.antique_gold;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color =
                        colors.muted_gold;
                    }}
                  >
                    {link.label}
                  </Link>
                ))}
              </FooterLinkGroup>
            </div>
          </div>

          {/* Social */}
          <div className="text-center md:text-right">
            <FooterTitle
              title="Follow Us"
              style={textStyle}
            />

            <div className="flex justify-center md:justify-end gap-5 mt-4 text-3xl">
              <a
                href="https://www.facebook.com/ombgcrete/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition"
                style={{ color: colors.antique_gold }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color =
                    colors.burnished_copper;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color =
                    colors.antique_gold;
                }}
              >
                <BsFacebook />
              </a>

              <a
                href="https://www.instagram.com/oldmainrestaurantcretene/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition"
                style={{ color: colors.antique_gold }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color =
                    colors.burnished_copper;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color =
                    colors.antique_gold;
                }}
              >
                <BsInstagram />
              </a>
            </div>
          </div>
        </div>

        <FooterDivider
          style={{
            borderColor: colors.antique_gold,
            opacity: 0.3,
            marginTop: "2rem",
            marginBottom: "1.5rem",
          }}
        />

        {/* Copyright */}
        <div className="text-center">
          <FooterCopyright
            href="#"
            by="Old Main Restaurant + Bar™"
            year={2026}
            style={mutedTextStyle}
          />
        </div>
      </div>
    </Footer>
  );
}