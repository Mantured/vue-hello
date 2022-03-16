/* Descrizione:
Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
Bonus:
Aggiungere alla pagina un’immagine, presa anch’essa da un data, magari volendo sperimentare anche prendendola da un input. */

//| istanziare Vue
const app = new Vue(
    {
        el: '#app',
        data: {
            message: 'Hello World',
        },
        methods: {
            myFunction: function () {
                document.querySelector('h1').innerHTML = `<img img-fluid src="https://picsum.photos/200/300" alt="lorem picsum image">`;
            }
        }
    }
)