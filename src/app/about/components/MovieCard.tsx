type Props = { movie: Movie };

export default function MovieCard({ movie }: Props) {
  return (
    <div style={{ width: 200 }}>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_patch}`}
        alt={movie.title}
        width={200}
      />
      <div>{movie.title}</div>
      <div>⭐ {movie.vote_average?.toFixed(1)}</div>
    </div>
  );
}
