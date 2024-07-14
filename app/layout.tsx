"use client";
import "./globals.css";
import { typoSystem } from "@/lib/theme/typoSystem";
import {
  createTheme,
  CssBaseline,
  StyledEngineProvider,
  ThemeProvider,
} from "@mui/material";
import { useMemo } from "react";
import { subtle } from "@/lib/theme/colors";
import { StoreProvider } from "@/components/StoreProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const theme = useMemo(
    () =>
      createTheme({
        breakpoints: {
          values: {
            xs: 0,
            sm: 640,
            md: 768,
            lg: 1024,
            xl: 1280,
          },
        },
        spacing: (factor: number) => `${0.25 * factor}rem`, // (Bootstrap strategy)
        components: {
          MuiDivider: {
            styleOverrides: {
              root: {
                color: subtle[100],
              },
            },
          },
          MuiIcon: {
            styleOverrides: {
              root: {
                fontSize: 16,
              },
            },
          },
        },
        shape: {
          borderRadius: 4,
        },
        typography: {
          ...typoSystem,
          button: {
            textTransform: "capitalize",
          },
        },
      }),
    []
  );

  return (
    <html lang="en">
      <head>
        <title>Venuerific</title>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
      </head>
      <body>
        <StoreProvider>
          <StyledEngineProvider injectFirst>
            <ThemeProvider theme={theme}>
              <CssBaseline />
              {children}
            </ThemeProvider>
          </StyledEngineProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
