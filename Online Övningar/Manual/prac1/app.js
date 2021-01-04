document.addEventListener("DOMContentLoaded", function(){
    const list = document.querySelector('#movie-list ul');
    const forms = document.forms;

    //Delete Movie
    list.addEventListener('click', (e) => {
        if(e.target.className == 'delete'){
            const li = e.target.parentElement;
            li.parentNode.removeChild(li);
        }
    });

    //Add Movies

    const addForm = forms['add-movie'];
    addForm.addEventListener('submit', function(e){
        e.preventDefault();

        //Create elements
        const value = addForm.querySelector('input[type="text"]').value;
        const li = document.createElement('li');
        const movieName = document.createElement('span');
        const deleteBtn = document.createElement('span');

        //Add text content
        movieName.textContent = value;
        deleteBtn.textContent = 'delete';

        //Add class
        movieName.classList.add('name');
        deleteBtn.classList.add('delete');

        //Append DOM
        li.appendChild(movieName);
        li.appendChild(deleteBtn);
        list.appendChild(li);
    });

})