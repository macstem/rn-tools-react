import React, {useEffect, useState} from "react";
import { Link } from 'react-router-dom'
import axios from "axios";
import Posts from "../components/Posts";
import Pagination from "../components/Pagination";


import { useTranslation } from "react-i18next";
import "../translations/i18n";

const News = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(5);
    const [allPosts] = useState(100);

    const { t } = useTranslation();
    const { i18n } = useTranslation();
    const lang = i18n.language;

    useEffect(() => {
       const fetchPostsHandler = async () => {
           setLoading(true);
           //TODO: need to buy pro license & refactor
           await axios(process.env.BASE_URL+'/wp-json/wp/v2/posts?_embed&per_page='+allPosts)
            .then(response => {
                setPosts(response.data)
                console.log(response.data);
            })
            .catch(error => {
                console.error("err fetch data");
                setError(error);
            }).finally(() => {
                setLoading(false);
            })
       }

       fetchPostsHandler();
    }, []);

    const lastPostIndex = currentPage * postsPerPage;
    const firstPostIndex = lastPostIndex - postsPerPage;
    const currentPosts = posts.slice(firstPostIndex, lastPostIndex);
    console.log(firstPostIndex,lastPostIndex,currentPosts,posts.length);

    const paginate = (pageNumber) => setCurrentPage(pageNumber)

    return(
        <>
            <h2>{t("news")}</h2>
                {(lang === 'pl') && (
                    <div className="news-list">
                        <Posts posts={currentPosts} loading={loading} error={error} />
                        <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate} />
                    </div>
                )}
                {lang !== 'pl' && (
                    <p>{t("no_lang_news")}</p>
                )}

        </>
    )
}

export default News;