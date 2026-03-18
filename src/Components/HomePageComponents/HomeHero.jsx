import { useEffect, useLayoutEffect, useState, useRef, useCallback } from "react";
const frameBg = "/assets/image/frame-10.png";
const gridOverlay = "/assets/image/group-14.png";
const logo = "/assets/image/Vat-Master-Logo-1.png";
const modelImg = "/assets/image/image.png";
const dummyBg = "/assets/image/bg-cardStack.jpg";
import "../Style/Homecss/Home.css";
import { useNavigate } from "react-router-dom";
const Aedsy = "/assets/image/AED-Symbol.svg";
import { useWhatsAppRouting } from "../../hooks/useWhatsAppRouting";
import { useMeta } from "../../hooks/useMeta";

/* helpers */
const Check = ({ small }) => (
  <span className={`hh-check ${small ? "hh-check--small" : ""}`}>✓</span>
);

const ArrowUpRight = () => (
  <svg
    viewBox="0 0 24 24"
    className="hh-icon"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M7 17L17 7" />
    <path d="M9 7h8v8" />
  </svg>
);

/* ✅ static data and helpers */
const poses = [
  { x: 0, y: 0, r: 0, s: 1.0 },
  { x: -16, y: -18, r: -12, s: 0.985 },
  { x: -28, y: -30, r: -18, s: 0.97 },
  { x: -40, y: -42, r: -24, s: 0.955 },
];

const toT = (p) =>
  `translate3d(${p.x}px,${p.y}px,0) rotate(${p.r}deg) scale(${p.s})`;

const tints = ["#00E6F6", "#2FE9FF", "#22D3EE", "#34F5FF"];

const items = [
  {
    title: "Vat Registration",
    desc: "Get your business VAT-registered quickly and hassle-free. We handle documentation, FTA approvals, and compliance from start to finish.",
  },
  {
    title: "VAT Return Filing",
    desc: "Accurate VAT return filing with reconciliations, deadline tracking, and full compliance support handled end to end.",
  },
  {
    title: "VAT De-registration",
    desc: "Complete VAT deregistration support including documentation, FTA coordination, approvals, and smooth business closure.",
  },
  {
    title: "Corporate Tax",
    desc: "Corporate tax registration and filing assistance with structured documentation, advisory, and end to end compliance.",
  },
];

const Card = ({ pos, title, desc }) => (
  <div className="hh-stack-card" data-pos={pos}>
    <div className="hh-stack-cardBox">
      {/* BG IMAGE */}
      <div
        className="hh-stack-bgImg"
        style={{
          backgroundImage: `url(${dummyBg})`,
          filter: "contrast(1.1) saturate(1.1) brightness(1.05)",
        }}
      />
      {/* tint */}
      <div
        className="hh-stack-tint"
        style={{ backgroundColor: tints[Number(pos) % tints.length] }}
      />
      {/* overlays */}
      <div className="hh-stack-dark" />
      <div className="hh-stack-glass" />

      {/* grid lines */}
      <div className="hh-stack-gridX" />
      <div className="hh-stack-gridY" />

      {/* content */}
      <div className="hh-stack-content">
        <div className="d-flex align-items-start justify-content-between hh-gap4">
          <p className="hh-stack-title">{title}</p>

          <span className="hh-stack-arrow">
            <ArrowUpRight />
          </span>
        </div>

        <p className="hh-stack-desc">{desc}</p>
      </div>

      <div className="hh-stack-ring" />
    </div>
  </div>
);

