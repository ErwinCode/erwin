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
    <div class="color-back is-danger">
      <employee
        name="Rosanne Geertsen"
        function-name="UX-Designer"
        class="is-large"
      >
        <template slot="SvgAvatar">
          <svg-rosanne-avatar class="avatar"></svg-rosanne-avatar>
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
import SvgRosanneAvatar from "../assets/img/rosanne.svg";
import Employee from "./Employee";

export default {
  components: {
    SvgArrow,
    Employee,
    SvgLogo,
    SvgRosanneAvatar
  }
};
</script>
