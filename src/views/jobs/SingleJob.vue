<script setup>
import { ref } from 'vue'

const props = defineProps({
  id: String,
  // title: String
})


// const props = defineProps(['details', 'id', 'title'])
// console.log(props);

const jobs = ref({});

async function getData() {
  const res = await fetch(`http://localhost:3000/jobs/${props.id}`);
  const finalRes = await res.json();
  jobs.value = finalRes;

  console.log(jobs.value.title);
}

getData();

</script>
<template>
  <p>id is: {{ id }}</p>
  <p>{{ jobs.title }}</p>
  <p>{{ jobs.details }}</p>
</template>