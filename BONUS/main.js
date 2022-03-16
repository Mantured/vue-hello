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
            imageSource: "",
            userInput:""

        },
        methods: {
            myFunction: function () {
                this.imageSource = "";
                this.userInput = "";
            }
        }
    }
)