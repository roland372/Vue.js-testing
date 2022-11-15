<template>
  <h1>{{ text }}</h1>
  <input type="text" ref="name" />
  <button @click="handleClick">click</button>
  <!-- <Modal title="Modal title" body="Modal body" /> -->
  <br />
  <br />
  <div v-if="showModal">
    <!-- <Modal :title="title" :body="body" theme="dark" @close="handleToggleModal" /> -->
    <ModalSlots theme="dark" @close="handleToggleModal">
      <h1>Modal title</h1>
      <p>Modal body</p>
      <template v-slot:links>
        <a href="">Sign up</a>
        <a href="">More info</a>
      </template>
    </ModalSlots>
  </div>
  <button @click="handleToggleModal">Open Modal</button>
  <button @click.shift="handleToggleModal">Open Modal Shift</button>
</template>

<script>
import Modal from "./Modal.vue";
import ModalSlots from "./ModalSlots.vue";

export default {
  name: "App",
  components: {
    Modal,
    ModalSlots,
  },
  data() {
    return {
      text: "hello world",
      title: "Modal title",
      body: "Modal body",
      showModal: false,
    };
  },
  methods: {
    handleClick() {
      console.log(this.$refs.name);
      this.$refs.name.focus();
    },
    handleToggleModal() {
      this.showModal = !this.showModal;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
