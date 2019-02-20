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
    <div class="color-back is-gray">
      <employee
        name="Zillah Calle"
        function-name="Fullstack-Developer"
        class="is-large"
      >
        <template slot="SvgAvatar">
          <svg-zillah-avatar class="avatar"></svg-zillah-avatar>
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
import SvgZillahAvatar from "../assets/img/zillah.svg";
import Employee from "./Employee";

export default {
  components: {
    SvgArrow,
    Employee,
    SvgLogo,
    SvgZillahAvatar
  }
};
</script>
