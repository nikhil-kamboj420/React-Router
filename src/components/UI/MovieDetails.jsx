import { Link, useLoaderData } from "react-router-dom"



export const MovieDetails = ()=>{
 
    const movieData = useLoaderData();
    console.log(movieData)
    const {imdbID, Title, Plot, Poster, genres, director, actors, Type,Year} = movieData;
    return (
        <>
          <li className=" bg-gray-600 flex justify-center items-center gap-2 shadow-2xl">
            <div>
                <p className="max-w-[30vw] text-3xl text-white">{Plot}</p>
            </div>
            <div className="bg-gray-600 flex flex-col gap-2 items-center w-[30rem]">
              <img className="max-w-[100%] h-[50vh]" src={Poster} alt={Type} />
              <div className="text-green-500 flex flex-col gap-2 text-3xl">
                <h2>{Title}</h2>
                <span>{Year}</span>
              </div>
              <div className="my-10 flex gap-4">
                <Link to='#'>
                <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold w-50 h-10 rounded">Watch Now</button></Link>
                <Link to={`/movies/`}>
                <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold w-50 h-10 rounded">Watch More</button></Link>
              </div>
            </div>
          </li>
        </>
      );
}