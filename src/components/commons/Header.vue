<template>
  <div :class="hiddenClass" class="header-container">
    <div class="head head-name">Name</div>
    <div class="head head-infos">Infos</div>
    <div class="head head-status">Status</div>
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
  watch: {
    index() {
      if (this.index) {
        this.hiddenClass = "header-container-opacity";
      } else {
        this.hiddenClass = "header-container";
      }
    }
  }
};
</script>

<style>
.header-container {
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  top: 60px;
  z-index: 2;
  background: #f4f5f7;
  border-bottom: 1px solid #d7d7d7;
  width: 100%;
}

.header-container-opacity {
  opacity: 0.3;
  filter: blur(0.09rem);
}

.head {
  color: #555555;
  box-sizing: border-box;
  border-left: 1px solid #d7d7d7;
  height: 30px;
  background: #f4f5f7;
  padding: 6px 15px;
  font-weight: 400;
  font-size: 14px;
}

.head-name {
  min-width: 250px;
}

.head-infos {
  min-width: 280px;
}

.head-status {
  min-width: 300px;
}
</style>