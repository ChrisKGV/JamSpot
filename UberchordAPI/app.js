const form = document.querySelector('#searchForm');
const resultsContainer = document.querySelector('#resultsContainer');

form.addEventListener('submit', async function(e) {
    e.preventDefault();
    const searchTerm = form.elements.query.value;
    console.log(searchTerm);
    
    let result = document.createElement("iframe");
    await result.setAttribute("src", `https://api.uberchord.com/v1/embed/chords?nameLike=${searchTerm}`);
    resultsContainer.appendChild(result);

    form.elements.query.value = '';    
});