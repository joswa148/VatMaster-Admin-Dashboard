const META_BY_PATH = {
  "/": {
    title: "Best Tax Services in Dubai & UAE | VAT Masters",
    description: "Trusted tax consultants in Dubai delivering reliable, accurate, and hassle-free business tax solutions across the UAE.",
    // keywords: "VAT Certificate UAE, UAE VAT Registration09876",
    canonical: "https://vatmasters.com/",
  },

  "/vat-registration-certificate-uae": {
    title: "VAT Registration FTA Approved Tax Agency",
    description: "Get fast and reliable VAT registration services in the Dubai, UAE with VAT Masters. Expert guidance to simplify your VAT registration process and ensure compliance.",
    canonical: "https://vat-registration-certificate-uae",
  },
    "/corporate-tax-registration-uae": {
    title: "Corporate Tax Registration UAE | Fast & Expert Corporate Tax Registration",
    description: "Corporate Tax Registration UAE made easy with expert assistance. We ensure smooth and accurate Corporate Tax Registration for your business.",
    canonical: "https://corporate-tax-registration-uae",
  },
      "/vat-registration-uae": {
    title: "VAT Registration Services Dubai, UAE",
    description: "Get fast and reliable VAT registration services in the Dubai, UAE with VAT Masters. Expert guidance to simplify your VAT registration process and ensure compliance.",
    canonical: "https://vat-registration-uae",
  },

    "/corporate-tax-registration-in-uae": {
    title: "Register for Corporate Tax in UAE | Quick & Reliable Service",
    description: "Register for Corporate Tax in the UAE with our reliable service. Our expert team ensures your business complies with UAE tax regulations and provides a seamless process.",
    canonical: "https://corporate-tax-registration-in-uae",
  },


};

const DEFAULT_META = {
  title: "VAT Masters",
  description: "UAE VAT and Corporate Tax services.",
  // keywords: "UAE VAT, Corporate Tax",
  canonical: "https://vatmasters.com/",
};

/* ===============================
   HELPERS (INSERT BELOW TITLE)
================================ */

function getTitleAnchor() {
  const title = document.head.querySelector("title");
  return title ? title.nextSibling : document.head.firstChild;
}

function setMetaBelowTitle(name, content) {
  if (!content) return;

  let tag = document.head.querySelector(`meta[name="${name}"]`);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute("name", name);

    const anchor = getTitleAnchor();
    document.head.insertBefore(tag, anchor);
  }
  tag.setAttribute("content", content);
}

function setCanonicalBelowTitle(href) {
  if (!href) return;

  let link = document.head.querySelector(`link[rel="canonical"]`);
  if (!link) {
    link = document.createElement("link");
    link.setAttribute("rel", "canonical");

    const anchor = getTitleAnchor();
    document.head.insertBefore(link, anchor);
  }
  link.setAttribute("href", href);
}

/* ===============================
   APPLY META
================================ */

let lastPath = "";

function normalizePath(p) {
  // handle trailing slash
  if (p.length > 1 && p.endsWith("/")) return p.slice(0, -1);
  return p;
}

function applyMeta() {
  const path = normalizePath(window.location.pathname);
  if (path === lastPath) return;
  lastPath = path;

  const meta = META_BY_PATH[path] || DEFAULT_META;

  document.title = meta.title;
  setMetaBelowTitle("description", meta.description);
  setMetaBelowTitle("keywords", meta.keywords);
  setCanonicalBelowTitle(meta.canonical);
}

/* ===============================
   RUN + REACT ROUTER SUPPORT
================================ */

document.addEventListener("DOMContentLoaded", applyMeta);

if (!window.META_PATCHED) {
  window.META_PATCHED = true;

  const push = history.pushState;
  const replace = history.replaceState;

  history.pushState = function () {
    push.apply(this, arguments);
    applyMeta();
  };

  history.replaceState = function () {
    replace.apply(this, arguments);
    applyMeta();
  };

  window.addEventListener("popstate", applyMeta);
}
