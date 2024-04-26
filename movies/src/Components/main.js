// Main.js
import React, { useState, useEffect } from "react";
import Card from "./Card";
import './style.css'

const Main = () => {
    let API_key = "&api_key=db95773a7fb212ba790d71f6adac0e7e";
    let base_url = "https://api.themoviedb.org/3";
    let url = base_url + "/discover/movie?sort_by=popularity.desc" + API_key;
    let arr = ["Popular", "Theatre", "Kids", "Drama", "Comedie"];

    const [movieData, setData] = useState([]);
    const [url_set, setUrl] = useState(url);
    const [search, setSearch] = useState("");

    useEffect(() => {
        fetch(url_set)
            .then((res) => res.json())
            .then((data) => {
                setData(data.results);
            });
    }, [url_set]);

    const getData = (movieType) => {
        let newUrl = "";
        if (movieType === "Popular") {
            newUrl = base_url + "/discover/movie?sort_by=popularity.desc" + API_key;
        } else if (movieType === "Theatre") {
            newUrl =
                base_url +
                "/discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22" +
                API_key;
        } else if (movieType === "Kids") {
            newUrl =
                base_url +
                "/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc" +
                API_key;
        } else if (movieType === "Drama") {
            newUrl = base_url + "/discover/movie?with_genres=18&primary_release_year=2014" + API_key;
        } else if (movieType === "Comedie") {
            newUrl =
                base_url +
                "/discover/movie?with_genres=35&with_cast=23659&sort_by=revenue.desc" +
                API_key;
        }
        setUrl(newUrl);
    };

    const searchMovie = (evt) => {
        if (evt.key === "Enter") {
            let newUrl =
                base_url +
                "/search/movie?api_key=db95773a7fb212ba790d71f6adac0e7e&query=" +
                search;
            setUrl(newUrl);
            setSearch("");
        }
    };

    return (
        <>
            <div className="header">
                <nav>
                    <ul>
                        {arr.map((value, pos) => (
                            <li key={pos}>
                                <a href="#" name={value} onClick={(e) => getData(e.target.name)}>
                                    {value}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
                <form>
                    <div className="search-btn">
                        <input
                            type="text"
                            placeholder="Enter Movie Name"
                            className="inputText"
                            onChange={(e) => setSearch(e.target.value)}
                            value={search}
                            onKeyPress={searchMovie}
                        />
                        <button>
                            <i className="fas fa-search"></i>
                        </button>
                    </div>
                </form>
            </div>
            <div className="container">
                {movieData.length === 0 ? (
                    <p className="notfound">Not Found</p>
                ) : (
                    movieData.map((res, pos) => <Card info={res} key={pos} />)
                )}
            </div>
        </>
    );
};

export default Main;
