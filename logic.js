const seguentAcudit = () => {
    fetch("https://icanhazdadjoke.com/", {
            headers: {
                Accept: "application/json"
            }
        })
    
    .then(response => response.json())
    .then(data => {
        const joke = data.joke;
        document.getElementById("renderJoke").innerHTML=joke;
    })
    .catch(error => {
        console.log(`Tenim l'error ${error} a l'hora de carregar l'acudit`);
    });
};