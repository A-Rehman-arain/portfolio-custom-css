import React from "react";
import Image from "next/image";
import mainImage from "@/images/mainImage.jpg";
import "./Photo.css";

const Photo = () => {
  return (
    <div>
      <Image
        src={mainImage}
        alt="Main Image"
        width={350}
        height={350}
        className="Photo"
      />
    </div>
  );
};

export default Photo;