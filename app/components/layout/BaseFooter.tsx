"use client";

import { useTranslationContext } from "@/contexts/TranslationContext";


const BaseFooter = () => {
    const { _t } = useTranslationContext();

    return (
        <footer className="container py-10">
            <p>
                {_t("footer.developedBy")}{" "}
                <a
                    target="_blank"
                    style={{ textDecoration: "underline" }}
                >
                    Harsh Chudasama & Team
                </a>
            </p>
        </footer>
    );
};

export default BaseFooter;
