import { clsx } from "clsx";
import React, { useMemo } from "react";

export interface ResponsiveContainer {
  children: React.ReactNode;
  customClasses?: object;
  scrollRef?: any;
}

export const ResponsiveContainer = ({
  children,
  customClasses,
  scrollRef,
}: ResponsiveContainer) => {
  const containerCLasses = useMemo(() => {
    return clsx({
      relative: true,
      "text-neutral-100": true,
      "bg-white": true,
      "px-4": true,
      "sm:px-7": true,
      "md:px-16": true,
      "lg:px-20": true,
      "xl:px-24": true,
      ...customClasses,
    });
  }, [customClasses]);
  return <div className={containerCLasses}>{children}</div>;
};