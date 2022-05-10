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
                    done: false
                },
                {
                    text: 'Chiamare l\'assicurazione',
                    done: true
                },
                {
                    text: 'Diventare ricchi',
                    done: false
                }
            ],
            newToDo: '',
        },
        methods: {
            removeTodo: function(index) {
                this.todos.splice(index, 1);
            },

            addToDo: function() {
                const newToDo = {
                    text: this.newToDo,
                    done: false,
                }
                this.todos.push(newToDo);
                this.newToDo = "";
            },
        }
    }
)