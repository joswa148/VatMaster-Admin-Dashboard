import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useWhatsAppRouting } from "../../hooks/useWhatsAppRouting";
import "../Style/Navbar.css";
const logo = "/assets/image/Vat-Master-Logo-1.png";

const Navbar = () => {
  const navigate = useNavigate();
  const { whatsappUrl } = useWhatsAppRouting();

  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobilePriceOpen, setMobilePriceOpen] = useState(false);

  const closeMobileAll = () => {
    setMobileServicesOpen(false);
    setMobilePriceOpen(false);
  };

  return (
    <>
      <header className="vm-nav-wrap regse">
        <nav className="navbar navbar-expand-lg vm-nav-pill msjeh">
          <div className="container-fluid align-items-start px-4 px-lg-4">
            {/* Brand */}
            <a className="nav-link" onClick={() => navigate("/")}>
              <img
                src={logo}
                alt="VAT Masters"
                className="vm-logo"
              />
            </a>

            {/* Mobile toggler -> Offcanvas */}
            <button
              className="navbar-toggler vm-toggler"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#vmOffcanvas"
              aria-controls="vmOffcanvas"
              aria-label="Toggle navigation"
              onClick={closeMobileAll}
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            {/* Desktop menu */}
            <div className="collapse navbar-collapse justify-content-center d-none d-lg-flex align-items-lg-baseline">
              <ul className="navbar-nav vm-nav-links mx-auto mb-2 mb-lg-0 gap-lg-4">
                <li className="nav-item">
                  <a className="nav-link" onClick={() => navigate("/")}>
                    Home
                  </a>
                </li>

                {/* Services dropdown (hover) */}
                <li className="nav-item dropdown vm-services">
                  <a
                    className="nav-link vm-services-toggle"
                    href="#services"
                    onClick={(e) => e.preventDefault()}
                    role="button"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Service <span className="vm-caret">▾</span>
                  </a>

                  <div className="dropdown-menu vm-mega" role="menu">
                    <div className="vm-mega-inner">
                      <div className="vm-mega-right">
                        <div className="vm-mega-list">
                          <p className="vm-mega-item">
                            <span
                              className="vm-mega-text"
                              onClick={() => navigate("/vat-registration")}
                            >
                              VAT Registration
                            </span>
                          </p>

                          <p className="vm-mega-item">
                            <span
                              className="vm-mega-text"
                              onClick={() => navigate("/vat-de-registration")}
                            >
                              VAT De-Registration
                            </span>
                          </p>

                          <p className="vm-mega-item">
                            <span
                              className="vm-mega-text"
                              onClick={() => navigate("/outsource-cfo-service")}
                            >
                              Outsource CFO Service
                            </span>
                          </p>

                          <p className="vm-mega-item">
                            <span
                              className="vm-mega-text"
                              onClick={() =>
                                navigate("/accounting-and-bookkeeping-services")
                              }
                            >
                              Accounting and Bookkeeping
                            </span>
                          </p>

                          <p className="vm-mega-item">
                            <span
                              className="vm-mega-text"
                              onClick={() => navigate("/vat-return-filling")}
                            >
                              Vat Return Filing
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>

                {/* Price dropdown (hover) */}
                <li className="nav-item dropdown vm-services">
                  <a
                    className="nav-link vm-services-toggle"
                    href="#prices"
                    onClick={(e) => e.preventDefault()}
                    role="button"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Pricing <span className="vm-caret">▾</span>
                  </a>

                  <div className="dropdown-menu vm-mega" role="menu">
                    <div className="vm-mega-inner">
                      <div className="vm-mega-right">
                        <div className="vm-mega-list">
                          <p className="vm-mega-item">
                            <span
                              className="vm-mega-text"
                              onClick={() => navigate("/pricing-vat-registration")}
                            >
                             VAT Registration
                            </span>
                          </p>

                          <p className="vm-mega-item">
                            <span
                              className="vm-mega-text"
                              onClick={() => navigate("/priceVatAccount")}
                            >
                               Accounting Bookkeeping
                            </span>
                          </p>

                          <p className="vm-mega-item">
                            <span
                              className="vm-mega-text"
                              onClick={() => navigate("/priceVatDeregister")}
                            >
                               VAT De-Registration
                            </span>
                          </p>

                          <p className="vm-mega-item">
                            <span
                              className="vm-mega-text"
                              onClick={() => navigate("/priceOutsource")}
                            >
                               OutSource CFO
                            </span>
                          </p>

                          <p className="vm-mega-item">
                            <span
                              className="vm-mega-text"
                              onClick={() => navigate("/priceVatReturn")}
                            >
                               VAT Return Filing
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>

                <li className="nav-item">
                  <a className="nav-link" onClick={() => navigate("/about")}>
                    About Us
                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link" onClick={() => navigate("/contact")}>
                    Contact
                  </a>
                </li>
              </ul>

              {/* CTA */}
              <div className="d-flex align-items-center ms-lg-4 calltoaction ">
                <a
                  className="hh-btnWhatsapp"
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="bi bi-whatsapp fs-5 fs-md-2 fs-lg-6"></i>
                  WhatsApp us
                </a>
              </div>
            </div>
          </div>
        </nav>
      </header>

      {/* Offcanvas (Mobile) */}
      <div
        className="offcanvas offcanvas-end vm-offcanvas"
        tabIndex="-1"
        id="vmOffcanvas"
        aria-labelledby="vmOffcanvasLabel"
      >
        <div className="offcanvas-header vm-offcanvas-head">
          <div className="d-flex align-items-center gap-2">
            <img
              src="/assets/image/navlogo1.png"
              alt="VAT Masters"
              className="vm-logo vm-logo-sm"
            />
          </div>

          <button
            type="button"
            className="btn-close btn-close-white"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
            onClick={closeMobileAll}
          />
        </div>

        <div className="offcanvas-body vm-offcanvas-body">
          <a
            className="vm-m-link"
            data-bs-dismiss="offcanvas"
            onClick={() => {
              closeMobileAll();
              navigate("/");
            }}
          >
            Home
          </a>

          {/* ✅ Mobile services dropdown */}
          <div className={`vm-m-accordion ${mobileServicesOpen ? "is-open" : ""}`}>
            <button
              className="vm-m-acc-btn"
              type="button"
              onClick={() => {
                setMobileServicesOpen((v) => !v);
                setMobilePriceOpen(false);
              }}
              aria-expanded={mobileServicesOpen ? "true" : "false"}
            >
              Service <span className="vm-m-caret">▾</span>
            </button>

            <div className="vm-m-panel">
              <div className="vm-m-services">
                <p
                  className="vm-m-s-item"
                  data-bs-dismiss="offcanvas"
                  onClick={() => {
                    closeMobileAll();
                    navigate("/vat-registration");
                  }}
                >
                  VAT Registration
                </p>

                <p
                  className="vm-m-s-item"
                  data-bs-dismiss="offcanvas"
                  onClick={() => {
                    closeMobileAll();
                    navigate("/vat-de-registration"); // ✅ fixed
                  }}
                >
                  VAT De-Registration
                </p>

                <p
                  className="vm-m-s-item"
                  data-bs-dismiss="offcanvas"
                  onClick={() => {
                    closeMobileAll();
                    navigate("/outsource-cfo-service");
                  }}
                >
                  Outsource CFO Service
                </p>

                <p
                  className="vm-m-s-item"
                  data-bs-dismiss="offcanvas"
                  onClick={() => {
                    closeMobileAll();
                    navigate("/accounting-and-bookkeeping-services");
                  }}
                >
                  Accounting and Bookkeeping services
                </p>

                <p
                  className="vm-m-s-item"
                  data-bs-dismiss="offcanvas"
                  onClick={() => {
                    closeMobileAll();
                    navigate("/vat-return-filling");
                  }}
                >
                  Vat Return Filing
                </p>
              </div>
            </div>
          </div>

          {/* ✅ Mobile PRICE dropdown (NEW) */}
          <div className={`vm-m-accordion ${mobilePriceOpen ? "is-open" : ""}`}>
            <button
              className="vm-m-acc-btn"
              type="button"
              onClick={() => {
                setMobilePriceOpen((v) => !v);
                setMobileServicesOpen(false);
              }}
              aria-expanded={mobilePriceOpen ? "true" : "false"}
            >
              Pricing <span className="vm-m-caret">▾</span>
            </button>

            <div className="vm-m-panel">
              <div className="vm-m-services">
                <p
                  className="vm-m-s-item"
                  data-bs-dismiss="offcanvas"
                  onClick={() => {
                    closeMobileAll();
                    navigate("/pricing-vat-registration");
                  }}
                >
                  Pricing VAT Registration
                </p>

                <p
                  className="vm-m-s-item"
                  data-bs-dismiss="offcanvas"
                  onClick={() => {
                    closeMobileAll();
                    navigate("/priceVatAccount");
                  }}
                >
                  Pricing Accounting Bookkeeping
                </p>

                <p
                  className="vm-m-s-item"
                  data-bs-dismiss="offcanvas"
                  onClick={() => {
                    closeMobileAll();
                    navigate("/priceVatDeregister");
                  }}
                >
                  Pricing VAT De-Registration
                </p>

                <p
                  className="vm-m-s-item"
                  data-bs-dismiss="offcanvas"
                  onClick={() => {
                    closeMobileAll();
                    navigate("/priceOutsource");
                  }}
                >
                  Pricing OutSource CFO
                </p>

                <p
                  className="vm-m-s-item"
                  data-bs-dismiss="offcanvas"
                  onClick={() => {
                    closeMobileAll();
                    navigate("/priceVatReturn");
                  }}
                >
                  Pricing VAT Return Filing
                </p>
              </div>
            </div>
          </div>

          <a
            className="vm-m-link"
            data-bs-dismiss="offcanvas"
            onClick={() => {
              closeMobileAll();
              navigate("/about");
            }}
          >
            About Us
          </a>

          <a
            className="vm-m-link"
            data-bs-dismiss="offcanvas"
            onClick={() => {
              closeMobileAll();
              navigate("/contact");
            }}
          >
            Contact us
          </a>

        
        </div>
      </div>
    </>
  );
};

export default Navbar;
