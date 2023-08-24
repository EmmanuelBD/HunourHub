// Add an event listener to the button with ID "btn"
document.getElementById("btn").addEventListener("click", joke);

// Define the joke function
async function joke() {
  // Configure headers for the fetch request
  let config = {
    headers: {
      Accept: "application/json",
    },
  };

  // Fetch a joke from the URL using the defined headers
  let response = await fetch("https://icanhazdadjoke.com/", config);

  // Parse the JSON response
  let jokeData = await response.json();

  // Set the fetched joke to the content element
  document.getElementById("content").innerHTML = jokeData.joke;
}







// document.getElementById("btn").addEventListener("click", joke);

// async function joke() {
//   let config = {
//     headers: {
//       Accept: "application/json",
//     },
//   };

//   let a = await fetch("https://icanhazdadjoke.com/", config);
//   let b = await a.json();
//   document.getElementById("content").innerHTML = b.joke;
// }
