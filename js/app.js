'use strict';

// ********************
// DOM SELECTORS
// ********************
const searchForm = document.querySelector('.search-form');
const searchQuery = document.getElementById('search-query');
const searchBtn = document.querySelector('button');
const sectionShows = document.querySelector('.section-shows');

// ********************
// FUNCTIONS
// ********************
// function responsible for displaying shows on the page
const displayShows = tvShows => {
    const showsDiv = document.createElement('div');
    showsDiv.classList.add('shows');

    for (let tvShow of tvShows) {
        // create figure element for each tv show
        const figure = document.createElement('figure');
        figure.classList.add('show');

        // create img element to display image
        const img = document.createElement('img');
        // display the image only if the url is present
        img.src = tvShow.show.image ? tvShow.show.image.medium : './no-img.jpg';
        // append the image to the figure
        figure.append(img);

        // create h3 to display name of the show
        const h3 = document.createElement('h3');
        h3.textContent = tvShow.show.name;
        // append the h3 to the figure
        figure.append(h3);

        // create a div to store the genres
        const genresDiv = document.createElement('div');

        // display the genres of each show if there is a genre
        if (tvShow.show.genres.length > 0) {
            for (let genre of tvShow.show.genres) {
                // create span for genres
                const span = document.createElement('span');
                span.textContent = genre;
                span.classList.add('genre');
                genresDiv.append(span);
                genresDiv.classList.add('genres');
                figure.append(genresDiv);
            }
        } else {
            const p = document.createElement('p');
            p.textContent = 'No genre(s) available';
            figure.append(p);
        }

        // create a button for every show
        const btn = document.createElement('a');
        btn.textContent = 'Watch Now!';
        btn.href = tvShow.show.url;
        btn.target = '_blank';
        btn.classList.add('btn-watch-now');
        // append the button to the figure
        figure.append(btn);

        // adds the figure to the shows div
        showsDiv.append(figure);
    }

    // append the shows div to the section
    sectionShows.append(showsDiv);
};

// removes all the shows from the page
const removeShows = () => {
    // remove the h2 from the DOM
    const h2 = document.querySelectorAll('.heading-secondary');
    h2.forEach(element => element.remove());
    // removes all the shows from the DOM
    const shows = document.querySelectorAll('.show');
    shows.forEach(show => show.remove());
};
