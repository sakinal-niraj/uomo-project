import Image from "next/image";
import logo from "../../../public/assets/logo.jpg";
import { CiSearch } from "react-icons/ci";

export default function Header() {
  return (
    <header className="">
      <nav className="flex justify-center">
        <div className="hidden  xl:max-w-[1140px] lg:max-w-[960px] md:max-w-[720px] sm:max-w-[540px] w-full sm:flex justify-between pt-[1.85rem] pb-[1.25rem]">
          {/* left side */}
          <div className="flex items-center gap-16">
            {/* logo */}
            <div>
              <Image src={logo} className="w-full h-full" alt="UOMO Logo" />
            </div>

            {/* Nav links */}
            <ul className="flex items-center gap-4 ">
              <li className="relative px-5 hover:opacity-100 group cursor-pointer">
                <button className="text-black text-[15px] after:content-[''] absolute bottom-0">
                  Products
                </button>
              </li>
            </ul>
          </div>

          {/* right side */}
          <div className="flex">
            <CiSearch />
            <CiSearch />
            <CiSearch />
            <CiSearch />
            <CiSearch />
          </div>
        </div>
      </nav>
    </header>
  );
}
