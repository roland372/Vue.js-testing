<template>
  <div class="backdrop" @click.self="closeModal">
    <div class="modal" :class="{ dark: theme === 'dark' }">
      <slot>default content</slot>
      <div>
        <slot name="links"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // tell Vue to accept props
  props: ["theme"],
  methods: {
    closeModal() {
      this.$emit("close");
    },
  },
};
</script>

<style scoped>
/* scoped means that those styles will only apply to current component */
.modal {
  width: 400px;
  padding: 20px;
  margin: 100px auto;
  background: white;
  border-radius: 10px;
}
.backdrop {
  top: 0;
  position: fixed;
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
}
.modal.dark {
  background: black;
  color: white;
}
</style>