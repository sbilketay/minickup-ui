<template>
  <div :class="hiddenClass" class="bottom-bar-container">
    <div class="bottom-bar-label">Last synced: May 31, 2020 3:10 AM</div>
  </div>
</template>

<script>
export default {
  props: ["index"],
  data() {
    return {
      hiddenClass: null
    };
  },
  created() {
    if (this.index < 0) {
      this.hiddenClass = "bottom-bar-container-opacity";
    }
  }
};
</script>

<style>
.bottom-bar-container {
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 30px;
  bottom: 0;
  left: 0;
  right: 0;
  background: #f4f5f7;
  border-top: 1px solid #d7d7d7;
  z-index: 2;
  text-align: center;
}

.bottom-bar-container-opacity {
  z-index: -1;
  filter: blur(0.08rem);
}

.bottom-bar-label {
  color: #959596;
  box-sizing: border-box;
  background: #f4f5f7;
  padding: 6px 15px;
  font-weight: 400;
  font-size: 13px;
}
</style>