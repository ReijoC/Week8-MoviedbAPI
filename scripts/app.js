const movieTitle = document.querySelector('.movie-title');
const movieGenres = document.querySelector('.genres');
const movieDuration = document.querySelector('.movie-duration');
const moviePoster = document.querySelector('.movie-poster-container img');
const movieQuote = document.querySelector('.movie-info-quote');
const movieOverview = document.querySelector('.movie-info-overview');
const releaseDate = document.querySelector('.release-date');
const footerYear = document.querySelector('.year');

window.onload = () => {

    let url = 'https://api.themoviedb.org/3/movie/293660?api_key=04959613d87509196d7d20863772d207';

    fetch(url)
    .then(response => {
        return response.json();
    })
    .then(data => {
        movieTitle.textContent = data.title;
       
        moviePoster.src = `https://image.tmdb.org/t/p/w600_and_h900_bestv2${data.poster_path}`;
        moviePoster.alt = data.title;
        movieQuote.textContent = data.tagline;
        movieOverview.textContent = data.overview;
        
        let genres = '';

        data.genres.forEach(genre => {
            genres = genres + `${genre.name}, `;
        });
        
        let genresUpdated = genres.slice(0, -2) + '.';
       
        console.log(genresUpdated);

        movieGenres.textContent = genresUpdated;
        movieDuration.textContent = `${data.runtime} m`;
        let date = new Date(data.release_date);
        releaseDate.textContent = `${date.getDay()}/${date.getMonth()}/${date.getFullYear()} ${data.production_countries[0].iso_3166_1}`;

        let currentYear = new Date().getFullYear();
        footerYear.textContent = currentYear;
    });
}