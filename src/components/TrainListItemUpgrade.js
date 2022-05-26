import React, { useState, useEffect } from "react";

const TrainListItemUpgrade = (props) => {
    const [checked, setChecked] = useState(false);

    const changeHandler = () => {
        setChecked(!checked);
        // props.onUpgrade(props.value, props.type, checked)
    };

    return (       
        <button 
            className={"compare-trains__item-stats-upgrades-"+props.type+" "+checked}
            onClick={changeHandler}
        >
                <i></i>
                <span>+{props.value}</span>
        </button>
    )
}

export default TrainListItemUpgrade;