import React from "react";
import { CommonPricingCard } from "../CommonComponents/CommonPricingCards";
import { useWhatsAppRouting } from "../../hooks/useWhatsAppRouting";

import "../style/Pricingcss/PricingPlans.css";

const cards = [
    {
        id: 1,
        title: "VAT Registration",
        priceText: "125",
        bullets: [
            "1 Single Registration for 1 firm/company",
            "Free VAT Consultancy",
            "Free CA Consultancy",
            "Free VAT Implementation Consultancy",
        ],
        noteLines: ["Free VAT", "Implementation", "Consultancy"],
        ctaText: "WhatsApp us",
    },
    {
        id: 2,
        title: "VAT Registration – 1 Company",
        priceText: "99",
        bullets: [
            "1 Single Registration for 1 firm/company",
            "Free VAT Consultancy",
            "Free CA Consultancy",
            "Free VAT Implementation Consultancy",
        ],
        noteLines: ["Free VAT", "Implementation", "Consultancy"],
        ctaText: "WhatsApp us",
    },
    {
        id: 3,
        title: "VAT Registration – Group",
        priceText: "499 ",
        bullets: [
            "1 Single Registration for 1 firm/company",
            "Up to 3 Companies",
            "Free VAT & CA Consultancy",
            "Free VAT Implementation Consultancy",
        ],
        noteLines: ["Free VAT", "Implementation", "Consultancy"],
        ctaText: "WhatsApp us",
    },
];

export default function PricingPlans() {
    const { whatsappUrl } = useWhatsAppRouting();

    return (
        <section className="cpn-section" id="pricing">
            <div className="cpn-shell mx-auto">
                <div className="cpn-headRow ">
                  <div className="cpn-headText">
             <p className="pp-title fs-1  fw-bold text-center ">
                            Get Started Or Choose a Plan
                        </p>
                    </div>
                </div>

                <div className="row g-4 g-lg-5 ">
                    {cards.map((c) => (
                        <div key={c.id} className="col-12 col-sm-6 col-lg-4">
                            <CommonPricingCard
                                title={c.title}
                                priceText={c.priceText}
                                bullets={c.bullets}
                                noteLines={c.noteLines}
                                ctaText={c.ctaText}
                                ctaLink={whatsappUrl}
                                minHeight={380}
                                maxHeight={300}
                                aspectRatio="8 / 10"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
