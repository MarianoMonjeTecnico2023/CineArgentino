const apiKey = '287fb2be67baf068b14d542efafba2c1';
const apiUrl = `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&language=es-AR&region=AR&append_to_response=videos`;
const destacadosContainer = document.querySelector('#estrenos-destacados .carousel');
const gridContainer = document.querySelector('.grid');

function fetchAndDisplayMovies() {
  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      const movies = data.results;

      // Limpiar los contenedores antes de agregar nuevas películas
      destacadosContainer.innerHTML = '';
      gridContainer.innerHTML = '';

      // Filtrar las películas más populares (puedes ajustar el criterio de popularidad)
      const destacados = movies.filter(movie => movie.popularity > 50).slice(0, 5); // Tomar las 5 más populares

      destacados.forEach(movie => {
        fetch(`https://api.themoviedb.org/3/movie/${movie.id}/videos?api_key=${apiKey}&language=es-AR`)
          .then(response => response.json())
          .then(videoData => {
            const trailerKey = videoData.results.find(video => video.type === 'Trailer' && video.site === 'YouTube')?.key;

            const movieElement = document.createElement('div');
            movieElement.classList.add('movie');

            const posterPath = movie.poster_path;
            const posterUrl = posterPath ? `https://image.tmdb.org/t/p/w500${posterPath}` : 'placeholder-image.jpg';

            movieElement.innerHTML = `
              <img src="${posterUrl}" alt="${movie.title} Poster">
              <h3>${movie.title}</h3>
              <p>Fecha de estreno: ${movie.release_date}</p>
              ${trailerKey ? `
                <iframe width="100%" height="200" src="https://www.youtube.com/embed/${trailerKey}" 
                        title="${movie.title} Trailer" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
              ` : ''}
            `;

            destacadosContainer.appendChild(movieElement);
          });
      });

      // Mostrar el resto de las películas en la grilla
      const restoPeliculas = movies.filter(movie => !destacados.includes(movie));
      restoPeliculas.forEach(movie => {
        fetch(`https://api.themoviedb.org/3/movie/${movie.id}/videos?api_key=${apiKey}&language=es-AR`)
          .then(response => response.json())
          .then(videoData => {
            const trailerKey = videoData.results.find(video => video.type === 'Trailer' && video.site === 'YouTube')?.key;

            const movieElement = document.createElement('div');
            movieElement.classList.add('movie');

            const posterPath = movie.poster_path;
            const posterUrl = posterPath ? `https://image.tmdb.org/t/p/w500${posterPath}` : 'placeholder-image.jpg';

            movieElement.innerHTML = `
              <img src="${posterUrl}" alt="${movie.title} Poster">
              <h3>${movie.title}</h3>
              <p>Fecha de estreno: ${movie.release_date}</p>
              ${trailerKey ? `
                <iframe width="100%" height="200" src="https://www.youtube.com/embed/${trailerKey}" 
                        title="${movie.title} Trailer" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
              ` : ''}
            `;

            gridContainer.appendChild(movieElement);
          });
      });
    })
    .catch(error => {
      console.error('Error al obtener datos de la API:', error);
      gridContainer.innerHTML = '<p>Error al cargar los estrenos. Por favor, inténtalo de nuevo más tarde.</p>';
    });
}

// Llamada inicial para cargar las películas al cargar la página
fetchAndDisplayMovies();

// Actualizar las películas cada 24 horas (86400000 milisegundos)
setInterval(fetchAndDisplayMovies, 86400000);
