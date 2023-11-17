<template>
  <div>
    <modal-window v-if="openModal" @closeModal="closeModal">
      <slot>
      </slot>
    </modal-window>
    <div @click="this.openModal = true">
      <slot name="button-ico">

      </slot>
    </div>
  </div>
</template>

<script>
import ModalWindow from "@/components/modalWindow";
export default {
  name: 'modal-button',
  components: {ModalWindow},
  data() {
    return {
      openModal: false,
    }
  },
  methods: {
    closeModal() {
      this.openModal = false
    }
  },
}
</script>

<style lang="scss" scoped>

</style>