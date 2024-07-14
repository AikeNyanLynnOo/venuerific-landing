import React from "react";
import { IconType } from "../atoms/CustomIcon";
import { Typography } from "@mui/material";
import { subtle } from "@/lib/theme/colors";
import { LabelWithIcon } from "../atoms/LabelWithIcon";
import Link from "next/link";

export interface ListItem {
  text?: string;
  icon?: IconType;
}

export interface MenuListFooter {
  title: string;
  listItems: ListItem[];
  customClasses?: string;
}

function MenuListFooter({ title, listItems, customClasses }: MenuListFooter) {
  return (
    <div
      className={`w-full md:w-1/4 text-center md:text-left my-8 md:my-0 ${customClasses}`}
    >
      <Typography
        variant="subheadline1MontBold"
        sx={{
          color: subtle[400],
        }}
      >
        {title}
      </Typography>
      <div className="my-2 flex flex-row flex-wrap gap-x-4 justify-center md:block">
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
            />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default MenuListFooter;
