import * as React from "react";
import { useInView } from "react-intersection-observer";

interface IProps {
  variant: "transparent" | "complementary" | "complementary2" | "primary" |"blue";
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
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });
  return (
    <>
      {variant === "primary" && (
        <button
          ref={ref}
          type={type}
          className={`${className} text-white font-normal py-2 px-8 bg-primary border border-primary hover:border-primary hover:bg-transparent hover:text-primary w-full sm:w-auto mx-auto sm:min-w-[220px] transition-opacity transition-transform delay-300 duration-500 ${
            inView ? "opacity-100" : "opacity-0 translate-y-12"
          }`}
          onClick={onClick}
        >
          {children}
        </button>
      )}
      {variant === "complementary" && (
        <button
          ref={ref}
          type={type}
          className={`${className} text-primary font-normal py-2 px-8 bg-complementary border border-complementary hover:border-complementary hover:bg-transparent hover:text-complementary w-full sm:w-auto mx-auto sm:min-w-[220px] transition-opacity transition-transform delay-300 duration-500 ${
            inView ? "opacity-100" : "opacity-0 translate-y-12"
          }`}
          onClick={onClick}
        >
          {children}
        </button>
      )}
      {variant === "transparent" && (
        <button
          ref={ref}
          type={type}
          className={`${className} text-complementary font-normal py-2 px-8 bg-transparent border border-complementary hover:border-complementary hover:bg-complementary hover:text-primary w-full sm:w-auto mx-auto sm:min-w-[220px] transition-opacity transition-transform delay-300 duration-500 ${
            inView ? "opacity-100" : "opacity-0 translate-y-12"
          }`}
          onClick={onClick}
        >
          {children}
        </button>
      )}
      {variant === "complementary2" && (
        <button
          ref={ref}
          type={type}
          className={`${className} text-white font-normal py-2 px-8 bg-complementary2 border border-complementary2 hover:border-complementary2 hover:bg-transparent hover:text-complementary2 w-full sm:w-auto mx-auto sm:min-w-[220px] transition-opacity transition-transform delay-300 duration-500 ${
            inView ? "opacity-100" : "opacity-0 translate-y-12"
          }`}
          onClick={onClick}
        >
          {children}
        </button>
      )}
      {variant === "blue" && (
        <button
          ref={ref}
          type={type}
          className={`${className} text-white font-normal py-2 px-8 bg-blue border border-blue hover:border-blue hover:bg-transparent hover:text-blue w-full sm:w-auto mx-auto sm:min-w-[220px] transition-opacity transition-transform delay-300 duration-500 ${
            inView ? "opacity-100" : "opacity-0 translate-y-12"
          }`}
          onClick={onClick}
        >
          {children}
        </button>
      )}
    </>
  );
};

export default Button;
