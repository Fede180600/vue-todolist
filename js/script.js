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
            newTodo: '',
        },
        methods: {
            removeTodo: function(index) {
                this.todos.splice(index, 1);
            },

            addTodo: function() {
                const trimmedString = this.newTodo.trim();
                if(trimmedString.length > 2) {
                    this.todos.push(trimmedString);
                    this.newTodo = '';
                }
            },
        }
    }
)