import React from "react";
import Header from "./header";
import Footer from "./footer";

const Layout = ({ children, cart }) => {
  return (
    <>
      <Header cart={cart} /> {}
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;

