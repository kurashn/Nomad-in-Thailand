"use client";

import React, { useEffect } from "react";
import { usePathname } from "next/navigation";
import { Link } from '@/i18n/routing';

export default function CtcHeader() {
  const pathname = usePathname();
  const isTopPage = pathname === "/" || pathname === "/ja" || pathname === "/en";

  useEffect(() => {
    // Header shrink on scroll (always shrunk on subpages)
    const handleScroll = () => {
      const header = document.getElementById("header");
      if (header) {
        if (!isTopPage) {
          header.classList.add("scrolled");
        } else {
          header.classList.toggle("scrolled", window.scrollY > 40);
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    // Run once on mount
    handleScroll();

    // Hamburger Menu
    const hamburger = document.querySelector(".hamburger");
    const mobileMenu = document.querySelector(".mobile-menu");
    const mobileLinks = document.querySelectorAll(".mobile-link");

    const toggleMenu = () => {
      if (hamburger && mobileMenu) {
        hamburger.classList.toggle("is-active");
        mobileMenu.classList.toggle("is-active");
        document.body.classList.toggle("no-scroll");
      }
    };

    const closeMenu = () => {
      if (hamburger && mobileMenu) {
        hamburger.classList.remove("is-active");
        mobileMenu.classList.remove("is-active");
        document.body.classList.remove("no-scroll");
      }
    };

    if (hamburger) {
      hamburger.addEventListener("click", toggleMenu);
    }

    if (mobileLinks) {
      mobileLinks.forEach(link => {
        link.addEventListener("click", closeMenu);
      });
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (hamburger) hamburger.removeEventListener("click", toggleMenu);
      if (mobileLinks) {
        mobileLinks.forEach(link => link.removeEventListener("click", closeMenu));
      }
    };
  }, []);

  return (
    <>
      {/* HEADER */}
      <header className={`header${!isTopPage ? ' header--subpage' : ''}`} id="header">
        <div className="header-inner">
          <Link href="/" className="header-logo" aria-label="Chiang Mai Run Club トップページへ">
            <img src="/ctc-assets/cmrlogo.webp" alt="Chiang Mai Run Club" style={{ height: '80px', width: 'auto', objectFit: 'contain' }} />
          </Link>
          <nav className="nav" aria-label="メインナビゲーション">
            <Link href="/#community">コミュニティについて</Link>
            <Link href="/#activities">活動内容</Link>
            <Link href="/#flow">参加の流れ</Link>
            <Link href="/blog">タイ生活情報</Link>
            <Link href="/#faq">よくある質問</Link>
          </nav>
          <a className="header-cta" href="https://lin.ee/WYck3Sx" target="_blank" rel="noopener noreferrer">
            <span>まずはLINEで情報を受け取る</span>
          </a>

          {/* Hamburger Button */}
          <button className="hamburger" aria-label="メニューを開く">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <nav className="mobile-menu">
        <ul className="mobile-menu-list">
          <li><Link href="/#community" className="mobile-link">コミュニティについて</Link></li>
          <li><Link href="/#activities" className="mobile-link">活動内容</Link></li>
          <li><Link href="/#flow" className="mobile-link">参加の流れ</Link></li>
          <li><Link href="/blog" className="mobile-link">タイ生活情報</Link></li>
          <li><Link href="/#faq" className="mobile-link">よくある質問</Link></li>
          <li><Link href="/#line" className="mobile-link line-btn">まずはLINEで情報を受け取る</Link></li>
        </ul>
      </nav>
    </>
  );
}
