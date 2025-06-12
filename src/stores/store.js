import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
    state: () => ({
        fetchimages: [
            {
                name: 'hedgehog',
                fimage: null,
            },
            {
                name: 'dog',
                fimage: null,
            },
            {
                name: 'bee',
                fimage: null,
            },
            {
                name: 'capybara',
                fimage: null,
            },
            {
                name: 'bear',
                fimage: null,
            },
            {
                name: 'goose',
                fimage: null,
            },
            {
                name: 'doll1',
                fimage: null,
            },
            {
                name: 'doll2',
                fimage: null,
            },
            {
                name: 'dollbag',
                fimage: null,
            },
            {
                name: 'cat',
                fimage: null,
            },
        ]
    }),
    actions: {
        informdata() {
            console.log('данная функция загружена')
        },

        sendrequest() {
            let ContactForm = {
                title: this.title,
                body: this.body,
                userId: this.userId,
            }
            fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                body: JSON.stringify({
                    ContactForm
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
                .then((response) => response.json())
                .then((json) => console.log(json)); 
            }
        },
    })
