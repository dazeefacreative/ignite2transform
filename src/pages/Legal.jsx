import { useState } from "react";
import CookieBanner from "../components/Cookies";

const legal = {
  copyright: {
    title: "Copyright Notice",
    lastUpdated: "2026-02-10",
    content: [
      "All content on this website, including text, graphics, logos, images, videos, and software, is the property of Ignite2Transform or its licensors and is protected by copyright and intellectual property laws.",
      "You may view, download, and print pages for your personal and non commercial use only.",
      "You must not reproduce, duplicate, copy, sell, resell, or exploit any material on this website for commercial purposes without prior written consent from Ignite2Transform.",
      "Ignite2Transform and its logo are registered or unregistered trademarks of Ignite2Transform. Any unauthorised use is strictly prohibited."
    ]
  },
  privacyPolicy: {
    title: "Privacy Policy",
    lastUpdated: "2026-02-10",
    sections: [
      {
        heading: "Introduction",
        content: "Ignite2Transform is committed to protecting your privacy. This policy explains how we collect, use, and safeguard your personal information."
      },
      {
        heading: "Information We Collect",
        content: "We may collect personal information such as your name, email address, organisation, and any information you voluntarily provide through contact forms, subscriptions, or consultations."
      },
      {
        heading: "How We Use Your Information",
        content: "Your information is used to provide our services, respond to enquiries, improve our offerings, send updates, and comply with legal obligations."
      },
      {
        heading: "Data Sharing",
        content: "We do not sell, trade, or rent your personal information to third parties. We may share data with trusted service providers who assist us in operating the website, subject to confidentiality obligations."
      },
      {
        heading: "Data Security",
        content: "We implement appropriate technical and organisational measures to protect your personal information from unauthorised access, alteration, disclosure, or destruction."
      },
      {
        heading: "Your Rights",
        content: "You have the right to request access, correction, or deletion of your personal data. You may also withdraw consent at any time."
      },
      {
        heading: "Contact",
        content: "If you have any questions about this Privacy Policy, please contact Ignite2Transform via the contact details provided on this website."
      }
    ]
  },
  cookiePolicy: {
    title: "Cookie Policy",
    lastUpdated: "2026-02-10",
    sections: [
      {
        heading: "What Are Cookies",
        content: "Cookies are small text files stored on your device to improve your browsing experience and analyse website usage."
      },
      {
        heading: "How We Use Cookies",
        content: "Ignite2Transform uses cookies to remember user preferences, understand website traffic, and enhance site performance."
      },
      {
        heading: "Types of Cookies We Use",
        content: "We may use essential cookies for site functionality, analytics cookies to understand visitor behaviour, and marketing cookies for promotional purposes."
      },
      {
        heading: "Managing Cookies",
        content: "You can control and delete cookies through your browser settings. Disabling cookies may affect website functionality."
      },
      {
        heading: "Updates to This Policy",
        content: "We may update this Cookie Policy from time to time. Changes will be posted on this page with an updated revision date."
      }
    ]
  }
};

export default function Legal() {
  const [showCookie, setShowCookie] = useState(false)

  return (
    <main className="mt-20">

      <section className="flex flex-col justify-center items-center md:gap-10 gap-6  mx-auto max-w-5xl p-12 md:rounded-xl">
          {/* LEGAL NOTICE */}
          {legal?.copyright && (
            <div 
            id="legal"
            className="mb-16 scroll-mt-32">
              <h2 className="reveal-up text-brand-green text-2xl font-heading mb-4">
                Copyright Policy
              </h2>
              <div className="flex flex-col gap-4">
                <span className="reveal-up italic text-sm">Last Updated: {legal.copyright.lastUpdated}</span>
                {legal.copyright.content.map((paragraph, index) => (
                  <p key={index} className="reveal-up  text-justify leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          )}
          {/* PRIVACY POLICY */}
          {legal?.privacyPolicy && (
            <div 
              id="privacy"
              className="mb-16 scroll-mt-32">
              <h2 className="reveal-up text-brand-green text-2xl font-heading mb-4">
                Privacy Policy
              </h2>
              <div className="flex flex-col gap-4">
                <span className="reveal-up italic text-sm">Last Updated: {legal.privacyPolicy.lastUpdated}</span>
                {legal.privacyPolicy.sections.map((section, index) => (
                  <div key={index}>
                  <span className="reveal-up font-semibold">{section.heading}</span> 
                  <p className="reveal-up text-justify leading-relaxed">
                    {section.content}
                  </p>
                  </div>
                ))}
              </div>
            </div>
          )}
          {/* COOKIE POLICY */}
          {legal?.cookiePolicy && (
            <div
            className="scroll-mt-32"
            id="cookies">
              <h2 className="reveal-up text-brand-green text-2xl font-heading mb-4">
                Cookies Policy
              </h2>
              <div className="flex flex-col gap-4">
                <span className="reveal-up italic text-sm">Last Updated: {legal.cookiePolicy.lastUpdated}</span>
                {legal.cookiePolicy.sections.map((section, index) => (
                  <div key={index}>
                    <span className="reveal-up font-semibold">{section.heading}</span>
                    <p className="reveal-up text-justify leading-relaxed">
                      {section.content}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
            <button 
            onClick={()=> setShowCookie(true)} 
            className="mt-10 border border-gray-500 py-2 px-4 rounded-md hover:bg-gray-100 cursor-pointer">
              Manage cookie preferences
            </button>
            {showCookie && <CookieBanner forceOpen/>}

      </section>
    </main>
  );
}
