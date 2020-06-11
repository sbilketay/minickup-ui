<template>
  <div class="add-backup-container">
    <div class="content-container">
      <div class="background-shadow"></div>
      <div class="content-card">
        <div class="card-header">
          <i class="icon fas fa-folder-plus"></i>
          <div class="header-spacer"></div>
          <div class="header-label">
            <div class="label-header">Backup - {{ name }}</div>
            <div class="label-path">{{ path }}</div>
          </div>
          <div class="close-button" @click="closeCard()">
            <i class="fas fa-times"></i>
          </div>
        </div>
        <div class="target-button-container">
          <!-- Select Files Button -->
          <div class="target-button">
            <i class="target-icon fas fa-folder-open"></i> Select Backup Target
          </div>

          <!-- Select Icons Button -->
          <!-- <div class="select-icon-container">
            <span>Select Icon</span>
            <div class="select-icon">
              <div class="icon-list">
                <i class="icon fas fa-folder"></i>
              </div>
              <div class="icon-label">Folder</div>
              <div class="arrow">
                <i class="fas fa-sort-down"></i>
              </div>
            </div>
            <div class="ignore-file-container">
              <span>Add Ignore Files</span>
              <div class="input-container">
                <input type="text" />
                <button>
                  <i class="fas fa-plus"></i>
                </button>
              </div>
              <div class="added-area">No Ignored File</div>
            </div>
          </div>-->
          <!-- <div class="bottom-button">
            <button>Save</button>
          </div>-->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["name", "path"],
  methods: {
    closeCard() {
      this.$emit("close-card", true);
    }
  }
};
</script>

<style scoped>
.content-container {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 100vw;
  height: 100vh;
}

.background-shadow {
  position: absolute;
  display: flex;
  align-items: center;
  padding: 0;
  justify-content: center;
  background-color: #000;
  opacity: 0.64;
  margin-top: 30px;
  width: 100%;
  height: 100vh;
}

.content-card {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-color: #fff;
  width: 600px;
  height: 440px;
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
  align-self: flex-start;
}

.content-card .select-icon {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: 10px 0px;
  padding: 10px 0px;
  box-sizing: border-box;
  background-color: #fff;
  border: 1px solid #d7d7d7;
  width: 250px;
  height: 40px;
  border-radius: 3px;
}

.content-card .select-icon .icon-list {
  display: flex;
  flex-direction: column;
  font-size: 30px;
  padding: 10px 20px;
  color: #626262;
}

.content-card .select-icon .icon-label {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  box-sizing: border-box;
  font-size: 17px;
  width: 60%;
  color: #626262;
}

.content-card .select-icon .arrow i {
  top: 20%;
  left: 35%;
  padding-top: 0px;
  position: absolute;
}

.content-card .select-icon .arrow {
  font-size: 19px;
  position: relative;
  border-left: 1px solid #d7d7d7;
  width: 40px;
  height: 40px;
  cursor: pointer;
  transition: 200ms;
}

.content-card .select-icon .arrow:hover {
  background-color: #0ca5fb;
  color: #fff;
}

.content-card .select-icon .arrow:active {
  background-color: #6cc0f0;
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

.content-card .target-button-container .target-button:hover {
  background-color: #0a91df;
}

.content-card .target-button-container .target-button:active {
  cursor: pointer;
  transform: scale(0.98);
}

.content-card .target-button-container .target-button .target-icon {
  padding-right: 10px;
  font-size: 22px;
}

.ignore-file-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.ignore-file-container span {
  font-size: 17px;
  color: #959596;
  align-self: flex-start;
  padding: 7px 0px;
}

.ignore-file-container .input-container {
  display: flex;
  align-items: center;
  justify-items: center;
}

.ignore-file-container .input-container input {
  outline: none;
  font-size: 17px;
  width: 210px;
  height: 40px;
  padding: 10px;
  box-sizing: border-box;
  border: 1px solid #d7d7d7;
  border-top-left-radius: 3px;
}

.ignore-file-container .input-container button {
  outline: none;
  width: 40px;
  height: 40px;
  border: 1px solid #d7d7d7;
  background-color: #fff;
  border-top-right-radius: 3px;
  border-left: none;
  cursor: pointer;
  transition: 100ms;
}

.ignore-file-container .input-container button:hover {
  background-color: #0ca5fb;
  color: #fff;
}

.ignore-file-container .input-container button:active {
  background-color: #6cc0f0;
}

.ignore-file-container .added-area {
  overflow-y: auto;
  overflow-x: hidden;
  width: 250px;
  height: 120px;
  padding: 10px;
  box-sizing: border-box;
  border: 1px solid #d7d7d7;
  border-top: none;
  background-color: #fff;
  color: #9d9d9e;
  display: flex;
  align-items: center;
  justify-content: center;
}

.bottom-button button {
  position: absolute;
  right: 15px;
  top: 390px;
  width: 80px;
  height: 35px;
  color: #fff;
  border: none;
  border-radius: 3px;
  background-color: #0ca5fb;
  outline: none;
  font-size: 14px;
  transition: 200ms;
  cursor: pointer;
}

.bottom-button button:active {
  transform: scale(0.95);
}

.bottom-button button:hover {
  background-color: #0a91df;
}

.add-backup-container {
  -webkit-user-select: none;
  position: relative;
}
</style>