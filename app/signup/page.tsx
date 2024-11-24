"use client";
import BackgroundDiv from "../components/buttons/rootBackground";
import {
  NavigationButtons,
  ProgressBar,
  Logo,
  InputFields,
} from "../components/signup";
export default function Page() {
  return (
    <BackgroundDiv color="#F6EEE1">
      <Logo />
      <ProgressBar />
      <InputFields />
      <NavigationButtons />
    </BackgroundDiv>
  );
}
