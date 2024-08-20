import * as React from "react";
import { navigate } from "gatsby";
import { setMenuOpen } from "../../features/ui/uiSlice";
import { useAppDispatch } from "../../hooks";
import Social from "./Social";

const Option = ({ text, url }: { text: string; url: string }) => {
  const dispatch = useAppDispatch();

  const handleNav = (url: string) => {
    dispatch(setMenuOpen(false));
    navigate(url);
  };

  return (
    <a
      role="button"
      tabIndex={0}
      className="flex cursor-pointer hover:font-normal text-primary"
      onClick={() => handleNav(url)}
    >
      {text}
    </a>
  );
};

const Menu = () => {
  return (
    <div className="w-screen h-screen bg-secondary-gradient text-white fixed left-0 top-0 z-40 flex items-center text-white font-light">
      <div className="container px-4 sm:px-10 sm:py-4 flex flex-col w-full sm:w-[450px]">
        <div className="flex flex-col text-3xl sm:text-5xl font-thin w-full gap-6 sm:gap-8 pt-6 sm:pt-0">
          <Option text="Quiénes somos" url="/quienes_somos" />
          <Option text="Súmate" url="/sumate" />
          {/* <Option text="Testimonios" url="/#testimonios" /> */}
          <Option text="Alianzas" url="/#alianzas" />
          <Option text="Contacto" url="/contacto" />
        </div>
        <div className="border-t w-full border-primary my-12" />
        <Social color="primary" />
      </div>
    </div>
  );
};

export default Menu;
