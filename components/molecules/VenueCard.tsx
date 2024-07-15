"use client";

import { calculateSpacing } from "@/lib/helpers/calculateUIFunctions";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Divider,
  Icon,
  SxProps,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useCallback } from "react";
import { LabelWithIcon } from "../atoms/LabelWithIcon";
import { neutral, primary, subtle } from "@/lib/theme/colors";
import Image from "next/image";

export interface Venue {
  id: string | number;
  name: string;
  address?: string;
  keyword?: string;
  super_venue?: boolean;
  price?: string;
  rating?: string | number;
  total_review?: string | number;
  image?: string;
  standing_guest?: string | number;
  sitting_guest?: string | number;
  is_first_response?: boolean;
}
export interface VenueCard {
  venue: Venue;
  children?: React.ReactNode;
  customCardSxProps?: SxProps;
  customCardMediaSxProps?: SxProps;
  customContentSxProps?: SxProps;
}

export const VenueCard = ({
  venue,
  children,
  customCardSxProps,
  customCardMediaSxProps,
  customContentSxProps,
}: VenueCard) => {
  const theme = useTheme();
  const xl = useMediaQuery(theme.breakpoints.up("xl"));
  const lg = useMediaQuery(theme.breakpoints.up("lg"));
  const md = useMediaQuery(theme.breakpoints.up("md"));
  const sm = useMediaQuery(theme.breakpoints.up("sm"));

  const getSpacing = useCallback(calculateSpacing, [xl, lg, md, sm]);

  return (
    <Card
      sx={{
        borderRadius: 4,
        border: `1px solid ${subtle[100]}`,
        boxShadow: "0px 1px 40px 0px rgba(0, 0, 0, 0.06)",
        cursor: "pointer",
        "&.MuiCard-root": {
          overflow: "visible",
        },
        ...customCardSxProps,
      }}
    >
      <CardMedia
        sx={{
          height: 200,
          width: "100%",
          position: "relative",
          objectFit: "cover",
          borderRadius: 4,
          ...customCardMediaSxProps,
        }}
        image={venue.image}
        title="venue asset"
      >
        {venue.super_venue && (
          <Image
            src="/assets/badge.svg"
            alt="super_badge"
            width={125}
            height={37}
            className="absolute top-0 -translate-y-1 left-0 -translate-x-1"
          />
        )}
        <div className="flex flex-row justify-between w-full items-center absolute bottom-0 px-5 py-3">
          <div className="flex items-center gap-x-3">
            <LabelWithIcon
              isIconFirst
              icons={[
                {
                  isMaterialIcon: true,
                  nameOrPath: "people_alt",
                },
              ]}
              label={{
                text: venue.standing_guest,
              }}
              customIconStyles={{
                color: "#FFFFFF",
              }}
            />
            <LabelWithIcon
              isIconFirst
              icons={[
                {
                  isMaterialIcon: true,
                  nameOrPath: "chair_alt",
                },
              ]}
              label={{
                text: venue.sitting_guest,
              }}
              customIconStyles={{
                color: "#FFFFFF",
              }}
            />
          </div>
          <LabelWithIcon
            isIconFirst
            icons={[
              {
                isMaterialIcon: false,
                nameOrPath: "/assets/star_icon.svg",
              },
            ]}
            label={{
              text: `${venue.rating} (${venue.total_review})`,
            }}
          />
        </div>
      </CardMedia>
      <CardContent
        sx={{
          p: 4,
          overflow: "hidden",
          textOverflow: "ellipsis",
          ...customContentSxProps,
        }}
      >
        <LabelWithIcon
          isIconFirst={false}
          icons={[
            {
              isMaterialIcon: false,
              nameOrPath: "/assets/building_icon.svg",
            },
          ]}
          customLabel={
            <Typography
              variant="subheadline3MontSemibold"
              sx={{
                color: neutral[300],
                textAlign: "left",
                width: "100%",
                maxWidth: "100%",
              }}
            >
              {venue.name}
            </Typography>
          }
        />

        <LabelWithIcon
          label={{
            text: venue.keyword,
            variant: "body3MontMedium",
            color: neutral[300],
          }}
          customLabelSxProps={{
            mt: 1,
          }}
        />

        <LabelWithIcon
          isIconFirst={true}
          icons={[
            {
              isMaterialIcon: false,
              nameOrPath: "/assets/location_icon.svg",
            },
          ]}
          label={{
            text: venue.address,
            variant: "body3MontMedium",
            color: subtle[300],
          }}
          customSxProps={{
            mt: 2,
          }}
          customIconStyles={{
            height: "14px",
            width: "14px",
          }}
        />
        <Divider
          sx={{
            height: "1px",
            my: 5,
          }}
        />
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div className="flex items-baseline gap-x-3">
            <Typography
              variant="body4MontMedium"
              sx={{
                color: neutral[300],
              }}
            >
              Starts from
            </Typography>
            <Typography
              variant="body3MontSemibold"
              sx={{
                color: neutral[300],
              }}
            >
              {venue.price}
            </Typography>
          </div>
          {venue.is_first_response && (
            <LabelWithIcon
              isIconFirst={true}
              icons={[
                {
                  isMaterialIcon: false,
                  nameOrPath: "/assets/clock_icon.svg",
                },
              ]}
              label={{
                text: "First Response",
                variant: "body4MontBold",
                color: primary[100],
              }}
            />
          )}
        </Box>
        {children}
      </CardContent>
    </Card>
  );
};
