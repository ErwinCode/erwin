<template>
  <div class="detail-page">
    <header class="is-hidden-mobile">
      <router-link to="/">
        <svg-logo></svg-logo>
      </router-link>
    </header>
    <router-link to="/" class="arrow">
      <SvgArrow></SvgArrow>
    </router-link>
    <div class="color-back is-success">
      <employee
        name="Max Derneden"
        function-name="Office Manager"
        class="is-large"
      >
        <template slot="SvgAvatar">
          <svg-max-avatar class="avatar"></svg-max-avatar>
        </template>
        <template slot="biography">
          <p>
            Springt graag op een racefiets of een snowboard. Ook heeft hij een passie voor muziek beleven en maken in allerlei soorten en maten. Hij houdt graag het overzicht met een theetje of espresso erbij.
          </p>
        </template>
      </employee>
    </div>
  </div>
</template>
<script>
import SvgArrow from "../assets/img/arrow.svg";
import SvgLogo from "../assets/img/logo.svg";
import SvgMaxAvatar from "../assets/img/max.svg";
import Employee from "./Employee";

export default {
  components: {
    SvgArrow,
    Employee,
    SvgLogo,
    SvgMaxAvatar
  }
};
</script>
