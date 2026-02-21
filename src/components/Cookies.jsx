import { useState, useEffect } from "react";
import { LuCookie } from "react-icons/lu";
import { IoCloseOutline } from "react-icons/io5";
import { CiLock } from "react-icons/ci";
import { FaCircleCheck, FaCircle } from "react-icons/fa6";

export function hasConsent(key) {
  const stored = localStorage.getItem("cookieConsent");
  if (!stored) return false;
  try {
    const consent = JSON.parse(stored);
    return !!consent[key];
  } catch {
    return false;
  }
}

export default function CookieBanner({ forceOpen = false }) {
  const defaultChoices = {
    necessary: true,
    analytics: false,
    functional: false,
    marketing: false,
  };

  const [visible, setVisible] = useState(false);
  const [showCustom, setShowCustom] = useState(false);
  const [cookieChoices, setCookieChoices] = useState(defaultChoices);

  const runScriptsBasedOnConsent = (consent) => {
  if (consent.analytics && typeof window !== "undefined") {
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () {
      window.dataLayer.push(arguments);
    };
    window.gtag("js", new Date());
    window.gtag("config", "G-XXXXXXXXXX");
  }

  if (consent.marketing && typeof window !== "undefined") {
    if (!window.fbq) {
      (function (f, b, e, v, n, t, s) {
        f.fbq = f.fbq || function () {
          (f.fbq.q = f.fbq.q || []).push(arguments);
        };
        n = b.createElement(e);
        t = b.getElementsByTagName(e)[0];
        n.async = 1;
        n.src = v;
        t.parentNode.insertBefore(n, t);
      })(window, document, "script", "https://connect.facebook.net/en_US/fbevents.js");
    }
    if (window.fbq) {
      window.fbq?.("init", "YOUR_PIXEL_ID");
      window.fbq?.("track", "PageView");
    }
  }

  if (consent.functional) {
    const theme = localStorage.getItem("theme") || "light";
    document.body.classList.add(theme);
  }
};


  useEffect(() => {
    const stored = localStorage.getItem("cookieConsent");

    // If manually opened from Legal page
    if (forceOpen) {
      if (stored) {
        try {
          setCookieChoices(JSON.parse(stored));
        } catch {}
      }
      setVisible(true);
      setShowCustom(true);
      return;
    }

    // Normal automatic behaviour
    if (!stored) {
      setVisible(true);
      return;
    }

    try {
      const consent = JSON.parse(stored);
      setCookieChoices(consent);
      runScriptsBasedOnConsent(consent);
      setVisible(false);
    } catch {
      setVisible(true);
    }
  }, [forceOpen]);


  const saveConsent = (choices) => {
    localStorage.setItem("cookieConsent", JSON.stringify(choices));
    setCookieChoices(choices);
    runScriptsBasedOnConsent(choices);
    setVisible(false);
  };

  const acceptAllCookies = () => {
    saveConsent({
      necessary: true,
      analytics: true,
      functional: true,
      marketing: true,
    });
    window.location.reload();
  };

  const rejectAllCookies = () => {
    saveConsent({
      necessary: true,
      analytics: false,
      functional: false,
      marketing: false,
    });
  };

  const confirmChoices = () => {
    saveConsent(cookieChoices);
    window.location.reload();
  };

  const toggleCookie = (key) =>
    setCookieChoices((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));

  if (!visible) return null;

  console.log(cookieChoices)

  return (
    <>
      {showCustom ? (
        <div className="fixed sm:bottom-2 bottom-0 left-1/2 -translate-x-1/2 z-50 w-full max-w-[980px] rounded-[10px] bg-white px-5 py-4 text-black shadow-lg">
          <IoCloseOutline
            onClick={() => setVisible(false)}
            className="absolute right-1 top-1 w-6 h-6 cursor-pointer p-1"
          />

          <div className="flex flex-col divide-y divide-gray-300">
            <div className="py-2">
              <h4 className="text-base">We use cookies to improve your experience</h4>
              <p className="text-xs max-w-[600px]">
                This website uses cookies to enhance site navigation, analyse usage, and assist in our marketing efforts. See our{" "}
                <a className="text-black underline font-bold" href="/legal#cookies">Cookie Policy</a> and{" "}
                <a className="text-black underline font-bold" href="/legal#privacy">Privacy Policy</a>.
              </p>
            </div>

            <CookieOption
              label="Strictly necessary cookies"
              description="These cookies are essential for the website to function and cannot be switched off in our system."
              locked
            />

            <CookieOption
              label="Analytics cookies"
              description="Help us understand how visitors interact with the website by collecting and reporting information anonymously."
              value={cookieChoices.analytics}
              onToggle={() => toggleCookie("analytics")}
            />

            <CookieOption
              label="Functional cookies"
              description="Enable enhanced functionality and personalisation, such as remembering your preferences."
              value={cookieChoices.functional}
              onToggle={() => toggleCookie("functional")}
            />

            <CookieOption
              label="Marketing cookies"
              description="Used to deliver advertisements more relevant to you and your interests."
              value={cookieChoices.marketing}
              onToggle={() => toggleCookie("marketing")}
            />

            <div className="flex gap-3 py-2 justify-end">
              <button
                className="text-sm underline text-gray-700 hover:text-gray-900"
                onClick={rejectAllCookies}
              >
                Reject All
              </button>

              <button
                className="rounded-[10px] border border-gray-500 px-4 py-2 text-sm hover:border-gray-900 hover:bg-gray-100"
                onClick={acceptAllCookies}
              >
                Accept All
              </button>

              <button
                className="rounded-[10px] bg-gray-200 px-4 py-2 text-sm hover:bg-gray-300"
                onClick={confirmChoices}
              >
                Confirm Choices
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="fixed sm:bottom-2 bottom-0 left-1/2 -translate-x-1/2 z-50 w-full max-w-[980px] rounded-[10px] bg-white px-5 py-4 text-black shadow-lg flex flex-col gap-2 sm:gap-8 md:flex-row justify-between items-center">
          <IoCloseOutline
            onClick={() => setVisible(false)}
            className="absolute top-1 right-1 w-6 h-6 cursor-pointer p-1"
          />

          <div className="flex gap-2">
            <LuCookie className="w-6 h-6" />
            <div className="max-w-[600px]">
              <h4 className="text-base">We use cookies to improve your experience</h4>
              <p className="text-sm">
                This website uses cookies to enhance site navigation, analyse usage, and assist in our marketing efforts.
              </p>
            </div>
          </div>

          <div className="flex gap-3 justify-end">
            <button
              className="text-sm underline text-gray-700 hover:text-gray-900"
              onClick={() => setShowCustom(true)}
            >
              Customise
            </button>

            <button
              className="rounded-[10px] border border-gray-500 px-4 py-2 text-sm hover:border-gray-900 hover:bg-gray-100"
              onClick={rejectAllCookies}
            >
              Reject
            </button>

            <button
              className="rounded-[10px] bg-gray-200 px-4 py-2 text-sm hover:bg-gray-300"
              onClick={acceptAllCookies}
            >
              Accept
            </button>
          </div>
        </div>
      )}
    </>
  );
}

function CookieOption({ label, description, value, onToggle, locked }) {
  return (
    <div className="flex items-center justify-between gap-2 py-2">
      <div className="max-w-[600px]">
        <span className="text-sm">{label}</span>
        <p className="text-xs">{description}</p>
      </div>
      {locked ? (
        <div className="p-2 px-5 bg-gray-300 rounded-md">
          <CiLock />
        </div>
      ) : (
        <div
          onClick={onToggle}
          className={`p-1 rounded-md text-white transition-all duration-500 cursor-pointer ${
            value ? "bg-gray-800 pl-7" : "bg-gray-300 pr-7"
          }`}
        >
          <FaCircle className={`${value ? "hidden" : ""} w-6 h-6`} />
          <FaCircleCheck className={`${value ? "" : "hidden"} w-6 h-6`} />
        </div>
      )}
    </div>
  );
}
