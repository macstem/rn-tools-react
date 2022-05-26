import React, { useState } from "react";
import Select from 'react-select';
import TrainList from "../components/TrainList";

import { useTranslation } from "react-i18next";
import "../translations/i18n";

import Cargo from "../data/cargo.json"


const CompareTrains = (props) => {
    const { t } = useTranslation();
    const [showAdd, setShowAdd] = useState(false);
    const [trainList, setTrainList] = useState([]);
    const [counter, setCounter] = useState(0);

    let opt;
    props.prop === 'cargo' ? opt = [...Cargo] : opt = [...Cargo];

    opt.map((era, i, array) => (
        era.options.forEach((data) => {
            data.label = t(data.label)
        })
    ))
   
    const addTrainHandler = event => {
        setTrainList(prevTrainList => {
            const updatedTrainList = [...prevTrainList];
            Object.assign(event, {id: counter});
            updatedTrainList.unshift(event);
            setShowAdd(false);
            setCounter(count => count + 1)
            return updatedTrainList;
        });
    };
    
    const deleteItemHandler = trainId => {
        setTrainList(prevTrainList => {
            const updatedTrainList = prevTrainList.filter(filteredTrain => filteredTrain.id !== trainId);
            return updatedTrainList;
        });
    };

    const addTrain = () => {
        setShowAdd(true);
    }

    return(
        <>
            <button
                onClick={addTrain}
            >
                {t("compare.add_train")}
            </button>
            {showAdd &&
                <Select 
                    options={opt}
                    onChange={addTrainHandler}
                />
            }

            { trainList.length > 0 &&
                <TrainList name={trainList} type={props.prop} onDeleteItem={deleteItemHandler} />
            }
        </>
    )
}

export default CompareTrains;