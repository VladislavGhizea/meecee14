import React from "react";

interface ButtonNavigationProps {
  children: React.ReactNode;
  category: string;
  className?: string;
  isBefore?: boolean;
}

const ButtonNavigation: React.FC<ButtonNavigationProps> = ({
  children,
  category,
  className,
  isBefore,
}) => {
  return (
    <div className="flex flex-row">
      {isBefore ? children : null}
      <h2 className={`  font-bright-melody ${className} `}>{category}</h2>
      {isBefore ? null : children}
    </div>
  );
};

export default ButtonNavigation;
