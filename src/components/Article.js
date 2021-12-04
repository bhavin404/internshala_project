import React, { useEffect, useState } from 'react'

const Article = (props) => {
    var{articles} =props;
   
    console.log(props.countries);
    console.log(articles);
    return (
        <div className="news_container">
                   <div className="main_box">

        {articles.map((article,index)=> 
       <div className="article_boxes" key={index}>
           <div className="img">
               <img src={article.urlToImage} alt="" />
           </div>
           <div className="text">
               <div className="title">
                   {article.title}
               </div>
               <div className="description">
                    {article.description}
               </div>
           </div>
       </div>
       

        )}
   </div>
          
            
            
        </div>
    )
}

export default Article
