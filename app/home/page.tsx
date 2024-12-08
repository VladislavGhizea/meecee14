"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useStoreSignup } from "@/app/store";
import { Card, ButtonsAction } from "../components/home";
import { Header, Navbar } from "../components/common";

export default function Page() {
  const resetStore = useStoreSignup((state) => state.reset);

  useEffect(() => {
    resetStore();
  }, [resetStore]);

  const router = useRouter();
  const [isDescriptionOpen, setIsDescriptionOpen] = useState(false);

  const handleNavigation = (category: string) => {
    if (category === "home") {
      router.push("/home");
    } else if (category === "match") {
      router.push("/match");
    }
  };

  const handleDescription = () => {
    setIsDescriptionOpen(!isDescriptionOpen);
  };

  return (
    <div>
      <Header router={router} />
      <Card
        isDescriptionOpen={isDescriptionOpen}
        handleDescription={handleDescription}
      />
      <div className=" mb-2" />
      <ButtonsAction />
      <div className=" fixed bottom-0 left-0 right-0 ">
        <Navbar page="home" handleNavigation={handleNavigation} />
      </div>
    </div>
  );
}
