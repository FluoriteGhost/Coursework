import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
    state: () => ({
        hedgehog: "./components/images/hedgehog.jpg",
        knit1: null,
        knit2: null,
        knittingimages1: [
            {
                name: 'dog',
                fimage: "./components/images/dog.jpg",
            },
            {
                name: 'bee',
                fimage: "./components/images/bee.jpg",
            },
            {
                name: 'capybara',
                fimage: "./components/images/capybara.jpg",
            },
        ],
            knittingimages2: [
            {
                name: 'bear',
                fimage: "./components/images/bear.jpg",
            },
            {
                name: 'goose',
                fimage: "./components/images/goose.jpg",
            },
            {
                name: 'cat',
                fimage: "./components/images/cat.jpg",
            },
        ],
        sewingimages: [
            {
                name: 'doll1',
                fimage: "./components/images/doll1.jpg",
            },
            {
                name: 'doll2',
                fimage: "./components/images/doll2.jpg",
            },
            {
                name: 'dollbag',
                fimage: "./components/images/dollbag.jpg",
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
            }
        },
        created () {
            setInterval(() => {
                this.knit1 = this.knittingimages1[Math.floor(Math.random()*this.knittingimages1.length)].fimage;
                this.knit2 = this.knittingimages2[Math.floor(Math.random()*this.knittingimages2.length)].fimage;
            }, 10000);
        }
    })
