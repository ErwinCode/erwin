<template>
  <div class="content-item">
    <router-link to="/">
      <slot name="SvgAvatar"> </slot>
    </router-link>
    <router-link to="/">
      <h4 class="is-bold">{{ name }}</h4>
      <h4 class="is-hidden-tablet">{{ functionName }}</h4>
    </router-link>
    <router-link to="/" class="is-hidden-mobile">
      <h4>{{ functionName }}</h4>
    </router-link>
    <router-link to="/cms" class="is-trash"><svg-trash></svg-trash></router-link>
  </div>
</template>

<script>
import SvgTrash from "../assets/img/delete.svg";


export default {
  components: {
    SvgTrash
  },
  props: {
    name: String,
    functionName: String,
    detailLink: String
  },
};
</script>

<style type="text/scss" lang="scss" scoped>
@import "../assets/scss/variables";
.employee{
  display: grid;
  grid-template-areas: "overlap";
  text-align: center;
  grid-template-columns: 350px;
  justify-content: center;
  &.is-small{
    svg.avatar{
      height: 190px;
    }
    svg.avatar-background {
      height: 170px;
      margin-top: 20px;
    }
  }
  &.is-large{
    svg.avatar{
      height: 265px;
    }
    svg.avatar-background {
      height: 240px;
    }
  }
  svg{
    grid-area: overlap;
    align-self: baseline;
    justify-self: center;
  }
  .text-box {
    margin-top: $global-padding * 3;
    h4 {
      font-size: 22px;
      font-weight: normal;
      margin: 0;
      color: var(--black);
      &.is-bold {
        font-weight: bold;
        color: var(--black);
        margin-bottom: 12px;
      }
    }
  }
}
</style>
