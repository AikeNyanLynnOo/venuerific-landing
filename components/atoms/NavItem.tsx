"use client";

import Link from "next/link";
import React from "react";

export interface Link {
  href?: string;
  text?: string;
}

export interface NavItem {
  link: Link;
  children: React.ReactNode;
  customStyles?: object;
}

export const NavItem = ({ link, children, customStyles }: NavItem) => {
  return (
    <Link
      href={link?.href || "/"}
      style={{
        ...customStyles,
      }}
    >
      {link?.text}
      {children}
    </Link>
  );
};
