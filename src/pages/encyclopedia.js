import React, { useState, useEffect } from "react";
import axios from "axios";
import CategoriesPages from "../components/CategoriesPages";

const Encyclopedia = () => {
    const [encyclopediaCategories, setEncyclopediaCategories] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchEncyclopediaHandler = async () => {
            setLoading(true);
            //TODO: need to buy pro license & refactor
            await axios(process.env.BASE_URL+'/wp-json/wp/v2/encyclopedia-category')
             .then(response => {
                 setEncyclopediaCategories(response.data)
             })
             .catch(error => {
                 console.error("err fetch data");
                 setError(error);
             }).finally(() => {
                 setLoading(false);
             })
        }
 
        fetchEncyclopediaHandler();
    }, []);


    return(
        <>
            <h2>Encyklopedia RN</h2>
            { encyclopediaCategories.map((category) => (
                <ul key={category.id}>
                    <li>
                        <h3>{ category.name }</h3>
                        <CategoriesPages id={category.id} />
                    </li>
                </ul>
            )) }
        </>
    )
}

export default Encyclopedia;