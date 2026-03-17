/**
 * whats.js
 * -----------------------------------
 * Group-wise WhatsApp routing
 * - Group 1 selectors -> PHONE_1
 * - Group 2 selectors -> PHONE_2
 * - Prefilled message
 * - Desktop: web.whatsapp.com
 * - Mobile: wa.me
 * - React/Vite safe
 */
 
/* ===============================
   1) CONFIG
================================ */
 
// ✅ Message (same for all)
const WHATSAPP_MESSAGE = "Hello, VAT Master, We are looking for VAT Services.";
 
// ✅ Phone numbers (country code, no +, no spaces)
const PHONE_1 = "+971525966056";
const PHONE_2 = "+971525966056"; // <-- replace with your 2nd number
 
// ✅ Optional: style class add (if you want)
const WHATSAPP_STYLE_NUMBER = 1;
const WHATSAPP_STYLE_MAP = {
  1: "wa-style-1",
  2: "wa-style-2",
  3: "wa-style-3",
  4: "wa-style-4",
  5: "wa-style-5",
};
 
/* ===============================
   2) GROUP SELECTORS
   (First 5 -> PHONE_1, Next 5 -> PHONE_2)
================================ */
 
const WHATSAPP_GROUPS = [
  {
    phone: PHONE_1,
    selectors: [
      ".cert-vm-wa-btn",
      ".pc-ctaBtn",
      ".vmn-topwa-2",
      ".vmn-topwa",
      ".cor-vmn-topwa",
      ".cert-vmn-topwa-2",
      ".cor-vmn-topwa-2 ",
      ".ct-wa",
      ".cert-vmn-topwa",
      ".cert-vmn-topwadsfds",
      ".pen-wa",
      ".ctdr-waBtn",
      ".cert-vm-wa-pill",
      ".cert-ct-wa",
      ".hh-contactBtn",
      ".vm-wa-btn",
      ".hh-btnWhatsapp"
    ],
  },
  {
    phone: PHONE_2,
    selectors: [
      ".cpn-btn",
      ".pc-dd",
      ".class-8",
      ".class-9",
      ".class-10",
    ],
  },
];
 
/* ===============================
   3) HELPERS
================================ */
 
function isMobileDevice() {
  return /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
}
 
function buildWhatsAppUrl(phone, message) {
  const text = encodeURIComponent(message || "");
  if (isMobileDevice()) {
    // Mobile app
    return `https://wa.me/${phone}?text=${text}`;
  }
  // Desktop web
  return `https://web.whatsapp.com/send?phone=${phone}&text=${text}`;
}
 
function removeAllStyleClasses(el) {
  Object.values(WHATSAPP_STYLE_MAP).forEach((cls) => el.classList.remove(cls));
}
 
function applyStyle(el) {
  const cls = WHATSAPP_STYLE_MAP[WHATSAPP_STYLE_NUMBER];
  if (!cls) return;
  removeAllStyleClasses(el);
  el.classList.add(cls);
}
 
function attachWhatsApp(el, url) {
  // style (optional)
  applyStyle(el);
 
  // Always ensure click goes to url
  if (el.tagName === "A") {
    el.setAttribute("href", url);
    el.setAttribute("target", "_blank");
    el.setAttribute("rel", "noopener noreferrer");
  } else {
    el.onclick = () => window.open(url, "_blank", "noopener,noreferrer");
  }
}
 
/* ===============================
   4) MAIN APPLY
================================ */
 
function applyWhatsAppGroups() {
  WHATSAPP_GROUPS.forEach((group) => {
    const url = buildWhatsAppUrl(group.phone, WHATSAPP_MESSAGE);
 
    group.selectors.forEach((selector) => {
      document.querySelectorAll(selector).forEach((el) => {
        attachWhatsApp(el, url);
      });
    });
  });
}
 
/* ===============================
   5) SAFE RUN FOR REACT
================================ */
 
function runWithRetry(times = 20, delay = 200) {
  let count = 0;
  const run = () => {
    applyWhatsAppGroups();
    if (++count < times) setTimeout(run, delay);
  };
  run();
}
 
runWithRetry();
 
// SPA changes support
new MutationObserver(applyWhatsAppGroups).observe(document.documentElement, {
  childList: true,
  subtree: true,
});