<template>
  <div>
    <div id="fp-nav" class="sections-menu d-none d-lg-block">
      <ul class="p-0">
        <li v-for="(offset, index) in offsets" :key="index">
          <a
            :class="{ active: activeSection == index }"
            @click="scrollToSection(index)"
          >
          </a>
        </li>
      </ul>
    </div>
    <!-- <div class="sections-menu">
      <span
        class="menu-point"
        :class="{ active: activeSection == index }"
        @click="scrollToSection(index)"
        v-for="(offset, index) in offsets"
        :key="index"
      >
      </span>
    </div> -->
    <section style="position: relative" class="fullpage">
      <div
        style="position: absolute; z-index: 1; top: 0px"
        class="w-100 h-100 d-none d-lg-flex align-items-end"
      >
        <div class="container">
          <div class="row py-50 w-100">
            <div class="col">
              <button
                @click="scrollToSection(1)"
                class="front__next js-front-next"
              >
                <span class="mouse"></span>
                Листайте вниз
              </button>
            </div>
            <div
              class="col text-black text-bold d-flex align-items-center cursor"
            >
              <div class="row w-100 align-items-center">
                <div class="col-auto">ПОРТФОЛИО</div>
                <div class="col" style="background: #ccc; height: 2px"></div>
              </div>
            </div>
            <div class="col d-flex justify-content-center align-items-center">
              <div class="text-center row">
                Дизайн электронного архива <br />
                Большого театра
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style="position: absolute" class="w-100 h-100 d-none d-lg-block">
        <el-image
          style="position: absolute; right: 400px; top: -100px"
          class="bg-danger h-100"
          src="/images/proekt-rentrace-fon.jpg"
        >
        </el-image>
        <el-image
          style="position: absolute; right: -100px; top: -100px"
          src="/images/proekt-rentrace-fon-sprava.jpg"
          class="bg-danger h-100"
        ></el-image>
        <el-image
          style="position: absolute; right: 100px; width: 35%; bottom: 100px"
          draggable="false"
          src="/images/proekt-rentrace-gonshhik.png"
          fit="cover"
        ></el-image>
      </div>
      <div class="w-100 container">
        <div class="row h-100">
          <div class="col-lg mt-60">
            <h1 class="fs-52 text-bold" style="color: #0081cc">
              DIGITAL-АГЕНТСТВО <br />
              ПОЛНОГО ЦИКЛА
            </h1>
            <h2 class="fs-28 text-black mt-30">
              Мы создаем эффективные цифровые <br />
              продукты для прогрессивных компаний
            </h2>
            <button
              class="
                el-button
                border-rad-20
                text-white text-bold
                px-40
                py-14
                mt-60
              "
              style="background: #0081cc"
            >
              ЗАКАТЬ ПРОЕКТ
            </button>
          </div>
          <div class="col-lg d-none d-lg-block"></div>
        </div>
      </div>
    </section>
    <section class="fullpage container">
      <!-- <iframe
        src="https://my.spline.design/characterbunny-e6b10fa516b43e7b7684ca402457490e/"
        frameborder="0"
        width="100%"
        height="100%"
      ></iframe> -->
      <h1 class="text-black">Section 2</h1>
    </section>
    <section class="fullpage container">
      <h1 class="text-black">Section 3</h1>
      <p>works on <b>desktop & mobile</b></p>
    </section>
    <section class="fullpage container">
      <h1 class="text-black">Section 4</h1>
      <p>
        Tutorial
        <a
          href="https://webdeasy.de/en/programming-vue-js-fullpage-scroll/?referer=cp-NVOEBL"
          target="_blank"
          >here</a
        >
      </p>
    </section>
    <!-- <section class="service_section pb-100">
      <div class="container">
        <div
          class="row mb-80"
          style="border-bottom: 1px solid rgba(255, 255, 255, 0.2)"
        >
          <div class="col-lg-6">
            <h3
              class="section-title text-white аы-18"
              style="letter-spacing: 10px"
            >
              наши услуги
            </h3>
          </div>
          <div class="col-lg-6 text-white">
            <p class="fs-14">
              Айдентика и digital услуги, предназначенные для большего и малого
              бизнеса...
            </p>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-6 my-10">
            <div class="project-list text-white">
              <div class="project">
                <div class="project-title">
                  <h5 class="fs-22">Разработка систем</h5>
                  <p class="fs-12">
                    используем совеременные решения для<br />
                    построения — быстрой и надежной системы
                  </p>
                </div>
                <div class="project-categ">01</div>
              </div>
              <div class="project">
                <div class="project-title">
                  <h5 class="fs-22">Сопровождние интернет ресурса</h5>
                  <p class="fs-12">
                    проводим аналитику вашего проекта, <br />далее погружаемся и
                    ведем техническое сопровождение
                  </p>
                </div>
                <div class="project-categ">02</div>
              </div>
              <div class="project">
                <div class="project-title">
                  <h5 class="fs-22">UI/UX дизайн</h5>
                  <p class="fs-12">
                    подчеркиваем важные детали вашего продукта,<br />
                    после чего возводим совершенно уникальный дизайн
                  </p>
                </div>
                <div class="project-categ">03</div>
              </div>
              <div class="project">
                <div class="project-title">
                  <h5 class="fs-22">Стратегический консалтинг</h5>
                  <p class="fs-12">
                    поможем вам определить область применения,<br />
                    технологический стек и потенциал вашего решения.
                  </p>
                </div>
                <div class="project-categ">04</div>
              </div>
            </div>
          </div>
          <div class="col-lg-6 my-10">
            <hooper :wheelControl="false" :autoPlay="true" :playSpeed="3000">
              <slide draggable="false">
                <img
                  draggable="false"
                  width="100%"
                  height="500"
                  class="border-rad-10"
                  src="https://media.giphy.com/media/j3mdQpQ9SKxFOWs9gy/giphy-downsized.gif"
                />
              </slide>
              <slide draggable="false">
                <img
                  draggable="false"
                  width="100%"
                  height="500"
                  class="border-rad-10"
                  src="https://media.giphy.com/media/j0q2t5XWdbx6qgh0x6/giphy-downsized.gif"
                />
              </slide>
              <slide draggable="false">
                <img
                  draggable="false"
                  width="100%"
                  height="500"
                  class="border-rad-10"
                  src="https://media.giphy.com/media/YOq9KhX8saHTRU4HWo/giphy-downsized.gif"
                />
              </slide>
            </hooper>
          </div>
        </div>
      </div>
    </section> -->
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
  destroyed() {
    window.removeEventListener("mousewheel", this.handleMouseWheel, {
      passive: false,
    }); // Other browsers
    window.removeEventListener("DOMMouseScroll", this.handleMouseWheelDOM); // Mozilla Firefox

    window.removeEventListener("touchstart", this.touchStart); // mobile devices
    window.removeEventListener("touchmove", this.touchMove); // mobile devices
  },
  mounted() {
    if (window.screen.width > 1024) {
      this.calculateSectionOffsets();
      window.addEventListener("DOMMouseScroll", this.handleMouseWheelDOM); // Mozilla Firefox
      window.addEventListener("mousewheel", this.handleMouseWheel, {
        passive: false,
      }); // Other browsers

      window.addEventListener("touchstart", this.touchStart, {
        passive: false,
      }); // mobile devices
      window.addEventListener("touchmove", this.touchMove, { passive: false }); // mobile devices
    }
  },
  methods: {
    kek() {
      alert("kek");
    },
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
};
</script>

