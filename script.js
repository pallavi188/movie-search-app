document.getElementById("movieForm").addEventListener("submit",async function(e){
    e.preventDefault();
    alert("YOUR RESULT IS READY SCROOL DOWN");



const genre = document.getElementById("genre").value;
const language = document.getElementById("language").value;
const startYear =document.getElementById("startYear").value;
const endYear =document.getElementById("endYear").value;
const type = document.getElementById("type").value;
const min_imdb = document.getElementById("min_imdb").value;
const max_imdb = document.getElementById("max_imdb").value;



const url = `https://ott-details.p.rapidapi.com/advancedsearch?start_year=${startYear}&end_year=${endYear}&min_imdb=${min_imdb}&max_imdb=${max_imdb}&genre=${genre}&language=${language}&type=${type}&sort=latest&page=1`;
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '82afd2a9d0msh686aad5748b0e80p19c06fjsne31859b05a88',
		'x-rapidapi-host': 'ott-details.p.rapidapi.com'
	}
};

fetch(url, options)
  .then(response => response.json())
  .then(data => {
    const movies = data.results; // assuming "results" contains the movie array

if(!Array.isArray(movies)||movies.length===0){
    document.getElementById("movieResults").innerHTML="<p>NO RESULTS FOUND!</p>";
    return;
}

    const container = document.getElementById("movieResults");
    container.innerHTML = ""; // clear previous results

    movies.forEach(movie => {
      const movieElement = document.createElement("div");
      movieElement.innerHTML = `
        <h3>${movie.title}</h3>
        <p><strong>IMDB Rating:</strong> ${movie.imdbrating}</p>
        <p><strong>Released:</strong> ${movie.released}</p>
        <p><strong>Genre:</strong> ${movie.genre}</p>
        <p><strong>Type:</strong> ${movie.type}</p>
        <p><strong>Synopsis:</strong> ${movie.synopsis}</p>
        <hr>
      `;
      container.appendChild(movieElement);
    });
  })
  .catch(err => console.error(err));


});