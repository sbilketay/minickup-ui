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
      <div v-show="active" class="hidden-icon">
        <i class="hidden-fa fas fa-sliders-h"></i>
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
  cursor: pointer;
  z-index: 0;
}

.file-row-container:hover {
  background: #d7e6ef;
}

.file-row-container .content {
  padding: 10px 5px;
}

.file-row-container .name-content {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 250px;
}

.file-row-container .name-content-icon .icon {
  color: #6a6a6a;
  font-size: 27px;
  padding-left: 10px;
  width: 50px;
}

.file-row-container .name-content-label {
  padding-left: 0;
  font-size: 14px;
}

.file-row-container .infos-content {
  display: block;
  font-size: 14px;
  width: 300px;
}

.file-row-container .infos-content .size {
  font-size: 12px;
  color: #c0c0c0;
}

.file-row-container .status-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  width: 30%;
  padding: 0;
  font-size: 15px;
}

.check-icon {
  padding-left: 3px;
  color: #60caad;
  font-size: 13px;
}

.hidden-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  width: 50px;
  overflow: hidden;
  color: #6a6a6a;
  font-size: 20px;
}

.hidden-icon:hover {
  color: #fff;
  background: #4790bb;
}
</style>