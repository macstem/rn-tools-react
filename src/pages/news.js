import React, {useEffect, useState} from "react";
import { Link } from 'react-router-dom'
import axios from "axios";
import { setDefaultNamespace } from "i18next";

const News = () => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios('https://rn.tools/wp-json/wp/v2/posts', {
            mode: 'no-cors',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
            },
            withCredentials: true,
            credentials: 'same-origin',
        })
            .then(response => {
                setData(response)
            })
            .catch(error => {
                console.error("err fetch data");
                setError(error);
            }).finally(() => {
                setLoading(false);
                console.log(data)
            })
    })

    if(loading) return "Loading..."
    if(error) return "Error!"

    return(
        <>
            <h2>News</h2>
            <ul>
                <li><Link to="/news/1">1</Link></li>
                <li><Link to="/news/2">2</Link></li>
                <li><Link to="/news/3">3 </Link></li>
            </ul>
        </>
    )
}

export default News;