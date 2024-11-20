import React from "react";

interface ButtonNavigationProps {
  children: React.ReactNode;
  category: string;
  classNameText?: string;
  isBefore: boolean;
  classNameContainer?: string;
}
const getMargin = (isBefore: boolean) => {
  return isBefore ? "ml-5" : "mr-5";
}
const ButtonNavigation: React.FC<ButtonNavigationProps> = ({
  children,
  category,
  classNameText,
  isBefore,
  classNameContainer ,
}) => {
  return (
    <div className={`flex flex-row items-center ${classNameContainer}`}>
      {isBefore ? children : null}
      <h2 className={` text-lg font-bright-melody ${classNameText} ${getMargin(isBefore)}`}>{category}</h2>
      {isBefore ? null : children}
    </div>
  );
};

export default ButtonNavigation;
