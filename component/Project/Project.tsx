 import "./Project.css";
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import img1 from "../../images/ai-assistant.png"
import img2 from "../../images/ecommerce.png"
import img3 from "../../images/login.png"

const Project = () => {
  return (
    <div id='project' className="project-background">
      <hr className="project-divider" />
      <section className="project-section">
        <div className="project-container">
          <div className="project-title-container">
            <h1 className="project-title">My Projects</h1>
            <p className="project-description">
              Explore my recent projects, showcasing my skills in web development, design, and animation. Each project demonstrates a unique set of features and technologies.
            </p>
          </div>
          <div className="project-grid">
            <div className="project-card">
              <div className="project-card-inner">
                <Image alt="gallery" className="project-image" src={img1} />
                <div className="project-content">
                  <h2 className="project-subtitle">Voice Command Assistant</h2>
                  <h1 className="project-heading">AI Assistant</h1>
                  <p className="project-text">
                    AI Assistant leveraging voice commands for task automation, built with React and Next.js, featuring real-time NLP and API integration.
                  </p>
                  <Link href={'https://ai-assistant-gamma-ivory.vercel.app/'} target='_blank'>
                    <p className="project-link">View Project</p>
                  </Link>
                </div>
              </div>
            </div>
            <div className="project-card">
              <div className="project-card-inner">
                <Image alt="gallery" className="project-image" src={img2} />
                <div className="project-content">
                  <h2 className="project-subtitle">Website</h2>
                  <h1 className="project-heading">Ecommerce Website</h1>
                  <p className="project-text">
                    A eCommerce website showcasing products with features like category product details, and a responsive design for easy browsing.
                  </p>
                  <Link href={'https://ecoummerce-web.vercel.app/'} target='_blank'>
                    <p className="project-link">View Project</p>
                  </Link>
                </div>
              </div>
            </div>
            <div className="project-card">
              <div className="project-card-inner">
                <Image alt="gallery" className="project-image" src={img3} />
                <div className="project-content">
                  <h2 className="project-subtitle">Login Page</h2>
                  <h1 className="project-heading">Animated Login Page</h1>
                  <p className="project-text">
                    An animated login page featuring smooth transitions and interactive elements, providing an engaging user experience with a modern and responsive design.
                  </p>
                  <Link href={'https://animated-login-page-ten.vercel.app/'} target='_blank'>
                    <p className="project-link">View Project</p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Project
