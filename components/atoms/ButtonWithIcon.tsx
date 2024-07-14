import {
  Button,
  ButtonProps,
  ButtonPropsVariantOverrides,
  Icon,
  SxProps,
  Typography,
  TypographyProps,
} from "@mui/material";
import { CSSProperties } from "react";
import CustomIcon, { IconType } from "./CustomIcon";

export interface ButtonWithIcon {
  icon?: IconType;
  iconPosition?: string;
  handleClick?: () => void;
  buttonText?: string;
  backgroundColor?: string;
  variant?: ButtonProps["variant"];
  textVariant?: TypographyProps["variant"];
  customStyles?: SxProps;
  customIconStyles?: CSSProperties;
  children?: React.ReactNode;
  [key: string]: any;
}

export default function ButtonWithIcon({
  icon,
  iconPosition,
  handleClick,
  buttonText,
  backgroundColor,
  variant,
  textVariant = "btnXsRegular",
  customStyles,
  customIconStyles,
  children,
  ...props
}: ButtonWithIcon) {
  return (
    <Button
      onClick={handleClick}
      variant={variant || "contained"}
      sx={{
        backgroundColor,
        display: "flex",
        px: 0,
        alignItems: "center",
        "&:hover": {
          backgroundColor,
          opacity: "90%",
        },
        ...customStyles,
      }}
    >
      {icon && iconPosition === "start" && (
        // <Icon
        //   style={{
        //     marginRight: "4px",
        //     ...customIconStyles,
        //   }}
        // >
        //   {icon}
        // </Icon>
        <CustomIcon
          icon={icon}
          customStyles={{
            marginRight: "4px",
            ...customIconStyles,
          }}
        />
      )}
      {buttonText && (
        <Typography variant={textVariant}>{buttonText}</Typography>
      )}
      {children}
      {icon && iconPosition === "end" && (
        // <Icon
        //   style={{
        //     marginLeft: "4px",
        //     ...customIconStyles,
        //   }}
        // >
        //   {icon}
        // </Icon>
        <CustomIcon
          icon={icon}
          customStyles={{
            marginRight: "4px",
            ...customIconStyles,
          }}
        />
      )}
    </Button>
  );
}
