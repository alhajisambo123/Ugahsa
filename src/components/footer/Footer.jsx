import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.logo}>
          <Image src="/(1).jpeg" alt="lama blog" width={50} height={50} />
          <h1 className={styles.logoText}>UGAHSA BLOG</h1>
        </div>
        <p className={styles.desc}>
          Welcome to the Ugahsa Blog, your trusted source for insights, stories,
          and updates from the healthcare community. Our mission is to connect,
          inform, and inspire practitioners, students, and enthusiasts across
          all allied health disciplines. Whether you’re here to explore the
          latest in Occupational Therapy,Medical Laboratory,Respiratory Therapy,
          Physiotherapy, Dietetics and Radiography, we’re dedicated to bringing
          valuable information to help you grow in your career and stay
          informed. Join us as we build a vibrant community of learners and
          leaders in healthcare. Thank you for being part of UGAHSA!
        </p>
        <div className={styles.icons}>
          <Link
            href="https://web.facebook.com/ugahsa"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src="/facebook.png" alt="Facebook" width={50} height={50} />
          </Link>

          <Link
            href="https://x.com/ugahsa_official"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src="/ximage.avif" alt="Facebook" width={50} height={50} />
          </Link>
          <Link
            href="https://www.instagram.com/ugahsa_official"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src="/instagram.png" alt="" width={50} height={50} />
          </Link>
          <Link
            href="https://web.facebook.com/ugahsa"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src="/nap.avif" alt="Facebook" width={60} height={60} />
          </Link>
          <Link
            href="https://www.youtube.com/@ugahsaofficial281"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src="/youtube.png" alt="youtube" width={50} height={50} />
          </Link>

          <Link
            href="https://www.tiktok.com/@ugahsa_live"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src="/tiktok.png" alt="" width={50} height={50} />
          </Link>
        </div>
      </div>
      <div className={styles.links}>
        <div className={styles.list}>
          <span className={styles.listTitle}>Links</span>
          <Link href="/">Homepage</Link>
          {/* <Link href="/">Blog</Link> */}
          <Link href="/about">About</Link>
          <Link href="/activities">Activities</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Departments</span>
          <Link href="https://ugahsa.vercel.app/blog?cat=OT">OT</Link>
          <Link href="https://ugahsa.vercel.app/blog?cat=Physio">Physio</Link>
          <Link href="https://ugahsa.vercel.app/blog?cat=Diet">Diet</Link>
        </div>
        <div className={styles.list}>
          {/* <span className={styles.listTitle}>Social</span> */}
          {/* <Link href="/">Facebook</Link>
          <Link href="/">Instagram</Link> */}
          <Link href="https://ugahsa.vercel.app/blog?cat=RT">RT</Link>
          <Link href="https://ugahsa.vercel.app/blog?cat=MedLab">MedLab</Link>
          <Link href="https://ugahsa.vercel.app/blog?cat=Radio">Radio</Link>

          {/* <Link href="/">Tiktok</Link> */}
        </div>
      </div>
    </div>
  );
};

export default Footer;
