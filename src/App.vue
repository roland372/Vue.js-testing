<script setup>
import router from './router/index';

function redirect() {
  router.push({ name: "home" })
}
function back() {
  router.go(-1)
}
function forward() {
  router.go(1)
}

</script>

<template>
  <nav>
    <router-link to="/">Home</router-link>
    <!-- <router-link to="/about">About</router-link> -->
    <router-link :to="{
      name: 'about'
    }">About</router-link>
    <router-link :to="{ name: 'tutorial' }">Tutorial</router-link>
    <router-link :to="{ name: 'jobs' }">Jobs</router-link>
  </nav>

  <button @click="redirect">Redirect</button>
  <button @click="back">Go back</button>
  <button @click="forward">Go forward</button>

  <!-- here out routes components will be dynamically injected -->
  <router-view />
</template>