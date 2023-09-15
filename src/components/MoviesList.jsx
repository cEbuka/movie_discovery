import useMovieData from "../hooks/useMovieData"
import '../styles/movie.css'

const MoviesList = () => {
    const { movies, loading, error} = useMovieData()
    const movie_pic = movies.forEach(movie => {
        return `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    })
    return (
        <>
        <div className="movies-section">
        <h1>Featured Movies</h1>
        <img alt="movie_pic" src={movie_pic}/>
        <ul>
        {movies.map((movie) => 
            <li key={movie.id}>
            <h2>{movie.title}</h2>
            <p>{movie.overview}</p>
            </li>)}
        </ul>
        </div>
        </>
    )
}

export default MoviesList