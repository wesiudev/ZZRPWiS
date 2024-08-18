"use client";
import Link from "next/link";
import {
  FaArtstation,
  FaChevronDown,
  FaEdit,
  FaSignOutAlt,
  FaUpload,
} from "react-icons/fa";

import { useState } from "react";
import Image from "next/image";
import { FaArrowRight, FaList } from "react-icons/fa6";
export default function Nav({
  isNavOpen,
  setNavOpen,
}: {
  isNavOpen: boolean;
  setNavOpen: Function;
}) {
  const [expandedItems, setExpandedItems] = useState([]);
  const navItems = [
    {
      expandable: true,
      title: "Aktualnosci",
      href: `/admin/products`,
      icon: <FaArtstation />,
      subItems: [
        {
          title: "Nowy wpis",
          href: `/admin/products/new`,
          icon: <FaUpload />,
        },
        {
          title: "Kopie robocze",
          href: `/admin/products/drafts`,
          icon: <FaEdit />,
        },
        {
          title: "Wszystkie aktualności",
          href: `/admin/products`,
          icon: <FaList />,
        },
      ],
    },
    {
      title: "Wyloguj",
      href: `/admin/logout`,
      icon: <FaSignOutAlt />,
    },
  ];

  return (
    <div
      className={`fixed z-[51] scrollbar font-coco !text-white duration-500 ${
        isNavOpen ? "translate-x-[0]" : "-translate-x-[300px]"
      }`}
    >
      <div className="flex flex-col justify-between h-screen w-[300px] border-r-[1px] border-[#303345] bg-[#222430]">
        <div className="flex flex-col">
          <div className="text-white py-4 px-3">
            <h1 className="text-base font-bold  flex flex-row items-center ">
              <Image
                src="/assets/logo.jpg"
                width={36}
                height={36}
                alt=""
                className="w-8 h-8 mr-2"
              />
              Panel administracyjny
            </h1>
            <button
              onClick={() => setNavOpen(!isNavOpen)}
              className="absolute -right-[50px] w-[50px] h-[50px] top-0 !z-[9999999] bg-blue-400 hover:bg-blue-500 duration-200 text-white flex items-center justify-center"
            >
              <FaArrowRight
                className={`${isNavOpen ? "rotate-180" : "rotate-0"}`}
              />
            </button>
          </div>
          <div className="mt-12">
            <ul className="flex flex-col flex-wrap justify-between w-full px-2">
              {navItems.map((item, index) => (
                <li
                  key={index}
                  className={`w-full ${item.expandable ? "relative" : ""}  `}
                >
                  <Link href={item.href} className="w-full">
                    <button
                      onClick={() => {
                        if (item.expandable) {
                          if (expandedItems.includes(index as never)) {
                            setExpandedItems(
                              expandedItems.filter((i) => i !== index)
                            );
                          } else {
                            setExpandedItems([
                              ...expandedItems,
                              index as never,
                            ]);
                          }
                        }
                      }}
                      className={`${
                        item.expandable ? "cursor-pointer" : ""
                      } flex items-center justify-between py-2 px-4 rounded-md hover:bg-[#2F313C] w-full  ${
                        expandedItems.includes(index as never)
                          ? "bg-[#2F313C]"
                          : "bg-[#222430]"
                      }`}
                    >
                      <div className="flex flex-row items-center">
                        <div className="mr-2">{item.icon}</div>
                        {item.title}
                      </div>
                      {item.expandable && (
                        <div
                          onClick={(event) => {
                            event.preventDefault();
                            event.stopPropagation();
                            if (item.expandable) {
                              if (expandedItems.includes(index as never)) {
                                setExpandedItems(
                                  expandedItems.filter((i) => i !== index)
                                );
                              } else {
                                setExpandedItems([
                                  ...expandedItems,
                                  index as never,
                                ]);
                              }
                            }
                          }}
                          className="hover:bg-[#3B3D47] p-1 lg:p-2 rounded-md"
                        >
                          <FaChevronDown
                            className={`duration-300 ${
                              expandedItems.includes(index as never)
                                ? "rotate-180"
                                : "rotate-0"
                            }`}
                          />
                        </div>
                      )}
                    </button>
                  </Link>

                  {item.expandable &&
                    expandedItems.includes(index as never) && (
                      <ul className=" bg-[#222430]  py-2 px-4 w-full">
                        {item.subItems.map((subItem, subIndex) => (
                          <li key={subIndex}>
                            <Link href={subItem.href}>
                              <button className="flex items-center py-2 px-4 rounded-md hover:bg-[#2F313C] w-full">
                                {subItem.icon}
                                <div className="ml-2">{subItem.title}</div>
                              </button>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="w-full flex items-center justify-center py-3">
          wesiudev
        </div>
      </div>
    </div>
  );
}