/* ✅ stacked cards */
const NoShakeStack = () => {
  const stackRef = useRef(null);
  const animatingRef = useRef(false);
  const timeoutRef = useRef(null);
  const cycleRef = useRef(null);

  const apply = useCallback(() => {
    const cards = Array.from(
      stackRef.current?.querySelectorAll(".hh-stack-card") || []
    );
    cards.forEach((c) => {
      const p = Number(c.dataset.pos);
      c.style.transform = toT(poses[p]);
      c.style.zIndex = String(400 - p);
    });
  }, []);

  useLayoutEffect(() => {
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        apply();
      });
    });
  }, [apply]);

  const scheduleNext = useCallback(() => {
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      cycleRef.current?.();
    }, 6000);
  }, []);

  const cycle = useCallback(() => {
    if (animatingRef.current) return;
    animatingRef.current = true;

    const cards = Array.from(
      stackRef.current?.querySelectorAll(".hh-stack-card") || []
    );
    const front = cards.find((c) => Number(c.dataset.pos) === 0);

    if (!front) {
      animatingRef.current = false;
      return;
    }

    front.style.transform =
      "translate3d(62px,34px,0) rotate(-16deg) scale(0.98)";

    const onEnd = (e) => {
      if (e.propertyName !== "transform") return;
      front.removeEventListener("transitionend", onEnd);

      cards.forEach((c) => {
        const p = Number(c.dataset.pos);
        c.dataset.pos = String(p === 0 ? 3 : p - 1);
      });

      requestAnimationFrame(() => {
        apply();
        setTimeout(() => (animatingRef.current = false), 60);
        scheduleNext();
      });
    };

    front.addEventListener("transitionend", onEnd);
  }, [apply, scheduleNext]);

  useEffect(() => {
    cycleRef.current = cycle;
  }, [cycle]);

  useEffect(() => {
    scheduleNext();
    return () => clearTimeout(timeoutRef.current);
  }, [scheduleNext]);

  return (
    <div className="hh-stackOuter">
      <div className="hh-stackSize">
        <div ref={stackRef} className="hh-stackAbs">
          <Card pos="0" title={items[0].title} desc={items[0].desc} />
          <Card pos="1" title={items[1].title} desc={items[1].desc} />
          <Card pos="2" title={items[2].title} desc={items[2].desc} />
          <Card pos="3" title={items[3].title} desc={items[3].desc} />
        </div>
      </div>
    </div>
  );
};


/* ✅ Static Data */
const servicesDropdownItems = [
  { label: "VAT Registration", path: "/vat-registration" },
  { label: "VAT De-Registration", path: "/vat-de-registration" },
  { label: "Outsource CFO Service", path: "/outsource-cfo-service" },
  {
    label: "Accounting and Bookkeeping",
    path: "/accounting-and-bookkeeping-services",
  },
  { label: "VAT Return Filing", path: "/vat-return-filling" },
];

const pricingDropdownItems = [
  { label: " VAT Registration", path: "/pricing-vat-registration" },
  { label: " VAT Accounting Bookkeeping", path: "/priceVatAccount" },
  { label: " VAT De-Registration", path: "/priceVatDeregister" },
  { label: " Outsource CFO", path: "/priceOutsource" },
  { label: " VAT Return Filing", path: "/priceVatReturn" },
];

/* ✅ Sub-Components (Outside render) */
const DesktopDropdown = ({ label, items, navigate }) => (
  <div className="hh-dd">
    <span className="hh-navLink hh-ddTrigger" role="button" tabIndex={0}>
      {label}
    </span>

    <div className="hh-ddPopover">
      <div className="hh-ddMenu">
        {items.map((item) => (
          <button
            key={item.path}
            type="button"
            className="hh-ddItem"
            onClick={() => navigate(item.path)}
            style={{
              background: "transparent",
              border: 0,
              width: "100%",
              textAlign: "left",
            }}
          >
            {item.label}
          </button>
        ))}
      </div>
    </div>
  </div>
);

