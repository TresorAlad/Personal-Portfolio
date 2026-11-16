import { useEffect, useState } from "react";
import { siteConfig } from "../data/portfolio-data";

const navLinks = [
  { href: "#about", label: "About Me" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#certifications", label: "Certifications" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  function closeMenu() {
    setIsMenuOpen(false);
  }

  function toggleMenu() {
    setIsMenuOpen((open) => !open);
  }

  return (
    <header
      className={`header ${isMenuOpen ? "nav-open" : ""}`.trim()}
      id="header"
    >
      <div className="blob-animate" />
      <nav className="nav container">
        <a href="#" className="nav__logo" onClick={closeMenu}>
          {siteConfig.brand}
        </a>

        <button
          type="button"
          className="nav__toggle"
          onClick={toggleMenu}
          aria-expanded={isMenuOpen}
          aria-controls="nav-menu"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          <i className={isMenuOpen ? "ri-close-line" : "ri-menu-line"} />
        </button>

        <div
          id="nav-menu"
          className={`nav__menu ${isMenuOpen ? "nav__menu_show" : ""}`.trim()}
        >
          <ul className="nav__list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="nav__link" onClick={closeMenu}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}