<style>
body {
  color: #fff;
  font-family: Helvetica, arial, sans-serif;
  overflow: hidden;
}
.front__next {
  display: flex;
  align-items: center;
  color: #ccc;
  font-size: 14px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  background: none;
  border: none;
}
.front__next .mouse {
  margin-right: 20px;
}
.mouse {
  position: relative;
  display: block;
  width: 30px;
  height: 42px;
  border: 2px solid #ccc;
  border-radius: 50px;
  background: none !important;
}

.mouse::before {
  display: block;
  content: "";
  width: 3px;
  height: 8px;
  background: #ccc;
  position: absolute;
  top: 7px;
  left: 50%;
  margin-left: -1px;
  border-radius: 5px;
}
.mouse::before {
  animation: 1.5s ease-out infinite anim-mouse-dot;
}
@keyframes anim-mouse-dot {
  50% {
    transform: translateY(4px);
    opacity: 0.8;
  }
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
  z-index: 100;
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

#fp-nav {
  opacity: 1;
  -webkit-transform: translate3d(0, 0, 0);
  position: fixed;
  left: 50px;
  top: 25%;
  bottom: 25%;
  width: 17px;
  z-index: 99;
  transition: 0.5s;
  margin-top: 0 !important;
}
#fp-nav::before {
  display: block;
  content: "";
  width: 1px;
  position: absolute;
  top: 0;
  left: 50%;
  bottom: 0;
  background: #ccc;
}

#fp-nav ul {
  width: 0px !important;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
}
#fp-nav ul li {
  width: auto;
  height: auto;
  margin: 0;
}
#fp-nav ul li,
.fp-slidesNav ul li {
  display: block;
  width: 18px;
  height: 18px;
  position: relative;
}
#fp-nav ul li a {
  display: block;
  width: 20px;
  height: 20px;
  border: 1px solid #ccc;
  border-radius: 50%;
  background: #fff;
  overflow: hidden;
}
#fp-nav ul li a,
.fp-slidesNav ul li a {
  display: block;
  position: relative;
  z-index: 1;
  width: 100%;
  height: 100%;
  cursor: pointer;
  text-decoration: none;
}
#fp-nav ul li a:hover::before {
  opacity: 0.5;
  transform: scale(1);
}
#fp-nav ul li a.active::before {
  opacity: 1;
  transform: scale(1);
}
#fp-nav ul li a::before {
  display: block;
  content: "";
  position: absolute;
  top: 25%;
  left: 25%;
  width: 50%;
  height: 50%;
  border-radius: 50%;
  background: #0081cc;
  opacity: 0;
  transform: scale(0);
  transition: 0.2s;
}

#fp-nav ul li a.active span,
#fp-nav ul li:hover a.active span,
.fp-slidesNav ul li a.active span,
.fp-slidesNav ul li:hover a.active span {
  height: 12px;
  width: 12px;
  margin: -6px 0 0 -6px;
  border-radius: 100%;
}
#fp-nav ul li a span,
.fp-slidesNav ul li a span {
  border-radius: 50%;
  position: absolute;
  z-index: 1;
  height: 4px;
  width: 4px;
  border: 0;
  background: #333;
  left: 50%;
  top: 50%;
  margin: -2px 0 0 -2px;
  transition: 0.1s ease-in-out;
}
#fp-nav ul li a.active span,
#fp-nav ul li:hover a.active span,
.fp-slidesNav ul li a.active span,
.fp-slidesNav ul li:hover a.active span {
  height: 12px;
  width: 12px;
  margin: -6px 0 0 -6px;
  border-radius: 100%;
}
#fp-nav ul li a span,
.fp-slidesNav ul li a span {
  border-radius: 50%;
  position: absolute;
  z-index: 1;
  height: 4px;
  width: 4px;
  border: 0;
  background: #333;
  left: 50%;
  top: 50%;
  margin: -2px 0 0 -2px;
  transition: 0.1s ease-in-out;
}
</style>
