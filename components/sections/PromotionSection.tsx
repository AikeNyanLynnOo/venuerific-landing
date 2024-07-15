import clsx from "clsx";
import React, { useMemo } from "react";
import { ResponsiveContainer } from "../ResponsiveContainer";
import Image from "next/image";
import TitleWithSubtitle from "../molecules/TitleWithSubtitle";
import { neutral } from "@/lib/theme/colors";

export interface PromotionSection {
  children?: React.ReactNode;
  customClasses?: object;
}

function PromotionSection({ children, customClasses }: PromotionSection) {
  const promotionSectionClasses = useMemo(() => {
    return clsx({
      flex: true,
      "flex-col": true,
      "md:flex-row": true,
      "md:items-stretch": true,
      "gap-x-7": true,
      "gap-y-7": true,
      "items-center": true,
      "justify-between": true,
      "my-10": true,
      "h-auto": true,
      ...customClasses,
    });
  }, [customClasses]);
  return (
    <ResponsiveContainer
      customClasses={{
        "my-5": true,
        "md:my-10": true,
        "lg:my-16": true,
        "xl:my-20": true,
      }}
    >
      <TitleWithSubtitle
        title={{
          value: "Venue management never been easy",
          variant: "headline3Semibold",
        }}
        subtitle={{
          value: "Manage your venue with ease",
          variant: "subheadline3Regular",
        }}
        customClasses={{
          "gap-y-3": true,
          "w-9/12": true,
          "mx-auto": true,
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
      <div className={promotionSectionClasses}>
        <div className="w-full md:w-2/3 p-10 relative lg:min-h-[200px] xl:min-h-[400px] flex flex-col md:flex-row items-start justify-between overflow-y-hidden bg-primary-50 rounded-xl">
          <TitleWithSubtitle
            title={{
              value: "Manage your venue anywhere",
              variant: "headline3Semibold",
            }}
            subtitle={{
              value:
                "You can view your venue anywhere anytime from your mobile",
              variant: "subheadline3Regular",
            }}
            customClasses={{
              "gap-y-5": true,
              "md:w-2/5": true,
              "w-full" : true
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
              textAlign: {
                xs: "center",
                md: "left",
              },
            }}
            customSubtitleStyles={{
              color: neutral[100],
              textAlign: {
                xs: "center",
                md: "left",
              },
            }}
          />
          <Image
            src="/assets/iphone_mockup_hero.svg"
            alt="iphone_mockup"
            width={500}
            height={400}
            className="object-contain w-full mt-10 md:mt-0 md:w-2/6 xl:w-3/12 h-fit static -mb-10 md:-mb-0 md:absolute md:right-16 bottom-0"
          />
        </div>
        <div className="w-full md:w-1/3 p-10 lg:min-h-[200px] xl:min-h-[400px] bg-subtle-500 rounded-xl flex flex-col items-center md:items-start">
          <span className="bg-subtle-200 bg-opacity-90 mb-7 rounded-full h-20 w-20 flex items-center justify-center">
            <Image
              src="/assets/shield_icon.svg"
              alt="shield_icon"
              width={30}
              height={30}
              className=""
            />
          </span>
          <TitleWithSubtitle
            title={{
              value: "Easy to access",
              variant: "headline3Semibold",
            }}
            subtitle={{
              value:
                "You can access your enquiry list and respond to it from your mobile",
              variant: "subheadline3Regular",
            }}
            customClasses={{
              "gap-y-5": true,
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
              textAlign: {
                xs: "center",
                md: "left",
              },
            }}
            customSubtitleStyles={{
              color: neutral[100],
              textAlign: {
                xs: "center",
                md: "left",
              },
            }}
          />
        </div>
      </div>
    </ResponsiveContainer>
  );
}

export default PromotionSection;
