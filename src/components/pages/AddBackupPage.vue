<template>
  <div class="add-backup-container">
    <Navbar />
    <Header index="-1" />
    <BottomBar index="-1" />
    <div class="content-container">
      <div class="backup-settings"></div>
      <div class="content-card">
        <div class="card-header">
          <i class="icon fas fa-folder-plus"></i>
          <div class="header-spacer"></div>
          <div class="header-label">
            <div class="label-header">Backup - Books</div>
            <div class="label-path">/User/wisecolt-nas/Documents/Books</div>
          </div>
          <div class="close-button">
            <i class="fas fa-times"></i>
          </div>
        </div>
        <div class="target-button-container">
          <!-- Select Files Button -->
          <!-- <div class="target-button">
            <i class="target-icon fas fa-folder-open"></i> Select Backup Target
          </div>-->

          <!-- Select Icons Button -->
          <!-- <div class="select-icon-container">
            <span>Select Icon</span>
            <div class="select-icon">
              <div class="icon-list">
                <i class="icon fas fa-folder"></i>
              </div>
              <div class="icon-label">- Folder -</div>
              <div class="arrow">
                <i class="fas fa-sort-down"></i>
              </div>
            </div>
          </div>-->

          <!-- Select Ignore Files Button -->
          <div class="ignore-button">
            <i class="ignore-icon fas fa-virus"></i> Select Ignore Files
          </div>
        </div>
      </div>
    </div>
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
.add-backup-container {
  -webkit-user-select: none;
  position: relative;
}

.content-container {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 100%;
  height: 100vh;
}

.backup-settings {
  position: absolute;
  display: flex;
  align-items: center;
  padding: 0;
  justify-content: center;
  background-color: #000;
  opacity: 0.64;
  width: 100%;
  height: 100vh;
}

.content-card {
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-color: #fff;
  width: 600px;
  height: 300px;
  border-radius: 5px;
  box-sizing: border-box;
}

.content-card .card-header {
  display: flex;
  align-items: center;
  padding-top: 10px;
  padding-bottom: 10px;
  box-sizing: border-box;
  justify-content: space-between;
  background-color: #f4f5f7;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-bottom: 1px solid #d7d7d7;
  width: 100%;
  height: 60px;
}

.content-card .card-header .icon {
  font-size: 35px;
  padding-left: 20px;
  color: #555555;
}

.content-card .card-header .header-spacer {
  margin-left: 20px;
  margin-right: 20px;
  border-left: 1px solid #9d9d9e;
  height: 30px;
}

.content-card .card-header .header-label {
  display: flex;
  width: 85%;
  align-self: flex-start;
  flex-direction: column;
  justify-items: center;
  align-items: flex-start;
}

.content-card .card-header .header-label .label-header {
  color: #555555;
}

.content-card .card-header .header-label .label-path {
  font-size: 15px;
  color: #9d9d9e;
}

.content-card .card-header .close-button {
  width: 60px;
  height: 60px;
  color: #555555;
  display: flex;
  align-items: center;
  justify-content: center;
  border-top-right-radius: 5px;
}

.content-card .card-header .close-button:hover {
  background-color: #0ca5fb;
  cursor: pointer;
  color: #fff;
}

.content-card .target-button-container {
  height: 90%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.content-card .select-icon-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.content-card .select-icon-container span {
  font-size: 17px;
  color: #959596;
}

.content-card .select-icon {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: 10px 0px;
  padding: 10px 0px;
  box-sizing: border-box;
  background-color: #f4f5f7;
  border: 1px solid #d7d7d7;
  width: 250px;
  height: 60px;
  border-radius: 3px;
}

.content-card .select-icon .icon-list {
  display: flex;
  flex-direction: column;
  font-size: 40px;
  padding: 10px 15px;
}

.content-card .select-icon .icon-label {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  box-sizing: border-box;
  font-size: 20px;
  width: 50%;
}

.content-card .select-icon .arrow {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  border-left: 1px solid #d7d7d7;
  width: 60px;
  height: 60px;
  cursor: pointer;
}

.content-card .select-icon .arrow:hover {
  background-color: #0ca5fb;
  color: #fff;
}

.content-card .target-button-container .target-button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 210px;
  height: 60px;
  background-color: #0ca5fb;
  color: #fff;
  cursor: pointer;
  box-shadow: 0px 2px 10px #959596;
  border-radius: 3px;
}

.content-card .target-button-container .target-button:active {
  cursor: pointer;
  transform: scale(0.98);
}

.content-card .target-button-container .target-button .target-icon {
  padding-right: 10px;
  font-size: 22px;
}

.content-card .target-button-container .ignore-button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 210px;
  height: 60px;
  background-color: #F56F65;
  color: #fff;
  cursor: pointer;
  box-shadow: 0px 2px 10px #959596;
  border-radius: 3px;
}

.content-card .target-button-container .ignore-button:active {
  cursor: pointer;
  transform: scale(0.98);
}

.content-card .target-button-container .ignore-button .ignore-icon {
  padding-right: 10px;
  font-size: 22px;
}
</style>