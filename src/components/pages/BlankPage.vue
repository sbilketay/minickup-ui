<template>
  <div class="blank-page-container" @dragover.prevent>
    <Navbar />
    <Header />
    <div class="drag-drop-container" v-cloak @dragover.prevent @drop.prevent="drag">
      <!-- <i class="icon fas fa-bong"></i> -->
      <i class="icon fab fa-optin-monster"></i>
      <span class="label">Drag & Drop</span>
    </div>
    <BottomBar />
  </div>
</template>

<script>
import Navbar from "../commons/Navbar";
import Header from "../commons/Header";
import BottomBar from "../commons/BottomBar";
// const { ipcRenderer } = window.require("electron");

export default {
  components: {
    Navbar,
    BottomBar,
    Header
  },
  methods: {
    drag(event) {
      console.log(event.dataTransfer.files);
    },
    addFile(event) {
      console.log(event.target.files);
    }
  }
  //   methods: {
  //     sendMessage() {
  //       ipcRenderer.send("key", "Sellam Herkesse");
  //     }
  //   }
};
</script>

<style scoped>
.file {
  z-index: 10000;
  /* display: none; */
}

.blank-page-container {
  position: relative;
  padding-top: 60px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background-color: #eee;
}

.blank-page-container .drag-drop-container {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border: dashed 3px #d7d7d7;
  border-radius: 10px;
  height: 55%;
  width: 65%;
}

.label {
  padding: 10px;
  color: #d7d7d7;
  font-size: 35px;
}

.icon {
  padding: 10px;
  color: #d7d7d7;
  font-size: 70px;
}
</style>