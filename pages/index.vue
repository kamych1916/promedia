<template>
  <div class="main">
    <section class="main-section container w-100 ">
      <div>
        <div class="row">
          <div class="col-lg-6 my-10">
            <img
              width="100%"
              style="background-size: cover; animation-timing-function: cubic-bezier(.54,.085,.5,.92); animation-iteration-count: infinite;"
              src="/images/tajikgirl4-ё-p79f23raz6mn4ro3mq6qn9b393ntbk614zv5vxdgm0.png"
            />
          </div>
          <div class="col-lg-6 my-10">
            <div>
              <h1
                class="fs-60 text-red text-monts"
                style="font-weight: bolder;"
              >
                Digital <br />
                агентство <br />
                <client-only>
                  <vue-typer
                    class="text-red"
                    :text="['ProMedia', 'ПроМедиа']"
                  ></vue-typer>
                </client-only>
              </h1>
              <h2 class="fs-22 mt-20">
                Комплексный digital-маркетинг по подписке. <br />Мы обеспечиваем
                качественный сервис по фиксированной цене.
              </h2>
              <el-button
                type="danger"
                class="mt-10"
                style="background: #d63231"
              >
                бесплатная консультация
              </el-button>
            </div>
          </div>
        </div>

        <!-- <img
          src="/images/mitech-landing-main-slider-slide-01-image-02.png"
          alt=""
        />
        <img
          src="/images/mitech-landing-main-slider-slide-01-image-01.png"
          alt=""
        />
        <img
          src="/images/mitech-landing-main-slider-slide-01-image-03.png"
          alt=""
        /> -->
      </div>
    </section>
    <section class="container">
      <div class="row" style="position: relative">
        <div class="col-lg my-20">
          <div class="text-red fs-22">— кто мы</div>
          <div class="fs-28 text-bold">Наш подход к решению задач:</div>
          <div class="fs-22 mt-50">
            Потребности в разработке программного обеспечения у всех разные.
            Чтобы охватить весь спектр возможностей, мы предлагаем комплексные
            программные услуги для различных платформ и технологий.
          </div>
          <div class="mt-50 fs-22 text-bold">Цифры говорят за нас:</div>
          <div class="row w-100 mt-30">
            <div class="col my-10">
              <div class="fs-52  text-red text-bold text-monts">10+</div>
              <div class="fs-22">лет работы</div>
            </div>
            <div class="col my-10">
              <div class="fs-52 text-red text-bold text-monts">18+</div>
              <div class="fs-22">проектов</div>
            </div>
            <div class="col my-10">
              <div class="fs-52 text-red text-bold text-monts">20+</div>
              <div class="fs-22">сотрудников</div>
            </div>
          </div>
        </div>
        <div class="col-lg my-20">
          <div class="row mb-40">
            <div class="col-2 d-none d-lg-block"></div>
            <div class="col">
              <div
                class="p-30 border-rad-20 w-100"
                style="background: #f3f9ff;"
              >
                <div class="row">
                  <div class="col-auto d-flex align-items-center">
                    <img width="90" src="images/service-cube.d011b53.png" />
                  </div>
                  <div class="col">
                    <div class="fs-18 text-bold mb-10">
                      СТРАТЕГИЧЕСКИЙ КОНСАЛТИНГ
                    </div>
                    <div class="fs-14">
                      Мы поможем вам определить область применения,
                      технологический стек и потенциал вашего решения.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row mb-40">
            <div class="col">
              <div class="p-30 border-rad-20 w-100" style="background: #f3f2ff">
                <div class="row">
                  <div class="col-auto d-flex align-items-center">
                    <img width="90" src="images/service-gear.9bd8536.png" />
                  </div>
                  <div class="col">
                    <div class="fs-18 text-bold mb-10">
                      УПРАВЛЕНИЕ ПРОЕКТОМ
                    </div>
                    <div class="fs-14">
                      Мы служим связующим звеном, объединяя ваше видение
                      продукта с опытом нашей технической команды
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-2 d-none d-lg-block"></div>
          </div>
          <div class="row mb-40">
            <div class="col-2 d-none d-lg-block"></div>

            <div class="col">
              <div class="p-30 border-rad-20 w-100" style="background: #fff5f9">
                <div class="row">
                  <div class="col-auto d-flex align-items-center">
                    <img width="90" src="images/service-window.8dd8028.png" />
                  </div>
                  <div class="col">
                    <div class="fs-18 text-bold mb-10">
                      ВЕБ-РАЗРАБОТКА
                    </div>
                    <div class="fs-14">
                      Мы используем новые подходы к веб-разработке для
                      предоставления качественных и инновационных решений
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- <img
          src="images/about-us-lines.svg"
          class="d-none d-lg-block"
          style="position: absolute; right: -15%; top: -20%; z-index:-1;"
        /> -->
      </div>
    </section>
    <section class="mt-100">
      <img
        src="/images/mitech-landing-main-slider-slide-01-image-02.png"
        alt=""
      />
      <img
        src="/images/mitech-landing-main-slider-slide-01-image-01.png"
        alt=""
      />
      <img
        src="/images/mitech-landing-main-slider-slide-01-image-03.png"
        alt=""
      />
    </section>
    <section style="display:none">
      <form @submit.prevent="sendEmail">
        <label>Name</label>
        <input type="text" v-model="name" name="name" placeholder="Your Name" />
        <label>Email</label>
        <input
          type="email"
          v-model="email"
          name="email"
          placeholder="Your Email"
        />
        <label>Телефон</label>
        <input type="text" v-model="tel" name="tel" placeholder="Your Tel" />
        <label>Message</label>
        <textarea
          name="message"
          v-model="message"
          cols="30"
          rows="5"
          placeholder="Message"
        >
        </textarea>

        <input type="submit" value="Send" />
      </form>
    </section>
  </div>
</template>

<script>
import { Hooper, Slide, Navigation as HooperNavigation } from "hooper";
import "hooper/dist/hooper.css";
import emailjs from "emailjs-com";

export default {
  components: {
    Hooper,
    Slide,
    HooperNavigation
  },
  data() {
    return {
      name: "",
      email: "",
      tel: "",
      message: ""
    };
  },
  methods: {
    sendEmail(e) {
      try {
        emailjs.sendForm(
          "service_yc0wsap",
          "template_ta71hnv",
          e.target,
          "user_TJSQqq8nVKZPyWy5N1Hzs",
          {
            name: this.name,
            email: this.email,
            tel: this.tel,
            message: this.meessage
          }
        );
        console.log("it works!!!");
      } catch (error) {
        console.log({ error });
      }
      this.name = "";
      this.email = "";
      this.tel = "";
      this.message = "";
    }
  }
};
</script>

<style lang="scss">
.main {
  position: relative;

  .vue-typer .custom.char.typed {
    color: #d63231;
  }
  .vue-typer .custom.char.selected {
    color: #000;
  }
  .main-section {
  }
  .news-card {
    padding: 50px 0px;
    border-top: 1px solid #ccc;
  }
  .journal-img {
    object-fit: cover;
    width: 300px;
    height: 300px;
  }
  @media (max-width: 1200px) {
    .journal-img {
      object-fit: cover;
      width: 150px;
      height: 150px;
    }
  }
}
</style>
