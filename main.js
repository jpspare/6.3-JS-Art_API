// Function to get artwork when the button is clicked
/**
 * 
 * @param art_id - the art piece reference number from the AIC API
 * @param img_num - referrent to the art index from the HTML
 * 
 * Async function to get information for an art piece when called
 */
async function clickedEvent (art_id, img_num) {
    let request = new Request(`https://api.artic.edu/api/v1/artworks/${art_id}`, {
    method: 'GET',
    header: ['Content-Type: application/json', 'AIC-User-Agent: aic-bash (jpspare@gmail.com)']
    });

    let result = await fetch(request);

    let response = await result.json();

    document.getElementById(`art_name-content-${img_num}`).innerHTML = response.data.title
    document.getElementById(`artist_name-content-${img_num}`).innerHTML = response.data.artist_title
    document.getElementById(`medium-content-${img_num}`).innerHTML = response.data.medium_display
    document.getElementById(`date-content-${img_num}`).innerHTML = response.data.date_display
    document.getElementById(`place_of_origin-content-${img_num}`).innerHTML = response.data.place_of_origin
}



/**
 * 
 * @param art_num - the art index from the HTML
 * 
 * Function that connects a hover on an art piece with an Async function
 * to collect info on the art piece from the AIC API
 */
function getArtInfo (art_num) {
    switch(art_num){
        case 'img_1': { //Seurat - "A Sunday on La Grande Jatte — 1884"
            clickedEvent(27992, 1)
            break;
        }
        case 'img_2': { //Kandinsky - "Improvisation No. 30 (Cannons)"
            clickedEvent(8991, 2)
            break;
        }
        case 'img_3': { //Monet - "Arrival of the Normandy Train, Gare Saint-Lazare"
            clickedEvent(16571, 3)
            break;
        }
        case 'img_4': { //Hokusai - "Under the Wave off Kanagawa"
            clickedEvent(24645, 4)
            break;
        }
    }
}

/**
 * Future Buildout:
 * Add search feature
 * Add randomized public domain image
 * - Requires array of all possible PD images
 */