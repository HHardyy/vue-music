<template>
    <div class="userBox">
        <user-header></user-header>
        <user-item></user-item>
    </div>
</template>

<script>
import UserHeader from "./components/userheader";
import UserItem from "./components/useritem";
export default {
  components: {
    UserHeader,
    UserItem
  }
};
</script>

<style lang="stylus" scoped>
.userBox{
    position: fixed;
    z-index: 100;
    top: -110px;
    left: 0;
    bottom: 0;
    right: 0;
}
</style>

