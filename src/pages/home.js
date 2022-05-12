import React from "react";

import { useTranslation } from "react-i18next";
import "../translations/i18n";

const Home = () => {
    const { t } = useTranslation();

    return(
        <>
            <div className="col-6">
                {t("welcome")}
            </div>
            <div className="col-6">
                test-A
            </div>
        </>
    )
}

export default Home;