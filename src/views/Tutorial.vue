<script setup>
import { reactive, ref, computed, watch } from 'vue'

// <----- basics ----->
// ref - used for primitive values
// reactive - used for objects

const counterRef = ref(0)
const counterReactive = reactive({ count: 0 })

const message = ref('Hello World!')
const titleClass = ref("title")

const text = ref("")

function incrementRef() {
  counterRef.value++;
}

function incrementReactive() {
  // counterReactive.count.value++; // undefined
  counterReactive.count++;
}

// <----- conditional rendering ----->
const conditional = ref(true)
function toggle() {
  conditional.value = !conditional.value
}

const show = ref(true);
function toggleShow() {
  show.value = !show.value
}
// v-if - more expensive initially, higher toggle cost than v-show, won't be rendered in DOM unless condition is true
// v-show - has higher initial render cost, will always remain in the DOM
// if we need to toggle something very often we should use v-show

// <----- lists rendering ----->
let id = 0
const newTodo = ref('')
const hideCompleted = ref(false)
const todos = reactive([
  { id: id++, text: 'Learn HTML', done: true },
  { id: id++, text: 'Learn JavaScript', done: true },
  { id: id++, text: 'Learn Vue', done: false }
])

const filteredTodos = computed(() => {
  return hideCompleted.value
    ? todos.value.filter((todo) => !todo.done)
    : todos.value
})

function addTodo() {
  todos.value.push({ id: id++, text: newTodo.value, done: false })
  newTodo.value = ''
}

function removeTodo(id) {
  todos.value = todos.value.filter((todo) => id !== todo.id)
}

// <----- Watchers ----->
const todoId = ref(1)
const todoData = ref(null)

async function fetchData() {
  todoData.value = null
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${todoId.value}`
  )
  todoData.value = await res.json()
  console.log(todoData.value);
}

fetchData()

watch(todoId, fetchData)

</script>

<template>
  <!--? basics -->
  <h1>Basics</h1>
  <h1>{{ message }}</h1>
  <p>CountRef is: {{ counterRef }}</p>
  <button @click="incrementRef">Increment Ref</button>
  <p>CountReactive is: {{ counterReactive.count }}</p>
  <button @click="incrementReactive">Increment Reactive</button>
  <h1 :class="titleClass">Make me red</h1>
  <hr>

  <!--? inputs & form binding -->
  <h1>Inputs & form binding</h1>
  <input :value="text" @input="event => text = event.target.value" placeholder="Type here">
  <input v-model="text" placeholder="Type here">
  <p>{{ text }}</p>
  <hr>

  <!--? conditional rendering  -->
  <h1>Conditional rendering</h1>
  <div>
    <h1 v-if="conditional">true</h1>
    <h1 v-else>false</h1>
    <button @click="toggle">toggle</button>
  </div>
  <div v-show="show">
    <h1>v-show</h1>
  </div>
  <button @click="toggleShow">show</button>
  <hr>

  <!--? lists rendering & computed  -->
  <h1>Lists rendering</h1>
  <form @submit.prevent="addTodo">
    <input v-model="newTodo">
    <button>Add Todo</button>
  </form>
  <ul>
    <li v-for="todo in filteredTodos" :key="todo.id">
      <input type="checkbox" v-model="todo.done">
      <span :class="{ done: todo.done }">{{ todo.text }}</span>
      <button @click="removeTodo(todo.id)">X</button>
    </li>
  </ul>
  <button @click="hideCompleted = !hideCompleted">
    {{ hideCompleted ? 'Show all' : 'Hide completed' }}
  </button>
  <hr>

  <!--? watchers  -->
  <h1>Watchers</h1>
  <div>
    <p>Todo id: {{ todoId }}</p>
    <button @click="todoId = 1">Fetch first todo</button>
    <button @click="todoId--">Fetch previous todo</button>
    <button @click="todoId++">Fetch next todo</button>
    <p v-if="!todoData">Loading...</p>
    <pre v-else>{{ todoData }}</pre>
  </div>
  <hr>
</template>

<style>
.title {
  color: red;
}

.done {
  text-decoration: line-through;
}

li {
  list-style: none;
}
</style>