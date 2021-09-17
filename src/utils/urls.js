const developerKey = "XXXXXXXXXXXXXXXXXXX"; //replace with valid API KEY

const popUrl = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${developerKey}`;
const bg = "https://image.tmdb.org/t/p/w1280";
const upcomingUrl = `https://api.themoviedb.org/3/movie/upcoming?api_key=${developerKey}&language=en-US`;
const imgTest =
  "https://image.tmdb.org/t/p/w1280/ugZW8ocsrfgI95pnQ7wrmKDxIe.jpg";

export default { popUrl, bg, upcomingUrl, imgTest };
