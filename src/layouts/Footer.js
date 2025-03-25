import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark text-center py-3 text-white">
      © {new Date().getFullYear()} HyperUI. Tüm hakları saklıdır.
    </footer>
  );
};

export default Footer;
