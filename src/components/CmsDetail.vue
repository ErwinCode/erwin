<template>
  <div class="cms-detail">
    <div v-show="showModal" class="modal">
      <div class="box">
        <div class="user">
          <svg-sander-avatar></svg-sander-avatar>
          <div>
            <p class="is-bold">Sander Bruggeman</p>
            <p>Front-end Developer</p>
          </div>
        </div>
        <router-link to="/cms" class="button is-success" @click="showModal = !showModal">
          Verwijder
        </router-link>
        <button
          class="button is-ghost-action"
          value="Toggle"
          @click="showModal = !showModal"
        >
          Annuleer
        </button>
      </div>
    </div>
    <header class="cms-header is-hidden-mobile">
      <router-link to="/cms" class="is-hidden-mobile">
        <svg-logo-white></svg-logo-white>
      </router-link>
    </header>
    <div class="subheader">
      <router-link to="/cms" class="arrow">
        <SvgArrow class="is-black"></SvgArrow>
      </router-link>
      <div class="text-header">
        <h1>{{ message }}</h1>
      </div>
    </div>
    <form class="grid-form">
      <div class="text-inputs">
        <div class="field">
          <label class="label is-warning">Naam</label>
          <input type="text" v-model="message" />
        </div>
        <div class="field">
          <label class="label is-warning">Functie</label>
          <input type="text" />
        </div>
        <div class="field">
          <label class="label is-warning">Geboortedatum</label>
          <input type="date" name="birthday" />
        </div>
      </div>
      <div class="avatar">
        <SvgSanderAvatar class="avatar"></SvgSanderAvatar>
        <label for="file-upload" class="custom-file-upload">
          Avatar uploaden
        </label>
        <input id="file-upload" type="file" />
      </div>
      <div class="biography">
        <div class="field">
          <label class="label is-warning">Biografie</label>
          <textarea></textarea>
        </div>
      </div>
      <div class="buttons">
        <router-link to="/cms" class="button is-success">
          Profiel opslaan
        </router-link>
        <router-link to="/" class="button is-ghost-action">
          Bekijk website
        </router-link>
        <router-link to="/cms" class="button is-blank" @click="showModal = !showModal">
          <svg-trash class="is-hidden-mobile"></svg-trash>
        </router-link>

      </div>
    </form>
  </div>
</template>

<script>
import SvgSanderAvatar from "../assets/img/sander.svg";
import SvgLogoWhite from "../assets/img/logo-white.svg";
import SvgArrow from "../assets/img/arrow.svg";
import SvgTrash from "../assets/img/delete.svg";

export default {
  components: {
    SvgSanderAvatar,
    SvgLogoWhite,
    SvgArrow,
    SvgTrash
  },
  data: function() {
    return {
      message: null,
        showModal: false,
    };
  }
};
</script>

<style type="text/scss" lang="scss" scoped>

</style>
