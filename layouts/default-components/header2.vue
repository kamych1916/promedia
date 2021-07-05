<template>
  <header id="header" class="header">
    <div class="container d-flex justify-content-between py-20">
      <nuxt-link
        to="/"
        class="d-flex align-items-center fs-22 text-white cursor"
      >
        ProMedia
      </nuxt-link>
      <div class="d-none d-lg-flex align-items-center">
        <!-- <el-popover width="160" placement="top" class="ml-10">
          <div>
            <nuxt-link :to="'/account/' + this.uid">
              <div class="w-100 my-10">Дневник питания</div>
            </nuxt-link>
            <nuxt-link to="/account/admin">
              <div class="w-100 my-10">Панель админа</div>
            </nuxt-link>
            <div
              class="pt-10 w-100 cursor"
              style="border-top: 1px solid #ccc"
              @click="signOut()"
            >
              Выйти
            </div>
          </div>
          <el-button slot="reference" type="text" class="">
            <i class="bi bi-person-circle"></i>
            <span class="ml-10 fs-12">КОМПАНИЯ</span>
          </el-button>
        </el-popover> -->
        <nuxt-link to="/" class="px-20 fs-12 text-white cursor">
          КОМПАНИЯ
        </nuxt-link>
        <nuxt-link to="/" class="px-20 fs-12 text-white cursor">
          УСЛУГИ
        </nuxt-link>
        <nuxt-link to="/" class="px-20 fs-12 text-white cursor">
          ПРОЕКТЫ
        </nuxt-link>
        <nuxt-link to="/" class="px-20 fs-12 text-white cursor">
          ЖУРНАЛ
        </nuxt-link>
        <nuxt-link to="/" class="px-20 fs-12 text-white cursor">
          СЕРВИСЫ
        </nuxt-link>
        <nuxt-link to="/" class="px-20 fs-12 text-white cursor">
          КОНТАКТЫ
        </nuxt-link>
      </div>
      <div
        style="border: 1px solid #fff"
        class="sidebarToggle text-white px-6"
        @click.prevent="eventSidebar()"
      >
        <i class="bi bi-list fs-22"></i>
      </div>
      <div :class="[showSidebar ? 'sidebarActive' : '', 'sidebar']">
        <div class="d-flex justify-content-between flex-column h-100">
          <div class="py-16">
            <div
              @click="eventSidebar()"
              class="
                close-sidebar
                nav-link
                text-white
                d-flex
                justify-content-center
              "
              style="border-bottom: 1px solid #5a5a5a"
            >
              <i class="bi bi-x-circle pb-20"></i>
            </div>
            <div class="d-flex flex-column justify-content-start">
              <nuxt-link
                to="/"
                class="text-white cursor py-20"
                style="border-bottom: 1px solid #5a5a5a"
              >
                КОМПАНИЯ
              </nuxt-link>
              <nuxt-link
                to="/"
                class="text-white cursor py-20"
                style="border-bottom: 1px solid #5a5a5a"
              >
                УСЛУГИ
              </nuxt-link>
              <nuxt-link
                to="/"
                class="text-white cursor py-20"
                style="border-bottom: 1px solid #5a5a5a"
              >
                ПРОЕКТЫ
              </nuxt-link>
              <nuxt-link
                to="/"
                class="text-white cursor py-20"
                style="border-bottom: 1px solid #5a5a5a"
              >
                ЖУРНАЛ
              </nuxt-link>
              <nuxt-link
                to="/"
                class="text-white cursor py-20"
                style="border-bottom: 1px solid #5a5a5a"
              >
                СЕРВИСЫ
              </nuxt-link>
              <nuxt-link
                to="/"
                class="text-white cursor py-20"
                style="border-bottom: 1px solid #5a5a5a"
              >
                КОНТАКТЫ
              </nuxt-link>
            </div>
          </div>
          <div class="contact py-16">
            <a href="tel:+992918622774" class="text-white cursor py-20">
              +992 (918) 62-27-74
            </a>
          </div>
        </div>
      </div>
      <div class="backdrop" v-if="showSidebar" @click="eventSidebar()"></div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      showSidebar: false,
      loggedIn: false,
      uid: null,
      isAdmin: false,
    };
  },
  mounted() {
    const HeaderTag = document.getElementById("header");
    HeaderTag.style.backgroundColor = "transparent";
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 0) {
        // HeaderTag.style.boxShadow = "0 0 3px #ccc";
        HeaderTag.style.backgroundColor = "rgba(0, 0, 0, 0.6)";
      } else {
        HeaderTag.style.backgroundColor = "transparent";
        // HeaderTag.style.boxShadow = "none";
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
  position: fixed !important;
  width: 100%;
  align-items: center;
  text-align: center;
  z-index: 2;
  padding: 10px;
  // box-shadow: 0 1px 2px #dcdcdc;
  .sidebarToggle {
    display: none;
  }
  .sidebar {
    transition: all 0.6s;
    word-wrap: break-word;
    background-color: #000 !important;
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
