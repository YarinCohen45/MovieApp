const url = "http://www.omdbapi.com/?i=tt3896198&apikey=85376db2";


export const fetchMovies = async (title) => {
    try {
      const res = await fetch(`${url}&t=${title}`);
      const data = await res.json();
      return data;
    } catch (error) {
      console.log(error.response);
    }
  };