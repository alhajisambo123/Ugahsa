"use client";
import React, { useState, useEffect } from "react";
import styles from "./featured.module.css";
import Image from "next/image";
import Link from "next/link";

const Featured = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    "/games1.jpeg",
    "/games2.jpeg",
    "/games3.jpeg",
    "/games4.jpeg",
    "/games5.jpeg",
    "/games6.jpeg",
    "/games7.jpeg",
    "/games8.jpeg",
    "/games9.jpeg",
    "/games10.jpeg",
    // Add more images as needed
  ];

  // Auto-slide every 3 seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change image every 3 seconds
    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, [images.length]);

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Welcome to UGAHSA!</b> Empowering the Future of Allied Health
        Professionals
      </h1>
      <div className={styles.post}>
        <div className={styles.imageCarousel}>
          <button className={styles.carouselButton} onClick={handlePrevImage}>
            &#8592;
          </button>
          <div className={styles.imageWrapper}>
            <Image
              src={images[currentImageIndex]}
              alt="UGAHSA Featured Image"
              fill
              className={styles.image}
            />
          </div>
          <button className={styles.carouselButton} onClick={handleNextImage}>
            &#8594;
          </button>
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>
            Building a Stronger Tomorrow with UGAHSA!
          </h1>
          <p className={styles.postDesc}>
            Welcome to the official blog of the University of Ghana Allied
            Health Students' Association (UGAHSA)! Here, we share our
            experiences, achievements, and efforts in shaping the future of
            allied health professionals. Whether you’re a current student,
            alumnus, or prospective member, this space is designed to inform,
            inspire, and connect us all.
          </p>
          <Link href={`/about`} className={styles.link}>
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Featured;
