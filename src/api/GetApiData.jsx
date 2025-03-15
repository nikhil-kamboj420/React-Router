export const getMoviesData = async () => {
    try{
       const  response =  await fetch(`https://www.omdbapi.com/?i=t3896198&apikey=${import.meta.env.VITE_Movie_API_KEY}&s=titanic&page=1`);
       const data = await response.json();
       return data;

    }catch(error){
        console.log('Error fetching data');
    }
}

