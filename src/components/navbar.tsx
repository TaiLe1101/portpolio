import HamburgerMenu from "@/components/hamburger-menu";
import Header from "@/components/header";
import { links } from "@/lib/data";
import React from "react";

export default function Navbar() {
  return (
    <nav>
      <HamburgerMenu links={links} />
      <Header />
    </nav>
  );
}
