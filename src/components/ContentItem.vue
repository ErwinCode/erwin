<template>
  <div class="content-item">
    <router-link to="/cms-detail">
      <slot name="SvgAvatar"> </slot>
    </router-link>
    <router-link to="/cms-detail">
      <h4 class="is-bold">{{ name }}</h4>
      <h4 class="is-hidden-tablet">{{ functionName }}</h4>
    </router-link>
    <router-link to="/cms-detail" class="is-hidden-mobile">
      <h4>{{ functionName }}</h4>
    </router-link>
    <button class="button is-blank is-trash" @click="showModal = !showModal">
      <svg-trash></svg-trash>
    </button>

    <div v-show="showModal" class="modal">
      <div class="box">
        <div class="user">
          <slot name="SvgAvatar"> </slot>
          <div>
            <p class="is-bold">{{ name }}</p>
            <p>{{ functionName}}</p>
          </div>
        </div>
        <button class="button is-success" @click="showModal = !showModal">Verwijder</button>
        <button class="button is-ghost-action" @click="showModal = !showModal">Annuleer</button>
      </div>
    </div>
  </div>
</template>

<script>
import SvgTrash from "../assets/img/delete.svg";
import SvgSander from "../assets/img/sander.svg";

export default {
  components: {
    SvgTrash,
    SvgSander
  },
  props: {
    name: String,
    functionName: String,
    detailLink: String
  },
  data: function() {
    return {
      showModal: false
    };
  }
};
</script>
