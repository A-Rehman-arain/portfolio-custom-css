"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import {  FaLinkedinIn, FaGithub } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import "./Footer.css";
const Footer = () => {
  const [showContent, setShowContent] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setShowContent(false);
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, [pathname]);

  const currentYear = new Date().getFullYear();

  const SocialLinks = [
    {
      icon: <IoLogoInstagram size={20} />,
      url: "https://www.instagram.com/abdul.rehman_arain/",
    },
    {
      icon: <FaLinkedinIn size={20} />,
      url: "https://www.linkedin.com/in/abdul-rehman-b4ab90329?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    {
      icon: <FaGithub size={20} />,
      url: "https://github.com/A-Rehman-arain",
    },
  ];

  return (
    <footer className="footer">
      {showContent && (
        <div className="footer-container">
          <Link href="/">
            <h1 className="footer-title">
              Abdul <span className="highlighted-text">Rehman</span>
            </h1>
          </Link>
          <p className="footer-text">© {currentYear} Portfolio</p>
          <span className="social-links">
            <ul className="social-links-list">
              {SocialLinks.map((link) => (
                <li key={link.url} className="social-link-item">
                  <Link href={link.url} target="_blank">
                    {link.icon}
                  </Link>
                </li>
              ))}
            </ul>
          </span>
        </div>
      )}
    </footer>
  );
};

export default Footer;