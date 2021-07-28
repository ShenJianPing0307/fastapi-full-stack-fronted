<template>
  <div>
    <AppHeader />
    <SideBar />
    <AppMain />
  </div>
</template>

<script>
import AppHeader from "./components/AppHeader";
import AppMain from "./components/AppMain";
import SideBar from "./components/SideBar";


export default {
  name: "index",
  components: {
    AppHeader,
    AppMain,
    SideBar
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style scoped>
.header {
  background: #4e5d70;
  color: white;
  font-size: 25px;
  line-height: 60px;
}

.main {
  position: absolute;
  top: 65px;
  bottom: 0px;
  left: 300px;
  right: 0px;
  background: white;
}

.aside {
  position: absolute;
  top: 65px;
  width: 200px;
  bottom: 0px;
  background: rgb(84 92 100);
}

</style>