import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { whatsappLink } from "./data";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/products", label: "Products" },
  { to: "/celebration-cakes", label: "Celebration Cakes" },
  { to: "/corporate-gifting", label: "Corporate" },
  { to: "/blog", label: "Journal" },
  { to: "/contact", label: "Contact" },
] as const;

export function Nav({ transparentOnTop = false }: { transparentOnTop?: boolean }) {
  const [scrolled, setScrolled] = useState(!transparentOnTop);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!transparentOnTop) return;
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [transparentOnTop]);

  const solid = scrolled || open;

  return (
    <header
      className={
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 " +
        (solid
          ? "glass border-b border-border/60"
          : "bg-transparent")
      }
    >
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12 flex items-center justify-between h-20">
        <Link to="/" className="flex items-center gap-2">
          <span
            className={
              "font-display text-2xl tracking-tight transition-colors " +
              (solid ? "text-cocoa" : "text-cream")
            }
          >
            Shahad
          </span>
          <span
            className={
              "font-button text-[10px] mt-1 transition-colors " +
              (solid ? "text-honey" : "text-cream/80")
            }
          >
            Bakes
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-9">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={
                "font-button text-[11px] transition-colors hover:text-honey " +
                (solid ? "text-cocoa/80" : "text-cream/90")
              }
              activeProps={{ className: "text-honey" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noreferrer"
            className={
              "hidden md:inline-flex font-button text-[11px] px-5 py-3 rounded-full transition-all duration-300 " +
              (solid
                ? "bg-cocoa text-background hover:bg-honey"
                : "bg-cream text-cocoa hover:bg-honey hover:text-background")
            }
          >
            Order Now
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            className={"lg:hidden p-2 " + (solid ? "text-cocoa" : "text-cream")}
            aria-label="Menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden glass border-t border-border/60 px-6 py-6 flex flex-col gap-5">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className="font-button text-xs text-cocoa"
            >
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
