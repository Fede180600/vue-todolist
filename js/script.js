const app = new Vue(
    {
        el: '#root',
        data: {
            todos: [
                {
                    text: 'Fare la spesa',
                    done: true
                },
                {
                    text: 'Seguire il recap',
                    done: true
                },
                {
                    text: 'Fare l\'esercizio pomeridiano',
                    done: true
                },
                {
                    text: 'Chiamare l\'assicurazione',
                    done: true
                },
                {
                    text: 'Diventare ricchi',
                    done: false
                }
            ]
        }
    }
)