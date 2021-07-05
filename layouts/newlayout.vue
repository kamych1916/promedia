<template>
  <div>
    <div>
      <client-only>
        <Header2 />
      </client-only>
      <slide-y-down-transition :duration="700">
        <Nuxt />
      </slide-y-down-transition>
      <div class="d-none d-lg-flex">
        <back-to-top text="Back to top" visibleoffset="0" right="30px">
          <div class="backtotop" style="display: block">
            <a href="#" class="scroll fs-12"> Back to top </a>
          </div>
        </back-to-top>
      </div>
    </div>
    <div
      class="d-none d-lg-block"
      :class="[
        'g-cursor',
        { 'g-cursor_hover': hover },
        { 'g-cursor_hide': hideCursor },
      ]"
    >
      <div :style="cursorCircle" class="g-cursor__circle"></div>
      <div class="g-cursor__point" ref="point" :style="cursorPoint"></div>
    </div>
  </div>
</template>

<script>
import Header2 from "@/layouts/default-components/header2.vue";
import { SlideYDownTransition } from "vue2-transitions";

export default {
  components: {
    SlideYDownTransition,
    Header2,
  },
  data() {
    return {
      xChild: 0,
      yChild: 0,
      xParent: 0,
      yParent: 0,
      hover: false,
      hideCursor: true,
    };
  },
  computed: {
    cursorCircle() {
      return `transform: translateX(${this.xParent}px) translateY(${this.yParent}px) translateZ(0) translate3d(0, 0, 0);`;
    },
    cursorPoint() {
      return `transform: translateX(${this.xChild - 3}px) translateY(${
        this.yChild - 3
      }px) translateZ(0) translate3d(0, 0, 0);`;
    },
  },
  methods: {
    moveCursor(e) {
      this.xChild = e.clientX;
      this.yChild = e.clientY;
      setTimeout(() => {
        this.xParent = e.clientX - 15;
        this.yParent = e.clientY - 15;
      }, 100);
    },
  },
  mounted() {
    document.addEventListener("mousemove", this.moveCursor);
    document.addEventListener("mouseleave", (e) => {
      this.hideCursor = true;
    });
    document.addEventListener("mouseenter", (e) => {
      this.hideCursor = false;
    });
  },
};
</script>

<style lang="scss">
.g-cursor {
  &_hide {
    opacity: 1;
    width: 60px;
    height: 60px;
    transition: width 0.6s ease, height 0.6s ease, opacity 0.6s ease;
  }

  &__circle {
    pointer-events: none;
    user-select: none;
    top: 0;
    left: 0;
    position: fixed;
    width: 35px;
    height: 35px;
    border: 2px solid rgb(126, 166, 226);
    border-radius: 100%;
    z-index: 9999999999999999999;
    backface-visibility: hidden;
    transition: opacity 0.6s ease;
  }

  &__point {
    top: 0;
    left: 0;
    position: fixed;
    width: 10px;
    height: 10px;
    pointer-events: none;
    user-select: none;
    border-radius: 100%;
    background: #fff;
    z-index: 9999999999999999999999999999;
    backface-visibility: hidden;
    will-change: transform;
  }

  &_hover {
    .g-cursor__circle {
      opacity: 0;
      width: 60px;
      height: 60px;
      transition: width 0.6s ease, height 0.6s ease, opacity 0.6s ease;
    }
  }
}
.backtotop {
  left: -10px;
  z-index: 999;
  bottom: 145px;
  display: none;
  position: fixed;
  padding-right: 100px;
  -webkit-transform: rotate(-90deg);
  &:before {
    top: 11px;
    left: 104px;
    width: 39px;
    height: 1px;
    content: "";
    position: absolute;
    background-color: #ffffff;
  }
  .scroll {
    color: #ffffff;
    line-height: 1;
    position: relative;
  }
}
@media screen and (max-width: 767px) {
  body {
    cursor: auto;
  }
}
</style>
