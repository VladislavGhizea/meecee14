import React from "react";

interface ButtonActionProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const ButtonAction: React.FC<ButtonActionProps> = ({
  children,
  className,
  onClick,
}) => {
  return (
    <div
      className={` rounded-full shadow-inner flex justify-center content-center border-verde ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default ButtonAction;
