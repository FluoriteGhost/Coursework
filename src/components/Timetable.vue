<script setup>
import { useCounterStore } from '@/stores/store'
const store = useCounterStore()
</script>

<template>
<main>
 <h6>Дети вяжут</h6>
<ul>
    <li>вторник</li>
    <li>пятница</li>
    <li>суббота</li>
</ul>
<p>Время любое</p>
  <h6>Дети шьют</h6>
  <ul>
    <li>понедельник: 11:00, 13:00</li>
    <li>четверг: 11:00, 13:00</li>
</ul>

<form>
  <p>Хотите записаться на занятия?</p>
  <div class="mb-3">
    <label for="userid" class="form-label">Ваш номер телефона</label>
    <input type="userid" v-model.number="store.userId" class="form-control" id="userid">
  </div>
    <div class="mb-3">
    <label for="username" class="form-label">Имя</label>
    <input type="username" v-model="store.title" class="form-control" id="username">
  </div>
<div class="mb-3">
  <label for="post" class="form-label">На какие занятия вы записываетесь?</label>
  <textarea class="form-control" v-model="store.body" id="post"></textarea>
</div>
  <button type="submit" class="btn btn-primary" @:click="store.sendrequest()">Submit</button>
</form>
</main>
</template>