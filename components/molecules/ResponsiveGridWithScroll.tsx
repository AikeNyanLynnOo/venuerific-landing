"use client";

import { SxProps, useMediaQuery, useTheme } from "@mui/material";
import { useCallback } from "react";
import { VenueLayout } from "../layouts/VenueLayout";
import { calculateSpacing } from "@/lib/helpers/calculateUIFunctions";

export interface ResponsiveGirdWithScroll {
  children?: React.ReactNode;
  customSxProps?: SxProps;
}

export const ResponsiveGridWithScroll = ({
  children,
  customSxProps,
}: ResponsiveGirdWithScroll) => {
  const theme = useTheme();
  const xl = useMediaQuery(theme.breakpoints.up("xl"));
  const lg = useMediaQuery(theme.breakpoints.up("lg"));
  const md = useMediaQuery(theme.breakpoints.up("md"));
  const sm = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <VenueLayout
      customSxProps={{
        justifyContent: "center",
        display: {
          xs: "block",
          lg: "flex",
        },
        flexWrap: {
          xs: "nowrap",
          lg: "wrap",
        },
        ...customSxProps,
      }}
    >
      {children}
    </VenueLayout>
  );
};
