import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./menuPosts.module.css";

const MenuPosts = ({ withImage }) => {
  return (
    <div className={styles.items}>
      <Link href="/blog?cat=Radio" className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="" fill className={styles.image} />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.travel}`}>Radio</span>
          <h3 className={styles.postTitle}>
            Explore the latest blogs on Radiology topics and insights.
          </h3>
          <div className={styles.detail}>
            <span className={styles.username}>Glory</span>
            <span className={styles.date}> - 10.03.2023</span>
          </div>
        </div>
      </Link>

      <Link href="/blog?cat=OT" className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="" fill className={styles.image} />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.culture}`}>OT</span>
          <h3 className={styles.postTitle}>
            Discover blogs tailored for Occupational Therapy professionals.
          </h3>
          <div className={styles.detail}>
            <span className={styles.username}>Farouk</span>
            <span className={styles.date}> - 10.03.2023</span>
          </div>
        </div>
      </Link>

      <Link href="/blog?cat=Diet" className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="" fill className={styles.image} />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.coding}`}>Diet</span>
          <h3 className={styles.postTitle}>
            Click to read articles on diet, nutrition, and healthy living.
          </h3>
          <div className={styles.detail}>
            <span className={styles.username}>Farouk</span>
            <span className={styles.date}> - 10.03.2023</span>
          </div>
        </div>
      </Link>

      <Link href="/blog?cat=Physio" className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="" fill className={styles.image} />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.food}`}>Physio</span>
          <h3 className={styles.postTitle}>
            Access the latest in physiotherapy practices and advancements.
          </h3>
          <div className={styles.detail}>
            <span className={styles.username}>David</span>
            <span className={styles.date}> - 10.03.2023</span>
          </div>
        </div>
      </Link>
      <Link href="/blog?cat=Physio" className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="" fill className={styles.image} />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.food}`}>Physio</span>
          <h3 className={styles.postTitle}>
            Access the latest in physiotherapy practices and advancements.
          </h3>
          <div className={styles.detail}>
            <span className={styles.username}>David</span>
            <span className={styles.date}> - 10.03.2023</span>
          </div>
        </div>
      </Link>

      <Link href="/blog?cat=MedLab" className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="" fill className={styles.image} />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.fashion}`}>MedLab</span>
          <h3 className={styles.postTitle}>
            Delve into articles on Medical Laboratory Science and research.
          </h3>
          <div className={styles.detail}>
            <span className={styles.username}>Farouk</span>
            <span className={styles.date}> - 10.03.2023</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MenuPosts;
