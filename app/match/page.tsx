"use client";
import React from "react";
import { Header, Navbar } from "../components/common";
import { useRouter } from "next/navigation";
export default function Page() {
  const router = useRouter();
  const handleNavigation = (category: string) => {
    if (category === "home") {
      router.push("/home");
    } else if (category === "match") {
      router.push("/match");
    }
  };
  return (
    <div>
      <Header router={router} />
      <div className=" fixed bottom-0 left-0 right-0 ">
        <Navbar page="match" handleNavigation={handleNavigation} />
      </div>
    </div>
  );
}
