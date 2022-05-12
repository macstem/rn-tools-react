import React from "react";
import { useParams} from 'react-router-dom'

const NewsItem = () => {
    const params = useParams();

    return(
        <>
            <h2>News</h2>
            <p>{params.id}</p>
        </>
    )
}

export default NewsItem;