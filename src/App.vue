<template>
  <div id="app">
    <!-- <BlankPage /> -->
    <!-- <MainPage /> -->
    <AddBackupPage />
  </div>
</template>

<script>
// import BlankPage from "./components/pages/BlankPage";
// import MainPage from "./components/pages/MainPage";
import AddBackupPage from "./components/pages/AddBackupPage";
export default {
  name: "App",
  components: {
    // BlankPage
    // MainPage,
    AddBackupPage
  }
};
</script>

<style>
@import url("https://use.fontawesome.com/releases/v5.13.0/css/all.css");
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500&display=swap");

body {
  font-family: "Roboto", "sans serif";
  color: #5B5B5B;
  background: #fff;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  overflow: hidden;
}
</style>
