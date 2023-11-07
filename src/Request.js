const API_KEY = "0a34a3c413c90caa2e736ba7da41e56b";

const requests = {
  requestPopular  :  `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`,
  requestTopRated  : `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`,
  requestUpcoming  : `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}`,
}

export default requests