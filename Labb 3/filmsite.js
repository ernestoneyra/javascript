    //Variables
    let searchfield = document.querySelector('#searchfield');
    let api_key = "44b7d64b";
    let search = (searchfield.value);
    let movie_results = document.querySelector('#movies');

    let url = `http://www.omdbapi.com/?apikey=${api_key}&s${search}`;
    let url2 = `http://www.omdbapi.com/?s=${search}&apikey=${api_key}`;
    let url3 = `http://www.omdbapi.com/?t=${search}&apikey=${api_key}`;
    // End of variables


    //Search function
    async function searchFunc(search){
        let response = await fetch(`http://www.omdbapi.com/?s=${search}&apikey=${api_key}`)
        .then(response => response.json())
         return response;
       
    }
    // End of search function
   

  

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
                  
                    img.setAttribute('class', movie.Title);
                    img.setAttribute('alt', movie.Title);
                    img.setAttribute('data-target', '#myModal')
                    img.setAttribute('data-toggle', 'modal')
                    movie_results.appendChild(img);


                    //console.log(img);
                    // End of search result


                    // More info about the movie
                    async function getInfo(){
                        fetch(`http://www.omdbapi.com/?i=${movie.imdbID}&apikey=${api_key}`)
                    .then(response => response.json())
                    .then(data => {
                        let actors = data.Actors;
                        let released = data.Released;
                        let plot = data.Plot;
                        let title = data.Title;
                        let poster = data.Poster;
                        let modal_image = document.querySelector('.modal-img');
                        let modal_released = document.querySelector('.modal-released');
                        let modal_title = document.querySelector('.modal-title');
                        let modal_actor = document.querySelector('.modal-actor');
                        let modal_plot = document.querySelector('.modal-plot');
                        modal_title.innerHTML = `${title}`
                        modal_released.innerHTML = `Released: ${released}`
                        modal_actor.innerHTML = `Actors: ${actors}`
                        modal_plot.innerHTML = `Plot: ${plot}`
                        if (data.Poster === "N/A")
                        {
                            modal_image.src = './images/ni_image.jpg';
                        }else{
                            modal_image.src = poster;
                        }
                        
                        //console.log(`Actors: ${actors} \nYear: ${year} \nPlot: ${plot}`);
                       
                        
                    })
                    
                    
                   // return movie;
                    }
                    img.addEventListener('click', ()=>
                        {
                            fetch(`http://www.omdbapi.com/?s=${search}&apikey=${api_key}`)
                            .then(response => response.json())
                            console.log(movie.Poster)
                            getInfo();
                            
                           
                        })
                    /// End of movie info

                    
                }
            })
        }
    })

    









    