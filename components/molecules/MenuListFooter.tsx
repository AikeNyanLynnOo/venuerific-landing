import React, { CSSProperties } from "react";
import { IconType } from "../atoms/CustomIcon";
import { Typography } from "@mui/material";
import { subtle } from "@/lib/theme/colors";
import { LabelWithIcon } from "../atoms/LabelWithIcon";
import Link from "next/link";

export interface ListItem {
  text?: string;
  icon?: IconType;
  customIconStyles?: CSSProperties;
}

export interface MenuListFooter {
  title: string;
  listItems: ListItem[];
  customClasses?: string;
}

function MenuListFooter({ title, listItems, customClasses }: MenuListFooter) {
  return (
    <div
      className={`w-full md:w-1/5 text-center md:text-left my-5 md:my-0 ${customClasses}`}
    >
      <Typography
        variant="subheadline1MontBold"
        sx={{
          color: subtle[400],
        }}
      >
        {title}
      </Typography>
      <div className="mt-3 mb-2 flex flex-row flex-wrap gap-x-4 gap-y-4 justify-center md:block">
        {listItems.map((listItem, index) => (
          <Link href="/" key={index}>
            <LabelWithIcon
              isIconFirst
              icons={(listItem.icon && [listItem.icon]) || []}
              label={{
                text: listItem.text,
                variant: "body3MontRegular",
              }}
              customLabelSxProps={{
                color: subtle[400],
              }}
              customSxProps={{
                mb: 2,
                width: "100%",
                textAlign: {
                  xs: "center",
                  md: "left",
                },
              }}
              customIconStyles={listItem?.customIconStyles}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default MenuListFooter;
