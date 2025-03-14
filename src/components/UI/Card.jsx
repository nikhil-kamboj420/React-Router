export const Card = ({ curMovie }) => {
  const { Title, Year, imdbID, Type, Poster } = curMovie;
  return (
    <>
      <li className="flex justify-center items-center gap-2 shadow-2xl">
        <div className="bg-gray-600 flex flex-col gap-2 items-center w-[30rem]">
          <img className="max-w-[100%] h-[50vh]" src={Poster} alt={Type} />
          <div className="text-green-500 flex flex-col gap-2 text-3xl">
            <h2>{Title}</h2>
            <span>{Year}</span>
          </div>
          <div className="my-10">
             <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold w-50 h-10 rounded">Watch Now</button>
          </div>
        </div>
      </li>
    </>
  );
};
