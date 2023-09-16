import useMovieData from "../hooks/useMovieData"
import '../styles/movie.css'
import  right from '../assets/chevron_right.png'

const MoviesList = () => {
    const { movies} = useMovieData()
    return (
        <>
        <div className="movies-section">
        <div className="f-movies">
        <h1>Featured Movies</h1>
        <h3>See more
        <img src={right} className="more"/>
        </h3>
        </div>
        <div className="movie-card">
        {movies.map((movie) => 
            <div className="card" key={movie.id}>
            <img className="movie-image" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="movie_picture"/>
            <div className="movie-details">
            <span>{movie.title}</span>
            <span>{movie.vote_average}</span>
            </div>
            </div>)}
        </div>
        </div>
        </>
    )
}

export default MoviesList