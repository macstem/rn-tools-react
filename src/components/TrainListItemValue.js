import React from "react";

const TrainListItemValue = (props) => {
    return (       
        <div className={"compare-trains__item-stats-total-"+props.type}>
            <i></i>
            <span>{props.value}</span>
        </div>
    )
}

export default TrainListItemValue;