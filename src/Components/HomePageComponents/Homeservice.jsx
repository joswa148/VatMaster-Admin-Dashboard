// src/components/VatServicesHub.jsx
import React from "react";
import "../Style/Homecss/Homeservice.css";
const icone1 = "/assets/image/vtri.png";
const icone2 = "/assets/image/vtregi.png";
const icone3 = "/assets/image/vtdi.png";
const icone4 = "/assets/image/vtconi.png";
const icone5 = "/assets/image/cori.png";
const icone6 = "/assets/image/abti.png";

 const Homeservice = () =>{
return(

<>

<section class="vat-section">
  <h1 className="dsdsae">We Offer TAX Services For <span className="primarss">Business Across UAE</span></h1>
    <div class="container cancontainer">
      <div class="canvas">
        <div class="arm a1">
          <div class="bar"></div>
          <div class="badge">
           <img src={icone1} alt="" className="icone1"/>
          </div>
        </div>

        <div class="arm a2">
          <div class="bar"></div>
          <div class="badge">
            <img src={icone2} alt="" className="icone2"/>
          </div>
        </div>

        <div class="arm a3">
          <div class="bar"></div>
          <div class="badge">
            <img src={icone3} alt="" className="icone3" />
          </div>
        </div>

        <div class="arm a4">
          <div class="bar"></div>
          <div class="badge">
            <img src={icone4} alt="" className="icone4" />
          </div>
        </div>

        <div class="arm a5">
          <div class="bar"></div>
          <div class="badge">
           <img src={icone5} alt="" className="icone5" />
          </div>
        </div>

        <div class="arm a6">
          <div class="bar"></div>
          <div class="badge">
            <img src={icone6
            } alt="" className="icone6" />
          </div>
        </div>

        
        <div class="hub">
          <p>TAX<br/>SERVICES</p>
        </div>

      
        <div class="tblock t1">
          <h2>VAT Registration</h2>
          <span>VAT registration in the UAE means a business is officially recognized under the VAT Act.
It allows the company to charge VAT on goods and remit to government.</span>
        </div>

        <div class="tblock t2">
          <h2>Corporate Tax</h2>
          <span>Expert corporate tax registration, computation, and filing services for UAE businesses.
We ensure accurate reporting and full compliance with UAE corporate tax laws.</span>
        </div>

        <div class="tblock t3">
          <p>VAT Return Filing</p>
          <span>A VAT return is an official document submitted by a taxable person to the Federal Tax Authority (FTA), reporting payable and recoverable VAT for a specific tax period.</span>
        </div>

        <div class="tblock t4">
          <p>Accounting & Bookkeeping</p>
          <span>Strong accounting and financial systems form the foundation of every business.
They act as a lifeline that supports stability and long-term growth.</span>
        </div>

        <div class="tblock t5">
          <p>VAT & TAX Consultancy</p>
          <span>Running a business involves risk, and tax filing is one of the most challenging tasks.
Without proper expertise, the process becomes even more complex.</span>
        </div>

        <div class="tblock t6">
          <p>VAT-De Registration</p>
          <span>VAT deregistration allows a taxable person to cancel their VAT registration.
The VAT number is permanently invalidated after approval by the FTA.</span>
        </div>


        <div class="mobile-cards">
          <div class="mobile-head">
            <div class="tag">VAT SERVICES</div>
          </div>

          <div class="row g-3">
            <div class="col-12 col-md-6">
              <div class="card">
                <div class="stripe"></div>
                <div class="p-3 d-lg-flex gap-3 align-items-start">
                  <div class="pill">
                    <img src={icone1
            } alt="" className="w-50" />
                  </div>
                  <div>
                   <h2>VAT Registration </h2>
          <span>VAT registration in the UAE means a business is officially recognized under the VAT Act.
It allows the company to charge VAT on goods and remit to government.</span>
 </div>
                </div>
              </div>
            </div>

            <div class="col-12 col-md-6">
              <div class="card">
                <div class="stripe"></div>
                <div class="p-3 d-lg-flex gap-3 align-items-start">
                  <div class="pill">
                    <img src={icone2
            } alt="" className="w-50" />
                  </div>
                  <div>
                     <h2>Corporate Tax</h2>
          <span>Expert corporate tax registration, computation, and filing services for UAE businesses.
We ensure accurate reporting and full compliance with UAE corporate tax laws.</span>  </div>
                </div>
              </div>
            </div>

            <div class="col-12 col-md-6">
              <div class="card">
                <div class="stripe"></div>
                <div class="p-3 d-lg-flex gap-3 align-items-start">
                  <div class="pill">
                     <img src={icone3
            } alt="" className="w-50" />
                  </div>
                  <div>
                     <p>VAT Return Filing</p>
          <span>A VAT return is an official document submitted by a taxable person to the Federal Tax Authority (FTA), reporting payable and recoverable VAT for a specific tax period.</span>
                       </div>
                </div>
              </div>
            </div>

            <div class="col-12 col-md-6">
              <div class="card">
                <div class="stripe"></div>
                <div class="p-3 d-lg-flex gap-3 align-items-start">
                  <div class="pill">
                     <img src={icone4
            } alt="" className="w-50" />
                  </div>
                  <div>
                    <p>Accounting & Bookkeeping</p>
          <span>Strong accounting and financial systems form the foundation of every business.
They act as a lifeline that supports stability and long-term growth.</span>  </div>
                </div>
              </div>
            </div>

            <div class="col-12 col-md-6">
              <div class="card">
                <div class="stripe"></div>
                <div class="p-3 d-lg-flex gap-3 align-items-start">
                  <div class="pill">
                     <img src={icone5
            } alt="" className="w-50" />
                  </div>
                  <div>
                     <p>VAT & TAX Consultancy</p>
          <span>Running a business involves risk, and tax filing is one of the most challenging tasks.
Without proper expertise, the process becomes even more complex.</span>   </div>
                </div>
              </div>
            </div>

            <div class="col-12 col-md-6">
              <div class="card">
                <div class="stripe"></div>
                <div class="p-3 d-lg-flex gap-3 align-items-start">
                  <div class="pill">
                     <img src={icone6
            } alt="" className="w-50" />
                  </div>
                  <div>
                    <p>VAT-De Registration</p>
          <span>VAT deregistration allows a taxable person to cancel their VAT registration.
The VAT number is permanently invalidated after approval by the FTA.</span> </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</>
);
}


export default Homeservice