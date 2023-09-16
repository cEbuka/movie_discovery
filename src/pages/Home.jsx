
import Hero from "../components/Hero"
import MoviesList from "../components/MoviesList"
import Footer from "../components/Footer"
import Movie from "../hooks/useMovieData"

const Home = () => {
    return (
        <>
            <Hero />
            <Movie />
            {/*<MoviesList />*/}
            <Footer />
        </>
    )
}

export default Home