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
          <Link href="/" className="header-logo" aria-label="TOTONOI THAI トップページへ">
            <img src="/character/totonoi-logo.png" alt="TOTONOI THAI" style={{ height: '64px', width: 'auto', objectFit: 'contain' }} />
          </Link>
          <nav className="nav" aria-label="メインナビゲーション">
            <Link href="/blog">記事一覧</Link>
            <Link href="/blog?category=visa">ビザ・手続き</Link>
            <Link href="/blog?category=money">お金・税金</Link>
            <Link href="/blog?category=living">生活情報</Link>
            <Link href="/nomad-info/dtv-visa">DTVビザガイド</Link>
          </nav>
          <a className="header-cta" href="https://lin.ee/WYck3Sx" target="_blank" rel="noopener noreferrer">
            <span>LINEで最新情報を受け取る</span>
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
          <li><Link href="/blog" className="mobile-link">記事一覧</Link></li>
          <li><Link href="/blog?category=visa" className="mobile-link">ビザ・手続き</Link></li>
          <li><Link href="/blog?category=money" className="mobile-link">お金・税金</Link></li>
          <li><Link href="/blog?category=living" className="mobile-link">生活情報</Link></li>
          <li><Link href="/nomad-info/dtv-visa" className="mobile-link">DTVビザガイド</Link></li>
          <li><a href="https://lin.ee/WYck3Sx" target="_blank" rel="noopener noreferrer" className="mobile-link line-btn">LINEで最新情報を受け取る</a></li>
        </ul>
      </nav>
    </>
  );
}
