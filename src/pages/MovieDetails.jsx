import { useParams } from "react-router-dom"
import {get} from "../data/httpClient"
import { useEffect, useState } from "react"
import { getMovieImg } from "../utils/getMoviesImg";
import style from "../pages/MovieDetails.module.css"

export function MovieDetails(){
    const {movieId }= useParams();
    const [movie, SetMovie]= useState([]);
    const [genero, SetGeneros]= useState([]);

    useEffect(()=>{
        get("/movie/"+ movieId).then((data)=>{
            SetMovie(data);
            SetGeneros(data.genres[0])
          
    })
    },[movieId])
    const imageUrl = getMovieImg(movie.poster_path, 500)
    return(
        <div className={style.detailsContainer}>
            <img src={imageUrl} alt={movie.title} className={`${style.col} ${style.movieImage}`}/>
            <div className={`${style.col} ${style.movieDetails}`}>
                <p className={style.title}>
                    <strong>Título: </strong>
                    {movie.title}
                </p>
                <p>
                    <strong>Género: </strong>
                    {genero.name}
                </p>
                <p>
                    <strong>Descripcion: </strong>
                    {movie.overview}
                </p>
            </div>
        </div>
    )
}