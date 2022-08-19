export interface IMovie {
  adult: boolean,
  backdrop_path: string,
  genre_ids: number[],
  id: number,
  original_language: string,
  original_title: string,
  overview:  string,
  popularity: number
  poster_path: string,
  release_date: string,
  title: string,
  video: boolean,
  vote_average: number,
  vote_count: number,
  first_air_date?: string,
  name?: string,
  origin_country?: string[],
  original_name?: string,
  gender?: number,
  media_type?: 'person' | 'movie' | 'tv'
}

export interface IMovieResponse {
  dates?: {
    maximum: string,
    minimum: string
  },
  page: number,
  results: IMovie[],
  total_pages: number,
  total_results: number
}

export interface IExtendedMovie extends IMovie {
  backdrop_path: string,
  belongs_to_collection: {
    id: number,
    name: string,
    poster_path: string,
    backdrop_path: string
  },
  budget: number,
  genres: {id:number, name: string}[],
  homepage: string,
  imdb_id: string,
  production_companies: [{
    id: number,
    logo_path: string,
    name: string,
    origin_country: string,
  }],
  production_countries: [{ iso_3166_1: string, name: string}],
  revenue: number,
  runtime: number,
  spoken_languages: [],
  status: string,
  tagline: string,
}

export interface IExtendedSerial extends IMovie {
  backdrop_path: string,
  created_by: {id: number, credit_id: string, name: string, gender: number[]},
  episode_run_time: number[],
  genres: {id: number, name: string}[],
  homepage: string,
  in_production: boolean,
  languages: string[],
  last_air_date: string,
  last_episode_to_air: {
    air_date: string,
    episode_number: number,
    id: number,
    name: string,
    overview: string,
    production_code: string,
    runtime: number,
    season_number: number,
    show_id: number,
    stiil_path: string,
    vote_average: number,
    vote_count: number,
  },
  number_of_episodes: number,
  number_of_seasons: number,
  status: string,
  tagline: string,
  type: string,
  seasons: {
    air_date: string,
    episode_count: number
    id: number
    name: string,
    overview: string,
    poster_path: string,
    season_number: number
  }[]
}

