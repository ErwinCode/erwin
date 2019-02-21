<template>
  <div class="cms">

    <header>
      <router-link to="/cms" class="is-hidden-mobile">
        <svg-logo-white></svg-logo-white>
      </router-link>
      <form class="is-hidden-tablet search-form">
        <input type="text" placeholder="Search.." name="search" />
        <button type="submit">
          <svg-search class="search-background"></svg-search>
        </button>
      </form>
    </header>

    <div class="cms-container">
      <div class="subheader">
        <router-link to="/cms-detail" class="button is-success">
          + toevoegen
        </router-link>
        <router-link to="/" class="button is-ghost-action">
          Bekijk website
        </router-link>
        <form class="is-hidden-mobile search-form">
          <input type="text" placeholder="Search.." name="search" />
          <button type="submit">
            <svg-search class="search-background"></svg-search>
          </button>
        </form>
      </div>

      <div class="cms-content">
        <content-item name="Sander Bruggeman" function-name="Front-end Developer">
          <template slot="SvgAvatar">
            <svg-sander-avatar class="avatar"></svg-sander-avatar>
          </template>
        </content-item>
        <content-item name="Nick Bolink" function-name="Front-end Developer">
          <template slot="SvgAvatar">
            <svg-nick-avatar class="avatar"></svg-nick-avatar>
          </template>
        </content-item>
        <content-item name="Max Derneden" function-name="Office Manager">
          <template slot="SvgAvatar">
            <svg-max-avatar class="avatar"></svg-max-avatar>
          </template>
        </content-item>
        <content-item name="Rosanne Geertsen" function-name="UX-Designer">
          <template slot="SvgAvatar">
            <svg-rosanne-avatar class="avatar"></svg-rosanne-avatar>
          </template>
        </content-item>
        <content-item name="Zillah Calle" function-name="Full-Stack Developer">
          <template slot="SvgAvatar">
            <svg-zillah-avatar class="avatar"></svg-zillah-avatar>
          </template>
        </content-item>
        <content-item name="Timo Wentink" function-name="UX-Designer">
          <template slot="SvgAvatar">
            <svg-timo-avatar class="avatar"></svg-timo-avatar>
          </template>
        </content-item>
      </div>

    </div>

  </div>
</template>

<script>
import SvgSanderAvatar from "../assets/img/sander.svg";
import SvgNickAvatar from "../assets/img/nick.svg";
import SvgMaxAvatar from "../assets/img/max.svg";
import SvgRosanneAvatar from "../assets/img/rosanne.svg";
import SvgZillahAvatar from "../assets/img/zillah.svg";
import SvgTimoAvatar from "../assets/img/timo.svg";
import SvgLogoWhite from "../assets/img/logo-white.svg";
import SvgSearch from "../assets/img/search-background.svg";
import ContentItem from "./ContentItem";

export default {
  components: {
    ContentItem,
    SvgSanderAvatar,
    SvgNickAvatar,
    SvgMaxAvatar,
    SvgRosanneAvatar,
    SvgZillahAvatar,
    SvgTimoAvatar,
    SvgLogoWhite,
    SvgSearch
  }
};
</script>

