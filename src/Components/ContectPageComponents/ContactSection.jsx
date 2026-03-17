import React from "react";
import "../Style/Contactcss/ContactSection.css";

export default function ContactSection() {
  return (
    <section className="ctc-wrap">
      <div className="ctc-shell">
        <div className="ctc-grid">
          {/* LEFT SIDE */}
          <div className="ctc-left">
            {/* Title pill */}
            <div className="ctc-headPill">
              <h2 className="ctc-headTitle">Let’s Work Together</h2>
              <p className="ctc-headSub">
                Ready to simplify your business compliance? Get in touch and <br />
                let our experts guide you every step of the way
              </p>
            </div>

            {/* Form card */}
            <form className="ctc-formCard" onSubmit={(e) => e.preventDefault()}>
              <div className="ctc-fields">
                <div className="ctc-row2">
                  <label className="ctc-field">
                    <input type="text" placeholder="Last Name" />
                  </label>

                  <label className="ctc-field">
                    <input type="text" placeholder="First Name" />
                  </label>
                </div>

                <label className="ctc-field">
                  <input type="email" placeholder="Email" />
                </label>

                <label className="ctc-field">
                  <input type="text" placeholder="Phone Number" />
                </label>

                <label className="ctc-field ctc-textarea">
                  <textarea placeholder="Message" rows={5} />
                </label>
              </div>

              <button className="ctc-submit" type="submit">
                SUBMIT
              </button>
            </form>
          </div>

          {/* RIGHT SIDE */}
          <aside className="ctc-right">
            <p className="ctc-rightTop">
              Join hundreds of businesses who trust VAT Masters for fast, reliable,
              and compliant corporate tax registration services in the UAE.
            </p>

            <div className="ctc-infoList">
              {/* Phone */}
              <div className="ctc-infoItem">
                <div className="ctc-iconBox" aria-hidden="true">
                  {/* phone icon */}
                  <svg viewBox="0 0 24 24" width="26" height="26" fill="none">
                    <path
                      d="M7.3 3.7l2 4.4-1.5 1.5c1.2 2.6 3.1 4.5 5.7 5.7l1.5-1.5 4.4 2c.5.2.7.8.5 1.3-.7 1.7-2.3 2.8-4.1 2.8C9.6 22 2 14.4 2 5.7 2 4 3.1 2.4 4.8 1.7c.5-.2 1.1 0 1.3.5z"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

                <div className="ctc-infoText">
                  <div className="ctc-infoTitle">Phone</div>
                  {/* <div className="ctc-infoSub">Mon–Sat from 9.30am to 6.30pm</div> */}
                  <a className="ctc-infoLink" href="tel:+971547934701">
                    +971 54 793 4701
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="ctc-infoItem">
                <div className="ctc-iconBox" aria-hidden="true">
                  {/* mail icon */}
                  <svg viewBox="0 0 24 24" width="26" height="26" fill="none">
                    <path
                      d="M4 6h16v12H4V6z"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M4 7l8 6 8-6"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

                <div className="ctc-infoText">
                  <div className="ctc-infoTitle">Email</div>
                  {/* <div className="ctc-infoSub">Our friendly team is here to help.</div> */}
                  <a className="ctc-infoLink" href="mailto:sales@vatmasters.com">
                    sales@vatmasters.com
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="ctc-infoItem">
                <div className="ctc-iconBox" aria-hidden="true">
                  {/* location icon */}
                  <svg viewBox="0 0 24 24" width="26" height="26" fill="none">
                    <path
                      d="M12 21s7-5 7-11a7 7 0 10-14 0c0 6 7 11 7 11z"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 10.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

                <div className="ctc-infoText">
                  <div className="ctc-infoTitle">Office Location</div>
                  {/* <div className="ctc-infoSub">Come say hello at our office HQ.</div>9 */}
                  <div className="ctc-infoLink">
                    Suite #17, The Iridium Building, Al Barsha, Dubai, UAE
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
