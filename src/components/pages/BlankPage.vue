<template>
  <div class="blank-page-container" @dragover.prevent>
    <Navbar />
    <Header :index="index" />
    <div
      :class="containerClass"
      @dragenter.prevent="drag"
      @dragover.prevent="drag"
      @dragstart.prevent="drag"
      @dragend.prevent="leave"
      @dragleave.prevent="leave"
      @drop.prevent="addFile"
    >
      <!-- <i class="icon fas fa-bong"></i> -->
      <i class="icon fab fa-optin-monster"></i>
      <span class="label">Drag & Drop</span>
    </div>
    <BottomBar :index="index" />
    <transition name="fade">
      <BackupPage @close-card="closeCard()" v-if="add" :name="name" :path="path" />
    </transition>
  </div>
</template>

<script>
import Navbar from "../commons/Navbar";
import Header from "../commons/Header";
import BottomBar from "../commons/BottomBar";
import BackupPage from "../pages/AddBackupPage";
// const { ipcRenderer } = window.require("electron");

export default {
  components: {
    Navbar,
    BottomBar,
    Header,
    BackupPage
  },
  data() {
    return {
      index: false,
      add: false,
      name: null,
      path: null,
      containerClass: "drag-drop-container"
    };
  },
  methods: {
    drag(event) {
      event.dataTransfer.dropEffect = "copy";
      this.containerClass = "drag-drop-container-hover";
    },
    leave(event) {
      event.dataTransfer.dropEffect = "copy";
      this.containerClass = "drag-drop-container";
    },
    addFile() {
      this.containerClass = "drag-drop-container";
      this.add = true;
      this.index = true;
      if (event.dataTransfer.files.length) {
        this.name = event.dataTransfer.files[0].name;
        this.path = event.dataTransfer.files[0].path;
      }
    },
    closeCard() {
      this.index = false;
      this.add = false;
    }
  }
};
</script>

<style scoped>
.fade-enter {
  opacity: 0;
}

.fade-enter-active {
  transition: opacity 0.35s;
}

.fade-leave {
  /* opacity: 1; */
}

.fade-leave-active {
  transition: opacity 0.35s;
  opacity: 0;
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

.drag-drop-container {
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

.drag-drop-container-hover {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border: dashed 3px #d7d7d7;
  border-radius: 10px;
  height: 55%;
  width: 65%;
  background-color: #f4f5f7;
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