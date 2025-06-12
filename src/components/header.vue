<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
<nav class="navbar navbar-expand-lg">
    <div class="container-fluid">
        <RouterLink to="/">Главная</RouterLink>
        <RouterLink to="/knitting">Вязание</RouterLink>
        <RouterLink to="/sewing">Шитье</RouterLink>
        <RouterLink to="/timetable">Расписание</RouterLink>
        <RouterLink to="/why">Польза занятий</RouterLink>
    </div>

</nav>
</template>