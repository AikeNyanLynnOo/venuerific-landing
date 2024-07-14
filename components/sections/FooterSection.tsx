import React from "react";
import { ResponsiveContainer } from "../ResponsiveContainer";
import Image from "next/image";
import { Typography, Icon } from "@mui/material";
import MenuListFooter from "../molecules/MenuListFooter";
import { subtle } from "@/lib/theme/colors";
import Link from "next/link";

function FooterSection() {
  return (
    <ResponsiveContainer
      customClasses={{
        "my-5": true,
        "md:my-10": true,
        "lg:my-16": true,
        "xl:my-20": true,
      }}
    >
      <div className="flex flex-col md:flex-row gap-x-4 justify-between">
        <div className="flex flex-col items-center gap-y-8 md:gap-y-5 w-full md:w-1/4">
          <Image
            src="/logo_with_text.svg"
            alt="venuerific_new_logo"
            width={150}
            height={35}
          />
          <Typography
            variant="body3MontMedium"
            sx={{
              color: subtle[400],
              textAlign: "justify",
              display: {
                xs: "none",
                md: "block",
              },
            }}
          >
            Since 2013, Venuerific has been helping people celebrate their
            personal and business events by connecting them to unique event
            venues in Singapore, Malaysia, Hong Kong, Philippines, and
            Indonesia.
          </Typography>

          <div className="block md:hidden w-full text-center">
            <Typography
              variant="subheadline3MontSemibold"
              sx={{
                color: "#000000",
              }}
            >
              Payment partners
            </Typography>
            <div className="flex items-center justify-between flex-wrap my-7">
              <Image src="/assets/visa.svg" alt="visa" height={20} width={60} />
              <Image
                src="/assets/master.svg"
                alt="master"
                height={20}
                width={60}
              />
              <Image
                src="/assets/paynow.svg"
                alt="paynow"
                height={20}
                width={60}
              />
              <Image
                src="/assets/duitnow.svg"
                alt="duitnow"
                height={20}
                width={60}
              />
            </div>
          </div>

          <div className="hidden md:flex items-center gap-x-1">
            <Link
              href="/"
              className="rounded-full bg-subtle-200 h-8 w-8 flex items-center justify-center"
            >
              <Image
                src="/assets/envelope_icon.svg"
                alt="envelope_icon"
                width={18}
                height={18}
              />
            </Link>
            <Link
              href="/"
              className="rounded-full bg-subtle-200 h-8 w-8 flex items-center justify-center"
            >
              <Image
                src="/assets/facebook_icon.svg"
                alt="facebook_icon"
                width={10}
                height={10}
              />
            </Link>
            <Link
              href="/"
              className="rounded-full bg-subtle-200 h-8 w-8 flex items-center justify-center"
            >
              <Image
                src="/assets/instagram_icon.svg"
                alt="instagram_icon"
                width={18}
                height={18}
              />
            </Link>
            <Link
              href="/"
              className="rounded-full bg-subtle-200 h-8 w-8 flex items-center justify-center"
            >
              <Image
                src="/assets/youtube_icon.svg"
                alt="youtube_icon"
                width={18}
                height={18}
              />
            </Link>
            <Link
              href="/"
              className="rounded-full bg-subtle-200 h-8 w-8 flex items-center justify-center"
            >
              <Image
                src="/assets/pinterest_icon.svg"
                alt="pinterest_icon"
                width={15}
                height={15}
              />
            </Link>
            <Link
              href="/"
              className="rounded-full bg-subtle-200 h-8 w-8 flex items-center justify-center"
            >
              <Image
                src="/assets/linkedin_icon.svg"
                alt="linkedin_icon"
                width={15}
                height={15}
              />
            </Link>
            <Link
              href="/"
              className="rounded-full bg-subtle-200 h-8 w-8 flex items-center justify-center"
            >
              <Image
                src="/assets/blog_icon.svg"
                alt="blog_icon"
                width={18}
                height={18}
              />
            </Link>
          </div>
        </div>
        <MenuListFooter
          title="Menu"
          listItems={[
            {
              text: "Blog",
            },
            {
              text: "Videos",
            },
            {
              text: "Event",
            },
            {
              text: "Press",
            },
            {
              text: "Partners",
            },
          ]}
        />
        <MenuListFooter
          title="Menu"
          listItems={[
            {
              text: "Blog",
            },
            {
              text: "Videos",
            },
            {
              text: "Event",
            },
            {
              text: "Press",
            },
            {
              text: "Partners",
            },
          ]}
        />
        <MenuListFooter
          title="Menu"
          listItems={[
            {
              text: "Blog",
            },
            {
              text: "Videos",
            },
            {
              text: "Event",
            },
            {
              text: "Press",
            },
            {
              text: "Partners",
            },
          ]}
        />
        <MenuListFooter
          customClasses="block md:hidden"
          title="Follow us"
          listItems={[
            {
              icon: {
                isMaterialIcon: false,
                nameOrPath: "/assets/youtube_blue.svg",
              },
            },
            {
              icon: {
                isMaterialIcon: false,
                nameOrPath: "/assets/facebook_blue.svg",
              },
            },
            {
              icon: {
                isMaterialIcon: false,
                nameOrPath: "/assets/mail_blue.svg",
              },
            },
            {
              icon: {
                isMaterialIcon: false,
                nameOrPath: "/assets/linkedin_blue.svg",
              },
            },
            {
              icon: {
                isMaterialIcon: false,
                nameOrPath: "/assets/instagram_blue.svg",
              },
            },
          ]}
        />
      </div>
    </ResponsiveContainer>
  );
}

export default FooterSection;