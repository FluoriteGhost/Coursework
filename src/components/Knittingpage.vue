<script setup>
import { useCounterStore } from '@/stores/store'
const store = useCounterStore()
store.imagechange()
</script>

<template>
<main>
<div class="container text-center">
    <div class="row row-cols-lg-3 row-cols-md-2 row-cols-sm-1">
        <div class="col">
            <img :src="store.knit1" width="200" height="250">
        </div>
        <div class="col">
            <p> Дети вяжут. 
                Возраст от 8 лет и старше.
                Крючок становится волшебной палочкой в руках ребенка. С его помощью ребята создают игрушки, сумки,  одежду шапки. Творчество раздвигает границы возможностей, растет уверенность в себе, вязание помогает снять стресс и расслабиться. Занятия только в малых группах до 4 человек.
                График занятий свободный, можно заниматься один или несколько раз в неделю, регулярно или только в каникулы.
                Запишите ребёнка на занятие и вы удивитесь, что ваш ребёнок умеет!</p>
        </div>
        <div class="col">
            <img :src="store.knit2" width="200" height="250">
        </div>
    </div>
</div>
</main>
</template>

