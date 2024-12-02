"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLanguage } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { useRef, useState } from "react";
import React from "react";

export const NavbarComponents = () => {
  const dropdownRef = useRef<HTMLDetailsElement>(null);

  const handleClick = (eng: string) => {
    if (eng === "1") {
      console.log("English is clicked");
      setLanguageTitle("English");
    }
    if (eng === "2") {
      console.log("Taiwan is clicked");
      setLanguageTitle("Taiwan");
    }
    if (eng === "3") {
      console.log("Indonesia is clicked");
      setLanguageTitle("Indonesia");
    }

    closeDropdown();
  };

  const closeDropdown = () => {
    if (dropdownRef.current) {
      dropdownRef.current.open = false; // Close dropdown
    }
  };

  const [languageTitle, setLanguageTitle] = useState("English");

  return (
    <div className="wrapper-header fixed top-0 left-0 w-full z-50 shadow-md px-8 bg-white">
      <div className="flex h-20 justify-center content-center items-center">
        <div className="flex-initial w-1/3 flex items-center h-20">
          <details ref={dropdownRef} className="dropdown">
            <summary className="btn flex">
              {languageTitle}{" "}
              <FontAwesomeIcon icon={faLanguage} className="w-4" />
            </summary>
            <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
              <li>
                <a onClick={() => handleClick("1")}>English</a>
              </li>
              <li>
                <a onClick={() => handleClick("2")}>Taiwan</a>
              </li>
              <li>
                <a onClick={() => handleClick("3")}>Indonesia</a>
              </li>
            </ul>
          </details>
        </div>
        <div className="flex-initial w-1/3 h-20 justify-center items-center content-center">
          <div className="flex w-full">
            <div className="flex-1 text-center">
              <Link href="/">
                <button className="btn btn-ghost rounded-3xl">Home</button>
              </Link>
            </div>
            <div className="flex-1 text-center">
              <Link href="/about-us">
                <button className="btn btn-ghost rounded-3xl">About Us</button>
              </Link>
            </div>
            <div className="flex-1 text-center">
              <Link href="/projects">
                <button className="btn btn-ghost rounded-3xl">Projects</button>
              </Link>
            </div>
            <div className="flex-1 text-center">
              <Link href="/news">
                <button className="btn btn-ghost rounded-3xl">News</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex-initial w-1/3 h-20 content-center text-end justify-items-end">
          <div className="flex w-1/2">
            <label className="input input-bordered flex items-center gap-2 rounded-3xl bg-gray-200">
              <input type="text" className="grow" placeholder="Search" />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                  clipRule="evenodd"
                />
              </svg>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};
