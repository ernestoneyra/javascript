function getPost(){
    let endpoint = 'https://jsonplaceholder.typicode.com/posts';
        fetch(endpoint)
        .then((response => {
            //returning it in JSON format.
            return response.json()
        
        }))
        .then((data => {
            //Displaying it to the DOM.
            let output = "<h3>Posts:</h3>" + "<div class='form-group'>" +
            // We will use this input larter on to search for posts.
                         "<input type='text' id='search' class='form-control' placeholder='search by title or ID...'>" + "</div>";
            data.forEach(post => {
                output += `                
                    <ul class="list-group mb-3" id="${post.id}"> 
                    <li class="list-group-item"><strong>ID:</strong>${post.id}</li>
                    <li class="list-group-item"><strong>Title:</strong>${post.title}</li>
                    <li class="list-group-item"><strong>Body:</strong>${post.body}</li>
                    </ul>;`
                    document.getElementById('posts').innerHTML = output;
                    document.getElementById('postBtn').addEventListener('click', getPost);
                });
        




          //filtering function
        document.getElementById('search').addEventListener('keyup', search);
                
          function search(){
              let value = document.getElementById('search').value;
              data.forEach(post=>{
                  if((post.id == value)||(post.title.indexOf(value) > -1)||(value == '')){
                    document.getElementById(post.id).style.display = 'block';              
                    }
                    else{
                     document.getElementById(post.id).style.display = 'none';
                    }
              })
          }

          document.getElementById('submitBtn').addEventListener('click', submitPoat);
          // getting the input values
          let title = document.getElementById('title').value;
          let body = docuemnt.getElementById('body').valuer;
         //submitting a post
          function submitPost(e){
              e.preventDefault();

              fetch('https://jsonplaceholder.typicode.com/posts', {
                  method: 'POST',
                  header {
                      'Accept': 'application/json'
                  },
                  body:JSON.stringify({
                      title,
                      body
                  }) //equivalent to ({title:title, body:body})
              })
              .then((res) => res.json())
          }