import React from "react";

const Feed = ((props) => {
    return (
        <>
            <div id="fb-root"></div>
            <iframe 
                src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FRailNationINT%2F&tabs=timeline&width=330&height=400&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=1180305705486282" 
                width="330" 
                height="400" 
                // style="border:none;overflow:hidden" 
                scrolling="no" 
                frameBorder="0" 
                allowtransparency="true" 
                allow="encrypted-media"
            ></iframe>
        </>
    )
});

export default Feed;