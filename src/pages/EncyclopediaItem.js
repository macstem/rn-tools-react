import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from 'react-router-dom';
import parse from "html-react-parser";

const EncyclopediaItem = () => {
    const params = useParams();
    const [encyclopediaPost, setEncyclopediaPost] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchEncyclopediaHandler = async () => {
            setLoading(true);
            //TODO: need to buy pro license & refactor
            await axios(process.env.BASE_URL+'/wp-json/wp/v2/encyclopedia?slug='+params.id)
             .then(response => {
                setEncyclopediaPost(response.data)
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
            {encyclopediaPost.map((post) => (
                <div key={post.id}>
                    <h2>{post.title.rendered}</h2>
                    <div>{parse(post.content.rendered)}</div>
                </div>
            ))}
        </>
    )
}

export default EncyclopediaItem;