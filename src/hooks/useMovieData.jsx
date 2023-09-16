import { useState, useEffect} from 'react'
const API_KEY  = `4dda313898c1119068560316435bf1e2`
const TMDB_URL = `https://api.themoviedb.org/3/movie/top_rated?api_key=`

const useMovieData = () => {
    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    let movie_id = []

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`)
        .then (res => {
            if (!res.ok) {
                throw new Error ('Network response not ok')
            }
            return res.json()
        })
            .then((data) => {
                for (let i = 0; i < (data.results.length); i++){
                        fetch(`https://api.themoviedb.org/3/movie/${JSON.stringify(data.results[i].id)}?api_key=${API_KEY}`)
                        .then(res => {
                            return res.json()
                        })
                        .then(data => {
                            setMovies(data.results)
                        },[])
                        return {movies}
                }
      }, [])
    }
    )


    {/*useEffect(() => {
        getMovieId()
        console.log(movie_id)

        fetch(`https://api.themoviedb.org/3/movie/${movie_id[0]}?api_key=${API_KEY}`)
        .then (res => {
            if (!res.ok) {
                throw new Error ('Network response not ok')
            }
            return res.json()
        })
            .then((data) => {
            setMovies(data.results)
            setLoading(false)
            })
            .catch((err) => {
                setError(err)
                setLoading(false)
            })
        }, [])

    }*/}
}
    export default useMovieData
