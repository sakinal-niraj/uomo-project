"use client";

import Image from "next/image";
import logo from "../../../public/assets/logo.jpg";
import { FiSearch } from "react-icons/fi";
import { FaRegUser } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { RiMenu2Line } from "react-icons/ri";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { IoCloseSharp } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";

import { BlogSubMenu, HomeSubMenu, PagesSubMenu } from "./SubMenu";
import { useState } from "react";
import { searchData } from "@/app/constant/headData/nav";
// import { UserLogin } from "./Drawers";

export default function Header() {
  const [isLoginDrawerOpen, setIsLoginDrawerOpen] = useState(false);
  const [isSerachDrawerOpen, setIsSearchDrawerOpen] = useState(false);
  const [isShopingBagDrawerOpen, setIsShopingBagDrawerOpen] = useState(false);
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
            <div>
              <span
                onClick={() => {
                  setIsShopingBagDrawerOpen(true);
                }}
                className="relative"
              >
                <LiaShoppingBagSolid
                  size={26}
                  className="icon cursor-pointer"
                />
                <span className="absolute bg-[#b9a16b] rounded-full text-[10px] p-[0.5px] px-1 text-white -bottom-1 -right-1">
                  0
                </span>
              </span>
              {isShopingBagDrawerOpen && (
                <div
                  className="fixed inset-0 bg-gray-500 bg-opacity-50 z-30"
                  onClick={() => setIsShopingBagDrawerOpen(false)}
                ></div>
              )}
              <div
                className={`fixed top-0 right-0 z-40 h-screen  overflow-y-auto transition-transform bg-white w-[full] duration-500 ${
                  isShopingBagDrawerOpen ? "translate-x-0" : "translate-x-full"
                }`}
                role="dialog"
                aria-labelledby="drawer-right-label"
              >
                {/* head */}
                <div className="bg-[#faf9f8] w-full flex items-center pt-[1.9rem] pb-[1.5rem] px-[1rem] justify-between">
                  <h5 id="drawer-right-label" className="font-medium">
                    SHOPPING BAG (0 )
                  </h5>
                  <button
                    type="button"
                    aria-controls="drawer-right-example"
                    onClick={() => {
                      console.log("Closing drawer");
                      setIsShopingBagDrawerOpen(false);
                    }}
                  >
                    <IoCloseSharp size={26} />
                  </button>
                </div>

                {/* body */}
                <div className="my-[1.875rem] px-[1.5]">
                  {/* no account - create account */}
                  <div className="w-full mt-12 px-2">
                    <span className="text-lg text-[#222]">
                      Your cart is empty. Start shopping!
                    </span>
                  </div>
                </div>

                {/* sub total */}
                <div className="my-[1.875rem] px-[2.4rem] absolute bottom-0 w-full">
                  <div className="w-full border-t border-[#d9d9d9] px-1">
                    <p className="mt-5 text-sm font-medium flex items-center justify-between">
                      <span>SUBTOTAL:</span>
                      <span>$0</span>
                    </p>
                    <button className="w-full mt-[1.3rem] mb-3 bg-[#e4e4e4] text-[#222222] pt-[0.9375rem] pb-[0.75rem]">
                      Explore Shop
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </ul>
        </div>

        {/* from lg size devices */}
        <div className="hidden 3xl:max-w-[1430px] 3xl:w-full  2xl:max-w-[1370px]  xl:max-w-[1140px] lg:max-w-[960px] md:max-w-[720px] sm:max-w-[540px] w-full lg:flex justify-between pt-[1.5rem] py-[1.5rem]">
          {/* left side */}
          <div className="flex items-center gap-14">
            {/* logo */}
            <div>
              <a href="#">
                <Image src={logo} className="w-full h-full" alt="UOMO Logo" />
              </a>
            </div>

            {/* Nav links */}
            <ul className="flex items-center gap-9 2xl:gap-[41px] ">
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
            <div>
              <span
                onClick={() => {
                  setIsSearchDrawerOpen(!isSerachDrawerOpen);
                }}
              >
                {isSerachDrawerOpen ? (
                  <IoMdClose size={26} className="icon cursor-pointer" />
                ) : (
                  <FiSearch size={26} className="icon cursor-pointer" />
                )}
              </span>
              {isSerachDrawerOpen && (
                <div
                  className="fixed inset-0 z-10 transition-transform ease-out duration-300"
                  onClick={() => setIsSearchDrawerOpen(false)}
                ></div>
              )}

              <div
                className={`flex justify-center fixed top-[78px] left-0 right-0 z-40 h-auto overflow-y-auto transition-transform bg-white duration-200 w-full
                ${isSerachDrawerOpen ? "block" : "hidden"} `}
              >
                <div className="my-9 bg-white 3xl:max-w-[1430px] 3xl:w-full  2xl:max-w-[1410px]  xl:max-w-[1140px] lg:max-w-[960px] md:max-w-[720px] sm:max-w-[540px] w-full lg:flex justify-between pt-[1.5rem] py-[1.5rem]">
                  <div className="w-full flex flex-col items-start space-y-6">
                    <h1 className="text-[#767676] uppercase font-semibold text-sm">
                      What are you looking for?
                    </h1>
                    <div className="w-full relative">
                      <input
                        type="text"
                        placeholder="Search products"
                        className="w-full border-0 outline-none border-b p-0.5 pb-3 text-sm font-semibold border-black"
                      />
                      <FiSearch
                        size={26}
                        className="icon cursor-pointer text-[#767676] absolute right-0 bottom-2"
                      />
                    </div>
                    <div className="pt-1 space-y-4 pb-0.5">
                      <h2 className="uppercase text-sm font-semibold text-[#767676]">Quicklinks</h2>
                      <ul className="space-y-4 text-sm text-[#222222] opacity-80 font-medium">
                        {searchData.map((item)=>(
                          <li key={item.id} className="relative group cursor-pointer">
                            {item.label}
                          <span className="absolute left-0 -bottom-1 h-[2px] bg-black transition-all duration-500 group-hover:w-7 w-0"></span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <span onClick={() => setIsLoginDrawerOpen(true)}>
                <FaRegUser size={22} className="icon cursor-pointer" />
              </span>
              {isLoginDrawerOpen && (
                <div
                  className="fixed inset-0 bg-gray-500 bg-opacity-50 z-30  transition-all ease-out duration-300"
                  onClick={() => setIsLoginDrawerOpen(false)}
                ></div>
              )}
              <div
                className={`fixed top-0 right-0 z-40 h-screen  overflow-y-auto transition-transform bg-white w-[26.5rem] duration-500 ${
                  isLoginDrawerOpen ? "translate-x-0" : "translate-x-full"
                }`}
                role="dialog"
                aria-labelledby="drawer-right-label"
              >
                {/* head */}
                <div className="bg-[#faf9f8] w-full flex items-center pt-[1.9rem] pb-[1.5rem] px-[2.5rem] justify-between">
                  <h5 id="drawer-right-label" className="font-medium">
                    LOGIN
                  </h5>
                  <button
                    type="button"
                    aria-controls="drawer-right-example"
                    onClick={() => {
                      console.log("Closing drawer");
                      setIsLoginDrawerOpen(false);
                    }}
                  >
                    <IoCloseSharp size={26} />
                  </button>
                </div>

                {/* body */}
                <div className="my-[1.875rem] px-[2.5rem]">
                  {/* input boxes */}
                  <div className="relative mb-8">
                    <input
                      type="text"
                      id="user"
                      className="block w-full text-sm text-gray-900 bg-transparent py-[1.1rem] px-[1.3rem] border  appearance-none  border-[#e4e4e4] focus:border-black focus:outline-none focus:ring-0 peer"
                      placeholder=" "
                    />
                    <label
                      htmlFor="user"
                      className="absolute text-sm  text-gray-400 duration-300 transform -translate-y-4  top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-3"
                    >
                      UserName or email address *
                    </label>
                  </div>
                  <div className="relative mb-5">
                    <input
                      type="text"
                      id="password"
                      className="block w-full text-sm text-gray-900 bg-transparent py-[1.1rem] px-[1.3rem] border  appearance-none  border-[#e4e4e4] focus:border-black focus:outline-none focus:ring-0 peer"
                      placeholder="********"
                    />
                    <label
                      htmlFor="password"
                      className="absolute text-sm  text-black duration-300 transform -translate-y-4  top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-black peer-placeholder-shown:scale-100  peer-focus:top-2 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-3"
                    >
                      Password *
                    </label>
                  </div>

                  {/* remeber lostpassword */}
                  <div className="text-[14px] mb-6 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-[#767676]">
                      <input type="checkbox" name="" id="" />
                      <label htmlFor="remeber">Remeber me</label>
                    </div>
                    <a className="underline" href="#">
                      Lost password?
                    </a>
                  </div>

                  {/* login button */}
                  <button className="w-full bg-[#222] text-white pt-[0.9375rem] pb-[0.75rem]">
                    LOG IN
                  </button>

                  {/* no account - create account */}
                  <div className="w-full mt-6 text-center">
                    <span className="text-[#767676] text-[14px]">
                      No account yet?
                    </span>
                    <a
                      className="underline text-[14px] pl-1 text-[#222222]"
                      href=""
                    >
                      Create Account
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <FaRegHeart size={21} className="icon cursor-pointer" />
            </div>
            <div>
              <span
                onClick={() => {
                  setIsShopingBagDrawerOpen(true);
                }}
                className="relative"
              >
                <LiaShoppingBagSolid
                  size={26}
                  className="icon cursor-pointer"
                />
                <span className="absolute bg-[#b9a16b] rounded-full text-[10px] p-[0.5px] px-1 text-white -bottom-1 -right-1">
                  0
                </span>
              </span>
              {isShopingBagDrawerOpen && (
                <div
                  className="fixed inset-0 bg-gray-500 bg-opacity-50 z-30"
                  onClick={() => setIsShopingBagDrawerOpen(false)}
                ></div>
              )}
              <div
                className={`fixed top-0 right-0 z-40 h-screen  overflow-y-auto transition-transform bg-white w-[26.5rem] duration-500 ${
                  isShopingBagDrawerOpen ? "translate-x-0" : "translate-x-full"
                }`}
                role="dialog"
                aria-labelledby="drawer-right-label"
              >
                {/* head */}
                <div className="bg-[#faf9f8] w-full flex items-center pt-[1.9rem] pb-[1.5rem] px-[2.5rem] justify-between">
                  <h5 id="drawer-right-label" className="font-medium">
                    SHOPPING BAG (0 )
                  </h5>
                  <button
                    type="button"
                    aria-controls="drawer-right-example"
                    onClick={() => {
                      console.log("Closing drawer");
                      setIsShopingBagDrawerOpen(false);
                    }}
                  >
                    <IoCloseSharp size={26} />
                  </button>
                </div>

                {/* body */}
                <div className="my-[1.875rem] px-[1.3rem]">
                  {/* no account - create account */}
                  <div className="w-full mt-12 px-12">
                    <span className="text-lg text-[#222]">
                      Your cart is empty. Start shopping!
                    </span>
                  </div>
                </div>

                {/* sub total */}
                <div className="my-[1.875rem] px-[2.4rem] absolute bottom-0 w-full">
                  <div className="w-full border-t border-[#d9d9d9] px-1">
                    <p className="mt-5 text-sm font-medium flex items-center justify-between">
                      <span>SUBTOTAL:</span>
                      <span>$0</span>
                    </p>
                    <button className="w-full mt-[1.3rem] mb-3 bg-[#e4e4e4] text-[#222222] pt-[0.9375rem] pb-[0.75rem]">
                      Explore Shop
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <RiMenu2Line size={28} className="icon cursor-pointer" />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
