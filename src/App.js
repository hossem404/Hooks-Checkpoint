import { useState } from 'react';
import './App.css';
import MovieList from './component/MovieList';
import Filter from './component/Filter ';

function App() {
  const [movie, setmovie] = useState([
    {
      title: "Inception",
      description: "A thief who enters the dreams of others to steal their secrets",
      img: "",
      rating: 8.8
    },
    {
      title: "The Matrix",
      description: "A computer hacker learns about the true nature of reality",
      img: "",
      rating: 8.7
    }
  ]
  )

  const [title,settitle]= useState()
  const [description,setdescription]= useState()
  const [img,setimg]= useState()
  const [rating,setrating]= useState()
const add =(e)=>{
  e.preventDefault()
  if(title&&description&&img&&rating){
  setmovie([...movie, {title,description,img,rating}])
  }
}



  return (
    <div className="App">
      <MovieList movie={movie}/>
      <form onSubmit={add} >
        <input placeholder='title'onChange={(e)=>settitle(e.target.value)} ></input>
        <input placeholder='description' onChange={(e)=>setdescription(e.target.value)} ></input>
        <input placeholder='img'onChange={(e)=>setimg(e.target.value)} ></input>
        <input placeholder='rating'onChange={(e)=>setrating(e.target.value)}></input>
        <input type="submit" ></input>

        
      </form>
      <Filter movie={movie} setmovie={setmovie} ></Filter>
    </div>
  );
}

export default App;
