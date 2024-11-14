"use client";

import Link from "next/link";
import styles from "./authLinks.module.css";
import { useState } from "react";
import { signOut, useSession } from "next-auth/react";

const AuthLinks = () => {
  const [open, setOpen] = useState(false);
  const { status } = useSession();

  const closeMenu = () => setOpen(false);

  return (
    <>
      {status === "unauthenticated" ? (
        <Link href="/login" className={styles.link}>
          Login
        </Link>
      ) : (
        <>
          <Link href="/write" className={styles.link}>
            Write
          </Link>
          <span
            className={styles.link}
            onClick={() => {
              signOut();
              closeMenu();
            }}
          >
            Logout
          </span>
        </>
      )}

      <div className={styles.burger} onClick={() => setOpen(!open)}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>

      {open && (
        <div className={styles.responsiveMenu}>
          <Link href="/" onClick={closeMenu}>
            Homepage
          </Link>
          <Link href="/about" onClick={closeMenu}>
            About
          </Link>
          <Link href="/activities" onClick={closeMenu}>
            Activities
          </Link>

          {status === "unauthenticated" ? (
            <Link href="/login" onClick={closeMenu}>
              Login
            </Link>
          ) : (
            <>
              <Link href="/write" onClick={closeMenu}>
                Write
              </Link>
              <span
                className={styles.link}
                onClick={() => {
                  signOut();
                  closeMenu();
                }}
              >
                Logout
              </span>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default AuthLinks;
