"use server";

import Signup from "./Signup";

const Footer = () => {
  return (
    <footer className=" border-t border-gray-300  w-full text-center justify-center mt-12">
      <div className="flex flex-col gap-4">
        <Signup />
      </div>
      <div className="flex flex-col gap-4 p-8 pt-0">
        <div className="flex gap-4">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Products</a>
          <a href="#">Contact</a>
        </div>
        <div className="flex gap-4">
          <a href="#">Blog</a>
          <a href="#">FAQ</a>
          <a href="#">Terms</a>
          <a href="#">Privacy</a>
        </div>
      </div>
      <div>
        <p className="text-sm border-t border-gray-300 text-center p-4">
          © 2024 DUALITY COMMERCE.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
