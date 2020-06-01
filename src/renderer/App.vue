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
@import url("https://use.fontawesome.com/releases/v5.13.0/css/all.css");
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500&display=swap");

body {
  font-family: "Roboto", "sans serif";
  color: #555555;
  background: #fff;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
</style>
