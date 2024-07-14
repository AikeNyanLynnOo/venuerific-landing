import React, { useMemo } from "react";
import { ResponsiveContainer } from "./ResponsiveContainer";
import clsx from "clsx";
import Image from "next/image";
import { NavItem } from "./atoms/NavItem";
import ButtonWithIcon from "./atoms/ButtonWithIcon";
import { primary } from "@/lib/theme/colors";
import { IconButton, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

export interface Navbar {
  children?: React.ReactNode;
  customNavClasses?: object;
}

const Navbar = ({ children, customNavClasses }: Navbar) => {
  const navClasses = useMemo(() => {
    return clsx({
      flex: true,
      "h-16": true,
      sticky: true,
      "top-0": true,
      "items-center": true,
      //   "justify-end": true,
      "justify-between": true,
      ...customNavClasses,
    });
  }, [customNavClasses]);
  return (
    <ResponsiveContainer
      customClasses={{
        sticky: true,
        "top-0": true,
        "z-20": true,
      }}
    >
      <nav className={navClasses}>
        <div className="flex items-center gap-x-10">
          <NavItem
            link={{
              href: "/",
            }}
          >
            <Image
              src={"/logo_with_text.svg"}
              alt="venuerific_logo"
              height={26}
              width={110}
            />
          </NavItem>

          <span className="hidden sm:block">
            <NavItem
              link={{
                href: "/",
              }}
            >
              <Typography variant="body2Medium">Learn</Typography>
            </NavItem>
          </span>
        </div>
        <span className="hidden sm:block">
          <ButtonWithIcon
            buttonText="Install Veneurific"
            backgroundColor={primary[200]}
            variant="contained"
            textVariant="btnSMedium"
            customStyles={{
              px: 3.5,
              py: 2.5,
              borderRadius: 3,
            }}
            display={{
              xs: "none",
              md: "block",
            }}
          />
        </span>
        <span className="block sm:hidden">
          <IconButton aria-label="menu" size="small">
            <MenuIcon
              fontSize="medium"
              sx={{
                color: "#344054",
              }}
            />
          </IconButton>
        </span>
      </nav>
    </ResponsiveContainer>
  );
};

export default Navbar;
