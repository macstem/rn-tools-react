import React from "react";

import { useTranslation } from "react-i18next";
import "../translations/i18n";

import Feed from "../components/Feed";

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
            <Feed />
        </>
    )
}

export default Home;