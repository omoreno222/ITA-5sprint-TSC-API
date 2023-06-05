const seguentAcudit = async () => {
    try {
        const respuesta = await fetch("https://icanhazdadjoke.com/", {
                headers: {
                    Accept: "application/json"
                }
            });
        const data = await respuesta.json();
        const acudit = data.joke;
        document.getElementById("renderJoke").innerHTML=acudit;
    } catch (error) {
        document.getElementById("renderJoke").innerHTML=`Hem tingut el seguent error: ${error} obtenint l'acudit`;
    }
};