<template>
  <div class="grid-container">
    <router-link to="/sander">
      <employee
        class="is-action is-small"
        name="Sander Bruggeman"
        function-name="UX-designer"
      >
        <template slot="SvgAvatar">
          <svg-sander-avatar class="avatar"></svg-sander-avatar>
        </template>
      </employee>
    </router-link>
    <router-link to="/sander">
      <employee
        class="is-action is-small"
        name="Sander Bruggeman"
        function-name="UX-designer"
      >
        <template slot="SvgAvatar">
          <svg-sander-avatar class="avatar"></svg-sander-avatar>
        </template>
      </employee>
    </router-link>
    <router-link to="/sander">
      <employee
        class="is-action is-small"
        name="Sander Bruggeman"
        function-name="UX-designer"
      >
        <template slot="SvgAvatar">
          <svg-sander-avatar class="avatar"></svg-sander-avatar>
        </template>
      </employee>
    </router-link>
    <router-link to="/sander">
      <employee
        class="is-action is-small"
        name="Sander Bruggeman"
        function-name="UX-designer"
      >
        <template slot="SvgAvatar">
          <svg-sander-avatar class="avatar"></svg-sander-avatar>
        </template>
      </employee>
    </router-link>
    <router-link to="/nick">
      <employee
        class="is-warning is-small"
        name="Nick Bolink"
        function-name="Front-end Developer"
      >
        <template slot="SvgAvatar">
          <svg-nick-avatar class="avatar"></svg-nick-avatar>
        </template>
      </employee>
    </router-link>

    <router-link to="/max">
      <employee
        class="is-success is-small"
        name="Max Derneden"
        function-name="UX-designer"
      >
        <template slot="SvgAvatar">
          <svg-max-avatar class="avatar"></svg-max-avatar>
        </template>
      </employee>
    </router-link>

    <router-link to="/rosanne">
      <employee
        class="is-danger is-small"
        name="Rosanne Geertsen"
        function-name="UX-designer"
      >
        <template slot="SvgAvatar">
          <svg-rosanne-avatar class="avatar"></svg-rosanne-avatar>
        </template>
      </employee>
    </router-link>

    <router-link to="/zillah">
      <employee
        class="is-gray is-small"
        name="Zillah Calle"
        function-name="Fullstack-Developer"
      >
        <template slot="SvgAvatar">
          <svg-zillah-avatar class="avatar"></svg-zillah-avatar>
        </template>
      </employee>
    </router-link>

    <router-link to="/timo">
      <employee
        class="is-action is-small"
        name="Timo Wentink"
        function-name="UX-designer"
      >
        <template slot="SvgAvatar">
          <svg-timo-avatar class="avatar"></svg-timo-avatar>
        </template>
      </employee>
    </router-link>
  </div>
</template>

<script>
import Employee from "../components/Employee.vue";
import SvgSanderAvatar from "../assets/img/sander.svg";
import SvgNickAvatar from "../assets/img/nick.svg";
import SvgMaxAvatar from "../assets/img/max.svg";
import SvgRosanneAvatar from "../assets/img/rosanne.svg";
import SvgZillahAvatar from "../assets/img/zillah.svg";
import SvgTimoAvatar from "../assets/img/timo.svg";

export default {
  components: {
    Employee,
    SvgSanderAvatar,
    SvgNickAvatar,
    SvgMaxAvatar,
    SvgRosanneAvatar,
    SvgZillahAvatar,
    SvgTimoAvatar
  }
};
</script>

<style type="text/scss" lang="scss">
.grid-container {
  display: grid;
  grid-gap: 1em;
  max-width: 1240px;
  margin: 120px auto;
  grid-auto-rows: 350px;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  a {
    text-decoration: none;
  }
  .employee {
    display: grid;
    grid-template-areas: "overlap";
    text-align: center;
    svg {
      &.employee-background {
        margin-top: -40px;
        align-self: start;
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .grid-container {
    margin: 80px auto 0 auto;
    grid-template-columns: repeat(auto-fill, minmax(100%, 1fr));
    .employee {
      grid-template-rows: auto auto;
    }
  }
}
@media screen and(max-width: 450px) {
  .grid-container {
    margin: 40px auto 0 auto;
    .employee {
      grid-template-columns: 100%;
    }
  }
}
</style>
