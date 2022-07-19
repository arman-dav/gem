import React from "react";

import BlogCollectionsItems from "../ReusableComponents/BlogCollectionItems"

import BlogCollectionsInfo from "./BlogCollectionsInfo";


let BlogCollectionsPage = () => {
    return(
        <div className="blogCollectionsPage">
            <BlogCollectionsInfo />
            <div className="blogCollectionsItems">
                
                <BlogCollectionsItems />
                <BlogCollectionsItems />
                <BlogCollectionsItems />
                <BlogCollectionsItems />
                <BlogCollectionsItems />
                <BlogCollectionsItems />
                <BlogCollectionsItems />
                <BlogCollectionsItems />
                <BlogCollectionsItems />
            </div>
        </div>
    )
}

export default BlogCollectionsPage