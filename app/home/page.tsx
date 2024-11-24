"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useStoreSignup } from "../store";
import { Header, Card, ButtonsAction, Navbar } from "../components/home";

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
      <ButtonsAction />
      <Navbar handleNavigation={handleNavigation} />
    </div>
  );
}
