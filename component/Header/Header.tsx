"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { RxCross1 } from "react-icons/rx";
import { RxHamburgerMenu } from "react-icons/rx";
import { usePathname } from "next/navigation";
import "./Header.css";
export default function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ];

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  const pathname = usePathname();
  return (
    <header className="header-container">
      <div className="header-main-div">
        <Link href="/">
          <h1 className="header-title">
            Abdul <span className="text-main">Rehman</span>
          </h1>
        </Link>

        <nav className="nav-main">
          <ul className="nav-ul">
            {links.map((link) => (
              <li key={link.name} className="nav-li">
                <Link
                  href={link.href}
                  className={`nav-link ${
                    link.href === pathname && "pathname-href "
                  }`}
                >
                  <span className="link-name">{link.name}</span>
                  <span
                    className={`${link.href !== pathname && "link-underline"}`}
                  ></span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <Link href="/contact">
          <button className="hire-me-button ">Hire Me</button>
        </Link>

        <button className="hamburger-main" onClick={toggleSidebar}>
          <RxHamburgerMenu size={24} className="hamburger-icon" />
        </button>
      </div>

      {isMobile && (
        <div
          className={`mobile-main-div ${
            isSidebarOpen ? "side-bar-opens" : "side-bar-close"
          }`}
        >
          <div className="toggle-sidebar" onClick={toggleSidebar}></div>
          <nav
            className={`mobile-nav ${
              isSidebarOpen ? "mobile-nav-opens" : "mobile-nav-close"
            }`}
          >
            <div className="cross-icon-main-div">
              <div className="cross-icon-second-div">
                <button onClick={toggleSidebar} aria-label="Close menu">
                  <RxCross1 size={24} className="cross-icon" />
                </button>
              </div>
            </div>
            <ul className="mobile-nav-ul">
              {links.map((link) => (
                <li key={link.name} className="mobile-nav-li">
                  <Link
                    href={link.href}
                    className="mobile-nav-links"
                    onClick={toggleSidebar}
                  >
                    <span className="mobile-nav-items">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}