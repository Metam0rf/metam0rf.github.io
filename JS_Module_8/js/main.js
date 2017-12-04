"use strict"

const API_KEY = "f24a0fd18f52218851075901c5a108a0";
const URL = "https://api.themoviedb.org/3";
const POSTERS_URL = "https://image.tmdb.org/t/p/w300";
const defaultLanguage = "&language=ru";
const FILMS_COUNT = 20;
const SEARCH_REQUEST = `${URL}/search/movie?api_key=${API_KEY}`;

const filmsContainer = document.querySelector("main");
const movieFilterForm = document.querySelector("#movieFilter");
const searchByNameInput = document.querySelector("#searchText");
const categoryContainer = document.querySelector("#requestCategory");
const htmlTpl = document.querySelector("#movie-card").textContent.trim();
const compiled = _.template(htmlTpl);

const updateFilmsView = films => {
    let htmlString = "";

    if(films.length !== 0) {
        films.forEach((film, index) => {
            if (index > FILMS_COUNT) return;
            htmlString += compiled(film);
        });
    } else {
        htmlString = "<h2>По вашему запросу ничего не найдено!</h2>";
    }

    filmsContainer.innerHTML = htmlString;
};

const getRequestParams =(event) => {
    if(event.target.id === "search" || searchByNameInput.value.trim() !== ""){
        const searchText = searchByNameInput.value.trim();
        searchByNameInput.value = "";
        return `${SEARCH_REQUEST}${defaultLanguage}&query=${searchText.replace(/ /g, "+")}`;
    } else {
        return `${URL}/movie/${event.target.id}?api_key=${API_KEY}${defaultLanguage}`;
    }
};

const submit = (event) => {
    event.preventDefault();
    getFilmsData(getRequestParams(event))
        .then(data => {
            console.log(data);
            updateFilmsView(data);
        })
        .catch(err => {
            console.error("Error: ", err);
        });
};

const getFilmsData = (URL_REQUEST) => {
    return fetch(URL_REQUEST)
        .then((response) => {
            if(response.ok) {
                return response.json();
            }
            throw new Error("Error fetching films data");
        })
        .then((data) => {
            console.log(data.results);
            return data.results.map(film => ({
                id: film.id,
                posterPath: film.poster_path !== null ? `${POSTERS_URL}${film.poster_path}` : "",
                title: film.title,
                overview: film.overview.length > 100 ? `${film.overview.substring(0, 100)}...` :
                    film.overview === "" ? "..." : film.overview,
                releaseDate: new Date(film.release_date).getFullYear(),
                voteRating: film.vote_average,
            }));
        });
};

movieFilterForm.addEventListener("submit", submit);
categoryContainer.addEventListener("click", (e) => {
    if(e.target.classList.contains("btn")){
        submit(e);
    }
});