const MobileDropdown = ({
  label,
  items,
  onClose,
  mobileDropdownOpen,
  setMobileDropdownOpen,
  navigate,
}) => {
  const isOpen = mobileDropdownOpen === label;

  return (
    <div className="d-flex flex-column">
      <button
        type="button"
        onClick={() =>
          setMobileDropdownOpen((prev) => (prev === label ? null : label))
        }
        className="hh-mLinkBtn"
        aria-expanded={isOpen}
      >
        <span className="d-flex align-items-center gap-2">
          {label}
          <span
            style={{
              fontSize: "12px",
              transition: "transform 200ms ease",
              transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
            }}
          >
            ▼
          </span>
        </span>
      </button>

      {isOpen && (
        <div className="hh-mDrop">
          {items.map((item) => (
            <button
              key={item.path}
              type="button"
              className="hh-mDropItem"
              onClick={() => {
                navigate(item.path);
                onClose?.();
                setMobileDropdownOpen(null);
              }}
              style={{
                background: "transparent",
                border: 0,
                width: "100%",
                textAlign: "left",
              }}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

const NavLinks = ({
  onClick,
  variant = "desktop",
  navigate,
  mobileDropdownOpen,
  setMobileDropdownOpen,
}) => {
  if (variant === "mobile") {
    return (
      <>
        <a href="#home" onClick={onClick} className="hh-mLink">
          Home
        </a>

        <MobileDropdown
          label="Services"
          items={servicesDropdownItems}
          onClose={onClick}
          mobileDropdownOpen={mobileDropdownOpen}
          setMobileDropdownOpen={setMobileDropdownOpen}
          navigate={navigate}
        />
        <MobileDropdown
          label="Pricing"
          items={pricingDropdownItems}
          onClose={onClick}
          mobileDropdownOpen={mobileDropdownOpen}
          setMobileDropdownOpen={setMobileDropdownOpen}
          navigate={navigate}
        />

        <a href="#about" onClick={onClick} className="hh-mLink">
          About&nbsp;Us
        </a>
      </>
    );
  }

  return (
    <>
      <span onClick={() => navigate("/")} className="hh-navLink">
        Home
      </span>

      <DesktopDropdown
        label="Services"
        items={servicesDropdownItems}
        navigate={navigate}
      />

      <DesktopDropdown
        label="Pricing"
        items={pricingDropdownItems}
        navigate={navigate}
      />

      <span onClick={() => navigate("/about")} className="hh-navLink">
        About&nbsp;Us
      </span>
    </>
  );
};

export default function HomeHero() {
  const navigate = useNavigate();
  const { whatsappUrl } = useWhatsAppRouting();
  const { setPageMeta } = useMeta();

  useEffect(() => {
    setPageMeta("home");
  }, [setPageMeta]);

  const [heroReady, setHeroReady] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuReady, setMenuReady] = useState(false);

  /* ✅ ONLY CHANGE for smooth close */
  const [menuClosing, setMenuClosing] = useState(false);
  const closeMenu = () => {
    setMenuReady(false); // trigger slide-out
    setMenuClosing(true); // keep DOM for animation
    setTimeout(() => {
      setMenuOpen(false); // unmount after transition
      setMenuClosing(false);
      setMobileDropdownOpen(null);
    }, 450); // must match CSS transform transition
  };

  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(null);
  const navRef = useRef(null);

  useEffect(() => {
    const id = requestAnimationFrame(() => setHeroReady(true));
    return () => cancelAnimationFrame(id);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      const id = requestAnimationFrame(() => setMenuReady(true));
      return () => cancelAnimationFrame(id);
    }
  }, [menuOpen]);

  useEffect(() => {
    if (!(menuOpen || menuClosing)) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [menuOpen, menuClosing]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!navRef.current) return;
      if (!navRef.current.contains(e.target)) {
        // Nothing to do for desktop dropdown as it is CSS based now
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);
  return (
    <section
      className="hh-section"
      style={{
        background: `url(${frameBg})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="hh-gridOverlay">
        <img
          src={gridOverlay}
          alt=""
          className="hh-gridImg hh-gridImg--left"
          draggable="false"
        />
        <img
          src={gridOverlay}
          alt=""
          className="hh-gridImg hh-gridImg--right"
          draggable="false"
        />
      </div>

      <header className="hh-header">
        <div className="d-flex align-items-center justify-content-between">
          <div className="hh-logoWrap">
                    <span onClick={() => navigate("/")} className="hh-navLink">

            <img
              src={logo}
              alt="VAT Masters"
              className="hh-logo"
              draggable="false"
            />
                     
        </span>
          </div>

          <div className="d-flex align-items-center hh-gap3">
            <div className="d-none d-lg-flex align-items-center hh-gap2">
              <a
                href="/contact"
                onClick={(e) => {
                  e.preventDefault();
                  navigate("/contact");
                }}
                className="hh-contactBtn"
              >
                Contact Us
              </a>

              <span
                className="hh-contactArrow cursor-pointer"
                aria-hidden="true"
                onClick={(e) => {
                  e.preventDefault();
                  navigate("/contact");
                }}
              >
                <svg
                  viewBox="0 0 24 24"
                  className="hh-icon"
                  fill="none"
                  stroke="#0B2F35"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M7 17L17 7" />
                  <path d="M9 7h8v8" />
                </svg>
              </span>
            </div>

            <button
              type="button"
              onClick={() => {
                setMenuReady(false);
                setMenuOpen(true);
              }}
              className="hh-hamburger d-lg-none"
              aria-label="Open menu"
            >
              <span className="hh-hamLines">
                <span className="hh-hamLine" />
                <span className="hh-hamLine hh-hamLine--mt" />
                <span className="hh-hamLine hh-hamLine--mt" />
              </span>
            </button>
          </div>
        </div>

        <nav ref={navRef} className="hh-desktopNav d-none d-lg-flex">
          <NavLinks navigate={navigate} />
        </nav>

        {/* ✅ Mobile/MD menu overlay (Right → Left Offcanvas via CSS) */}
        {(menuOpen || menuClosing) && (
          <div className="hh-menuOverlay d-lg-none">
            <button
              className={`hh-menuBackdrop ${menuReady ? "is-ready" : ""}`}
              onClick={closeMenu}
              aria-label="Close menu"
            />

            <div className={`hh-menuPanel ${menuReady ? "is-ready" : ""}`}>
              <div className="d-flex align-items-center justify-content-end p-2">
                {/* <span className="hh-menuTitle">Menu</span> */}
                <button
                  onClick={closeMenu}
                  className="hh-menuClose"
                  aria-label="Close"
                >
                  <span className="hh-menuCloseX">×</span>
                </button>
              </div>

              <div className="px-4 pb-5">
                <div className="d-flex flex-column hh-gap4 hh-mLinks">
                  <NavLinks
                    variant="mobile"
                    onClick={closeMenu}
                    navigate={navigate}
                    mobileDropdownOpen={mobileDropdownOpen}
                    setMobileDropdownOpen={setMobileDropdownOpen}
                  />
                </div>

                <button
                  type="button"
                  onClick={() => {
                    navigate("/contact");
                    closeMenu();
                  }}
                  className="hh-menuContact"
                >
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        )}
      </header>

      <div className={`hh-hero ${heroReady ? "is-ready" : ""}`}>
        <div className="hh-heroTop">
          <div className="row">
            <div className="col-12 col-lg-5 order-1">
              <div className="hh-leftPad">
                <h1 className="hh-h1">
                  <span className="hh-h1Line">
                    Best <span className="hh-cyan">VAT</span>
                  </span>
                  <span className="hh-h1Line hh-cyan">Consulting</span>
                  <span className="hh-h1Line">Firm in UAE</span>
                </h1>

                <ul className="hh-bullets">
                  {[
                    "We offer TAX Service for Business across UAE",
                    "Best VAT Registration company in Dubai",
                    "Recognized by Businesses Across Industries",
                  ].map((t, i) => (
                    <li key={i} className="hh-bulletItem">
                      <Check />
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>

                <div className="hh-ctaRow">
                  <a className="hh-btnWhatsapp cert-vm-wa-btn" href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                    <i className="bi bi-whatsapp fs-5 fs-md-2 fs-lg-6"></i>
                    WhatsApp us
                  </a>
                </div>
              </div>
            </div>

            <div className="col-12 col-lg-3 order-2 d-flex justify-content-center">
              <div className="hh-modelWrap">
                <div className="hh-modelFrame">
                  <img
                    src={modelImg}
                    alt="VAT Masters Consultant"
                    className="hh-modelImg"
                    style={{
                      height: "100%",
                      filter:
                        "drop-shadow(0 26px 58px rgba(0,0,0,0.20)) brightness(1.01) contrast(1.02) saturate(1.02)",
                    }}
                    draggable="false"
                  />
                  <div
                    className="hh-modelFade"
                    style={{
                      background:
                        "linear-gradient(to bottom, rgba(15,33,37,0) 0%, rgba(15,33,37,0.35) 65%, rgba(15,33,37,0.55) 100%)",
                      opacity: 0.25,
                    }}
                  />
                </div>
              </div>
            </div>

            <div className="col-12 col-lg-4 order-3 d-flex justify-content-center">
              <div className="hh-rightWrap">
                <p className="hh-rightTitle jhew">
                  Avoid{" "}
                  <img
                    src={Aedsy}
                    alt=""
                    className="aedimg"
                  />{" "}
                  10,000 penalty by registering for Corporate Tax today!
                </p>

                <div className="hh-rightGrid banera">
                  <div className="d-flex align-items-center hh-gap2">
                    <Check c small /> Expert Guidance
                  </div>
                  <div className="d-flex align-items-center hh-gap2">
                    <Check small /> Fast Turnaround
                  </div>
                </div>

                <NoShakeStack />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
