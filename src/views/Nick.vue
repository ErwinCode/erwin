<template>
  <div class="detail-page">
    <header class="is-hidden-mobile">
      <svg-logo></svg-logo>
    </header>
    <router-link to="/" class="arrow">
      <SvgArrow></SvgArrow>
    </router-link>
    <div class="color-back is-action">
      <employee
        name="Sander Bruggeman"
        function-name="Front-end Developer"
        class="is-large"
      >
        <template slot="SvgAvatar">
          <svg-sander-avatar class="avatar"></svg-sander-avatar>
        </template>
        <template slot="biography">
          <p>
            Werkt het liefst aan mobiele- en webapplicaties, maar is met vele
            technieken vertrouwd. Heeft bovendien een voorliefde voor muziek &
            festivals.
          </p>
        </template>
      </employee>
    </div>
  </div>
</template>
<script>
import SvgArrow from "../assets/img/arrow.svg";
import SvgLogo from "../assets/img/logo.svg";
import SvgSanderAvatar from "../assets/img/sander.svg";
import Employee from "../components/Employee";

export default {
  components: {
    SvgArrow,
    Employee,
    SvgLogo,
    SvgSanderAvatar
  }
};
</script>
