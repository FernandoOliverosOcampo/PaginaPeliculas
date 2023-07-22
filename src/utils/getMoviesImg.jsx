import imagen from "../img/fercho.jpg"
export function getMovieImg(path, width) {
    return path ? `https://image.tmdb.org/t/p/w${width}${path}` : imagen;
  }