import { SxProps, Typography, TypographyProps } from "@mui/material";
import clsx from "clsx";
import React, { useMemo } from "react";

export interface Text {
  value: string;
  variant?: TypographyProps["variant"];
}

export interface TitleWithSubtitle {
  children?: React.ReactNode;
  title?: Text;
  subtitle?: Text;
  customTitleStyles: SxProps;
  customSubtitleStyles: SxProps;
  customClasses?: object;
}

function TitleWithSubtitle({
  children,
  title,
  subtitle,
  customTitleStyles,
  customSubtitleStyles,
  customClasses,
}: TitleWithSubtitle) {
  const titleWithSubtitleClasses = useMemo(() => {
    return clsx({
      flex: true,
      "flex-col": true,
      "items-start": true,
      "justify-between": true,
      ...customClasses,
    });
  }, [customClasses]);

  return (
    <div className={titleWithSubtitleClasses}>
      {title && (
        <Typography
          variant={title.variant || "headline1Regular"}
          sx={{
            width: "100%",
            ...customTitleStyles,
          }}
        >
          {title.value}
        </Typography>
      )}
      {subtitle && (
        <Typography
          variant={subtitle.variant || "subheadline1InterRegular"}
          sx={{
            width: "100%",
            ...customSubtitleStyles,
          }}
        >
          {subtitle.value}
        </Typography>
      )}
    </div>
  );
}

export default TitleWithSubtitle;
