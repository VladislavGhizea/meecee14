import React from "react";

interface ButtonNavigationProps {
  children: React.ReactNode;
  category: string;
  classNameText?: string;
  isTextAfter?: boolean;
  classNameContainer?: string;
  onClick?: () => void;
}
const getMargin = (isBefore: boolean) => {
  return isBefore ? "ml-5" : "mr-5";
};
const ButtonNavigation: React.FC<ButtonNavigationProps> = ({
  children,
  category,
  classNameText,
  isTextAfter,
  classNameContainer,
  onClick,
}) => {
  isTextAfter = isTextAfter || false;
  return (
    <div
      onClick={onClick}
      className={`flex flex-row items-center ${classNameContainer}`}
    >
      {isTextAfter ? children : null}
      <h2
        className={` text-lg font-bright-melody ${classNameText} ${getMargin(
          isTextAfter
        )}`}
      >
        {category}
      </h2>
      {isTextAfter ? null : children}
    </div>
  );
};

export default ButtonNavigation;
