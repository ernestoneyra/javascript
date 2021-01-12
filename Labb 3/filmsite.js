// Variables
let searchfield = document.querySelector('#searchfield');
let api_key = "44b7d64b";
let search = (searchfield.value);
let movie_results = document.querySelector('#movies');
let url = `http://www.omdbapi.com/?apikey=${api_key}&s${search}`;
let url2 = `http://www.omdbapi.com/?s=${search}&apikey=${api_key}`;
let url3 = `http://www.omdbapi.com/?t=${search}&apikey=${api_key}`;
let fav_btn = document.querySelector('#favBtn');
let fav = document.querySelector('#favs')
let dropFetch = document.querySelector('#drop')
//let del_btn = document.querySelector('del_btn')
// End of variables



// Search function
async function searchFunc(search) {
    let response = await fetch(`http://www.omdbapi.com/?s=${search}&apikey=${api_key}`)
    .then(response => response.json())

    // .catch(console.log(error))
    return response;

}
// End of search function


// Autocomplete search
searchfield.addEventListener('keyup', function (e) {
    //Variables for the search field and the result div
    let search_results = document.querySelector('#autocomplete')
    let autocomplete_results = document.querySelector('.resultDiv')
    //starts the search when more than 2 characters are put in
    if (e.target.value.length > 2) {
        let movie = searchFunc(e.target.value) // kör JSON fetch functionen om det finns mer än 2 karaktärer i sökfältet.

        movie.then(data => { // result från fetch requesten. .then() för promise.
            let movies = data.Search; // (data) är den absolut översta delen. Kolla i Postman.
            autocomplete_results.innerHTML = ''
            if (data.Response !== 'False') {
                if (movies.length > 0) {
                    for (let movie of movies) {
                        search_results.innerHTML = '';
                        
                        movie_resultsimg(movie);
                        
                    }
                }
            }else {
                //searchfield.classList.add('bg-danger')
                    search_results.innerHTML = '<div class="not_found bg-light  text-danger">No matches found...</div>';
            }
        })
    }else {
        //searchfield.classList.remove('bg-danger')
        search_results.innerHTML = ''
        autocomplete_results.innerHTML = ''
    }
})

//function for the search to modal.
async function varFetch(movie){
    fetch(`http://www.omdbapi.com/?s=${search}&apikey=${api_key}`)
    .then(response => response.json())
    //console.log(movie.Poster)
    getInfo(movie);
    //return response;
}


//Show the results of the search
function movie_resultsimg(movie) {
    let img = document.createElement('img');
    if (movie.Poster !== "N/A") {
        img.setAttribute('src', movie.Poster);

    } else {
        img.setAttribute('src', './images/ni_image.jpg')
    }

    //Create images
    img.setAttribute('class', movie.Title);
    img.setAttribute('alt', movie.Title);
    img.setAttribute('data-target', '#myModal')
    img.setAttribute('data-toggle', 'modal')
    movie_results.appendChild(img);
    // End of create images

   //EventListener on the img to run the more info function
 img.addEventListener('mousedown', () => {
    /* fetch(`http://www.omdbapi.com/?s=${search}&apikey=${api_key}`)
    .then(response => response.json())
    //console.log(movie.Poster)
    getInfo(movie); */
    varFetch(movie);
    
 });



//EventListener to add a border and a cursor over the img on mouseover
img.addEventListener('mouseover', () => {
    img.style.border = '1px solid #17a2b8';
    img.style.cursor = 'pointer';
})
//EventListener to remove the border and cursor on mouseleave
img.addEventListener('mouseleave', () => {
    img.style.border = '';
})  
//End of eventListener
}

 // Function to get more info about the movie
 async function getInfo(movie) {
    fetch(`http://www.omdbapi.com/?i=${movie.imdbID
        }&apikey=${api_key}&plot=full`)
        .then(response => response.json())
        .then(data => {
        // Puts the data in to variables
        let actors = data.Actors;
        let released = data.Released;
        let plot = data.Plot;
        title = data.Title; //global variable to be used outside the function.
        let poster = data.Poster;
        //Create new variables based on the modal classes
        let modal_image = document.querySelector('.modal-img');
        let modal_released = document.querySelector('.modal-released');
        let modal_title = document.querySelector('.modal-title');
        let modal_actor = document.querySelector('.modal-actor');
        let modal_plot = document.querySelector('.modal-plot');
        //Inserts the information about the movie inside the modal
        modal_title.innerHTML = `${title}`
        modal_released.innerHTML = `Released: ${released}`
        modal_actor.innerHTML = `Actors: ${actors}`
        modal_plot.innerHTML = `Plot: ${plot}`
        if (data.Poster === "N/A") {
            modal_image.src = './images/ni_image.jpg';
        } else {
            modal_image.src = poster;
        }
    }) // End of modal
 }
//End of getInfo function


//Add favorite movies in the favorite list
    fav_btn.addEventListener('mousedown', () => {
        
        //fav_movie = document.createElement('ul')
        fav_movie = document.createElement('li')
        //fav_movie.setAttribute('id', 'drop')
        fav_movie.innerHTML = `<div id="drop" class="dropdown-item" style="min-width: 310px";>${title}</div>`;
       // del_btn = document.querySelector('.del_btn')
        fav.appendChild(fav_movie);
        
        
        
    })
    document.body.addEventListener("click", function(e) {
        console.log(e.target.nodeName, e.target.id)
        if (e.target.id === "drop"){
          document.getElementById(e.target.id).outerHTML = "";
        }
        fav = this.removeChild(li);
      }, false)
    