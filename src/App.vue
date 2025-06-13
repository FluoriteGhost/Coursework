<script setup>
import Myheader from './components/header.vue'
import Myfooter from './components/footer.vue'
import { RouterView } from 'vue-router'
</script>

<template>
    <Myheader/>
  <main>
    <RouterView />
  </main>
    <Myfooter/>
</template>

