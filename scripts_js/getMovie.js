function getMovie(id) {
    fetch('http://www.omdbapi.com/?i=' + id + '&apikey=548e898d')
    .then(response => response.json())
    .then(data => {

        let figures = document.getElementsByTagName('figure');
        figures[0].innerHTML = `<img src=${data.Poster} alt=${data.Title}>`;

        let elements = document.getElementsByTagName('li');
        elements[4].innerHTML = `<strong>Género:</strong>
        ${data.Genre}`;
        elements[5].innerHTML = `<strong>Duración:</strong>
        ${data.Runtime}`;
        elements[6].innerHTML = `<strong>Actores:</strong>
        ${data.Actors}`;
        elements[7].innerHTML = `<strong>Director:</strong>
        ${data.Director}`;

        let movieNames = document.getElementsByClassName('movie-name');
        movieNames[0].textContent = `${data.Title}`;

        let descriptions = document.getElementsByClassName('movie-description');
        descriptions[0].textContent = `${data.Plot}`;

        console.log(data)
    })
    
}
