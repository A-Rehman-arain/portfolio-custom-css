"use client";

import React, { useEffect, useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import Link from "next/link";
import Form from "./Form";
import './Contact.css';

const Contact = () => {
  const [showContact, setShowContact] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContact(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="contact-container">
      {showContact && (
        <div className="contact-wrapper">
          <div className="form-section">
            <Form />
          </div>
          <div className="contact-info">
            <div className="contact-item">
              <FaPhoneAlt size={20} className="contact-icon" />
              <div className="contact-details">
                <p className="contact-label">Phone:</p>
                <Link href="tel:+923173940407">
                  <p className="contact-text">+92 3103866174</p>
                </Link>
              </div>
            </div>
            <div className="contact-item">
              <MdEmail size={20} className="contact-icon" />
              <div className="contact-details">
                <p className="contact-label">Email:</p>
                <Link href="mailto:talhagp908@gmail.com">
                  <p className="contact-text">rehmanarain481@gmail.com</p>
                </Link>
              </div>
            </div>
            <div className="contact-item">
              <FaLocationDot size={20} className="contact-icon" />
              <div className="contact-details">
                <p className="contact-label">Address:</p>
                <p className="hyderabadtext">Karachi Sindh</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;
