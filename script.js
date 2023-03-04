function getCharacters (done){
    
    const results = fetch("https://rickandmortyapi.com/api/character");

    results
        .then (response => response.json())
        //aqui data es un parametro
        .then (data => {
            done(data)
            log
        });
        //.catch((error)=> {
        //    console.error(error);
        //});
}

getCharacters(
    
    data => {

    data.results.forEach(personaje => {
        
        const article = document.createRange().createContextualFragment(/*html*/`
        
        <article>
            <div class="image-container">
                <img src="${personaje.image}" alt="Personaje">
            </div>

            <h2>${personaje.name}</h2>
            <p>${personaje.status}</p>
        </article>  
        
       `);
        const main = document.querySelector("main");
        main.append(article);

    });

}

);