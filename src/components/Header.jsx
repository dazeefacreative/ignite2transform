import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";


const links = [
    { href: "/", label: "Home" },
    { href: "/the_alignment", label: "The Alignment", dropdown: [
        { href: "https://alignandthrive.app", label: "Align & Thrive Assesment" },
        { href: "https://www.feedbackyes.com/", label: "FeedbackYes AI" },
        { href: "/the_alignment/#why_alignment", label: "Why Alignment" },
        { href: "/the_alignment/#how_we_work", label: "How We Work" },
        { href: "/the_alignment/#misaligned_book", label: "Misaligned Book" },
    ] },
    { href: "/work_with_me", label: "Work With Me" },
    { href: "/podcast", label: "Podcast" },
    { href: "/about", label: "About Us" },
];

import igniteLogo from "../images/Ignite2Transform vertical.png"

export default function Header() {     
    const [open, setOpen] = useState(false);
    
  // determine current path
  const currentPath =
    typeof window !== "undefined" ? window.location.pathname : "/";


  const isLinkActive = (href) => {
    if (!href) return false;
    if (href === "/") return currentPath === "/";
    return currentPath === href || currentPath.startsWith(href + "/");
  };


    return (
        <header className="fixed top-0 left-0 w-full z-50">
            <nav className="lg:px-[100px] md:px-[30px] px-[20px] py-5 flex justify-between bg-white items-center transition-all duration-300">
                <a className="w-full max-w-[170px]" href="/">
                    <img className="" src={igniteLogo} />
                </a>

                {/* Desktop Nav */}
                <div className="hidden md:flex flex-grow justify-end items-center lg:gap-10 md:gap-4 gap-2 font-body text-[16px] text-brand-green">
                {links.map((l) => {
                    const isActive = isLinkActive(l.href);
                    const showArrow = l.label === "The Alignment";
                    const [dropdownOpen, setDropdownOpen] = useState(false);
                    if (l.dropdown) {
                        return (
                            <div
                                key={l.label}
                                className="relative group"
                                onMouseEnter={() => setDropdownOpen(true)}
                                onMouseLeave={() => setDropdownOpen(false)}
                            >
                                <a
                                    href={l.href}
                                    className={`text-sm flex items-center gap-1 ${isActive ? "text-brand-green" : "text-black"} transition-colors duration-200 hover:opacity-60`}
                                >
                                    {l.label}
                                    <Icon icon={dropdownOpen ? "iconoir:arrow-down-right" : "iconoir:arrow-up-right"} />
                                </a>
                                <div
                                    className={`absolute p-1 flex flex-col left-0 top-full mt-2 min-w-[180px] bg-white shadow-lg rounded-md border border-gray-100 z-50 transition-all duration-200 ${dropdownOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
                                >
                                    {l.dropdown.map((item) => (
                                        <a
                                            key={item.label}
                                            href={item.href}
                                            className="block px-4 py-2 text-nowrap text-sm text-gray-700 hover:bg-brand-green hover:text-white rounded-md transition-colors duration-150"
                                        >
                                            {item.label}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        );
                    }
                    return (
                        <a
                            key={l.label}
                            href={l.href}
                            className={`text-sm flex items-center gap-1 ${isActive ? "text-brand-green" : "text-black"} transition-colors duration-200 hover:opacity-60`}
                        >
                            {l.label}
                            {showArrow && (
                                <Icon icon="iconoir:arrow-up-right" />
                            )}
                        </a>
                    );
                })}
                <a href="mailto:info@igniteto2transform" className="flex text-sm text-white gap-2 bg-black pl-3 p-1 rounded-md items-center transition-colors duration-200 hover:bg-gray-600">
                 Contact <Icon icon="iconoir:arrow-up-right" className="text-brand-green bg-brand-yellow p-1 rounded-sm size-6 btn" />
                </a>
                </div>

                {/* Mobile Controls */}
                <div className="md:hidden flex items-center gap-4">

                    <button
                        className="p-4 text-brand-green"
                        onClick={() => setOpen(!open)}
                        aria-label="Toggle Menu"
                    >
                        <Icon
                        className=" w-6 h-6 "
                        icon={
                            open
                            ? "line-md:menu-to-close-alt-transition"
                            : "line-md:close-to-menu-transition"
                        }
                        />
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            <div
                className={`md:hidden fixed inset-0 z-40 bg-white transition-all duration-300 ${
                open ? "flex" : "hidden"
                }`}
            >
                <div className="w-full p-5 flex flex-col items-center">
                    <div className="flex self-end mb-20 p-4">
                        <Icon
                        icon="line-md:menu-to-close-alt-transition"
                        className="w-6 h-6 text-brand-green cursor-pointer"
                        onClick={() => setOpen(false)}
                        />
                    </div>

                    {links.map((l) => {
                        if (l.dropdown) {
                            const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
                            return (
                                <div key={l.label} className="w-full flex flex-col items-center">
                                    <button
                                        type="button"
                                        onClick={() => setMobileDropdownOpen((v) => !v)}
                                        className={`py-3 text-2xl flex items-center gap-2 w-full justify-center ${isLinkActive(l.href) ? "text-brand-green" : "text-black"}`}
                                    >
                                        {l.label}
                                        <Icon icon="iconoir:nav-arrow-right" />
                                    </button>
                                    {mobileDropdownOpen && (
                                        <div className="flex flex-col w-full ml-[10px] items-center">
                                            {l.dropdown.map((item) => (
                                                <a
                                                    key={item.label}
                                                    href={item.href}
                                                    onClick={() => setOpen(false)}
                                                    className="py-2 text-lg text-brand-blue hover:text-brand-green transition-colors duration-150"
                                                >
                                                    {item.label}
                                                </a>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            );
                        }
                        return (
                            <a
                                key={l.label}
                                href={l.href}
                                onClick={() => setOpen(false)}
                                className={`py-3 text-2xl w-full text-center ${
                                    isLinkActive(l.href)
                                        ? "text-brand-green"
                                        : "text-black"
                                }`}
                            >
                                {l.label}
                            </a>
                        );
                    })}
                    <a href="https://calendar.app.google/FAq3GDmqFkhffqxH7"                     
                    className={`py-3 text-2xl ${
                            isLinkActive("/book-free-session")
                            ? "text-brand-green"
                            : "text-black"
                        }`}>
                        Book free session
                    </a>
                    <a href="https://amzn.eu/d/fQt1Ma1" target="_blank" className="mt-28 inline-flex justify-center text-2xl items-center text-white gap-4 bg-brand-green pl-3 p-1 rounded-md transition-colors duration-200 hover:opacity-60">
                    Get the book <Icon icon="iconoir:arrow-up-right" className="text-brand-green bg-brand-yellow p-1 rounded-sm size-8" />
                    </a>
                </div>
            </div>
        
        </header>

    );
}