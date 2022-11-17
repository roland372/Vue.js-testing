<script setup>
import { onMounted, reactive, ref, watch, watchEffect } from 'vue'
import SingleJob from './SingleJob.vue'

let id = 0
const jobs = ref([]);
const details = ref("")
const title = ref("")

async function getData() {
  const res = await fetch("http://localhost:3000/jobs");
  const finalRes = await res.json();
  jobs.value = finalRes;
}
getData();

function addJob() {
  // jobs.value.push({ details: details.value, id: id++, title: title.value })

  (async () => {
    const rawResponse = await fetch('http://localhost:3000/jobs', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ details: details.value, id: id++, title: title.value })
    });
    const content = await rawResponse.json();

    console.log(content);

    getData();

  })();
  details.value = ''
  title.value = ''
}

async function deleteJob(id) {
  const response = await fetch(`http://localhost:3000/jobs/${id}`, {
    method: 'delete'
  });
  getData();
  return await response.json();
}

watchEffect(jobs)

</script>

<template>
  <form class="flex" @submit.prevent="addJob">
    <label>Details</label>
    <input type="text" v-model="details">
    <label>Title</label>
    <input type="text" v-model="title">
    <br>
    <button>Submit</button>

  </form>
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
    <button @click="deleteJob(job.id)">X</button>
  </div>
</template>
<style>
.flex {
  display: flex;
  flex-direction: column;
  margin: 10px 100px;
  border: 1px solid red;
  padding: 5px;
}
</style>