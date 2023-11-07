import { ExpandCircleDown, Info, PlayCircle } from "@mui/icons-material"
import { useEffect, useState } from "react"
import "./featured.scss"
import requests from "../../Request"
import axios from "axios"

export const Featured = ({type}) => {
    const [movies,setMovies] = useState([])

    const movie = movies[Math.floor(Math.random()*movies.length)]

    useEffect(()=>{
        axios.get(requests.requestPopular).then((response)=>{
            setMovies(response.data.results)
        })
    },[])
    console.log(movie);

    const truncateString = (str , num ) => {
        if (str?.length>num){
            return str.slice(0,num)+'...';

        }else{
            return str;
        }
    }

  return (
    <div className="featured">
        {type &&(
            <div className="category">
                <span>{type === "movie" ? "Movies" : "Series"}</span>
                <select name="genre" id="genre">
                    <option >Genre</option>
                    <option value="adventure">Adventure</option>
            <option value="comedy">Comedy</option>
            <option value="crime">Crime</option>
            <option value="fantasy">Fantasy</option>
            <option value="historical">Historical</option>
            <option value="horror">Horror</option>
            <option value="romance">Romance</option>
            <option value="sci-fi">Sci-fi</option>
            <option value="thriller">Thriller</option>
            <option value="western">Western</option>
            <option value="animation">Animation</option>
            <option value="drama">Drama</option>
            <option value="documentary">Documentary</option>
                </select>
            </div>
            
        )}
        <img src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} alt={movie?.title} />
        <div className="info">
           
            <span className="desc">
            {movie?.title}
            </span>
            <div className="buttons">
                <button className="play">
                    <PlayCircle/>
                    <span>Play</span>
                </button>
                <button className="more">
                    <Info/>
                    <span>Info</span>
                </button>
            </div>
            <p className='date'>
            Released: {movie?.release_date}
          </p>
          <p className='w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200'>
            {truncateString(movie?.overview,150)}
          </p>
        </div>
    </div>
  )
}
