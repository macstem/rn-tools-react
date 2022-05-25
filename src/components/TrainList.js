import React, { useState } from "react";

import TrainListItem from './Train';

import { useTranslation } from "react-i18next";
import "../translations/i18n";

const TrainList = props => {
    const { t } = useTranslation();

    console.log("p: ", props)

    return (
        <div className="compare-trains">
            {props.name.map((trainItem) => (            
                <TrainListItem
                    key={trainItem.id}
                    id={trainItem.id}
                    onDelete={props.onDeleteItem}
                    trainItem={trainItem}
                    type={props.type}
                >
                </TrainListItem>
            ))} 
        </div>
    );
};

export default TrainList;