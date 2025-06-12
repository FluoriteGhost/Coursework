<script setup>
import { useCounterStore } from '@/stores/store'
const store = useCounterStore()

</script>

<template>
<main>
<div class="container text-center">
    <div class="row row-cols-lg-3 row-cols-md-2 row-cols-sm-1">
        <div class="col">
            <div class="animation1" style="background-image: url(./components/images/dog.jpg);"></div>
        </div>
        <div class="col">
            <p> Дети вяжут. 
                Возраст от 8 лет и старше.
                Крючок становится волшебной палочкой в руках ребенка. С его помощью ребята создают игрушки, сумки,  одежду шапки. Творчество раздвигает границы возможностей, растет уверенность в себе, вязание помогает снять стресс и расслабиться. Занятия только в малых группах до 4 человек.
                График занятий свободный, можно заниматься один или несколько раз в неделю, регулярно или только в каникулы.
                Запишите ребёнка на занятие и вы удивитесь, что ваш ребёнок умеет!</p>
            </div>
            <div class="col">
                <div class="animation2" style="background-image: url(./components/images/cat.jpg);"></div>
            </div>
        </div>
    </div>
</main>
</template>

<style scoped>
.animation1
{
    animation-name: animation1;
    animation-iteration-count: infinite;
    animation-duration: 10s;
    animation-delay: 5s;
}
@keyframes animation1{

    from{
        background-image: url(./components/images/dog.jpg);
    }


    50%{
        background-image: url(./components/images/bee.jpg);
    }


    to{
        background-image: url(./components/images/goose.jpg);
    }
}

.animation2
{
    animation-name: animation2;
    animation-iteration-count: infinite;
    animation-duration: 10s;
    animation-delay: 5s;
}
@keyframes animation2{

    from{
        background-image: url(./components/images/cat.jpg);
    }



    50%{
        background-image: url(./components/images/bear.jpg);
    }



    to{
        background-image: url(./components/images/capybara.jpg);
    }
}
</style>