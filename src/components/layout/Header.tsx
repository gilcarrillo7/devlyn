import React from "react";
import { navigate } from "gatsby";
import { Helmet } from "react-helmet";
import {
  setMenuOpen,
  selectMenuOpen,
  selectDonateUrl,
} from "../../features/ui/uiSlice";
import { useAppDispatch, useAppSelector } from "../../hooks";
import Menu from "./Menu";
import HamburgerMenu from "./HamburgerMenu";

import Logo from "../../images/logo.svg";
import LogoWhite from "../../images/logoWhite.svg";
import Button from "../shared/Button";

const Header = ({ headerPrimary = false }: { headerPrimary?: boolean }) => {
  const dispatch = useAppDispatch();

  const menuOpen = useAppSelector(selectMenuOpen);
  const donateUrl = useAppSelector(selectDonateUrl);

  const handleDonate = () => {
    window.dataLayer.push({
      event: "click_dona",
      category: "Header",
      action: "Click",
      label: "Botón Dona",
    });

    window.open(donateUrl);
  };

  return (
    <>
      <button
        className="position-relative w-full bg-complementary text-primary font-bold text-center py-4 text-xl sm:hidden"
        onClick={handleDonate}
      >
        Dona
      </button>
      <header className={`absolute w-full`}>
        <div className="container flex items-center py-4 sm:py-8">
          <div className="relative w-full flex items-center gap-2 sm:gap-8 z-50">
            <a
              href="#"
              onClick={() => {
                dispatch(setMenuOpen(false));
                navigate("/");
              }}
              className="p-0"
            >
              <img
                src={menuOpen || headerPrimary ? Logo : LogoWhite}
                alt="Fortalecimiento Logo"
                className="w-28 sm:w-36 mr-4"
              />
            </a>
          </div>
          <div className="flex z-50 gap-12">
            {!headerPrimary && (
              <Button
                variant="complementary"
                className={`${
                  menuOpen ? "hidden" : "hidden sm:block"
                } font-bold sm:min-w-[150px]`}
                onClick={handleDonate}
              >
                Dona
              </Button>
            )}
            <HamburgerMenu headerPrimary={headerPrimary} />
          </div>
        </div>
        {menuOpen && (
          <>
            <Menu />
            <Helmet
              bodyAttributes={{
                class: `${menuOpen ? "overflow-hidden" : ""}`,
              }}
            />
          </>
        )}
      </header>
    </>
  );
};

export default Header;
