<template lang="pug">
  .tooltip-container(:class="{ showed: showed }")
    .tooltip(:class="'tooltip--' + type")
      .tooltip__text {{ message }}
      button(@click="closeTooltip").tooltip__close
</template>


<script>
import { mapState, mapActions } from 'vuex';

export default {
  computed: {
    ...mapState('tooltip', {
      showed: state => state.showed,
      type: state => state.type,
      message: state => state.message,
    })
  },
  methods: {
    ...mapActions('tooltip', ['closeTooltip'])
  },
  watch: {
    showed (value) {
      if (value) {
        let timeout;

        clearTimeout(timeout);

        timeout = setTimeout(() => this.closeTooltip(), 3000);
      }
    }
  }
};
</script>


<style lang="pcss">
@import '../../styles/mixins.pcss';

.tooltip {
  color: #fff;
  display: flex;
  justify-content: space-between;
  position: relative;
  width: 100%;
  max-width: 400px;
  background: #4bb133;
  padding: 22px;

  &-container {
    width: 100%;
    display: flex;
    justify-content: center;
    position: fixed;
    bottom: -100%;
    left: 50%;
    transform: translateX(-50%);
    visibility: hidden;
    transition: 0.3s;

    &.showed {
      bottom: 0;
      visibility: visible;
    }
  }
  
  @include phones {
    max-width: 100%;
  }

  &__close {
    width: 20px;
    height: 20px;
    background: svg-load('cross.svg', fill=#fff) center center no-repeat;
    cursor: pointer;
    margin-left: 20px;
  }

  &--warning {
    background: #b18333;
  }

  &--error {
    background: #b13333;
  }
}

</style>