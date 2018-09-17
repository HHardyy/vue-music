<template>
  <div id="app">
    <h-header></h-header>
    <h-tab></h-tab>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <h-player></h-player>
  </div>
</template>

<script>
import HHeader from "./components/m-header/m-header";
import HTab from "./components/tab/tab";
import HPlayer from './components/player/player'
export default {
  name: "App",
  components: {
    HHeader,
    HTab,
    HPlayer
  }
};
</script>

<style lang='stylus' scoped>
</style>
