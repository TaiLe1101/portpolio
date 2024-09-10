"use client";

import React from "react";
import { Link } from "@/lib/types";
import clsx from "clsx";
import NextLink from "next/link";
import Hamburger from "hamburger-react";
import { useActiveSectionContext } from "@/containers/active-section";

import { AnimatePresence, motion } from "framer-motion";

type HamburgerMenuProps = { links: Link[] };

const HamburgerMenu: React.FC<HamburgerMenuProps> = ({ links }) => {
  return (
    <div className="md:hidden top-5 right-5 fixed w-60 z-[999] flex flex-col items-end gap-2">
      <button>
        <Hamburger />
      </button>
      <AnimatePresence>
        <div>
          {links.map((link, index) => {
            return (
              <div key={index}>
                <NextLink href={link.hash}>{link.nameEng}</NextLink>
              </div>
            );
          })}
        </div>
      </AnimatePresence>
    </div>
  );
};

export default HamburgerMenu;
