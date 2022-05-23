import React from 'react';
import parse from "html-react-parser";

const Posts = ({posts, loading, error}) => {
    if(loading) return "Loading..."
    if(error) return "Error!"

    return (
        <>        
            {posts.map((news) => (
                <article id={"post-"+news.id} className={"post-"+news.id+ " post type-post status-publish format-standard has-post-thumbnail hentry category-bez-kategorii"} key={news.id}>
                    <a href={news.link} className="thumb" title={news.title.rendered}>
                        <img src={news._embedded['wp:featuredmedia']['0'].media_details.sizes.thumbnail.source_url} className="attachment-120x120 size-120x120 wp-post-image" alt="" />	
                    </a>
                    <div className="news-content">
                        <h2 className="title">
                            <a href={news.link} title={news.title.rendered}>{news.title.rendered}</a>
                        </h2>
                        <div className="post-details">
                            <span className="date">10-03-2022</span>
                            <span className="author"></span>
                            <span className="comments"></span>
                        </div>

                        {parse(news.excerpt.rendered)}
                    </div>
                </article>
            ))}
        </>
    );
};


export default Posts;