import React, { useState, useEffect } from "react";

const TrainListItemUpgrade = (props) => {
    const [check, setCheck] = useState(false);

    const changeHandler = () => {
        setCheck(prevCheck => !prevCheck);
        props.onUpgrade(props.value, props.type, check)
    };

    return (       
        <button 
            className={"compare-trains__item-stats-upgrades-"+props.type+" "+check}
            onClick={changeHandler}
        >
                <i></i>
                <span>+{props.value}</span>
        </button>
    )
}

export default TrainListItemUpgrade;