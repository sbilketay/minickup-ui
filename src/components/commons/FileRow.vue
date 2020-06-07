<template>
  <div class="file-row-container" @mouseenter="mouseup" @mouseleave="mouseout">
    <div class="content name-content">
      <div class="name-content-icon">
        <i :class="faFolderIcon" class="icon"></i>
      </div>
      <div class="name-content-label">
        <span>{{ name }}</span>
      </div>
    </div>
    <div class="content infos-content">
      <div class="date">{{ date }}</div>
      <div class="size">Total: {{ totalFile }} files - {{ size }}</div>
    </div>
    <div class="content status-content">
      <i :class="faStatusIcon" class="check-icon"></i>
      <div class="hidden-icons">
        <div v-show="active" class="hidden-settings-icon">
          <i class="hidden-fa fas fa-sliders-h"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["faFolderIcon", "name", "date", "totalFile", "size", "faStatusIcon"],
  data() {
    return {
      active: false
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
.file-row-container {
  position: relative;
  top: 30px;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 52px;
  cursor: pointer;
  z-index: 0;
}

.file-row-container:hover {
  background: #f4f5f7;
}

.file-row-container .name-content {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  min-width: 250px;
}

.file-row-container .name-content-icon .icon {
  color: #5B5B5B;
  font-size: 27px;
  padding-left: 15px;
  width: 50px;
}

.file-row-container .name-content-label {
  padding-left: 0;
  font-size: 14px;
}

.file-row-container .name-content-label:hover {
  text-decoration: underline;
}

.file-row-container .infos-content {
  display: block;
  font-size: 14px;
  min-width: 280px;
  padding-left: 15px;
}

.file-row-container .infos-content .size {
  font-size: 12px;
  color: #c0c0c0;
}

.file-row-container .status-content {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  font-size: 15px;
  min-width: 200px;
}

.check-icon {
  flex: 1;
  color: #6088C6;
  font-size: 13px;
  padding-left: 5px;
}

.hidden-icons .hidden-settings-icon {
  flex: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 52px;
  width: 52px;
  color: #6a6a6a;
  font-size: 20px;
}

.hidden-icons .hidden-settings-icon:hover {
  color: #fff;
  background: #0ca5fb;
}
</style>