 //Function to start the search results function on keypress
 searchfield.addEventListener('keypress', () => {
    searching();
})

// Search results
    
searchfield.addEventListener('keyup', function(e){
    if (e.target.value.length > 2){
        let movie = searchFunc(e.target.value) // kör JSON fetch functionen om det finns mer än 2 karaktärer i sökfältet.
        movie.then(data => {   //result från fetch requesten. .then() för promise. 
            let movies = data.Search;      //(data) är den absolut översta delen. Kolla i Postman. 
            for (let movie of movies){
                let img = document.createElement('img');
                if (movie.Poster !== "N/A"){
                    img.setAttribute('src', movie.Poster);
                    
                }else{
                    img.setAttribute('src', './images/ni_image.jpg')
                }
                //document.querySelector('.caro').remove('.caro');
                img.setAttribute('class', movie.Title);
                img.setAttribute('alt', movie.Title);
                movie_results.appendChild(img);
                console.log(img);
                
                //More info about the movie
                //img.addEventListener('click', () =>{
                    //console.log(movie.Title);
                    /*fetch(`http://www.omdbapi.com/?s=${search}&apikey=${api_key}`)
                    .then(response => response.json())
                    console.log(movie.imdbID)
                    return movie.imdbID;*/
                    /*.then(data => {
                        console.log(data.imdbID);
                    })*/
    
                //})
                    async function getInfo(movie){
                        fetch(`http://www.omdbapi.com/?s=${search}&apikey=${api_key}`)
                    .then(response => response.json())
                    console.log(movie.imdbID)
                    return movie.imdbID;
                    }
                        img.addEventListener('click', ()=>{
                            getInfo(movie)
                            
                        })

            }
        })
    }
})


