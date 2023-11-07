// import { Add, PlayArrow, ThumbDown, ThumbUp } from "@mui/icons-material"
// import axios from "axios";
// import { useEffect, useState } from "react"
// import "./listItem.scss"

// export default function Listitem({ title, fetchURL,index }) {
  
//   const [movies, setMovies] = useState([]);
//   useEffect(()=>{
//     axios.get(fetchURL).then((response) => {
//       setMovies(response.data.results);
//     });
//   },[fetchURL])

//   const [isHovered, setIsHovered] = useState(false)
//   const trailer = "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761"
//   return (
//     <div
//       className='listItem'
//       style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//     >
//       {movies.map((item,id)=>{
//         <img src={`https://image.tmdb.org/t/p/original/${item?.backdrop_path}`} alt={item?.title} />
//       })}
    

//       {isHovered && (
//         <>
//           <video src={trailer} autoPlay={true} loop></video>
//           <div className="itemInfo">
//             <div className="icons">
//               <PlayArrow className="icon" />
//               <Add className="icon"/>
//               <ThumbUp className="icon"/>
//               <ThumbDown className="icon"/>
//               </div>
//               <div className="itemInfoTop">
//                 <span>1 hour 69 mins</span>
//                 <span className="limit">16+</span>
//                 <span>2023</span>
//               </div>
//               <div className="desc">
                
//               </div>
//               <div className="genre">Action</div>
            
//           </div></>
//       )}
    
//     </div>
//   )
// }
import axios from "axios";
import {MdChevronLeft,MdChevronRight} from 'react-icons/md'
import { useEffect, useRef, useState } from "react";
import Movie from "../Movie"

const Row = ({title, fetchUrl})=>{
  const [movies, setMovie] = useState([]);
  const slider = useRef();
  

  useEffect(()=>{
    axios.get(fetchUrl).then(res=>{
      setMovie(res.data.results);
    })
  },[fetchUrl])

  const slideLeft = () =>{
     slider.current.scrollLeft = slider.current.scrollLeft - 500;
  }
  const slideRight = () =>{
     slider.current.scrollLeft = slider.current.scrollLeft + 500;
  }


  return (
    <>
    <h2 className="text-white font-bold md:text-xl p-4">{title}</h2>
    <div className="relative flex items-center group">
      < MdChevronLeft size={40} className='bg-white left-0 rounded absolute  opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block' onClick={slideLeft}/>
      <div className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide" id={'slider'} ref={slider}>
        {movies.map((item, id)=>{
          return <Movie item={item} key={id} />
        })}
      </div>
      < MdChevronRight size={40} className='bg-white right-0 rounded absolute  opacity-50 hover:opacity-100 cursor-pointer z-10  hidden group-hover:block' onClick={slideRight}/>
    </div>

    </>
  )
}

export default Row;