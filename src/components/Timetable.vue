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
  <div class="mb-3">
    <label for="userid" class="form-label">User Id</label>
    <input type="userid" v-model.number="store.userId" class="form-control" id="userid">
  </div>
    <div class="mb-3">
    <label for="username" class="form-label">Username</label>
    <input type="username" v-model="store.title" class="form-control" id="username">
  </div>
<div class="mb-3">
  <label for="post" class="form-label">Post body</label>
  <textarea class="form-control" v-model="store.body" id="post" rows="3"></textarea>
</div>
  <button type="submit" class="btn btn-primary" @:click="store.sendrequest()">Submit</button>
</form>
</main>
</template>