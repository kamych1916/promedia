<template>
  <header id="header" class="py-10">
    <div class="container">
      <div class="d-flex align-items-center">
        <nuxt-link
          to="/"
          class="d-flex align-items-center fs-22 text-black cursor"
        >
          <img height="58" src="/images/logo.png" alt="" />
        </nuxt-link>

        <div class="d-none d-sm-flex align-items-center">
          <nuxt-link
            to="/"
            class="px-20 text-black text-bold text-white cursor"
          >
            Кто мы
          </nuxt-link>
          <nuxt-link to="/" class="px-20 text-black text-bold cursor">
            Наши проекты
          </nuxt-link>
          <nuxt-link to="/" class="px-20 text-black text-bold cursor">
            Технологии
          </nuxt-link>
          <nuxt-link to="/" class="px-20 text-black text-bold cursor">
            Контакты
          </nuxt-link>
          <!-- <el-button type="danger" style="background: #d63231">
            бесплатная консультация
          </el-button> -->
        </div>
        <div class="sidebarToggle text-black" @click="eventSidebar()">
          <i class="bi bi-list fs-22"></i>
        </div>
        <div :class="[showSidebar ? 'sidebarActive' : '', 'sidebar']">
          <div class="p-16 text-black">
            <div
              @click="eventSidebar()"
              class="
                close-sidebar
                nav-link
                text-black
                d-flex
                justify-content-center
              "
            >
              <i class="bi bi-x-circle pb-20"></i>
            </div>
            <div class="d-flex flex-column justify-content-start">
              <nuxt-link to="/" class="px-20 text-black cursor py-20">
                Кто мы
              </nuxt-link>
              <nuxt-link to="/" class="px-20 text-black cursor py-20">
                Афиша
              </nuxt-link>
              <nuxt-link to="/" class="px-20 text-black cursor py-20">
                Новости
              </nuxt-link>
              <nuxt-link to="/" class="px-20 text-black cursor py-20">
                Спектакли
              </nuxt-link>
              <nuxt-link to="/" class="px-20 text-black cursor py-20">
                Контакты
              </nuxt-link>
            </div>
          </div>
        </div>
        <div class="backdrop" v-if="showSidebar" @click="eventSidebar()"></div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      showSidebar: false,
    };
  },
  mounted() {
    const HeaderTag = document.getElementById("header");
    HeaderTag.style.backgroundColor = "transparent";
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 0) {
        HeaderTag.style.boxShadow = "0 0 3px #ccc";
        HeaderTag.style.backgroundColor = "#fff";
      } else {
        HeaderTag.style.backgroundColor = "transparent";
        HeaderTag.style.boxShadow = "none";
      }
    });
  },
  methods: {
    eventSidebar() {
      this.showSidebar = !this.showSidebar;
      if (window.screen.width < 1024) {
        if (this.showSidebar) {
          document.body.style.overflow = "hidden";
        } else {
          document.body.style.overflow = "auto";
        }
      }
    },
  },
};
</script>

<style lang="scss">
header {
  top: 0;
  left: 0;
  background-color: transparent;
  transition: all ease 0.5s;
  position: fixed !important;
  width: 100%;
  align-items: center;
  text-align: center;
  z-index: 2;
  &:after {
    content: "";
    display: block;
    position: absolute;
    left: 0;
    top: -40px;
    width: 100%;
    background-color: transparent;
    z-index: -1;
    transition: background-color 800ms cubic-bezier(0.19, 1, 0.22, 1) 0ms;
  }

  &.sticky {
    &.shown {
      transform: translateY(0) translateZ(0);
    }
    &:after {
      background-color: #fff;
    }
    transition: border-color 800ms cubic-bezier(0.19, 1, 0.22, 1) 0ms,
      opacity 800ms cubic-bezier(0.19, 1, 0.22, 1) 0ms, transform 0ms;
    top: 0;
  }
  .sidebarToggle {
    display: none;
  }
  .sidebar {
    transition: all 0.6s;
    word-wrap: break-word;
    background-color: #fff !important;
    height: 100vh;
    width: 300px;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999999999;
    background-size: cover;
    background-position: 50%;
    display: none;
  }
  .sidebarActive {
    transition: all 0.6s;
    left: 0 !important;
  }
  .close-sidebar {
    display: none !important;
  }
  .backdrop {
    z-index: 1;
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: black;
    transition: all ease 1s;
    opacity: 0;
  }

  .nav li {
    text-align: start;
    padding-bottom: 20px;
  }

  @media screen and (max-width: 1024px) {
    .content {
      padding-left: 1rem;
    }
    .sidebar {
      display: block;
      left: -300px;
    }
    .sidebarToggle {
      display: block;
    }
    .close-sidebar {
      display: flex !important;
    }
    .backdrop {
      opacity: 0.2;
    }
  }
}
</style>
