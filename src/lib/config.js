export const GENRE = [
  { id: 28, name: "Action" },
  { id: 12, name: "Adventure" },
  { id: 16, name: "Animation" },
  { id: 35, name: "Comedy" },
  { id: 80, name: "Crime" },
  { id: 99, name: "Documentary" },
  { id: 18, name: "Drama" },
  { id: 10751, name: "Family" },
  { id: 14, name: "Fantasy" },
  { id: 36, name: "History" },
  { id: 27, name: "Horror" },
  { id: 10402, name: "Music" },
  { id: 9648, name: "Mystery" },
  { id: 10749, name: "Romance" },
  { id: 878, name: "Science Fiction" },
  { id: 10770, name: "TV Movie" },
  { id: 53, name: "Thriller" },
  { id: 10752, name: "War" },
  { id: 37, name: "Western" },
];

export const SORT_BY = {
  POPULARITY_DESC: "popularity.desc",
  POPULARITY_ASC: "popularity.asc",
  RATING_DESC: "vote_average.desc",
  RATING_ASC: "vote_average.asc",
  REVENUE_DESC: "revenue.desc",
  REVENUE_ASC: "revenue.asc",
  NEWEST: "release_date.desc",
  OLDEST: "release_date.asc",
};

export const IMAGE_BASE = "http://image.tmdb.org/t/p";
export const NO_IMAGE = "https://placehold.co/342x513?text=No+Image";

export const IMAGE_SIZE = {
  SMALL: IMAGE_BASE + "/w185",
  MEDIUM: IMAGE_BASE + "/w342",
  ORIGINAL: IMAGE_BASE + "/original",
};
