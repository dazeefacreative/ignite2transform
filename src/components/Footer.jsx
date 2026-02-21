import { Icon } from "@iconify/react"
import { useState } from "react"

import logo from "../images/Ignite2Transform vertical.png"

const FooterLinks = [
  { href: "/", label: "Home" },
  { href: "/the_alignment", label: "The Alignment" },
  { href: "/work_with_me", label: "Work With Me" },
  { href: "/podcast", label: "Podcast" },
  { href: "/about", label: "About Us" },
]

const privacyLinks = [
    { href: "/legal", label: "Copyright" },
    { href: "/legal#privacy", label: "Privacy Policy" },
    { href: "/legal#cookies", label: "Cookie Policy" },  
]

export default function Footer(){
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("");
        if (!email) {
            setStatus("Please enter an email.");
            return;
        }
        try {
            const formData = new FormData();
            formData.append("email", email);
            const res = await fetch("https://ignite2transform.com/api/save_email.php", {
                method: "POST",
                body: formData
            });
            const data = await res.json();
            if (data.success) {
                setStatus("Thank you for subscribing!");
                setEmail("");
            } else {
                setStatus(data.error || "Something went wrong.");
            }
        } catch (err) {
            setStatus("Server error. Please try again later.");
        }
    }

    return(
        <footer className="flex flex-col bg-[#F4FEF2] text-[#204839] py-20 px-6 gap-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 justify-between mx-auto px-4 max-w-7xl">
                <div className="lg:col-span-2 flex flex-col gap-2 items-start">
                    <img src={logo} alt="Ignite to Transform Logo" className="w-48 h-auto" />
                    <label className="font-semibold text-brand-green mt-4">Submit email for newsletter</label>
                    <form className="relative" onSubmit={handleSubmit}>
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" className="border border-brand-green rounded-md p-2 w-full max-w-xs" />
                        <button type="submit" className="absolute right-2 top-2 cursor-pointer">
                            <Icon 
                                icon="iconoir:arrow-up-right" 
                                className="text-brand-green bg-brand-yellow p-1 rounded-xs size-6"/>
                        </button>
                    </form>
                    {status && <span className="text-xs mt-2 text-brand-green">{status}</span>}
                </div>
                <div className="flex flex-col gap-2">
                    <span className="font-semibold text-brand-green">Navigation</span>
                    {FooterLinks.map((link) => (
                        <a key={link.label} href={link.href} className="text-sm hover:text-brand-green transition-colors duration-200">
                            {link.label}
                        </a>
                    ))}
                </div>
                <div className="flex flex-col gap-2">
                    <span className="font-semibold text-brand-green">Location</span>
                    <span className="text-sm no-underline">United Kingdom</span>
                    <span className="mt-4 font-semibold text-brand-green">Email</span>
                    <span className="text-sm no-underline">info@ignite2transform.com</span>
                </div>
                <div className="flex flex-col gap-2">
                    <span className="font-semibold text-brand-green">Location</span>
                    {privacyLinks.map((link) => (
                        <a key={link.label} href={link.href} className="text-sm hover:text-brand-green transition-colors duration-200">
                            {link.label}
                        </a>
                    ))}
                </div>
                <div>
                    <p>Follow us on social media and be part of our stories.</p>
                    <div className="flex gap-4 mt-2">
                        <a href="https://www.instagram.com/teamalignmentnow" target="_blank" rel="noopener noreferrer" className="text-brand-green hover:text-brand-green-hover transition-colors duration-200">
                            <Icon icon="iconoir:instagram" className="size-6" />
                        </a>
                        <a href="https://www.linkedin.com/in/igboegwu-okwum/" target="_blank" rel="noopener noreferrer" className="text-brand-green hover:text-brand-green-hover transition-colors duration-200">
                            <Icon icon="iconoir:linkedin" className="size-6" />
                        </a>
                        <a href="https://www.youtube.com/@theteamalignmentpodcast" target="_blank" rel="noopener noreferrer" className="text-brand-green hover:text-brand-green-hover transition-colors duration-200">
                            <Icon icon="iconoir:youtube" className="size-6" />
                        </a>
                    </div>
                </div>
            </div>
            <p className="text-center text-sm font-light">© {new Date().getFullYear()} Ignite to Transform. All rights reserved.</p>
        </footer>
    )
}