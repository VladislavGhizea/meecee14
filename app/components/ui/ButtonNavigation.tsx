import React from "react";

interface ButtonNavigationProps {
  children: React.ReactNode;
  category: string;
  className?: string;
}

const ButtonNavigation: React.FC<ButtonNavigationProps> = ({
  children,
  category,
  className,
}) => {
  return (
    <div>
      {children}
      <h2 className={` font-bright-melody ${className} `}>{category}</h2>
    </div>
  );
};

export default ButtonNavigation;
