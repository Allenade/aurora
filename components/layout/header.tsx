"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";
import { ChevronDown } from "@/components/icons/chevron-down";
import { HEADER_OPTIONS, type HeaderOptionItem } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { AuroraLogo } from "./aurora-logo";
import { JoinUsButton } from "./join-us-button";

const getMenuPanelId = (name: string) =>
  `${name.toLowerCase().replace(/\s+/g, "-")}-panel`;

const Header = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const pathname = usePathname();

  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openChildMenus, setOpenChildMenus] = useState<Record<string, boolean>>(
    {},
  );

  const activeMenu = useMemo(
    () => HEADER_OPTIONS.find((option) => option.name === openMenu) ?? null,
    [openMenu],
  );

  useEffect(() => {
    if (!openMenu && !isMobileMenuOpen) return;

    const handlePointerDown = (event: PointerEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) {
        setOpenMenu(null);
        setIsMobileMenuOpen(false);
        setOpenChildMenus({});
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpenMenu(null);
        setIsMobileMenuOpen(false);
        setOpenChildMenus({});
      }
    };

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isMobileMenuOpen, openMenu]);

  useEffect(() => {
    const handleResize = () => {
      setOpenMenu(null);
      setOpenChildMenus({});
      if (window.innerWidth >= 1024) setIsMobileMenuOpen(false);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const normalizeRoute = (route?: string) => {
    if (!route) return "";
    return route !== "/" && route.endsWith("/") ? route.slice(0, -1) : route;
  };

  const isRouteActive = (route?: string) => {
    const normalizedRoute = normalizeRoute(route);
    const normalizedPathname = normalizeRoute(pathname);
    if (!normalizedRoute) return false;
    if (normalizedRoute === "/") return normalizedPathname === "/";
    return normalizedPathname.startsWith(normalizedRoute);
  };

  const isMenuItemActive = (item: HeaderOptionItem): boolean => {
    if (isRouteActive(item.route)) return true;
    return Boolean(item.children?.some((child) => isMenuItemActive(child)));
  };

  const isOptionActive = (option: (typeof HEADER_OPTIONS)[number]) => {
    if (isRouteActive(option.route)) return true;
    return option.options.some((item) => isMenuItemActive(item));
  };

  const handleNavigate = (route?: string) => {
    setOpenMenu(null);
    setIsMobileMenuOpen(false);
    setOpenChildMenus({});
    if (route) router.push(route);
  };

  const toggleChildMenu = (name: string) => {
    setOpenChildMenus((current) => ({
      ...current,
      [name]: !current[name],
    }));
  };

  const renderMenuItem = (item: HeaderOptionItem, isNested = false) => {
    const hasChildren = Boolean(item.children?.length);
    const isExpanded = openChildMenus[item.name];
    const isActive = isMenuItemActive(item);

    return (
      <div key={item.name} className="w-full">
        <button
          type="button"
          className={cn(
            "flex w-full items-center gap-3 rounded-lg px-4 py-3 text-left font-sans text-sm font-medium uppercase tracking-wide text-white/90 transition-colors hover:bg-white/10 hover:text-aurora-lime",
            isNested && "pl-8",
            isActive && "text-aurora-lime",
          )}
          onClick={() => {
            if (hasChildren) {
              toggleChildMenu(item.name);
              return;
            }
            handleNavigate(item.route);
          }}
        >
          <span className="min-w-0 flex-1 truncate">{item.name}</span>
          {hasChildren && (
            <ChevronDown
              className={cn(
                "size-4 shrink-0 transition-transform duration-300",
                isExpanded && "rotate-180",
              )}
            />
          )}
        </button>

        {hasChildren && isExpanded && (
          <div className="mt-1 flex flex-col gap-1">
            {item.children?.map((child) => renderMenuItem(child, true))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div
      ref={containerRef}
      className="pointer-events-none fixed inset-x-0 top-0 z-50 px-2 pt-4 sm:px-6 sm:pt-6 lg:px-8"
    >
      <div className="relative mx-auto max-w-[1813px] pointer-events-auto">
        <div
          className={cn(
            "flex h-16 items-center justify-between gap-4 overflow-hidden rounded-2xl border border-white/10 bg-[rgba(250,250,250,0.15)] px-5 shadow-[0_8px_32px_rgba(0,0,0,0.24)] backdrop-blur-md transition-shadow duration-200 sm:h-[72px] sm:gap-6 sm:px-8 lg:h-20 lg:px-10",
            isScrolled && "shadow-[0_12px_40px_rgba(0,0,0,0.45)]",
          )}
        >
          <AuroraLogo variant="header" />

          <nav
            className="hidden flex-1 items-center justify-center gap-10 lg:flex xl:gap-14 2xl:gap-20"
            aria-label="Primary"
          >
            {HEADER_OPTIONS.map((option) => {
              const isOpen = openMenu === option.name;
              const isActive = isOptionActive(option);

              if (option.options.length > 0) {
                return (
                  <button
                    key={option.name}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={getMenuPanelId(option.name)}
                    className={cn(
                      "group flex items-center gap-1 whitespace-nowrap font-sans text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:text-aurora-lime lg:text-base",
                      isActive && "text-aurora-lime",
                    )}
                    onClick={() =>
                      setOpenMenu((current) =>
                        current === option.name ? null : option.name,
                      )
                    }
                  >
                    {option.name}
                    <ChevronDown
                      className={cn(
                        "size-4 transition-transform duration-300 xl:size-5",
                        isOpen && "rotate-180",
                      )}
                    />
                  </button>
                );
              }

              return (
                <button
                  key={option.name}
                  type="button"
                  className={cn(
                    "whitespace-nowrap font-sans text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:text-aurora-lime lg:text-base",
                    isActive && "text-aurora-lime",
                  )}
                  onClick={() => handleNavigate(option.route)}
                >
                  {option.name}
                </button>
              );
            })}
          </nav>

          <div className="hidden shrink-0 lg:block">
            <JoinUsButton compact />
          </div>

          <button
            type="button"
            className="flex size-10 shrink-0 items-center justify-center rounded-lg border border-white/20 text-white lg:hidden"
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-navigation-panel"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            onClick={() => {
              setIsMobileMenuOpen((current) => !current);
              setOpenMenu(null);
              setOpenChildMenus({});
            }}
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              aria-hidden="true"
            >
              {isMobileMenuOpen ? (
                <path
                  d="M4 4L14 14M14 4L4 14"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              ) : (
                <path
                  d="M2 5H16M2 9H16M2 13H16"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              )}
            </svg>
          </button>
        </div>

        {activeMenu && (
          <div
            id={getMenuPanelId(activeMenu.name)}
            className="absolute inset-x-0 top-[calc(100%+0.5rem)] hidden overflow-hidden rounded-2xl border border-white/10 bg-[#111111]/95 shadow-[0_24px_60px_rgba(0,0,0,0.45)] backdrop-blur-md lg:block"
          >
            <div className="grid min-h-40 grid-cols-[minmax(280px,360px)_1fr] gap-8 px-8 py-8 lg:px-12">
              <div className="flex flex-col gap-1">
                {activeMenu.options.map((item) => renderMenuItem(item))}
              </div>
            </div>
          </div>
        )}
      </div>

      <div
        id="mobile-navigation-panel"
        className={cn(
          "fixed inset-x-2 top-[calc(5.5rem+0.5rem)] bottom-4 overflow-y-auto rounded-2xl border border-white/10 bg-black/95 px-4 pb-8 pt-4 shadow-[0_24px_60px_rgba(0,0,0,0.45)] backdrop-blur-md transition-[opacity,transform] duration-300 ease-in-out sm:inset-x-6 sm:top-[calc(6.5rem+0.5rem)] lg:hidden",
          isMobileMenuOpen
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-2 opacity-0",
        )}
      >
        <nav className="flex flex-col gap-2" aria-label="Mobile primary">
          {HEADER_OPTIONS.map((option) => {
            const isExpanded = openMenu === option.name;
            const isActive = isOptionActive(option);

            if (option.options.length > 0) {
              return (
                <div
                  key={option.name}
                  className="overflow-hidden rounded-xl border border-white/10"
                >
                  <button
                    type="button"
                    className={cn(
                      "flex w-full items-center justify-between gap-4 px-4 py-3 text-left font-sans text-sm font-semibold uppercase tracking-wide text-white",
                      isActive && "text-aurora-lime",
                    )}
                    onClick={() => {
                      setOpenChildMenus({});
                      setOpenMenu((current) =>
                        current === option.name ? null : option.name,
                      );
                    }}
                  >
                    <span>{option.name}</span>
                    <ChevronDown
                      className={cn(
                        "size-4 transition-transform duration-300",
                        isExpanded && "rotate-180",
                      )}
                    />
                  </button>

                  <div
                    className={cn(
                      "grid transition-[grid-template-rows,opacity] duration-300 ease-in-out",
                      isExpanded
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0",
                    )}
                  >
                    <div className="overflow-hidden">
                      <div className="border-t border-white/10 px-3 py-2">
                        {option.options.map((item) => renderMenuItem(item))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <button
                key={option.name}
                type="button"
                className={cn(
                  "h-12 rounded-xl border border-white/10 px-4 text-left font-sans text-sm font-semibold uppercase tracking-wide text-white hover:text-aurora-lime",
                  isActive && "text-aurora-lime",
                )}
                onClick={() => handleNavigate(option.route)}
              >
                {option.name}
              </button>
            );
          })}
        </nav>

        <div className="mt-4">
          <JoinUsButton className="w-full justify-center" />
        </div>
      </div>
    </div>
  );
};

export default Header;
