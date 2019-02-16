<template>
  <div>
    <header>
      <svg-logo></svg-logo>
    </header>
    <div class="color-back is-action">
      <router-link to="/">
        <SvgArrow class="arrow"></SvgArrow>
      </router-link>
    </div>
  </div>
</template>
<script>
  import SvgArrow from '../assets/img/arrow.svg';
  import SvgLogo from '../assets/img/logo.svg';

  export default{
    components:{
      SvgArrow,
      SvgLogo
    }

  }
</script>

<style lang="scss" type="text/scss" scoped>
  .arrow{
    padding: 32px;
  }
</style>