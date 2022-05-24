import React, { useState, useEffect} from 'react';
import axios from "axios";

const CategoriesPages = ({ id }) => {
    const [categoryPages, setCategoryPages] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [allPages] = useState(100);

    useEffect(() => {
        const fetchCategoriesPagesHandler = async () => {
            setLoading(true);
            //TODO: need to buy pro license & refactor
            await axios(process.env.BASE_URL+'/wp-json/wp/v2/encyclopedia?per_page='+allPages+'&encyclopedia-category='+id)
             .then(response => {
                setCategoryPages(response.data)

             })
             .catch(error => {
                 console.error("err fetch data 222");
                 setError(error);
             }).finally(() => {
                 setLoading(false);
             })
        }
 
        fetchCategoriesPagesHandler();
    }, []);

    return (
        <ul>
            {categoryPages
                .sort((a, b) => a.title.rendered.localeCompare(b.title.rendered))
                .map((page) => (
                    <li key={page.id}><a href={'/encyclopedia/'+page.slug}>{page.title.rendered}</a></li>
                ))
            }
        </ul>
    );
};

export default CategoriesPages;