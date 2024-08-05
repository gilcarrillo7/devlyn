import * as React from "react";

interface IProps {
  variant: "transparent" | "complementary" | "complementary2" | "primary";
  className?: string;
  onClick?: () => void;
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
}

const Button = ({
  variant,
  className = "",
  onClick,
  type = "button",
  children,
}: IProps) => {
  return (
    <>
      {variant === "primary" && (
        <button
          type={type}
          className={`${className} text-white font-normal py-2 px-8 bg-primary border border-primary hover:border-primary hover:bg-transparent hover:text-primary w-full sm:w-auto mx-auto sm:min-w-[220px]`}
          onClick={onClick}
        >
          {children}
        </button>
      )}
      {variant === "complementary" && (
        <button
          type={type}
          className={`${className} text-primary font-normal py-2 px-8 bg-complementary border border-complementary hover:border-complementary hover:bg-transparent hover:text-complementary w-full sm:w-auto mx-auto sm:min-w-[220px]`}
          onClick={onClick}
        >
          {children}
        </button>
      )}
      {variant === "transparent" && (
        <button
          type={type}
          className={`${className} text-complementary font-normal py-2 px-8 bg-transparent border border-complementary hover:border-complementary hover:bg-complementary hover:text-primary w-full sm:w-auto mx-auto sm:min-w-[220px]`}
          onClick={onClick}
        >
          {children}
        </button>
      )}
      {variant === "complementary2" && (
        <button
          type={type}
          className={`${className} text-white font-normal py-2 px-8 bg-complementary2 border border-complementary2 hover:border-complementary2 hover:bg-transparent hover:text-complementary2 w-full sm:w-auto mx-auto sm:min-w-[220px]`}
          onClick={onClick}
        >
          {children}
        </button>
      )}
    </>
  );
};

export default Button;
