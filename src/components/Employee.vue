<template>
  <div class="employee">
    <EmployeeBackground class="employee-background"></EmployeeBackground>
    <AvatarBackground class="avatar-background"></AvatarBackground>
    <slot name="SvgAvatar"> </slot>
    <div class="text-box">
      <h4 class="is-bold">{{ name }}</h4>
      <h4>{{ functionName }}</h4>
      <slot name="biography"></slot>
    </div>
  </div>
</template>

<script>
import AvatarBackground from "../assets/img/avatar-back.svg";
import EmployeeBackground from "../assets/img/back.svg";

export default {
  components: {
    AvatarBackground,
    EmployeeBackground
  },
  props: {
    name: String,
    functionName: String,
    detailLink: String
  }
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
      width: 110px;
    }
    svg.avatar-background {
      width: 170px;
    }
  }
  &.is-large{
    svg.avatar{
      width: 165px;
    }
    svg.avatar-background {
      width: 260px;
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
