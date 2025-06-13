<script setup>
import { useCounterStore } from '@/stores/store'
const store = useCounterStore()
store.informdata()
</script>

<template>
<main>
    <img :src="store.hedgehog" width="250" height="300">
    <div>
        Шитье и вязание крючком c детьми от 8 лет. Создаем игрушки, сумки, предметы интерьера, самые смелые делают одежду.
    </div>
    <br>
    <p>Группа ВК</p>
    <a href="https://vk.com/club36624001"><img :src="store.group" width="200" height="250"></a>
</main>
</template>