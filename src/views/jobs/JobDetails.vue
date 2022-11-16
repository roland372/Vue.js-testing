<script setup>
const props = defineProps({
  id: String,
  // title: String,
})


</script>
<template>
  <!-- <p>Job id is: {{ $route.params.id }}</p> -->
  <p>Job id is: {{ id }}</p>
  <!-- <p>Title: {{ title }}</p> -->
</template>