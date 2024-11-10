
"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import ProfileImage from "@/images/mainImage.jpg";
import "./About.css";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {isVisible && (
        <div className="about-container">
          <h2 className="quote">
            The spark of passion spreads light on the path of our purpose.
          </h2>
          <div className="content-wrapper">
            <div className="biography-section">
              <h2 className="biography-title">Biography</h2>
              <p className="biography-text">
              I’m Abdul Rehman, a Frontend Developer with a passion for crafting engaging and user-friendly digital experiences. I specialize in HTML, CSS, JavaScript, Next.js 14, and Tailwind CSS, transforming concepts into functional, visually appealing web applications.
              </p>
              <p className="biography-text">
              I excel in collaborative settings, where I combine creativity with technical expertise to deliver high-quality, seamless solutions. Every project is an opportunity to explore the latest design trends while ensuring robust functionality.
              </p>
              <p className="biography-text">
              My mission is to create digital experiences that resonate with users, building connections that go beyond just the screen.
              </p>
              <p className="biography-text">
              I’m committed to continuous growth, staying current with industry advancements to implement cutting-edge solutions. By embracing agile methodologies, I ensure efficient collaboration and timely delivery of top-tier results.
              </p>
            </div>
            <div className="image-section">
              <div className="image-container">
                <Image
                  src={ProfileImage}
                  alt="Profile Image"
                  className="profile-image"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default About;
