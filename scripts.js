const app = document.getElementById('root');

const logo = document.createElement('img');
logo.src = 'studio_ghibli_logo.png';

const container = document.createElement('div');
container.setAttribute('class', 'container');

app.appendChild(logo);
app.appendChild(container);

//Create a request variable and assign a new XMLHttpRequest object to it. 
var request = new XMLHttpRequest()

//Open a new connection, using the GET request on the URL endpoint
request.open('GET', 'https://ghibliapi.herokuapp.com/films', true)
request.onload = function () {
  // Begin accessing JSON data here
  var data = JSON.parse(this.response)
  if (request.status >= 200 && request.status < 400) {
    data.forEach((movie) => {
      // Create a div with a card class
  const card = document.createElement('div')
  card.setAttribute('class', 'card')

   // Create an h1 and set the text content to the film's title
   const h1 = document.createElement('h1')
   h1.textContent = movie.title

   const h3 = document.createElement('h3')
   h3.textContent = movie.director 

   const h4 = document.createElement('h4')
   h4.textContent = movie.release_date
   h4.textContent = `Release date: ${h4.textContent}`
 
   // Create a p and set the text content to the film's description
   const p = document.createElement('p')
   movie.description = movie.description.substring(0, 300) // Limit to 300 chars
   p.textContent = `${movie.description}...` // End with an ellipses
 
   // Append the cards to the container element
   container.appendChild(card)
 
   // Each card will contain an h1 and a p
   card.appendChild(h1)
   card.appendChild(p)
   card.appendChild(h3)
   card.appendChild(h4)
    })
  } else {
    const errorMessage = document.createElement('marquee')
    errorMessage.textContent = `Gah, it's not working!`
    app.appendChild(errorMessage)
  }
}
request.send()
