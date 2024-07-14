import { Icon } from "@mui/material";
import Image from "next/image";
import React, { CSSProperties } from "react";

export interface IconType {
  isMaterialIcon: boolean;
  nameOrPath: string;
}

export interface CustomIcon {
  icon: IconType;
  children?: React.ReactNode;
  customStyles?: CSSProperties;
}

function CustomIcon({ icon, children, customStyles }: CustomIcon) {
  return (
    <React.Fragment>
      {(icon && icon.isMaterialIcon && (
        <Icon
          style={{
            ...customStyles,
          }}
        >
          {(icon && icon.nameOrPath) || "closed_caption"}
        </Icon>
      )) || (
        <Image
          src={icon && icon.nameOrPath}
          alt="icon"
          style={{
            height: "15px",
            width: "15px",
            objectFit: "cover",
            ...customStyles,
          }}
          width={50}
          height={50}
        />
      )}
    </React.Fragment>
  );
}

export default CustomIcon;
