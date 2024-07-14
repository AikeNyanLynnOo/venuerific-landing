import clsx from "clsx";
import React, { useMemo } from "react";
import { ResponsiveContainer } from "../ResponsiveContainer";
import Image from "next/image";
import TitleWithSubtitle from "../molecules/TitleWithSubtitle";
import ButtonWithIcon from "../atoms/ButtonWithIcon";
import { neutral } from "@/lib/theme/colors";

export interface HeroSection {
  children?: React.ReactNode;
  customClasses?: object;
}

function HeroSection({ children, customClasses }: HeroSection) {
  const heroSectionClasses = useMemo(() => {
    return clsx({
      flex: true,
      "flex-col": true,
      "sm:flex-row": true,
      "gap-x-5": true,
      "items-center": true,
      "justify-between": true,
      "my-10": true,
      "h-auto": true,
      "sm:h-[60vh]": true,
      "md:h-[50vh]": true,
      "lg:h-[60vh]": true,
      "xl:h-[85vh]": true,
      "sm:px-0": true,
      relative: true,
      "overflow-hidden": true,
      ...customClasses,
    });
  }, [customClasses]);
  return (
    <ResponsiveContainer
      customClasses={{
        "sm:px-7": false,
        "md:px-16": false,
        "lg:px-20": false,
        "xl:px-24": false,
        "px-4": false,
        "px-0": true,
        "sm:pl-7": true,
        "md:pl-16": true,
        "lg:pl-20": true,
        "xl:pl-24": true,
        "my-5": true,
        "md:my-10": true,
        "lg:my-16": true,
        "xl:my-10": true,
      }}
    >
      <div className={heroSectionClasses}>
        <div className="w-full sm:w-5/12 px-5 sm:px-0 flex flex-col items-start gap-y-5">
          <TitleWithSubtitle
            title={{
              value: "Smart Ways to Manage Your Venues",
              variant: "headline1Semibold",
            }}
            subtitle={{
              value:
                "Take control for every enquiry that came to your venues on your mobile",
              variant: "subheadline2Regular",
            }}
            customClasses={{
              "gap-y-5": true,
            }}
            customTitleStyles={{
              color: neutral[200],
              typography: {
                xs: "headline3Semibold",
                sm: "headline3Semibold",
                md: "headline3Semibold",
                lg: "headline1Semibold",
                xl: "headline1Semibold",
              },
              textAlign: {
                xs: "center",
                sm: "left",
              },
            }}
            customSubtitleStyles={{
              color: neutral[100],
              textAlign: {
                xs: "center",
                sm: "left",
              },
            }}
          />
          <div className="flex gap-x-3 w-full justify-center sm:justify-start">
            <ButtonWithIcon
              backgroundColor={"#000000"}
              variant="contained"
              customStyles={{
                px: 3.5,
                py: 2.5,
                borderRadius: 2,
              }}
              icon={{
                isMaterialIcon: false,
                nameOrPath: "/assets/apple_icon.svg",
              }}
              iconPosition="start"
              customIconStyles={{
                width: "28px",
                height: "auto",
                marginRight: "8px",
              }}
            >
              <div className="flex flex-col items-start gap-y-1">
                <Image
                  src={"/assets/download_on_text.svg"}
                  alt="download_on"
                  width={87}
                  height={20}
                />
                <Image
                  src={"/assets/app_store_text.svg"}
                  alt="app_store_text"
                  width={90}
                  height={30}
                />
              </div>
            </ButtonWithIcon>
            <ButtonWithIcon
              backgroundColor={"#000000"}
              variant="contained"
              customStyles={{
                px: 3.5,
                py: 2.5,
                borderRadius: 2,
              }}
              icon={{
                isMaterialIcon: false,
                nameOrPath: "/assets/google_play_icon.svg",
              }}
              iconPosition="start"
              customIconStyles={{
                width: "28px",
                height: "auto",
                marginRight: "8px",
              }}
            >
              <div className="flex flex-col items-start gap-y-1">
                <Image
                  src={"/assets/get_it_on_text.svg"}
                  alt="get_it_on"
                  width={60}
                  height={20}
                />
                <Image
                  src={"/assets/google_play_text.svg"}
                  alt="google_play_text"
                  width={95}
                  height={30}
                />
              </div>
            </ButtonWithIcon>
          </div>
        </div>

        <Image
          src="/assets/content.svg"
          alt="hero_section_user_img"
          width={500}
          height={400}
          className="object-contain static hidden sm:block sm:absolute -right-3 bottom-0 sm:translate-y-16 lg:translate-y-20 h-fit w-1/2 rounded-lg"
        />
        <span className="bg-primary-50 absolute block border w-full sm:hidden bottom-0 translate-y-4 h-[50%] rounded-2xl"></span>
        <Image
          src="/assets/landing_mockup.png"
          alt="iphone_mockup"
          width={500}
          height={400}
          className="object-contain block sm:hidden bottom-0 translate-y-20 w-5/6 h-fit"
        />
      </div>
    </ResponsiveContainer>
  );
}

export default HeroSection;
