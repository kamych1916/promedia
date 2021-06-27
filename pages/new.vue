<template>
  <div>
    <div class="sections-menu">
      <span
        class="menu-point"
        :class="{ active: activeSection == index }"
        @click="scrollToSection(index)"
        v-for="(offset, index) in offsets"
        :key="index"
      >
      </span>
    </div>
    <section class="fullpage container">
      <div class="row h-100">
        <div class="col-lg mt-100">
          <h1 class="fs-52 text-red">
            DIGITAL-АГЕНТСТВО <br />
            ПОЛНОГО ЦИКЛА
          </h1>
          <h2 class="fs-32 text-black mt-50">
            Мы создаем эффективные цифровые <br />
            продукты для прогрессивных компаний
          </h2>
        </div>
        <div class="col-lg d-none d-lg-block">
          <div class="w-100 h-100">
            <el-image
              style="position: absolute"
              fit="cover"
              class="bg-danger w-100 h-100"
              src="/images/proekt-bitferno-fon-gory.jpg"
            >
            </el-image>
            <el-image
              class="w-100"
              style="position: absolute"
              draggable="false"
              src="/images/proekt-rentrace-gonshhik.png"
              fit="cover"
            ></el-image>
          </div>
        </div>
      </div>
    </section>
    <section class="fullpage black container">
      <h1>Section 2</h1>
      <p>made with <a href="https://vuejs.org/" target="_blank">Vue.js</a></p>
    </section>
    <section class="fullpage red container">
      <h1>Section 3</h1>
      <p>works on <b>desktop & mobile</b></p>
    </section>
    <section class="fullpage green container">
      <h1>Section 4</h1>
      <p>
        Tutorial
        <a
          href="https://webdeasy.de/en/programming-vue-js-fullpage-scroll/?referer=cp-NVOEBL"
          target="_blank"
          >here</a
        >
      </p>
    </section>
  </div>
</template>

<script>
import { Hooper, Slide, Navigation as HooperNavigation } from "hooper";
import "hooper/dist/hooper.css";
export default {
  components: {
    Hooper,
    Slide,
    HooperNavigation,
  },
  data() {
    return {
      inMove: false,
      activeSection: 0,
      offsets: [],
      touchStartY: 0,
    };
  },
  methods: {
    calculateSectionOffsets() {
      // console.log(document.getElementsByClassName("fullpage"));
      let sections = document.getElementsByClassName("fullpage");
      for (let i = 0; i < sections.length; i++) {
        let sectionOffset = sections[i].ofsetTop;
        this.offsets.push(sectionOffset);
      }
    },
    handleMouseWheel: function (e) {
      if (e.wheelDelta < 30 && !this.inMove) {
        this.moveUp();
      } else if (e.wheelDelta > 30 && !this.inMove) {
        this.moveDown();
      }

      e.preventDefault();
      return false;
    },
    handleMouseWheelDOM: function (e) {
      if (e.detail > 0 && !this.inMove) {
        this.moveUp();
      } else if (e.detail < 0 && !this.inMove) {
        this.moveDown();
      }

      return false;
    },
    moveDown() {
      this.inMove = true;
      this.activeSection--;

      if (this.activeSection < 0) this.activeSection = this.offsets.length - 1;

      this.scrollToSection(this.activeSection, true);
    },
    moveUp() {
      this.inMove = true;
      this.activeSection++;

      if (this.activeSection > this.offsets.length - 1) this.activeSection = 0;

      this.scrollToSection(this.activeSection, true);
    },
    scrollToSection(id, force = false) {
      if (this.inMove && !force) return false;

      this.activeSection = id;
      this.inMove = true;

      document
        .getElementsByClassName("fullpage")
        [id].scrollIntoView({ behavior: "smooth" });

      setTimeout(() => {
        this.inMove = false;
      }, 400);
    },
    touchStart(e) {
      e.preventDefault();

      this.touchStartY = e.touches[0].clientY;
    },
    touchMove(e) {
      if (this.inMove) return false;
      e.preventDefault();

      const currentY = e.touches[0].clientY;

      if (this.touchStartY < currentY) {
        this.moveDown();
      } else {
        this.moveUp();
      }

      this.touchStartY = 0;
      return false;
    },
  },
  mounted() {
    this.calculateSectionOffsets();

    window.addEventListener("DOMMouseScroll", this.handleMouseWheelDOM); // Mozilla Firefox
    window.addEventListener("mousewheel", this.handleMouseWheel, {
      passive: false,
    }); // Other browsers

    window.addEventListener("touchstart", this.touchStart, { passive: false }); // mobile devices
    window.addEventListener("touchmove", this.touchMove, { passive: false }); // mobile devices
  },
  destroyed() {
    window.removeEventListener("mousewheel", this.handleMouseWheel, {
      passive: false,
    }); // Other browsers
    window.removeEventListener("DOMMouseScroll", this.handleMouseWheelDOM); // Mozilla Firefox

    window.removeEventListener("touchstart", this.touchStart); // mobile devices
    window.removeEventListener("touchmove", this.touchMove); // mobile devices
  },
};
</script>

<style>
body {
  color: #fff;
  font-family: Helvetica, arial, sans-serif;
  overflow: hidden;
}

.fullpage {
  padding-top: 100px;
  height: 100vh;
  width: 100%;
}

p {
  font-size: 1em;
}

.fullpage a {
  text-decoration: none;
  font-weight: 600;
  background: rgba(255, 255, 255, 0.3);
  padding: 5px 10px;
  color: #fff;
  margin-left: 5px;
}

.red {
  background-color: #ab4545;
}

section.black {
  background-color: #000;
}

.blue {
  background-color: #237ad4;
}

.green {
  background-color: #68c368;
}

h1.black {
  color: #000;
}

.sections-menu {
  position: fixed;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
}

.sections-menu .menu-point {
  width: 10px;
  height: 10px;
  background-color: #000;
  display: block;
  margin: 1rem 0;
  opacity: 0.6;
  transition: 0.4s ease all;
  cursor: pointer;
}

.sections-menu .menu-point.active {
  opacity: 1;
  transform: scale(1.5);
}

@media screen and (max-width: 1200px) {
}
</style>
