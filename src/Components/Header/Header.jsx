import React, { useEffect, useState } from "react";
import logo from "../../assets/image/logo.png";
import { Link } from "react-router-dom";
import { Search, Bell, User, ChevronDown, Menu, X } from "lucide-react";
import styles from "./Header.module.css";

function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isProfileOn, setIsProfileOn] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  //   for blur
  // window.addEventListener() is a side effect.
  // useEffect sets up a scroll listener when the component appears, updates state based on scroll position, and removes the listener when the component disappears.
  // window.scrollY = how many pixels the page has been scrolled vertically.

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    // the cleanup code using return
    // When the component is removed from the page(UI), React removes the scroll listener so it doesn't keep listening unnecessarily.
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // RESPONSIVE: keep mobile dropdown layers from stacking over each other on small screens.
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((isOpen) => !isOpen);
    setIsSearchOpen(false);
    setIsProfileOn(false);
  };

  // RESPONSIVE: search can open below the header on mobile without squeezing the icon row.
  const toggleSearch = () => {
    setIsSearchOpen((isOpen) => !isOpen);
    setIsMobileMenuOpen(false);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // RESPONSIVE: the profile dropdown stays usable by closing wider mobile panels first.
  const toggleProfileMenu = () => {
    setIsProfileOn((isOpen) => !isOpen);
    setIsMobileMenuOpen(false);
    setIsSearchOpen(false);
  };

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}>
      <div className={styles.container}>
        {/* Logo */}
        <img className={styles.logo} src={logo} alt="" />

        {/* RESPONSIVE: this button opens the full navigation on small screens. */}
        <button
          type="button"
          className={styles.mobileMenuButton}
          onClick={toggleMobileMenu}
          aria-label="Toggle navigation menu"
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        {/* navigation links */}
        <nav
          className={`${styles.nav} ${isMobileMenuOpen ? styles.navOpen : ""}`}
          aria-label="Primary navigation"
        >
          <Link className={styles.navLink} to="" onClick={closeMobileMenu}>
            Home
          </Link>
          <Link className={styles.navLink} to="" onClick={closeMobileMenu}>
            Tv Shows
          </Link>
          <Link className={styles.navLink} to="" onClick={closeMobileMenu}>
            Movies
          </Link>
          <Link className={styles.navLink} to="" onClick={closeMobileMenu}>
            New & Popular
          </Link>
          <Link className={styles.navLink} to="" onClick={closeMobileMenu}>
            My List
          </Link>
          <Link className={styles.navLink} to="" onClick={closeMobileMenu}>
            Browse by Language
          </Link>
        </nav>

        {/* right side section */}
        <div className={styles.rightSection}>
          {/* search */}
          <div className={styles.searchContainer}>
            <button
              type="button"
              onClick={toggleSearch}
              className={styles.searchButton}
              aria-label="Toggle search"
              aria-expanded={isSearchOpen}
            >
              <Search size={20} />
            </button>

            {/* this is conditional rendering using the && operator.
                it is like this 
                    if (isSearchOpen) {
                    return <input ... />;
                    } 
               && in JSX is basically a short way to say "render this only when this condition is true."
               condition && something
               If condition is true, JavaScript evaluates/returns something.
               If condition is false, it stops there.
          */}

            {isSearchOpen && (
              <input
                type="text"
                placeholder="movie title"
                className={styles.searchInput}
              />
            )}
          </div>

          {/* notification */}
          <button type="button" className={styles.iconButton} aria-label="Notifications">
            {/* notification icon */}
            <Bell size={20} />
            <span className={styles.notificationBadge}>5</span>
          </button>

          {/* profile */}
          <div className={styles.profileContainer}>
            <button
              type="button"
              onClick={toggleProfileMenu}
              className={styles.profileButton}
              aria-label="Toggle profile menu"
              aria-expanded={isProfileOn}
            >
              {/* user icon */}
              <div className={styles.profileAvatar}>
                <User size={20} />
              </div>
              <ChevronDown size={20} />

              {/* dropdown icon */}
            </button>
            {isProfileOn && (
              <div className={styles.profileMenu}>
                <Link className={styles.profileMenuItem}>Account</Link>
                <Link className={styles.profileMenuItem}>Help Center</Link>
                <hr className={styles.profileMenuDivider} />
                <button className={styles.profileMenuItem}>Sign Out</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
