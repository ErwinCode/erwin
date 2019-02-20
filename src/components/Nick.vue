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
    <div class="color-back is-warning">
      <employee
        name="Nick Bolink"
        function-name="Front-end Developer"
        class="is-large"
      >
        <template slot="SvgAvatar">
          <svg-nick-avatar class="avatar"></svg-nick-avatar>
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
import SvgNickAvatar from "../assets/img/nick.svg";
import Employee from "./Employee";

export default {
  components: {
    SvgArrow,
    Employee,
    SvgLogo,
    SvgNickAvatar
  }
};
</script>
