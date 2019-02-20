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
    <div class="color-back is-action">
      <employee
        name="Timo Wentink"
        function-name="UX-Designer"
        class="is-large"
      >
        <template slot="SvgAvatar">
          <svg-timo-avatar class="avatar"></svg-timo-avatar>
        </template>
        <template slot="biography">
          <p>
            Staat aan het hoofd van ons ontwikkelteam en weet alles te fixen. Hij houdt zich voetballend en fietsend fit en dankzij hem schallen klassiekers van Otis Redding en David Bowie nog regelmatig door de speakers.
          </p>
        </template>
      </employee>
    </div>
  </div>
</template>
<script>
import SvgArrow from "../assets/img/arrow.svg";
import SvgLogo from "../assets/img/logo.svg";
import SvgTimoAvatar from "../assets/img/timo.svg";
import Employee from "./Employee";

export default {
  components: {
    SvgArrow,
    Employee,
    SvgLogo,
    SvgTimoAvatar
  }
};
</script>
