"use client";

import Image from "next/image";
import logo from "../../../public/assets/logo.jpg";
import { FiSearch } from "react-icons/fi";
import { FaRegUser } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { RiMenu2Line } from "react-icons/ri";
import { LiaShoppingBagSolid } from "react-icons/lia";

import { BlogSubMenu, HomeSubMenu, PagesSubMenu } from "./SubMenu";

export default function Header() {
  return (
    <header className="">
      <nav className="flex justify-center">
        {/* for mobile size devices */}
        <div className="block lg:hidden md:max-w-[720px] sm:max-w-[540px] px-[0.9rem] sm:px-0 w-full py-[1rem]">
          <ul className="flex justify-between">
            <div>
              <RiMenu2Line size={28} className="icon" />
            </div>
            <div className="cursor-pointer">
              <Image
                src={logo}
                className="cursor-pointer w-full h-full"
                alt="UOMO Logo"
              />
            </div>
            <LiaShoppingBagSolid size={26} className="icon" />
          </ul>
        </div>

        {/* from lg size devices */}
        <div className="hidden 3xl:max-w-[1430px] 3xl:w-full  2xl:max-w-[1380px]  xl:max-w-[1140px] lg:max-w-[960px] md:max-w-[720px] sm:max-w-[540px] w-full lg:flex justify-between pt-[1.5rem] py-[1.5rem]">
          {/* left side */}
          <div className="flex items-center gap-14">
            {/* logo */}
            <div>
              <a href="#">
                <Image src={logo} className="w-full h-full" alt="UOMO Logo" />
              </a>
            </div>

            {/* Nav links */}
            <ul className="flex items-center gap-9 2xl:gap-10 ">
              {/* home link */}
              <li className="relative hover:opacity-100 group cursor-pointer font-medium">
                <button className={`relative text-[14px] group text-[#c32929]`}>
                  HOME
                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#c32929] transition-all duration-500 group-hover:w-[65%] group-hover:left-0 group-hover:transition-all group-focus:w-[50%] group-focus:left-0 group-focus:transition-all"></span>
                  <div
                    className="absolute top-0  left-[-3rem] transition group-hover:translate-y-5 translate-y-0
                                            md:opacity-0 invisible md:group-hover:opacity-100 group-hover:visible duration-300 ease-in-out
                                            group-hover:transform z-50 min-w-[800px] transform"
                  >
                    <HomeSubMenu />
                  </div>
                </button>
              </li>

              {/* SHOP link */}
              <li className="relative hover:opacity-100 group cursor-pointer font-medium">
                <button className={`relative text-[14px] group`}>
                  SHOP
                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[black] transition-all duration-500 group-hover:w-[65%] group-hover:left-0 group-hover:transition-all group-focus:w-[50%] group-focus:left-0 group-focus:transition-all"></span>
                  <div
                    className="absolute top-0  3xl:left-[-36.4rem] 2xl:left-[-22rem] transition group-hover:translate-y-5 translate-y-0
                                            md:opacity-0 invisible md:group-hover:opacity-100 group-hover:visible duration-300 ease-in-out
                                            group-hover:transform z-50 min-w-[100vw] transform"
                  >
                    {/* <ShopSubMenu /> */}
                  </div>
                </button>
              </li>

              {/* Blog link */}
              <li className="relative hover:opacity-100 group cursor-pointer font-medium">
                <button className={`relative text-[14px] group`}>
                  BLOG
                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-black transition-all duration-500 group-hover:w-[65%] group-hover:left-0 group-hover:transition-all group-focus:w-[50%] group-focus:left-0 group-focus:transition-all"></span>
                  <div
                    className="absolute top-0  left-[-1rem] transition group-hover:translate-y-5 translate-y-0
                                            md:opacity-0 invisible md:group-hover:opacity-100 group-hover:visible duration-300 ease-in-out
                                            group-hover:transform z-50 min-w-[260px] transform"
                  >
                    <BlogSubMenu />
                  </div>
                </button>
              </li>

              {/* Pages link */}
              <li className="relative hover:opacity-100 group cursor-pointer font-medium">
                <button className={`relative text-[14px] group`}>
                  PAGES
                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-black transition-all duration-500 group-hover:w-[65%] group-hover:left-0 group-hover:transition-all group-focus:w-[50%] group-focus:left-0 group-focus:transition-all"></span>
                  <div
                    className="absolute top-0  left-[-1rem] transition group-hover:translate-y-5 translate-y-0
                                            md:opacity-0 invisible md:group-hover:opacity-100 group-hover:visible duration-300 ease-in-out
                                            group-hover:transform z-50 min-w-[260px] transform"
                  >
                    <PagesSubMenu />
                  </div>
                </button>
              </li>

              {/* About link */}
              <li className="relative hover:opacity-100 group cursor-pointer font-medium">
                <button className={`relative text-[14px] group`}>
                  ABOUT
                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-black transition-all duration-500 group-hover:w-[65%] group-hover:left-0 group-hover:transition-all group-focus:w-[50%] group-focus:left-0 group-focus:transition-all"></span>
                </button>
              </li>

              {/* Contact link */}
              <li className="relative hover:opacity-100 group cursor-pointer font-medium">
                <button className={`relative text-[14px] group`}>
                  CONTACT
                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-black transition-all duration-500 group-hover:w-[65%] group-hover:left-0 group-hover:transition-all group-focus:w-[50%] group-focus:left-0 group-focus:transition-all"></span>
                </button>
              </li>
            </ul>
          </div>

          {/* right side */}
          <div className="flex items-center gap-5 2xl:gap-8">
            <FiSearch size={26} className="icon cursor-pointer" />
            <FaRegUser size={22} className="icon cursor-pointer" />
            <FaRegHeart size={21} className="icon cursor-pointer" />
            <LiaShoppingBagSolid size={26} className="icon cursor-pointer" />
            <RiMenu2Line size={28} className="icon cursor-pointer" />
          </div>
        </div>
      </nav>
    </header>
  );
}
