<script setup>
import { useCounterStore } from '@/stores/store'
const store = useCounterStore()
store.informdata()
</script>

<template>
<main>
    <div>
        Шитье и вязание крючком c детьми от 8 лет. Создаем игрушки, сумки, предметы интерьера, самые смелые делают одежду.
    </div>
    <img scr="./components/images/hedgehog.jpg" alt="hedgehog">
    <p>Группа ВК</p>
    <a href="https://vk.com/club36624001"><img scr="https://vk.com/photo210582856_457241858" width="100" height="100" alt="https://vk.com/club36624001"></a>
</main>
</template>