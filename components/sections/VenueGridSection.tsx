import React from "react";
import { ResponsiveGridWithScroll } from "../molecules/ResponsiveGridWithScroll";
import { Grid, Typography } from "@mui/material";
import ButtonWithIcon from "../atoms/ButtonWithIcon";
import { VenueCard } from "../molecules/VenueCard";
import { neutral } from "@/lib/theme/colors";
import TitleWithSubtitle from "../molecules/TitleWithSubtitle";

const venues = [
  {
    id: 1,
    name: "Venue 1",
    address: "Address 1",
    keyword: "Party",
    super_venue: true,
    price: "$100 / hour",
    rating: 4.5,
    total_review: 24,
    image: "https://via.placeholder.com/260",
    standing_guest: 100,
    sitting_guest: 100,
  },
  {
    id: 2,
    name: "Venue 2",
    address: "Address 2",
    keyword: "Wedding",
    super_venue: false,
    price: "$150 / hour",
    rating: 4.2,
    total_review: 12,
    image: "https://via.placeholder.com/260",
    standing_guest: 150,
    sitting_guest: 120,
  },
  {
    id: 3,
    name: "Venue 3",
    address: "Address 3",
    keyword: "Conference",
    super_venue: true,
    price: "$200 / hour",
    rating: 4.8,
    total_review: 36,
    image: "https://via.placeholder.com/260",
    standing_guest: 200,
    sitting_guest: 180,
  },
  {
    id: 4,
    name: "Venue 4",
    address: "Address 4",
    keyword: "Birthday",
    super_venue: false,
    price: "$80 / hour",
    rating: 4,
    total_review: 8,
    image: "https://via.placeholder.com/260",
    standing_guest: 80,
    sitting_guest: 60,
  },
];

function VenueGridSection() {
  return (
    <div className="my-5 md:my-10 lg:my-16 xl:my-20 px-4 sm:pl-5 sm:pr-7 md:pl-7 md:pr-10 lg:pl-11 lg:pr-14 xl:pl-14 xl:pr-16">
      <TitleWithSubtitle
        title={{
          value: "Join now with other venues",
          variant: "headline3Semibold",
        }}
        subtitle={{
          value: "Join now and get a bunch of enquiry everyday",
          variant: "subheadline3Regular",
        }}
        customClasses={{
          "gap-y-3": true,
          "w-9/12": true,
          "mx-auto": true,
          "mb-8": true,
        }}
        customTitleStyles={{
          color: neutral[200],
          typography: {
            xs: "headline4Semibold",
            sm: "headline4Semibold",
            md: "headline4Semibold",
            lg: "headline3Semibold",
            xl: "headline3Semibold",
          },
          textAlign: "center",
        }}
        customSubtitleStyles={{
          color: neutral[100],
          textAlign: "center",
        }}
      />

      <ResponsiveGridWithScroll>
        {venues.map((venue, idx) => (
          <Grid
            key={idx}
            item
            xs={12}
            sm={6}
            lg={3}
            display={{
              xs: "inline-block",
              lg: "block",
            }}
            sx={{
              width: "100%",
              background: "transparent",
            }}
          >
            <VenueCard
              venue={{
                ...venue,
                image: `/assets/venue${idx + 1}.svg`,
              }}
            />
          </Grid>
        ))}
      </ResponsiveGridWithScroll>
      <div className="flex w-full justify-center my-10">
        <ButtonWithIcon
          backgroundColor={"#2560F9"}
          variant="contained"
          customStyles={{
            px: 3.5,
            py: 2.5,
            borderRadius: 2,
          }}
          icon={{
            isMaterialIcon: true,
            nameOrPath: "subdirectory_arrow_right",
          }}
          iconPosition="start"
          customIconStyles={{
            marginRight: "8px",
            fontSize : "14px"
          }}
        >
          <Typography
            variant="body3MontRegular"
            sx={{
              color: "#FFFFFF",
            }}
          >
            {" "}
            List Your Venues
          </Typography>
        </ButtonWithIcon>
      </div>
    </div>
  );
}

export default VenueGridSection;
