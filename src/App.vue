<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
import SvgLogo from "../src/assets/img/logo.svg";

export default {
  components: {
    SvgLogo
  }
};
</script>

<style scoped lang="scss">
@import "~normalize.css";
</style>
