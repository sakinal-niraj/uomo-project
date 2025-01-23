"use client";

import { blogData, homeData, pagesData } from "@/app/constant/headData/nav";
import { useState } from "react";

const groupDataIntoColumns = (
  data: { id: number; label: string }[],
  itemsPerColumn: number
) => {
  const columns = [];
  for (let i = 0; i < data.length; i += itemsPerColumn) {
    columns.push(data.slice(i, i + itemsPerColumn));
  }
  return columns;
};

export function HomeSubMenu() {
  const columns = groupDataIntoColumns(homeData, 6);
  const [isHovered, setIsHovered] = useState<number | null>(null);
  return (
    <div className="relative top-7 lg:bg-white w-full py-[2.7rem] pr-[6rem] text-[14px] text-black font-normal">
      <div className="grid grid-cols-4 gap-0">
        {columns.map((column, colIndex) => (
          <div key={colIndex} className="space-y-4">
            {column.map((item) => (
              <p
                key={item.id}
                className="text-center "
                onMouseEnter={() => setIsHovered(item.id)}
                onMouseLeave={() => setIsHovered(null)}
              >
                <span className="relative">
                  {item.label}
                  {/* Keep the span always in the DOM */}
                  <span
                    className={`absolute left-0 -bottom-1 h-[2px] bg-black transition-all duration-500 ${
                      isHovered === item.id ? "w-7" : "w-0"
                    }`}
                  ></span>
                </span>
              </p>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

// export function ShopSubMenu() {
//   return (
//     <div className="relative top-7 lg:bg-white w-full py-[2.7rem] pr-[6rem] text-[14px] text-black font-normal min-w-screen flex justify-center">
//       <div className="max-w-[1650px] w-full">
//         <div className="grid grid-cols-4 gap-0">hello</div>
//       </div>
//     </div>
//   );
// }

export function BlogSubMenu() {
    const [isHoveredBlog,setIsHoveredBlog] = useState<number | null>(null);
  return (
    <div className="relative top-7 lg:bg-white w-full pt-[2rem] pb-[1.7rem] pl-[2rem] text-[14px] text-black font-normal">
      <div className="flex flex-col items-start space-y-4">
        {blogData.map((item) => (
          <p
            onMouseEnter={() => setIsHoveredBlog(item.id)}
            onMouseLeave={() => setIsHoveredBlog(null)}
            key={item.id}
            className=" "
          >
            <span className="relative">
                {item.label}
                <span
                    className={`absolute left-0 -bottom-1 h-[2px] bg-black transition-all duration-500
                        ${isHoveredBlog === item.id ? "w-7" : "w-0"}`}
                >
                </span>
            </span>
          </p>
        ))}
      </div>
    </div>
  );
}


export function PagesSubMenu() {
    const [isHoveredPages,setIsHoveredPages] = useState<number | null>(null);
  return (
    <div className="relative top-7 lg:bg-white w-full pt-[2rem] pb-[1.7rem] pl-[2rem] text-[14px] text-black font-normal">
      <div className="flex flex-col items-start space-y-4">
        {pagesData.map((item) => (
          <p
            onMouseEnter={() => setIsHoveredPages(item.id)}
            onMouseLeave={() => setIsHoveredPages(null)}
            key={item.id}
            className=" "
          >
            <span className="relative">
                {item.label}
                <span
                    className={`absolute left-0 -bottom-1 h-[2px] bg-black transition-all duration-500
                        ${isHoveredPages === item.id ? "w-7" : "w-0"}`}
                >
                </span>
            </span>
          </p>
        ))}
      </div>
    </div>
  );
}

