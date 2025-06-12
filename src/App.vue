<script setup>
import Myheader from './components/header.vue'
import Myfooter from './components/footer.vue'
import { RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div>
    <Myheader/>
    </div>
  </header>
  <main>
    <RouterView />
  </main>
  <footer>
    <Myfooter/>
  </footer>
</template>

<style scoped>
header
{
  display: flex;
  position:absolute;
  top: 0px;
  background-color: #14471E;
}
footer
{
  display: flex;
  position: fixed;
  bottom: 0px; 
  color:black;
  background-color: #14471E;
}
</style>
