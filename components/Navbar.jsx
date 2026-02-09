"use client";

import Image from "next/image";
import Link from "next/link";
import { RxCross2 } from "react-icons/rx";
import { useEffect, useState } from "react";
import classes from "./Navbar.module.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeHash, setActiveHash] = useState("#home");
  const [isScrolled, setIsScrolled] = useState(false);

  function handleMenuToggle() {
    setMenuOpen((prev) => !prev);
  }

  useEffect(() => {
    const updateHash = () => {
      setActiveHash(window.location.hash || "#home");
    };

    updateHash();
    window.addEventListener("hashchange", updateHash);
    return () => window.removeEventListener("hashchange", updateHash);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    handleScroll(); // ensure correct on reload
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`${classes.header} ${isScrolled ? classes.scrolled : ""}`}
    >
      <nav className={`container ${classes.navbar}`}>
        {/* Logo */}
        <Link href="#home" className={classes.logo}>
          <Image
            src="/logo.png"
            width={30}
            height={38}
            priority
            alt="logo"
            className={classes.logoImg}
          />
          <span>MERN Stack Developer</span>
        </Link>

        {/* Links */}
        <div className={classes.navlinks}>
          <button
            className={classes.menuBtn}
            onClick={handleMenuToggle}
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <RxCross2 size={32} />
            ) : (
              <Image src="/menu.svg" width={28} height={34} alt="menu icon" />
            )}
          </button>

          <ul className={`${classes.menu} ${menuOpen ? classes.open : ""}`}>
            <li>
              <Link
                href="#about"
                onClick={() => {
                  setActiveHash("#about");
                  setMenuOpen(false);
                }}
                className={`${classes.link} ${
                  activeHash === "#about" ? classes.active : ""
                }`}
              >
                About
              </Link>
            </li>

            <li>
              <Link
                href="#work"
                onClick={() => {
                  setActiveHash("#work");
                  setMenuOpen(false);
                }}
                className={`${classes.link} ${
                  activeHash === "#work" ? classes.active : ""
                }`}
              >
                Work
              </Link>
            </li>

            <li>
              <Link
                href="#contact"
                onClick={() => {
                  setActiveHash("#contact");
                  setMenuOpen(false);
                }}
                className={`${classes.link} ${
                  activeHash === "#contact" ? classes.active : ""
                }`}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
