import React, { useEffect, useState } from 'react'
import Article from './Article'

const News = () => {
    const [articles, setArticles] = useState([])
   
    const [countries, setCountries] = useState("")

    useEffect(() => {
        fetch(`https://newsapi.org/v2/top-headlines?country=${countries}&pageSize=12&category=business&apiKey=b71fff703d9b43259edad91911e88294`)
        .then(res=>res.json())
        .then(data=> setArticles(data.articles))
    },)
    return (
        <>
        <div className="container">
            <div className="selction-box">
                <h1 htmlFor="">Select Country:</h1>
                <select onChange={(e)=>{ 

                    const selectedFood= e.target.value;
                    setCountries(selectedFood)
                }} >
                    <option className="option" value="us">Global</option>
                    <option className="option" value="in">India</option>
                    <option className="option" value="ca">Canada</option>
                    <option className="option" value="jp">Japan</option>
                </select>
            </div>


                        
        </div>

        <Article countries={countries} articles={articles}/>

        </>
    )
}

export default News
