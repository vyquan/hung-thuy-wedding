import { linkTo } from "@/helpers/constants";
import Link from "next/link";
import { title } from "process";
import { useState } from "react";

const Banner = () => {
  const [isOpenHbg, setIsOpenHbg] = useState(false);
  const links = [
    {
      section: "CẶP ĐÔI",
      href: linkTo.stories,
    },
    {
      section: "SỰ KIỆN",
      href: linkTo.event,
    },
    {
      section: "ALBUM CƯỚI",
      href: linkTo.album,
    },
    {
      section: "LỜI CHÚC",
      href: linkTo.qrcode,
    },
  ];

  return (
    <section className="h-4/5 relative w-screen">
      <nav className="container mx-auto relative">
        <div className="absolute z-50 w-full mx-auto flex items-center justify-between mt-4 px-4">
          <h3 className="font-imperialScript text-xl tracking-wider text-white">
            Ngọc Hưng
            <span> ❤️ </span>
            Hoàng Thuỳ
          </h3>
          <ul className="text-white hidden md:flex justify-end space-x-3 grow">
            {links.map((item) => (
              <li
                key={item.href}
                className="relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
              >
                <Link className="cursor-pointer " href={`#${item.href}`}>
                  {item.section}
                </Link>
              </li>
            ))}
          </ul>
          <div className="relative">
            <button
              className={`md:hidden border border-white p-1 rounded-md ${
                isOpenHbg ? "bg-white text-black" : "bg-transparent text-white"
              }`}
              onClick={() => setIsOpenHbg((prev) => !prev)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            {isOpenHbg && (
              <ul className="absolute w-32 mt-2 bg-white p-2 rounded-md right-0 md:hidden flex flex-col items-center space-y-2 md:ml-auto md:flex-row md:space-y-0 backdrop-blur-sm">
                {links.map((item) => (
                  <li
                    key={item.href}
                    className="relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
                  >
                    <Link className="cursor-pointer" href={`#${item.href}`} onClick={() => setIsOpenHbg(false)}>
                      {item.section}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </nav>
      <div className="bg-white bg-banner bg-no-repeat bg-top lg:bg-center bg-cover h-full"></div>
      <div className="effect-sparkle absolute w-full h-full top-0"></div>
    </section>
  );
};

export default Banner;
