import { useEffect, useState } from "react";

const scrollOffset = (navH) => Math.max(navH + 12, window.innerHeight * 0.12);

export function SiteNav({ items }) {
  const [active, setActive] = useState("");

  useEffect(() => {
    if (!items.length) return;

    const onScroll = () => {
      const navEl = document.querySelector(".section-nav");
      const navH = navEl ? navEl.offsetHeight : 0;
      const y = window.scrollY + scrollOffset(navH);
      if (window.scrollY < 48) {
        setActive("");
        return;
      }
      let current = "";
      for (const { id } of items) {
        const el = document.getElementById(id);
        if (!el) continue;
        const top = el.getBoundingClientRect().top + window.scrollY;
        if (top <= y) {
          current = id;
        }
      }
      setActive(current);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [items]);

  const goTo = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (!el) return;
    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollIntoView({ block: "start", behavior: reduce ? "auto" : "smooth" });
    if (window.history?.replaceState) {
      window.history.replaceState(null, "", `#${id}`);
    }
  };

  if (!items.length) return null;

  return (
    <nav className="section-nav" aria-label="On this page" id="in-page-toc">
      <div className="section-nav__inner">
        {items.map(({ id, label }) => (
          <a
            key={id}
            href={`#${id}`}
            className={`section-nav__link ${active === id ? "is-active" : ""}`}
            onClick={(e) => goTo(e, id)}
            aria-current={active === id ? "true" : undefined}
          >
            {label}
          </a>
        ))}
      </div>
    </nav>
  );
}
