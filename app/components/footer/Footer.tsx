"use client";
import Image from "next/image";
import logo from "@/public/assets/logo.jpg";
import { TiSocialFacebook } from "react-icons/ti";
import { TiSocialTwitter } from "react-icons/ti";
import { TiSocialYoutube } from "react-icons/ti";
import { FaInstagram } from "react-icons/fa6";
import { FaPinterest } from "react-icons/fa";
import {
  comapnyData,
  helpData,
  openingData,
  shopData,
} from "@/app/constant/footerData/foot";
import { useState } from "react";

export default function Footer() {
  const [isHoveredCompany, setIsHoveredCompany] = useState<number | null>(null);
  const [isHoveredShop, setIsHoveredShop] = useState<number | null>(null);
  const [isHoveredHelp, setIsHoveredHelp] = useState<number | null>(null);
  return (
    <footer className="w-full bg-white">
      <div className="flex items-center flex-col">
        {/* Sign up now */}
        <div className="container">
          <div className="max-w-[47rem] m-auto w-full text-center pt-[6.2rem] space-y-5">
            <h1 className="text-[26px] font-medium">
              Sign up now & get 10% off
            </h1>
            <p className="text-sm text-[#767676]">
              Be the first to get the latest news about trends, promotions, and
              much more!
            </p>
            <div className="flex gap-5 pt-2">
              <input
                type="text"
                placeholder="Your email address"
                className="outline-none p-3.5 border-[1px] w-[100%] border-gray-200 text-[14px] text-black placeholder:text-[#0000008f]"
              />
              <button className="text-sm font-medium text-white bg-[#222222] px-[52px]">
                JOIN
              </button>
            </div>
          </div>
        </div>

        {/* uomo detalis */}
        <div className="container">
          <div className="lg:pt-[6.25rem] lg:pb-[4.75rem] md:pt-[3.75rem] md:pb-[2.85rem] pt-[3.125rem] pb-[1.625rem] 3xl:pl-[5.2%]">
            <div className="grid grid-cols-2 lg:grid-cols-[25%_17%_17%_17%_20%] gap-2 pb-9 space-y-10 lg:space-y-0">
              {/* Address and details */}
              <div className="col-span-2 lg:col-span-1 text-left flex-1">
                {/* logo */}
                <div className="w-fit mb-[2.5rem]">
                  <a href="#">
                    <Image src={logo} alt="logo" />
                  </a>
                </div>
                <p className="text-[14px] leading-6 text-[#767676] mb-4">
                  1418 River Drive, Suite 35 Cottonhall, CA 9622 United States
                </p>
                <p className="text-[14px] text-[#767676] font-medium">
                  sale@uomo.com
                </p>
                <p className="text-[14px] text-[#767676] font-medium mt-1">
                  +1 246-345-0695
                </p>
                <ul className="flex items-center justify-start mt-8">
                  <li className="">
                    <a
                      href="#"
                      className="text-[#767676] hover:text-black py-[.5rem] pr-[3rem]"
                    >
                      <TiSocialFacebook className="" size={20} />
                    </a>
                  </li>
                  <li className="">
                    <a
                      href="#"
                      className="text-[#767676] hover:text-black py-[.5rem] pr-[3rem]"
                    >
                      <TiSocialTwitter className="" size={20} />
                    </a>
                  </li>
                  <li className="">
                    <a
                      href="#"
                      className="text-[#767676] hover:text-black py-[.5rem] pr-[3rem]"
                    >
                      <FaInstagram className="" size={15} />
                    </a>
                  </li>
                  <li className="">
                    <a
                      href="#"
                      className="text-[#767676] hover:text-black py-[.5rem] pr-[3rem]"
                    >
                      <TiSocialYoutube className="" size={20} />
                    </a>
                  </li>
                  <li className="">
                    <a
                      href="#"
                      className="text-[#767676] hover:text-black py-[.5rem] pr-[3rem]"
                    >
                      <FaPinterest className="" size={16} />
                    </a>
                  </li>
                </ul>
              </div>

              {/* Comapany */}
              <div>
                <h1 className=" font-medium mb-5 lg:mb-[2.3rem]">COMPANY</h1>
                <ul className="space-y-4 text-[#222222]">
                  {comapnyData.map((item) => (
                    <li
                      onMouseEnter={() => {
                        setIsHoveredCompany(item.id);
                      }}
                      onMouseLeave={() => {
                        setIsHoveredCompany(null);
                      }}
                      className="text-[14px] w-fit"
                      key={item.id}
                    >
                      <a href="#">
                        <span className="relative">
                          {item.label}
                          <span
                            className={`absolute left-0 -bottom-1 h-[2px] bg-black transition-all duration-500
                                      ${
                                        isHoveredCompany === item.id
                                          ? "w-7"
                                          : "w-0"
                                      }
                        `}
                          ></span>
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Shop */}
              <div>
                <h1 className=" font-medium mb-5 lg:mb-[2.3rem]">SHOP</h1>
                <ul className="space-y-4 text-[#222222]">
                  {shopData.map((item) => (
                    <li
                      onMouseEnter={() => {
                        setIsHoveredShop(item.id);
                      }}
                      onMouseLeave={() => {
                        setIsHoveredShop(null);
                      }}
                      className="text-[14px] w-fit"
                      key={item.id}
                    >
                      <a href="#">
                        <span className="relative">
                          {item.label}
                          <span
                            className={`absolute left-0 -bottom-1 h-[2px] bg-black transition-all duration-500
                                      ${
                                        isHoveredShop === item.id
                                          ? "w-7"
                                          : "w-0"
                                      }
                        `}
                          ></span>
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Help */}
              <div>
                <h1 className=" font-medium mb-5 lg:mb-[2.3rem]">HELP</h1>
                <ul className="space-y-4 text-[#222222]">
                  {helpData.map((item) => (
                    <li
                      onMouseEnter={() => {
                        setIsHoveredHelp(item.id);
                      }}
                      onMouseLeave={() => {
                        setIsHoveredHelp(null);
                      }}
                      className="text-[14px] w-fit"
                      key={item.id}
                    >
                      <a href="#">
                        <span className="relative">
                          {item.label}
                          <span
                            className={`absolute left-0 -bottom-1 h-[2px] bg-black transition-all duration-500
                                      ${
                                        isHoveredHelp === item.id
                                          ? "w-7"
                                          : "w-0"
                                      }
                        `}
                          ></span>
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Opening time */}
              <div>
                <h1 className=" font-medium mb-5 lg:mb-[2.3rem]">OPENING TIME</h1>
                <ul className="space-y-4 text-[#222222]">
                  {openingData.map((item) => (
                    <li className="text-[14px] w-fit" key={item.id}>
                        <span className="relative">{item.label}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* copyright */}
        <div className="pt-[1.25rem] pb-[1rem] flex justify-center border-t-[0.1px] border-[#e1e1e1] w-full">
          <div className="2xl:max-w-[1440px] xl:max-w-[1140px] lg:max-w-[960px] md:max-w-[720px] sm:max-w-[540px] w-full px-[0.9rem]">
            <div className="flex items-center justify-between">
              <span className="text-[#767676] text-[14px] flex-1">©2025 Uomo</span>

              <div className="">
                <select
                  name=""
                  id=""
                  className="outline-none text-[14px] text-[#767676] pt-3 pr-5 pl-2  pb-2.5 w-auto"
                >
                  <option value="">United Kingdom | English</option>
                  <option value="">German</option>
                  <option value="">French</option>
                  <option value="">Swedish</option>
                </select>
                <select
                  name=""
                  id=""
                  className="outline-none text-[14px] text-[#767676] pt-3 pr-5 pl-2 pb-2.5 w-auto"
                >
                  <option value="">$ USD</option>
                  <option value="1">£ GBP</option>
                  <option value="2">€ EURO</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
