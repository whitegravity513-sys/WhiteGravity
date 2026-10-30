import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import { NAV_LINKS, COMPANY } from "../data/mock";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openSub, setOpenSub] = useState(null);
  const [forceHide, setForceHide] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setOpenSub(null);
    setForceHide(true);
    const timer = setTimeout(() => setForceHide(false), 100);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${scrolled ? "bg-white/95 backdrop-blur-md shadow-md" : "bg-white"}`}>
      <div className="container-x w-full flex items-center justify-between gap-3 px-4 sm:px-6 lg:px-8 py-2.5 sm:py-3 lg:py-3">
        <Link
          to="/"
          onClick={() => {
            setOpen(false);
            setOpenSub(null);
          }}
          className="flex items-center shrink-0 min-w-0 group lg:mr-10 xl:mr-16"
        >
          <img
            src={COMPANY.logo}
            alt="White Gravity"
            className="h-12 sm:h-14 md:h-16 lg:h-16 xl:h-[68px] w-auto max-w-[180px] sm:max-w-[210px] object-contain mix-blend-multiply transition-transform duration-300 group-hover:scale-[1.02]"
          />
        </Link>

        <nav className="hidden lg:flex items-center justify-center flex-1 gap-1 xl:gap-2">
          {NAV_LINKS.map((item) => {
            const linkTarget = item.href || item.to || "/";
            return (
              <div key={item.label} className="relative group">
                <NavLink
                  to={linkTarget}
                  className={({ isActive }) =>
                    `flex items-center justify-center gap-1 px-3 xl:px-4 py-2.5 text-sm xl:text-[15px] font-bold rounded-lg whitespace-nowrap transition-all duration-200 ${
                      isActive ? "text-[#009B6C] bg-[#e6f7f2]" : "text-slate-800 hover:text-[#009B6C] hover:bg-slate-50"
                    }`
                  }
                >
                  {item.label}
                  {item.children && (
                    <ChevronDown className="w-3.5 h-3.5 xl:w-4 xl:h-4 opacity-70 group-hover:rotate-180 transition-transform duration-200" />
                  )}
                </NavLink>

                {item.children && (
                  <div className={`absolute left-0 top-full pt-2 translate-y-1 transition-all duration-200 z-50 ${forceHide ? "hidden" : "opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:translate-y-0"}`}>
                    <div className="min-w-[240px] xl:min-w-[270px] max-w-[320px] bg-white rounded-xl shadow-xl shadow-slate-200/60 border border-slate-100 py-2 overflow-hidden">
                      {item.children.map((c) => (
                        <Link
                          key={c.label}
                          to={c.href || c.to}
                          className="block px-5 py-3 text-sm xl:text-[14.5px] font-semibold text-slate-700 hover:text-[#009B6C] hover:bg-[#e6f7f2] transition-colors duration-200"
                        >
                          {c.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        <div className="flex items-center shrink-0 gap-2 sm:gap-3">
          <a
            href="https://wa.me/14694614710?text=Hello%20White%20Gravity%2C%20I%20would%20like%20to%20book%20consultation."
            target="_blank"
            rel="noopener noreferrer"
            data-tracking="whatsapp"
            data-action="whatsapp_click"
            onClick={() => {
              if (window.dataLayer) {
                window.dataLayer.push({
                  event: 'whatsapp_click',
                  click_location: 'navbar_desktop',
                  whatsapp_number: '14694614710'
                });
              }
            }}
            className="inline-flex items-center justify-center gap-1.5 sm:gap-2 px-2.5 sm:px-4 lg:px-4 xl:px-6 py-1.5 sm:py-2.5 xl:py-3 rounded-full font-extrabold text-[10px] xs:text-[11px] sm:text-sm xl:text-[15px] bg-[#009B6C] text-white whitespace-nowrap shadow-md hover:shadow-lg hover:scale-[1.03] active:scale-95 transition-all duration-200"
          >
            <Phone className="w-3 h-3 sm:w-[18px] sm:h-[18px]" />
            <span className="lg:hidden">Free Consultation</span>
            <span className="hidden lg:inline">Free Consultation</span>
          </a>

          <button
            type="button"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="lg:hidden shrink-0 w-10 h-10 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center text-slate-800 bg-slate-50 border border-slate-200 hover:bg-[#e6f7f2] hover:text-[#009B6C] active:scale-95 transition-all duration-200 cursor-pointer"
          >
            {open ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "calc(100dvh - 72px)", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden absolute left-0 right-0 top-full bg-white border-t border-slate-100 shadow-xl overflow-hidden z-50"
          >
            <div className="h-full overflow-y-auto overscroll-contain touch-pan-y">
              <div className="w-full max-w-2xl mx-auto px-4 sm:px-6 py-4 sm:py-6 pb-10">
                <nav>
                  {NAV_LINKS.map((item) => {
                    const linkTarget = item.href || item.to || "/";
                    return (
                      <div key={item.label} className="border-b border-slate-100 last:border-b-0">
                        <div className="flex items-center justify-between min-h-[52px]">
                          <Link
                            to={linkTarget}
                            className="flex-1 text-slate-800 font-bold text-base sm:text-lg py-3 hover:text-[#009B6C] transition-colors"
                            onClick={() => {
                              if (!item.children) setOpen(false);
                            }}
                          >
                            {item.label}
                          </Link>

                          {item.children && (
                            <button
                              type="button"
                              aria-label={`Toggle ${item.label} submenu`}
                              onClick={() => setOpenSub(openSub === item.label ? null : item.label)}
                              className="w-10 h-10 flex items-center justify-center rounded-lg text-slate-500 hover:bg-[#e6f7f2] hover:text-[#009B6C] transition-colors"
                            >
                              <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${openSub === item.label ? "rotate-180 text-[#009B6C]" : ""}`} />
                            </button>
                          )}
                        </div>

                        <AnimatePresence initial={false}>
                          {item.children && openSub === item.label && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.25 }}
                              className="overflow-hidden"
                            >
                              <div className="ml-2 sm:ml-4 mb-3 pl-3 sm:pl-4 border-l-2 border-[#009B6C]/20 space-y-1">
                                {item.children.map((c) => (
                                  <Link
                                    key={c.label}
                                    to={c.href || c.to}
                                    className="block text-sm sm:text-[15px] font-medium text-slate-600 px-3 py-2.5 rounded-lg hover:text-[#009B6C] hover:bg-[#e6f7f2] transition-colors"
                                    onClick={() => {
                                      setOpen(false);
                                      setOpenSub(null);
                                    }}
                                  >
                                    {c.label}
                                  </Link>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                </nav>

                <div className="pt-5 pb-4">
                  <a
                    href="https://wa.me/14694614710?text=Hello%20White%20Gravity%2C%20I%20would%20like%20to%20book%20consultation."
                    target="_blank"
                    rel="noopener noreferrer"
                    data-tracking="whatsapp"
                    data-action="whatsapp_click"
                    onClick={() => {
                      setOpen(false);
                      if (window.dataLayer) {
                        window.dataLayer.push({
                          event: 'whatsapp_click',
                          click_location: 'navbar_mobile',
                          whatsapp_number: '14694614710'
                        });
                      }
                    }}
                    className="flex items-center justify-center gap-2.5 w-full min-h-[52px] px-5 py-3.5 rounded-full font-extrabold text-sm sm:text-base bg-[#009B6C] text-white shadow-lg hover:bg-[#00885f] active:scale-[0.98] transition-all"
                  >
                    <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                    Free Consultation
                  </a>
                </div>

                <div className="text-center pb-4">
                  <p className="text-xs sm:text-sm text-slate-400">Need help? Let's discuss your project.</p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
