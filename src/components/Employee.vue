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
