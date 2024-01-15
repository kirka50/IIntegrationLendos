<template >
  <div class="modal__overlay"
       @wheel.prevent
       @touchmove.prevent
       @scroll.prevent
       >
    <div class="modal">
      <slot></slot>
    </div>
    <div class="modal__close" @click="this.$emit('closeModal')">
      X
    </div>
  </div>
</template>

<script>
export default {
  name: "modalWindow"
}
</script>

<style lang="scss" scoped>
  .modal__overlay{
    position: fixed;
    display: flex;
    justify-content: center;
    background: rgba(0,0,0,0.2);
    .modal{
      background-color: #38465B;
      margin-top: 2vh;
      height: 85%;
      width: 90%;
      border-radius: 20px;
    }
    .modal__close{
      margin: 2vh 0 0 16px;
      cursor: pointer;
    }
  }
  body.modal-open {
    overflow: hidden;
  }
</style>