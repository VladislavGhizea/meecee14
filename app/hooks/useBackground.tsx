"use client";
import React, { ReactNode, useEffect } from "react";
interface BackgroundDivProps {
  color: string;
  children: ReactNode;
}

const BackgroundDiv: React.FC<BackgroundDivProps> = ({ color, children }) => {
  useEffect(() => {
    document.documentElement.style.setProperty("--background", color);
  }, [color]);

  return <div>{children}</div>;
};

export default BackgroundDiv;
