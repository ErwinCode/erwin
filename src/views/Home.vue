<template>
  <div>
    <header>
      <svg-logo></svg-logo>
    </header>
    <overview></overview>
  </div>
</template>

<script>
// @ is an alias to /src
import Overview from "@/components/Overview.vue";
import SvgLogo from "../assets/img/logo.svg";

export default {
  name: "home",
  components: {
    Overview,
    SvgLogo
  }
};
</script>
