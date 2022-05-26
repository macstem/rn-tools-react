import React, { useState } from "react";

import TrainListItemValue from "./TrainListItemValue";
import TrainListItemUpgrade from "./TrainListItemUpgrade";

import { useTranslation } from "react-i18next";
import "../translations/i18n";

const Train = (props) => {
    const { t } = useTranslation();
    const voucherSpeed = 20;
    const [stats, setStats] = useState({
        condition: 100, 
        tractiveForce: props.trainItem.stats.tractiveForce,
        speed: props.trainItem.stats.speed,
        acceleration: props.trainItem.stats.acceleration,
        reliability: props.trainItem.stats.reliability
    });

    const deleteHandler = () => {
        props.onDelete(props.id);
    };

    const upgradeHandler = (value, type, c) => {
        console.log(c);
        if(c){
            setStats({
                ...stats, 
                [type]: props.trainItem.stats[type] += value
            });
        } else {
            setStats({
                ...stats, 
                [type]: props.trainItem.stats[type] -= value
            });
        }
        console.log(stats);        
    }

    const upgradeAll = () => {
        setStats({
            ...stats, 
            
            tractiveForce: props.trainItem.stats.tractiveForce,
            speed: props.trainItem.stats.speed,
            acceleration: props.trainItem.stats.acceleration,
            reliability: props.trainItem.stats.reliability
        });
    }

    return ( 
        <div className="compare-trains__item row" >
            <div className="compare-trains__item-data col">
                <div className="compare-trains__item-data-image">
                    {/* <img src={`https://rn.tools/wp-content/themes/rn/img/trains/${props.trainItem.name}.png`} alt="" /> */}
                </div>
                <div className="compare-trains__item-data-name">
                    {t("trains."+props.type+"."+props.trainItem.name)}
                    <p>{t("era")} {props.trainItem.era}</p>
                </div>
                <div className="compare-trains__item-data-slots">{props.trainItem.slots}</div>
            </div>
            <div className="compare-trains__item-vouchers col">
                <TrainListItemUpgrade
                    key="speed-voucher" 
                    type="speed"
                    value={voucherSpeed}
                    onUpgrade={upgradeHandler}
                />
            </div>
            <div className="compare-trains__item-stats col">
                <div className="compare-trains__item-stats-total row">
                    {Object.keys(props.trainItem.stats).map((value) => (
                        <TrainListItemValue
                            key={value} 
                            type={value}
                            value={props.trainItem.stats[value]}
                        >
                        </TrainListItemValue>
                    ))}
                </div>
                <button 
                    className="compare-trains__item-stats-upgAll col" 
                    title="Ulepsz wszystko / Odznacz wszystko"
                    onClick={upgradeAll}
                >upgAll</button>
                <div className="compare-trains__item-stats-upgrades col">
                    {Object.keys(props.trainItem.upgrades).map((value) => (
                        Object.keys(props.trainItem.upgrades[value]).map((upg) => (
                            <TrainListItemUpgrade
                                key={props.trainItem.id+value+upg+props.trainItem.upgrades[value][upg]} 
                                type={value}
                                value={props.trainItem.upgrades[value][upg]}
                                onUpgrade={upgradeHandler}
                            />
                        ))

                    ))}
                </div>
                <div className="compare-trains__item-stats-condition">
                    <label>{t("compare.condition")}</label>
                    <input 
                        className="cond form-control" 
                        type="number" 
                        min="0" 
                        max="100" 
                        step="1" 
                        defaultValue={stats.condition}
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