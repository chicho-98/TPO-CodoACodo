function getMovie(id) {
    fetch('https://www.omdbapi.com/?i=' + id + '&apikey=548e898d')
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

        translateText(data.Title, "en", "es", (error, translatedText) => {
            if (error) {
              let movieNames = document.getElementsByClassName('movie-name');
              movieNames[0].textContent = `${data.Title}`;
            } else {
               let movieNames = document.getElementsByClassName('movie-name');
               movieNames[0].textContent = `${translatedText}`;
            }
         });        

        translateText(data.Plot, "en", "es", (error, translatedText) => {
          if (error) {
            let descriptions = document.getElementsByClassName('movie-description');
            descriptions[0].textContent = `${data.Plot}`;
            } else {
                let descriptions = document.getElementsByClassName('movie-description');
                descriptions[0].textContent = `${translatedText}`;
            }
        });        

    })
}
