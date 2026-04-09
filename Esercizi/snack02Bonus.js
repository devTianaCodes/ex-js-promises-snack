//Bonus: HOF con closure per memorizzare l'ultimo lancio
// Modifica la funzione in creaLanciaDado(), 
// che restituisce una closure che memorizza l'ultimo risultato.
//  Se il numero esce due volte di fila, stampa "Incredibile!".


function creaLanciaDado() {
    let ultimoRisultato = null;

    return function () {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const siIncastra = Math.random() < 0.2;

                if (siIncastra) {
                    reject("Il dado si è incastrato");
                } else {
                    const numero = Math.floor(Math.random() * 6) + 1;

                    if (numero === ultimoRisultato) {
                        console.log("Incredibile!");
                    }

                    ultimoRisultato = numero;
                    resolve(numero);
                }
            }, 3000);
        });
    };
}

const lanciaDado = creaLanciaDado();

lanciaDado()
    .then((numero) => console.log("Primo lancio:", numero))
    .catch((errore) => console.error(errore));

lanciaDado()
    .then((numero) => console.log("Secondo lancio:", numero))
    .catch((errore) => console.error(errore));