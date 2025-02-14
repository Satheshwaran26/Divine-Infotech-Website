"use client";

import React, { useEffect, useRef, useState, useMemo } from "react";
import { Link as ScrollLink } from "react-scroll";

interface Section {
  id: string;
  name: string;
}

const CourseNavbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("");
  const navRef = useRef<HTMLDivElement | null>(null);

  // Use useMemo to prevent unnecessary re-renders
  const sections: Section[] = useMemo(() => [
    { id: "about", name: "About" },
    { id: "syllabus", name: "Syllabus" },
    { id: "certificate", name: "Certificate" },
    { id: "benefits", name: "Bonus" },
    { id: "testimony", name: "Testimony" },
    { id: "faq", name: "FAQ" },
  ], []);

  useEffect(() => {
    const handleScroll = (): void => {
      const pageYOffset = window.scrollY;
      let newActiveSection = "";

      sections.forEach(({ id }) => {
        const element = document.getElementById(id);
        if (element) {
          const elementTop = element.offsetTop;
          const elementBottom = elementTop + element.clientHeight;

          if (pageYOffset >= elementTop && pageYOffset < elementBottom) {
            newActiveSection = id;
          }
        }
      });

      if (newActiveSection !== activeSection) {
        setActiveSection(newActiveSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeSection, sections]);

  useEffect(() => {
    if (activeSection && navRef.current) {
      const activeElement = navRef.current.querySelector(
        `[data-section="${activeSection}"]`
      ) as HTMLElement;

      if (activeElement) {
        activeElement.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "center",
        });
      }
    }
  }, [activeSection]);

  return (
    <div className="w-full shadow-sm sticky top-20 bg-[#080808]    border-b-2 border-[#212020] border-t-2 text-md ">
      <nav ref={navRef} className="w-full px-5 md:px-32 overflow-x-auto scrollbar-hide ">
        <ul className="flex whitespace-nowrap md:flex-wrap gap-4 md:gap-8">
          {sections.map(({ id, name }) => (
            <li key={id} className="flex-shrink-0">
              <ScrollLink
                to={id}
                spy={true}
                smooth={true}
                duration={500}
                offset={-70}
                data-section={id}
                className={`block cursor-pointer p-4 font-extralight text-lg text-center text-[#d0d0d0] transition-colors duration-300 ${
                  activeSection === id ? "bg-blue-100 text-semibold" : ""
                }`}
                activeClass="active"
                href={`#${id}`} 
              >
                {name}
              </ScrollLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default CourseNavbar;
