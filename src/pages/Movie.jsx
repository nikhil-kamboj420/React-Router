import { useLoaderData } from "react-router-dom";
import { Card } from "../components/UI/Card";

export const Movie = () => {
  const moviesData = useLoaderData();

  return (
    <>
      <ul className="grid lg:grid-cols-4 justify-center items-center gap-3.5 bg-gray-600">
        {moviesData && moviesData.Search.map((curMovie) => {
          return <Card key={curMovie.imdbID} curMovie={curMovie} />;
        })}
      </ul>
    </>
  );
};
