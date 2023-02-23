import React from "react";

const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 bg-blue-700 w-full h-10 grid content-center justify-center">
      <div className="text-lg flex flex-row">
        Made by Hugo Plante. See the code on{" "}
        <a
          href="https://github.com/HugoPlante/password-generator"
          target="_blank"
          className="text-black underline ml-1"
        >
          Github
        </a>
      </div>
    </footer>
  );
};

export default Footer;
