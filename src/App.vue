<template>
  <div id="app">
    <MainPage />
  </div>
</template>

<script>
import MainPage from "./components/pages/MainPage";
export default {
  name: "App",
  components: {
    MainPage
  }
};
</script>

<style>
body {
  font-family: "Roboto", "sans serif";
  background: #fff;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
</style>
