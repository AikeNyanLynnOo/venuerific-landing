import { Box, SxProps, Typography, TypographyProps } from "@mui/material";
import { Icon } from "@mui/material";
import Image from "next/image";
import React, { CSSProperties } from "react";
import { IconType } from "./CustomIcon";

export interface Label {
  variant?: TypographyProps["variant"];
  color?: string;
  handleClick?: () => void;
  text?: string | number;
}

export interface LabelWithIcon {
  isIconFirst?: boolean;
  icons?: IconType[];
  label?: Label;
  customIconStyles?: CSSProperties;
  customLabelSxProps?: SxProps;
  customLabel?: React.ReactNode;
  customSxProps?: SxProps;
  [key: string]: any;
}

export const LabelWithIcon = ({
  isIconFirst,
  icons,
  label,
  customIconStyles,
  customLabelSxProps,
  customLabel,
  customSxProps,
  ...props
}: LabelWithIcon) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: "8px",
        ...customSxProps,
      }}
      {...props}
    >
      {isIconFirst &&
        icons &&
        icons.length > 0 &&
        icons.map((icon, index) => (
          <React.Fragment key={index}>
            {(icon && icon.isMaterialIcon && (
              <Icon
                style={{
                  fontSize: "16px",
                  ...customIconStyles,
                }}
              >
                {(icon && icon.nameOrPath) || "abc"}
              </Icon>
            )) || (
              <Image
                src={icon && icon.nameOrPath}
                alt="icon"
                style={{
                  height: "15px",
                  width: "15px",
                  objectFit: "cover",
                  ...customIconStyles,
                }}
                width={50}
                height={50}
              />
            )}
          </React.Fragment>
        ))}

      {customLabel || (
        <Typography
          variant={(label && label.variant) || "body3MontRegular"}
          sx={{
            color: (label && label.color) || "#FFFFFF",
            "&:hover": {
              textDecoration: label && label.handleClick ? "underline" : "",
            },
            cursor: label && label.handleClick ? "pointer" : "",
            ...customLabelSxProps,
          }}
        >
          {(label && label.text) || ""}
        </Typography>
      )}

      {!isIconFirst &&
        icons &&
        icons.length > 0 &&
        icons.map((icon, index) => (
          <React.Fragment key={index}>
            {(icon && icon.isMaterialIcon && (
              <Icon
                style={{
                  ...customIconStyles,
                }}
              >
                {(icon && icon.nameOrPath) || "abc"}
              </Icon>
            )) || (
              <Image
                src={icon && icon.nameOrPath}
                alt="icon"
                style={{
                  ...customIconStyles,
                }}
                width={15}
                height={15}
              />
            )}
          </React.Fragment>
        ))}
    </Box>
  );
};
