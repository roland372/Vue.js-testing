<script setup>
import { onMounted, reactive, ref } from 'vue'
import SingleJob from './SingleJob.vue'

// let jobs = reactive([
//   {
//     title: "title 1", id: 1, details: "details 1"
//   },
//   {
//     title: "title 2", id: 2, details: "details 2"
//   },
//   {
//     title: "title 3", id: 3, details: "details 3"
//   },
// ])

const jobs = ref([]);

async function getData() {
  const res = await fetch("http://localhost:3000/jobs");
  const finalRes = await res.json();
  jobs.value = finalRes;
}
getData();


</script>

<template>
  <h1>Jobs</h1>
  <div v-for="job in jobs" :key="job.id">
    <!-- <SingleJob :title="job.title" :details="job.details" :id="job.id" /> -->
    <router-link :to="{
      name: 'singleJob', params: {
        id: job.id
      },
    }">
      <h2>{{ job.title }}</h2>
    </router-link>
  </div>
</template>
