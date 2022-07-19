import React from "react";

import photo from "../../assets/blogCollections/Group755.png";
const BlogCollectionsInfo = () =>{
    return(
        <div className="blogCollectionsInfo">
            <div className="blogCollectionsInfo__blogs">
                Blogs
            </div>
            <div className="blogCollectionsInfo__text">
                <p className="blogCollectionsInfo__text__p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Pellentesque amet vel facilisis imperdiet mi pellentesque tincidunt turpis. 
                    consectetur adipiscing elit. Pellentesque amet vel facilisis imperdiet mi pellentesque tincidunt turpis.
                </p>

            </div>
            <div className="blogCollectionsInfo__img">
                <img  src={photo} alt="" />
            </div>
        </div>
    )
}

export default BlogCollectionsInfo