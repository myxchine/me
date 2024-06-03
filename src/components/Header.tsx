"use client";

import { useState } from "react";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { TfiClose } from "react-icons/tfi";
import { PiBagLight } from "react-icons/pi";
import MobileMenu from "@/components/menu/Mobile";
import Nav from "@/components/menu/Nav";
import Link from "next/link";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
    document.body.classList.add("no-scroll");
  };

  const handleClose = () => {
    setIsOpen(false);
    document.body.classList.remove("no-scroll");
  };

  return (
    <header className="flex flex-col  sticky top-0 z-10   bg-white px-4 md:p-4 max-w-[1600px] mx-auto">
      <div className="flex items-center justify-between relative">
        <div className="mobile flex items-left justify-left md:hidden">
          {!isOpen && (
            <button
              aria-label="Mobile Menu Open"
              onClick={handleOpen}
              className="flex items-center justify-center p-2"
            >
              <HiOutlineMenuAlt4 className=" text-xl h-[24px] w-[24px] flex items-left justify-left" />
            </button>
          )}

          {isOpen && (
            <button
              aria-label="Mobile Menu Close"
              className="flex items-center justify-center p-2"
              onClick={handleClose}
            >
              <TfiClose className="p-[3px] text-xl h-[24px] w-[24px] flex items-left justify-left" />
            </button>
          )}
        </div>

        <div className="flex items-center justify-between hidden md:flex md:w-[310px]">
          <Nav />
        </div>

        <Link href="/home">
          <div className="font-bold text-xl">DUALITY</div>
        </Link>
        <div className="md:w-[310px] flex items-center justify-end">
          <Link href="/home/cart">
            <button
              aria-label="Shopping Cart"
              className="flex items-right justify-right p-2 "
            >
              <PiBagLight className="text-2xl" />
            </button>
          </Link>
        </div>
      </div>
      {isOpen && <MobileMenu />}
    </header>
  );
};

export default Header;
