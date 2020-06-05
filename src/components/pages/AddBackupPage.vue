<template>
  <div class="add-backup-container">
    <div class="backup-settings"></div>
    <Navbar />
    <Header index="-1" />
    <BottomBar index="-1" />
  </div>
</template>

<script>
import Navbar from "../commons/Navbar";
import Header from "../commons/Header";
import BottomBar from "../commons/BottomBar";
export default {
  components: {
    Navbar,
    BottomBar,
    Header
  }
};
</script>

<style scoped>
.backup-settings {
  margin-top: 60px;
  z-index: 3;
  background-color: #000;
  opacity: 0.65;
  width: 100%;
  height: 100vh;
}
</style>