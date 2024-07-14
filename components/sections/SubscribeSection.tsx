"use client";
import React, { useState } from "react";
import TitleWithSubtitle from "../molecules/TitleWithSubtitle";
import { subtle } from "@/lib/theme/colors";
import { EmailInput } from "../molecules/EmailInput";
import { ResponsiveContainer } from "../ResponsiveContainer";
import { Divider } from "@mui/material";

function SubscribeSection() {
  const [inputValue, setInputValue] = useState("");
  const textChange = (newValue: string) => {
    setInputValue(newValue);
  };
  return (
    <ResponsiveContainer
      customClasses={{
        "my-5": true,
        "md:my-10": true,
        "lg:my-16": true,
        "xl:my-20": true,
      }}
    >
      <Divider />
      <div className="flex w-full flex-col md:flex-row gap-y-5 justify-between items-center my-10">
        <TitleWithSubtitle
          title={{
            value: "Subscribe to our newsletter",
            variant: "subheadline1MontBold",
          }}
          subtitle={{
            value: "and get exclusive discounts!",
            variant: "subheadline3MontRegular",
          }}
          customClasses={{
            "gap-y-2": true,
            "md:w-7/12": true,
          }}
          customTitleStyles={{
            color: subtle[400],
            textAlign: {
              xs: "center",
              md: "left",
            },
          }}
          customSubtitleStyles={{
            color: subtle[400],
            textAlign: {
              xs: "center",
              md: "left",
            },
          }}
        />
        <EmailInput
          handleSubscribe={() => {}}
          placeholder="Enter your email"
          inputValue={inputValue}
          textChange={textChange}
        />
      </div>
      <Divider />
    </ResponsiveContainer>
  );
}

export default SubscribeSection;
