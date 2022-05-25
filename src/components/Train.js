import React, { useState } from "react";

import TrainListItemValue from "./TrainListItemValue";

import { useTranslation } from "react-i18next";
import "../translations/i18n";

const Train = (props) => {
    const { t } = useTranslation();
    const [defaultCondition, setDefaultCondition] = useState(100);

    const deleteHandler = () => {
        props.onDelete(props.id);
    };

    return ( 
        <div className="compare-trains__item row" >
            <div className="compare-trains__item-data col">
                <div className="compare-trains__item-data-image">
                    <img src={`https://rn.tools/wp-content/themes/rn/img/trains/${props.trainItem.name}.png`} alt="" />
                </div>
                <div className="compare-trains__item-data-name">
                    {t("trains."+props.type+"."+props.trainItem.name)}
                    <p>{t("era")} {props.trainItem .era}</p>
                </div>
                <div className="compare-trains__item-data-slots">1</div>
            </div>
            <div className="compare-trains__item-vouchers col">
                <button className="compare-trains__item-vouchers-speed" title="Bon na przyspieszenie">
                    <i></i>
                    <span>+20</span>
                    <p className="start"></p>
                </button>
            </div>
            <div className="compare-trains__item-stats col">
                <div className="compare-trains__item-stats-total row">
                    <div className="compare-trains__item-stats-total-tractive_force">
                        <i></i>
                        <span>2</span>
                    </div>
                    <div className="compare-trains__item-stats-total-reliability">
                        <i></i>
                        <span>50</span>
                    </div>
                    <div className="compare-trains__item-stats-total-acceleration">
                        <i></i>
                        <span>14</span>
                    </div>
                    <div className="compare-trains__item-stats-total-speed">
                        <i></i>
                        <span>50</span>
                    </div>
                </div>
                <div className="compare-trains__item-stats-upgAll" title="Ulepsz wszystko / Odznacz wszystko">upgAll</div>
                <div className="compare-trains__item-stats-upgrades">
                    <div className="compare-trains__item-stats-upgrades-tractive_force">
                        <button>
                            <i></i>
                            <span>+1</span>
                            <p className="start"></p>
                        </button>
                    </div>
                    <div className="compare-trains__item-stats-upgrades-reliability">
                        <button>
                            <i></i>
                            <span>+20</span>
                            <p className="start"></p>
                        </button>
                    </div>
                    <div className="compare-trains__item-stats-upgrades-acceleration">
                        <button>
                            <i></i>
                            <span>+4</span>
                            <p className="start"></p>
                        </button>
                    </div>
                    <div className="compare-trains__item-stats-upgrades-speed">
                        <button>
                            <i></i>
                            <span>+10</span>
                            <p className="start"></p>
                        </button>
                    </div>
                </div>
                <div className="compare-trains__item-stats-condition">
                    <label>{t("compare.condition")}</label>
                    <input 
                        className="cond form-control" 
                        type="number" 
                        min="0" 
                        max="100" 
                        step="1" 
                        defaultValue={defaultCondition}
                    />
                </div>
            </div>
            <button 
                className="compare-trains__item-remove"
                onClick={deleteHandler}
            >x</button>
        </div> 
    );
}

export default Train;