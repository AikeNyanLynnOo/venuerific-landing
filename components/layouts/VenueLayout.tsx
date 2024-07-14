import React, { useCallback, useMemo } from "react";
import Grid from "@mui/material/Grid";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Box, SxProps, useTheme } from "@mui/material";

import { calculateSpacing } from "@/lib/helpers/calculateUIFunctions";

export interface VenueLayout {
  children?: React.ReactNode;
  customSxProps?: SxProps;
  customGridItemSxProps?: SxProps;
  columnSpacing?: number;
  toAddWidth?: number;
  [key: string]: any;
}

export const VenueLayout = ({
  children,
  customSxProps,
  customGridItemSxProps,
  columnSpacing,
  toAddWidth,
  ...props
}: VenueLayout) => {
  const theme = useTheme();
  const xl = useMediaQuery(theme.breakpoints.up("xl"));
  const lg = useMediaQuery(theme.breakpoints.up("lg"));
  const md = useMediaQuery(theme.breakpoints.up("md"));
  const sm = useMediaQuery(theme.breakpoints.up("sm"));

  const calSpacing = useCallback(calculateSpacing, [xl, lg, md, sm]);

  return (
    <Grid
      container
      columnSpacing={
        columnSpacing === undefined
          ? calSpacing(xl, lg, md, sm, 5)
          : columnSpacing
      }
      rowSpacing={5}
      sx={{
        width: "100%",
        margin: "0 auto",
        ...customSxProps,
      }}
      {...props}
    >
      {/* Grid content goes here */}
      {children}
    </Grid>
  );
};
