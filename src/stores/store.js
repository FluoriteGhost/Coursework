import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
    state: () => ({
        group: "./src/images/group.jpg",
        hedgehog: "./src/images/hedgehog.jpg",
        knit1: "./src/images/dog.jpg",
        knit2: "./src/images/cat.jpg",
        knittingimages1: [
            {
                name: 'dog',
                fimage: "./src/images/dog.jpg",
            },
            {
                name: 'bee',
                fimage: "./src/images//bee.jpg",
            },
            {
                name: 'capybara',
                fimage: "./src/images/capybara.jpg",
            },
        ],
            knittingimages2: [
            {
                name: 'bear',
                fimage: "./src/images/bear.jpg",
            },
            {
                name: 'goose',
                fimage: "./src/images/goose.jpg",
            },
            {
                name: 'cat',
                fimage: "./src/images/cat.jpg",
            },
        ],
        sewingimages: [
            {
                name: 'doll1',
                fimage: "./src/images/doll1.jpg",
            },
            {
                name: 'doll2',
                fimage: "./src/images/doll2.jpg",
            },
            {
                name: 'dollbag',
                fimage: "./src/images/dollbag.jpg",
            },
        ],
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
            },
        imagechange() {
            setInterval(() => {
                this.knit1 = this.knittingimages1[Math.floor(Math.random()*this.knittingimages1.length)].fimage;
                this.knit2 = this.knittingimages2[Math.floor(Math.random()*this.knittingimages2.length)].fimage;
            }, 10000);
        }
    },
    })
