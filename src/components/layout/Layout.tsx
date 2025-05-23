import React from "react";
import { motion } from "framer-motion";
import Header from "./Header";
import Footer from "./Footer";

interface IProps {
  children: boolean | React.ReactPortal | React.ReactNode;
  headerPrimary?: boolean;
  footer?: boolean;
}

const Layout = ({
  headerPrimary,
  children,
  footer = true,
}: IProps) => {
  return (
    <>
      <Header
        headerPrimary={headerPrimary}
      />
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{
          type: "spring",
          mass: 0.35,
          stiffness: 50,
          duration: 0.5,
        }}
        className="flex flex-col overflow-hidden"
      >
        {children}
      </motion.main>
      {footer && <Footer />}
    </>
  );
};

export default Layout;
