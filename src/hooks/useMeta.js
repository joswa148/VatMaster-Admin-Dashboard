import { useState, useEffect, useCallback, useMemo } from 'react';
import { metaAPI } from '../services/api';

export const useMeta = () => {
    const defaultMeta = useMemo(() => ({
        "home": {
            title: "VAT Masters | Expert Tax Consultancy in UAE",
            description: "VAT Masters provides expert VAT registration, corporate tax, and accounting services in UAE. FT Approved consultants at your service.",
            keywords: "vat registration uae, corporate tax dubai, tax consultancy"
        },
        "corporate-tax": {
            title: "Corporate Tax Registration UAE | UAE Tax Consultants",
            description: "Get your Corporate Tax registration done by FTA-certified experts. Hassle-free and fast process for business income tax compliance.",
            keywords: "corporate tax registration, uae tax, business tax"
        },
        "vat-registration": {
            title: "VAT Registration UAE | Fast & Easy VAT Services",
            description: "Register for VAT in UAE quickly with VAT Masters. Our experts handle all documentation and compliance for your business.",
            keywords: "vat registration uae, vat consultant dubai, register for vat"
        }
    }), []);

    const [metaData, setMetaData] = useState(defaultMeta);
    const [isLoading, setIsLoading] = useState(true);

    const refreshMeta = useCallback(() => {
        metaAPI.getAll()
            .then(rows => {
                const config = {};
                rows.forEach(r => {
                    config[r.page_id] = { title: r.title, description: r.description, keywords: r.keywords };
                });
                setMetaData(config);
            })
            .catch(() => setMetaData(defaultMeta))
            .finally(() => setIsLoading(false));
    }, [defaultMeta]);

    useEffect(() => {
        refreshMeta();
    }, [refreshMeta]);

    const setPageMeta = useCallback((pageId) => {
        const pageMeta = metaData[pageId] || defaultMeta[pageId];
        if (!pageMeta) return;

        document.title = pageMeta.title;

        let descTag = document.querySelector('meta[name="description"]');
        if (!descTag) {
            descTag = document.createElement('meta');
            descTag.name = 'description';
            document.head.appendChild(descTag);
        }
        descTag.content = pageMeta.description;

        let keyTag = document.querySelector('meta[name="keywords"]');
        if (!keyTag) {
            keyTag = document.createElement('meta');
            keyTag.name = 'keywords';
            document.head.appendChild(keyTag);
        }
        keyTag.content = pageMeta.keywords;
    }, [metaData, defaultMeta]);

    return { metaData, setPageMeta, isLoading };
};
