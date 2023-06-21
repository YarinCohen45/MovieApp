const createUrl = (option, extra) => {
    return `https://imdb-api.com/en/API/${option}/k_4awv47i7/${extra || ''}`;
}

export const fetchMoviesByTitle = async (title) => {
    try {
        const res = await fetch(createUrl('SearchMovie', title));
        const data = await res.json();
        return data.items;
    } catch (error) {
        console.log(error.response);
    }
};

export const fetchMovies = async (option, extra) => {
    try {
        const res = await fetch(createUrl(option, extra));
        const data = await res.json();
        return data.items;
    } catch (error) {
        console.log(error.response);
    }
}

export const fetchSeriesByTitle = async (title) => {
    try {
        const res = await fetch(createUrl('SearchSeries', title));
        const data = await res.json();
        return data.items;
    } catch (error) {
        console.log(error.response);
    }
};

export const fetchSeries = async () => {
    try {
        const res = await fetch(createUrl('Top250TVs'));
        const data = await res.json();
        return data.items;
    } catch (error) {
        console.log(error.response);
    }
};
