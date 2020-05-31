<template>
  <div class="main">
    <Navbar />
    <div class="table-container">
      <Header />
      <div class="table-body">
        <file-row
          v-for="file in files"
          :key="file.name"
          :fa-folder-icon="file.icon"
          :name="file.name"
          :date="file.date"
          :total-file="file.total_file"
          :size="file.size"
          fa-status-icon="fas fa-check"
        />
      </div>
      <BottomBar />
    </div>
  </div>
</template>

<script>
import Navbar from "../commons/Navbar";
import FileRow from "../commons/FileRow";
import Header from "../commons/Header";
import BottomBar from "../commons/BottomBar";

export default {
  components: {
    Navbar,
    FileRow,
    Header,
    BottomBar
  },
  data() {
    return {
      files: [
        {
          icon: "fas fa-folder",
          name: "Projects",
          date: "10-05-2020 13:30",
          total_file: "10",
          size: "7,00 GB",
          status_icon: "fas fa-check"
        },
        {
          icon: "fas fa-camera-retro",
          name: "Photos",
          date: "10-04-2020 13:30",
          total_file: "5",
          size: "2,00 GB",
          status_icon: "fas fa-check"
        },
        {
          icon: "fas fa-gamepad",
          name: "Games Saves",
          date: "10-04-2020 13:30",
          total_file: "5",
          size: "2,00 GB",
          status_icon: "fas fa-check"
        },
        {
          icon: "fas fa-headphones",
          name: "Music Files",
          date: "10-04-2020 13:30",
          total_file: "5",
          size: "2,00 GB",
          status_icon: "fas fa-check"
        },
        {
          icon: "fas fa-film",
          name: "Videos",
          date: "10-04-2020 13:30",
          total_file: "5",
          size: "2,00 GB",
          status_icon: "fas fa-check"
        },
        {
          icon: "fab fa-github-alt",
          name: "Github Repo's",
          date: "02-03-2020 03:10",
          total_file: "7",
          size: "1,00 GB",
          status_icon: "fas fa-check"
        },
        {
          icon: "fab fab fa-js",
          name: "Javascript Projects",
          date: "01-02-2020 01:05",
          total_file: "17",
          size: "252,00 MB",
          status_icon: "fas fa-check"
        },
        {
          icon: "fab fab fa-vuejs",
          name: "Vue Projects",
          date: "01-02-2020 01:05",
          total_file: "17",
          size: "252,00 MB",
          status_icon: "fas fa-check"
        },
        {
          icon: "fab fab fa-swift",
          name: "Swift Projects",
          date: "01-02-2020 01:05",
          total_file: "17",
          size: "252,00 MB",
          status_icon: "fas fa-check"
        },
        {
          icon: "fab fab fa-sketch",
          name: "Sketch Projects",
          date: "01-02-2020 01:05",
          total_file: "17",
          size: "252,00 MB",
          status_icon: "fas fa-check"
        }
      ],
      active: false,
      displayIcon: "hidden-icon"
    };
  },
  methods: {
    mouseup() {
      this.active = !this.active;
    },
    mouseout() {
      this.active = !this.active;
    }
  }
};
</script>

<style scoped>
.table-container {
  position: relative;
  z-index: 0;
  top: 60px;
  display: flex;
  width: 100%;
  margin-bottom: 60px;
}

.table-container .table-body {
  width: 100%;
  display: block;
}
</style>
