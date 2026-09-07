import { Movie } from "../interfaces/movie.interface";
import { Result } from "../interfaces/moviedb.response";

export class MovieMapper {
    static fromResultToMovie(result: Result): Movie {
        return {
            id: result.id,
            title: result.title,
            description: result.overview,
            releaseDate: result.release_date,
            rating: result.vote_average,
            poster: `https://image.tmdb.org/t/p/w500${result.poster_path}`,
            backdrop: `https://image.tmdb.org/t/p/w500${result.backdrop_path}`
        }
    }
}