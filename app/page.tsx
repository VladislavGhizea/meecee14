"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useStoreSignup } from "./store";
import BackgroundDiv from "./components/buttons/rootBackground";
import { Header, ButtonsContainer, Footer, MenuIcon } from "./components/index";

export default function Page() {
  const resetStore = useStoreSignup((state) => state.reset);

  useEffect(() => {
    resetStore();
  }, [resetStore]);

  const router = useRouter();
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const handleRegisterClick = () => {
    router.push("/signup");
  };

  const handleLoginClick = () => {
    setIsLoginOpen(!isLoginOpen);
  };

  return (
    <BackgroundDiv color="#334B35">
      <MenuIcon />
      <Header />
      <ButtonsContainer
        isLoginOpen={isLoginOpen}
        handleLoginClick={handleLoginClick}
        handleRegisterClick={handleRegisterClick}
      />
      <Footer />
    </BackgroundDiv>
  );
}
