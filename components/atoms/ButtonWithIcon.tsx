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

export interface ButtonWithIcon {
  icon?: string;
  iconPosition?: string;
  handleClick?: () => void;
  buttonText: string;
  backgroundColor?: string;
  variant?: ButtonProps["variant"];
  textVariant?: TypographyProps["variant"];
  customStyles?: SxProps;
  customIconStyles?: CSSProperties;
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
        ...customStyles,
      }}
    >
      {iconPosition === "start" && (
        <Icon
          style={{
            marginRight: "4px",
            ...customIconStyles,
          }}
        >
          {icon}
        </Icon>
      )}
      <Typography variant={textVariant}>{buttonText}</Typography>
      {iconPosition === "end" && (
        <Icon
          style={{
            marginLeft: "4px",
            ...customIconStyles,
          }}
        >
          {icon}
        </Icon>
      )}
    </Button>
  );
}
