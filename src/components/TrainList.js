import React, { useState } from "react";

import TrainListItem from './Train';

const TrainList = props => {
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