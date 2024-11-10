
"use client";
import React, { useEffect, useState } from "react";
import HeroSection from "./HeroSection";

import "./HomePage.css";

const HomePage = () => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="home-section">
      <div className="home-container">
        {showContent && (
          <div>
            <div className="hero-section-container">
              <HeroSection />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default HomePage;
