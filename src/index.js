document.getElementById("searchForm").addEventListener("submit", async function(event) {
  event.preventDefault();  // Prevent form from submitting

  // Get the movie ID from the input field
  const movieID = document.getElementById("searchByID").value;

  try {
    // Fetch movie data from JSON server using the provided ID
    const response = await fetch(`http://localhost:3000/movies/${movieID}`);
    const movie = await response.json();

    // Check if movie data is found
    if (movie && movie.title) {
      // Update the movie details on the page
      document.getElementById("movieTitle").textContent = movie.title;
      document.getElementById("movieSummary").textContent = movie.summary;
    } else {
      // If movie not found, show a not found message
      document.getElementById("movieTitle").textContent = "Movie not found";
      document.getElementById("movieSummary").textContent = "";
    }
  } catch (error) {
    console.error("Error fetching movie:", error);
    document.getElementById("movieTitle").textContent = "Error fetching movie data";
    document.getElementById("movieSummary").textContent = "";
  }
});
