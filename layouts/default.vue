<template>
  <div>
    <div>
      <client-only>
        <Header />
      </client-only>
      <slide-y-down-transition :duration="700">
        <Nuxt />
      </slide-y-down-transition>
      <back-to-top text="Back to top" visibleoffset="0" right="30px">
        <button class="btn-backtop px-10 py-5">
          <i class="bi bi-arrow-up-circle"></i>
        </button>
      </back-to-top>
    </div>
  </div>
</template>

<script>
import Header from "@/layouts/default-components/header.vue";
import { SlideYDownTransition } from "vue2-transitions";

export default {
  components: {
    SlideYDownTransition,
    Header,
  },
};
</script>
