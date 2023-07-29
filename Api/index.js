const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1N2ZlMTM5YzI5YWFjMWIzMDM2ZjkxMDkzZjFhYWM5NCIsInN1YiI6IjY0YmViYjU4Yjg2NWViMDEzOTlkNjljOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mLGaPcIJrhSibQsjjiSAPl3F94QKk1OVEhBHsvwQRlY'
    }
};

export const fetch100TopMovies = async () => {
    const movies = [];

    for (let i = 1; i <= 5; i++)
        movies.push((await fetch(`https://api.themoviedb.org/3/movie/top_rated?page=${i}`, options)
            .then(response => response.json())).results);

    return movies.flat();
}

export const fetchPopularMovies = async () => {
    const movies = [];

    for (let i = 1; i <= 5; i++)
        movies.push((await fetch(`https://api.themoviedb.org/3/movie/popular?page=${i}`, options)
            .then(response => response.json())).results);

    return movies.flat();
}

export const fetch100TopSeries = async () => {
    const series = [];

    for (let i = 1; i <= 5; i++)
        series.push((await fetch(`https://api.themoviedb.org/3/tv/top_rated?page=${i}`, options)
            .then(response => response.json())).results);

    return series.flat();
};

export const fetchPopularSeries = async () => {
    const series = [];

    for (let i = 1; i <= 5; i++)
        series.push((await fetch(`https://api.themoviedb.org/3/tv/popular?page=${i}`, options)
            .then(response => response.json())).results);

    return series.flat();
};

export const fetchSearch = async keyword => {
    const results = (await fetch(`https://api.themoviedb.org/3/search/movie?query=${keyword}`, options).then(response => response.json())).results

    return results;
}
