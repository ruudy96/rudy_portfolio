"use client";
import React from "react";
import { cn } from "../utils/U_boxes";

export const ButtonsCard = ({
  children,
  className,
  onClick
}) => {
  return (
    (<div
      onClick={onClick}
      >
      <div className="relative -z-1">
        {children}
        </div>
    </div>)
  );
};
