import React from "react";
import Select from 'react-select';
import Train from "../components/Train";

import { useTranslation } from "react-i18next";
import "../translations/i18n";

import Cargo from "../data/cargo.json"


const CompareTrains = (props) => {
    const { t } = useTranslation();
    const options = [
        {
            label: "Era 1",
            options: [
                { 
                    label: t("trains.cargo.swallow"), 
                    value: 101,
                    name: "swallow",
                    tractive_force: 2,
                    reliability: 50,
                    acceleration: 14,
                    speed: 50,
                    slots: 1,
                    upgrades:{
                        tractive_force:[
                            1
                        ],
                        reliability:[
                            20
                        ],
                        acceleration:[
                            4
                        ],
                        speed:[
                            10
                        ]
                    } 
                },
                { 
                    label: t("trains.cargo.raven"), 
                    value: 102,
                    name: "raven",
                    tractive_force: 2,
                    reliability: 50,
                    acceleration: 14,
                    speed: 50,
                    slots: 1,
                    upgrades:{
                        tractive_force:[
                            1
                        ],
                        reliability:[
                            20
                        ],
                        acceleration:[
                            4
                        ],
                        speed:[
                            10
                        ]
                    } 
                },
                { 
                    label: t("trains.cargo.rhinoceros"), 
                    value: 103,
                    name: "rhinoceros",
                    tractive_force: 2,
                    reliability: 50,
                    acceleration: 14,
                    speed: 50,
                    slots: 1,
                    upgrades:{
                        tractive_force:[
                            1
                        ],
                        reliability:[
                            20
                        ],
                        acceleration:[
                            4
                        ],
                        speed:[
                            10
                        ]
                    } 
                },
                { 
                    label: t("trains.cargo.donkey"), 
                    value: 104,
                    name: "donkey",
                    tractive_force: 2,
                    reliability: 50,
                    acceleration: 14,
                    speed: 50,
                    slots: 1,
                    upgrades:{
                        tractive_force:[
                            1
                        ],
                        reliability:[
                            20
                        ],
                        acceleration:[
                            4
                        ],
                        speed:[
                            10
                        ]
                    } 
                },
                { 
                    label: t("trains.cargo.falcon"), 
                    value: 105,
                    name: "falcon",
                    tractive_force: 2,
                    reliability: 50,
                    acceleration: 14,
                    speed: 50,
                    slots: 1,
                    upgrades:{
                        tractive_force:[
                            1
                        ],
                        reliability:[
                            20
                        ],
                        acceleration:[
                            4
                        ],
                        speed:[
                            10
                        ]
                    } 
                },
                { 
                    label: t("trains.cargo.mole"), 
                    value: 106,
                    name: "mole",
                    tractive_force: 2,
                    reliability: 50,
                    acceleration: 14,
                    speed: 50,
                    slots: 1,
                    upgrades:{
                        tractive_force:[
                            1
                        ],
                        reliability:[
                            20
                        ],
                        acceleration:[
                            4
                        ],
                        speed:[
                            10
                        ]
                    } 
                },
                { 
                    label: t("trains.cargo.red_kite"), 
                    value: 107,
                    name: "red_kite",
                    tractive_force: 2,
                    reliability: 50,
                    acceleration: 14,
                    speed: 50,
                    slots: 1,
                    upgrades:{
                        tractive_force:[
                            1
                        ],
                        reliability:[
                            20
                        ],
                        acceleration:[
                            4
                        ],
                        speed:[
                            10
                        ]
                    } 
                },
                { 
                    label: t("trains.cargo.primus"), 
                    value: 108,
                    name: "primus",
                    tractive_force: 2,
                    reliability: 50,
                    acceleration: 14,
                    speed: 50,
                    slots: 1,
                    upgrades:{
                        tractive_force:[
                            1
                        ],
                        reliability:[
                            20
                        ],
                        acceleration:[
                            4
                        ],
                        speed:[
                            10
                        ]
                    } 
                }
            ]
        },
        {
            label: "Era 2",
            options: [
                { 
                    label: t("trains.cargo.bat"), 
                    value: 201,
                    name: "bat",
                    tractive_force: 2,
                    reliability: 50,
                    acceleration: 14,
                    speed: 50,
                    slots: 1,
                    upgrades:{
                        tractive_force:[
                            1
                        ],
                        reliability:[
                            20
                        ],
                        acceleration:[
                            4
                        ],
                        speed:[
                            10
                        ]
                    } 
                },
                { 
                    label: t("trains.cargo.panther"), 
                    value: 202,
                    name: "panther",
                    tractive_force: 2,
                    reliability: 50,
                    acceleration: 14,
                    speed: 50,
                    slots: 1,
                    upgrades:{
                        tractive_force:[
                            1
                        ],
                        reliability:[
                            20
                        ],
                        acceleration:[
                            4
                        ],
                        speed:[
                            10
                        ]
                    } 
                },
                { 
                    label: t("trains.cargo.black_bear"), 
                    value: 203,
                    name: "black_bear",
                    tractive_force: 2,
                    reliability: 50,
                    acceleration: 14,
                    speed: 50,
                    slots: 1,
                    upgrades:{
                        tractive_force:[
                            1
                        ],
                        reliability:[
                            20
                        ],
                        acceleration:[
                            4
                        ],
                        speed:[
                            10
                        ]
                    } 
                },
                { 
                    label: t("trains.cargo.boar"), 
                    value: 204,
                    name: "boar",
                    tractive_force: 2,
                    reliability: 50,
                    acceleration: 14,
                    speed: 50,
                    slots: 1,
                    upgrades:{
                        tractive_force:[
                            1
                        ],
                        reliability:[
                            20
                        ],
                        acceleration:[
                            4
                        ],
                        speed:[
                            10
                        ]
                    } 
                },
                { 
                    label: t("trains.cargo.elephant"), 
                    value: 205,
                    name: "elephant",
                    tractive_force: 2,
                    reliability: 50,
                    acceleration: 14,
                    speed: 50,
                    slots: 1,
                    upgrades:{
                        tractive_force:[
                            1
                        ],
                        reliability:[
                            20
                        ],
                        acceleration:[
                            4
                        ],
                        speed:[
                            10
                        ]
                    } 
                },
                { 
                    label: t("trains.cargo.bull"), 
                    value: 206,
                    name: "bull",
                    tractive_force: 2,
                    reliability: 50,
                    acceleration: 14,
                    speed: 50,
                    slots: 1,
                    upgrades:{
                        tractive_force:[
                            1
                        ],
                        reliability:[
                            20
                        ],
                        acceleration:[
                            4
                        ],
                        speed:[
                            10
                        ]
                    } 
                },
                { 
                    label: t("trains.cargo.primus"), 
                    value: 207,
                    name: "primus",
                    tractive_force: 2,
                    reliability: 50,
                    acceleration: 14,
                    speed: 50,
                    slots: 1,
                    upgrades:{
                        tractive_force:[
                            1
                        ],
                        reliability:[
                            20
                        ],
                        acceleration:[
                            4
                        ],
                        speed:[
                            10
                        ]
                    } 
                },
            ]
        },
        {
            label: "Era 3",
            options: [
                { 
                    label: t("trains.cargo.odin"), 
                    value: 301,
                    name: "odin",
                    tractive_force: 2,
                    reliability: 50,
                    acceleration: 14,
                    speed: 50,
                    slots: 1,
                    upgrades:{
                        tractive_force:[
                            1
                        ],
                        reliability:[
                            20
                        ],
                        acceleration:[
                            4
                        ],
                        speed:[
                            10
                        ]
                    } 
                },
                { 
                    label: t("trains.cargo.dionysos"), 
                    value: 302,
                    name: "dionysos",
                    tractive_force: 2,
                    reliability: 50,
                    acceleration: 14,
                    speed: 50,
                    slots: 1,
                    upgrades:{
                        tractive_force:[
                            1
                        ],
                        reliability:[
                            20
                        ],
                        acceleration:[
                            4
                        ],
                        speed:[
                            10
                        ]
                    } 
                },
                { 
                    label: t("trains.cargo.herakles"), 
                    value: 303,
                    name: "herakles",
                    tractive_force: 2,
                    reliability: 50,
                    acceleration: 14,
                    speed: 50,
                    slots: 1,
                    upgrades:{
                        tractive_force:[
                            1
                        ],
                        reliability:[
                            20
                        ],
                        acceleration:[
                            4
                        ],
                        speed:[
                            10
                        ]
                    } 
                },
                { 
                    label: t("trains.cargo.prometheus"), 
                    value: 304,
                    name: "prometheus",
                    tractive_force: 2,
                    reliability: 50,
                    acceleration: 14,
                    speed: 50,
                    slots: 1,
                    upgrades:{
                        tractive_force:[
                            1
                        ],
                        reliability:[
                            20
                        ],
                        acceleration:[
                            4
                        ],
                        speed:[
                            10
                        ]
                    } 
                },
                { 
                    label: t("trains.cargo.osiris"), 
                    value: 305,
                    name: "osiris",
                    tractive_force: 2,
                    reliability: 50,
                    acceleration: 14,
                    speed: 50,
                    slots: 1,
                    upgrades:{
                        tractive_force:[
                            1
                        ],
                        reliability:[
                            20
                        ],
                        acceleration:[
                            4
                        ],
                        speed:[
                            10
                        ]
                    } 
                },
                { 
                    label: t("trains.cargo.morpheus"), 
                    value: 306,
                    name: "morpheus",
                    tractive_force: 2,
                    reliability: 50,
                    acceleration: 14,
                    speed: 50,
                    slots: 1,
                    upgrades:{
                        tractive_force:[
                            1
                        ],
                        reliability:[
                            20
                        ],
                        acceleration:[
                            4
                        ],
                        speed:[
                            10
                        ]
                    } 
                },
                { 
                    label: t("trains.cargo.isis"), 
                    value: 307,
                    name: "isis",
                    tractive_force: 2,
                    reliability: 50,
                    acceleration: 14,
                    speed: 50,
                    slots: 1,
                    upgrades:{
                        tractive_force:[
                            1
                        ],
                        reliability:[
                            20
                        ],
                        acceleration:[
                            4
                        ],
                        speed:[
                            10
                        ]
                    } 
                },
                { 
                    label: t("trains.cargo.primus"), 
                    value: 308,
                    name: "primus",
                    tractive_force: 2,
                    reliability: 50,
                    acceleration: 14,
                    speed: 50,
                    slots: 1,
                    upgrades:{
                        tractive_force:[
                            1
                        ],
                        reliability:[
                            20
                        ],
                        acceleration:[
                            4
                        ],
                        speed:[
                            10
                        ]
                    } 
                },
            ]
        },
        {
            label: "Era 4",
            options: [
                { 
                    label: t("trains.cargo.apollo"), 
                    value: 401,
                    name: "apollo",
                    tractive_force: 2,
                    reliability: 50,
                    acceleration: 14,
                    speed: 50,
                    slots: 1,
                    upgrades:{
                        tractive_force:[
                            1
                        ],
                        reliability:[
                            20
                        ],
                        acceleration:[
                            4
                        ],
                        speed:[
                            10
                        ]
                    } 
                },
                { 
                    label: t("trains.cargo.ares"), 
                    value: 402,
                    name: "ares",
                    tractive_force: 2,
                    reliability: 50,
                    acceleration: 14,
                    speed: 50,
                    slots: 1,
                    upgrades:{
                        tractive_force:[
                            1
                        ],
                        reliability:[
                            20
                        ],
                        acceleration:[
                            4
                        ],
                        speed:[
                            10
                        ]
                    } 
                },
                { 
                    label: t("trains.cargo.neptune"), 
                    value: 403,
                    name: "neptune",
                    tractive_force: 2,
                    reliability: 50,
                    acceleration: 14,
                    speed: 50,
                    slots: 1,
                    upgrades:{
                        tractive_force:[
                            1
                        ],
                        reliability:[
                            20
                        ],
                        acceleration:[
                            4
                        ],
                        speed:[
                            10
                        ]
                    } 
                },
                { 
                    label: t("trains.cargo.horus"), 
                    value: 404,
                    name: "horus",
                    tractive_force: 2,
                    reliability: 50,
                    acceleration: 14,
                    speed: 50,
                    slots: 1,
                    upgrades:{
                        tractive_force:[
                            1
                        ],
                        reliability:[
                            20
                        ],
                        acceleration:[
                            4
                        ],
                        speed:[
                            10
                        ]
                    } 
                },
                { 
                    label: t("trains.cargo.thor"), 
                    value: 405,
                    name: "thor",
                    tractive_force: 2,
                    reliability: 50,
                    acceleration: 14,
                    speed: 50,
                    slots: 1,
                    upgrades:{
                        tractive_force:[
                            1
                        ],
                        reliability:[
                            20
                        ],
                        acceleration:[
                            4
                        ],
                        speed:[
                            10
                        ]
                    } 
                },
                { 
                    label: t("trains.cargo.poseidon"), 
                    value: 406,
                    value: "poseidon",
                    tractive_force: 2,
                    reliability: 50,
                    acceleration: 14,
                    speed: 50,
                    slots: 1,
                    upgrades:{
                        tractive_force:[
                            1
                        ],
                        reliability:[
                            20
                        ],
                        acceleration:[
                            4
                        ],
                        speed:[
                            10
                        ]
                    } 
                },
                { 
                    label: t("trains.cargo.zeus"), 
                    value: 407,
                    name: "zeus",
                    tractive_force: 2,
                    reliability: 50,
                    acceleration: 14,
                    speed: 50,
                    slots: 1,
                    upgrades:{
                        tractive_force:[
                            1
                        ],
                        reliability:[
                            20
                        ],
                        acceleration:[
                            4
                        ],
                        speed:[
                            10
                        ]
                    } 
                },
                { 
                    label: t("trains.cargo.primus"), 
                    value: 408,
                    name: "primus",
                    tractive_force: 2,
                    reliability: 50,
                    acceleration: 14,
                    speed: 50,
                    slots: 1,
                    upgrades:{
                        tractive_force:[
                            1
                        ],
                        reliability:[
                            20
                        ],
                        acceleration:[
                            4
                        ],
                        speed:[
                            10
                        ]
                    } 
                }
            ]
        },
        {
            label: "Era 5",
            options: [
                { 
                    label: t("trains.cargo.unicorn"), 
                    value: 501,
                    name: "unicorn",
                    tractive_force: 2,
                    reliability: 50,
                    acceleration: 14,
                    speed: 50,
                    slots: 1,
                    upgrades:{
                        tractive_force:[
                            1
                        ],
                        reliability:[
                            20
                        ],
                        acceleration:[
                            4
                        ],
                        speed:[
                            10
                        ]
                    } 
                },
                { 
                    label: t("trains.cargo.medusa"), 
                    value: 502,
                    value: "medusa",
                    tractive_force: 2,
                    reliability: 50,
                    acceleration: 14,
                    speed: 50,
                    slots: 1,
                    upgrades:{
                        tractive_force:[
                            1
                        ],
                        reliability:[
                            20
                        ],
                        acceleration:[
                            4
                        ],
                        speed:[
                            10
                        ]
                    } 
                },
                { 
                    label: t("trains.cargo.basilisk"), 
                    value: 503,
                    name: "basilisk",
                    tractive_force: 2,
                    reliability: 50,
                    acceleration: 14,
                    speed: 50,
                    slots: 1,
                    upgrades:{
                        tractive_force:[
                            1
                        ],
                        reliability:[
                            20
                        ],
                        acceleration:[
                            4
                        ],
                        speed:[
                            10
                        ]
                    } 
                },
                { 
                    label: t("trains.cargo.satyr"), 
                    value: 504,
                    name: "satyr",
                    tractive_force: 2,
                    reliability: 50,
                    acceleration: 14,
                    speed: 50,
                    slots: 1,
                    upgrades:{
                        tractive_force:[
                            1
                        ],
                        reliability:[
                            20
                        ],
                        acceleration:[
                            4
                        ],
                        speed:[
                            10
                        ]
                    } 
                },
                { 
                    label: t("trains.cargo.leviathan"), 
                    value: 505,
                    value: "leviathan",
                    tractive_force: 2,
                    reliability: 50,
                    acceleration: 14,
                    speed: 50,
                    slots: 1,
                    upgrades:{
                        tractive_force:[
                            1
                        ],
                        reliability:[
                            20
                        ],
                        acceleration:[
                            4
                        ],
                        speed:[
                            10
                        ]
                    } 
                },
                { 
                    label: t("trains.cargo.centaur"), 
                    value: 506,
                    name: "centaur",
                    tractive_force: 2,
                    reliability: 50,
                    acceleration: 14,
                    speed: 50,
                    slots: 1,
                    upgrades:{
                        tractive_force:[
                            1
                        ],
                        reliability:[
                            20
                        ],
                        acceleration:[
                            4
                        ],
                        speed:[
                            10
                        ]
                    } 
                },
                { 
                    label: t("trains.cargo.sphinx"), 
                    value: 507,
                    name: "sphinx",
                    tractive_force: 2,
                    reliability: 50,
                    acceleration: 14,
                    speed: 50,
                    slots: 1,
                    upgrades:{
                        tractive_force:[
                            1
                        ],
                        reliability:[
                            20
                        ],
                        acceleration:[
                            4
                        ],
                        speed:[
                            10
                        ]
                    } 
                },
                { 
                    label: t("trains.cargo.primus"), 
                    value: 508,
                    name: "primus",
                    tractive_force: 2,
                    reliability: 50,
                    acceleration: 14,
                    speed: 50,
                    slots: 1,
                    upgrades:{
                        tractive_force:[
                            1
                        ],
                        reliability:[
                            20
                        ],
                        acceleration:[
                            4
                        ],
                        speed:[
                            10
                        ]
                    } 
                }
            ]
        },
        {
            label: "Era 6",
            options: [
                { 
                    label: t("trains.cargo.ogre"), 
                    value: 601,
                    name: "ogre",
                    tractive_force: 2,
                    reliability: 50,
                    acceleration: 14,
                    speed: 50,
                    slots: 1,
                    upgrades:{
                        tractive_force:[
                            1
                        ],
                        reliability:[
                            20
                        ],
                        acceleration:[
                            4
                        ],
                        speed:[
                            10
                        ]
                    } 
                },
                { 
                    label: t("trains.cargo.phoenix"), 
                    value: 602,
                    name: "phoenix",
                    tractive_force: 2,
                    reliability: 50,
                    acceleration: 14,
                    speed: 50,
                    slots: 1,
                    upgrades:{
                        tractive_force:[
                            1
                        ],
                        reliability:[
                            20
                        ],
                        acceleration:[
                            4
                        ],
                        speed:[
                            10
                        ]
                    } 
                },
                { 
                    label: t("trains.cargo.pegasus"), 
                    value: 603,
                    name: "pegasus",
                    tractive_force: 2,
                    reliability: 50,
                    acceleration: 14,
                    speed: 50,
                    slots: 1,
                    upgrades:{
                        tractive_force:[
                            1
                        ],
                        reliability:[
                            20
                        ],
                        acceleration:[
                            4
                        ],
                        speed:[
                            10
                        ]
                    } 
                },
                { 
                    label: t("trains.cargo.lindworm"), 
                    value: 604,
                    name: "lindworm",
                    tractive_force: 2,
                    reliability: 50,
                    acceleration: 14,
                    speed: 50,
                    slots: 1,
                    upgrades:{
                        tractive_force:[
                            1
                        ],
                        reliability:[
                            20
                        ],
                        acceleration:[
                            4
                        ],
                        speed:[
                            10
                        ]
                    } 
                },
                { 
                    label: t("trains.cargo.hydra"), 
                    value: 605,
                    name: "hydra",
                    tractive_force: 2,
                    reliability: 50,
                    acceleration: 14,
                    speed: 50,
                    slots: 1,
                    upgrades:{
                        tractive_force:[
                            1
                        ],
                        reliability:[
                            20
                        ],
                        acceleration:[
                            4
                        ],
                        speed:[
                            10
                        ]
                    } 
                },
                { 
                    label: t("trains.cargo.olympus"), 
                    value: 606,
                    name: "olympus",
                    tractive_force: 2,
                    reliability: 50,
                    acceleration: 14,
                    speed: 50,
                    slots: 1,
                    upgrades:{
                        tractive_force:[
                            1
                        ],
                        reliability:[
                            20
                        ],
                        acceleration:[
                            4
                        ],
                        speed:[
                            10
                        ]
                    } 
                },
                { 
                    label: t("trains.cargo.valkyrie"), 
                    value: 607,
                    name: "valkyrie",
                    tractive_force: 2,
                    reliability: 50,
                    acceleration: 14,
                    speed: 50,
                    slots: 1,
                    upgrades:{
                        tractive_force:[
                            1
                        ],
                        reliability:[
                            20
                        ],
                        acceleration:[
                            4
                        ],
                        speed:[
                            10
                        ]
                    } 
                },
                { 
                    label: t("trains.cargo.primus"), 
                    value: 608,
                    name: "primus",
                    tractive_force: 2,
                    reliability: 50,
                    acceleration: 14,
                    speed: 50,
                    slots: 1,
                    upgrades:{
                        tractive_force:[
                            1
                        ],
                        reliability:[
                            20
                        ],
                        acceleration:[
                            4
                        ],
                        speed:[
                            10
                        ]
                    } 
                }
            ]
        },
        {
            label: "Era 7",
            options: [
                { 
                    label: t("trains.cargo.titan"), 
                    value: 701,
                    name: "titan",
                    tractive_force: 2,
                    reliability: 50,
                    acceleration: 14,
                    speed: 50,
                    slots: 1,
                    upgrades:{
                        tractive_force:[
                            1
                        ],
                        reliability:[
                            20
                        ],
                        acceleration:[
                            4
                        ],
                        speed:[
                            10
                        ]
                    } 
                },
            ]
        }
    ];

    console.log(props);

    const find = (event) => {
        console.log(event)
    }

    return(
        <>
            <Select 
                options={options}
                onChange={find}
            />
            {/* <Train /> */}
        </>
    )
}

export default CompareTrains;