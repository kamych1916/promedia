<template>
  <div>
    <div
      style="position: absolute; top: 0; right: -300px"
      class="backround-frame w-100 h-100"
    >
      <iframe
        src="https://my.spline.design/librarycyberpunkcity-afa20bfed83264d9befdf285d1618dac/"
        frameborder="0"
        width="100%"
        height="100%"
      ></iframe>
    </div>
    <section class="banner_section d-block" style="height: 100vh">
      <div class="container" style="position: relative">
        <div class="row w-100">
          <div class="col-lg-2 order-last d-none d-lg-block">
            <div class="round_text">
              <img
                src="/images/DIGITAL  АГЕНТСТВО  •    DIGITAL  АГЕНТСТВО  •  НТСТВО  •_.png"
                alt=""
              />
            </div>
          </div>
          <div class="col-lg-10 w-100">
            <div class="banner_content mt-40 w-100">
              <div>
                <h1
                  class="text-white banner_title text_effect_wrap w-100"
                  style="font-weight: bolder"
                >
                  Digital <br />
                  Агентство <br />
                  <span class="text_outline">
                    <client-only>
                      <vue-typer :text="['ProMedia', 'ПроМедиа']"></vue-typer>
                    </client-only>
                  </span>
                </h1>
                <a class="a-btn btn_white text-uppercase mt-40 cursor">
                  бесплатная консультация
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="about_section section_space pb-0 d-block h-100 pb-100">
      <div class="container">
        <div class="row">
          <div class="col-lg-3">
            <div class="section_title">
              <h2
                class="fs-18 text-white d-flex align-items-center"
                style="letter-spacing: 10px"
              >
                кто мы
                <span class="line mt-4"></span>
              </h2>
            </div>
          </div>

          <div class="col-lg-7">
            <div class="about_content mt-0">
              <div class="section_title mb-20 d-block">
                <h3 class="big_title text_effect_wrap mt-20">
                  <span class="text_effect_wrap3 text-white"> Мы создаём</span>
                  <span class="text_effect_wrap3 text-white">
                    самые лучшие
                  </span>
                  <span class="text_effect_wrap3 text-white"
                    >digital решения для бизнеса</span
                  >
                </h3>
              </div>
              <div class="mt-30 d-block">
                <p class="p-0 text-white">
                  Комплексный digital-маркетинг по подписке. Мы обеспечиваем
                  качественный сервис по фиксированной цене.
                </p>
              </div>
            </div>
            <a class="a-btn btn_border border_light mt-20" href="about.html">
              узнать цены
            </a>
          </div>
        </div>
      </div>
    </section>

    <section class="langs_section section_space d-block h-100 pb-100">
      <div class="container">
        <div class="row">
          <div class="section_title col">
            <h2
              class="fs-18 text-white d-flex align-items-center"
              style="letter-spacing: 10px"
            >
              технологии
              <span class="line mt-4"></span>
            </h2>
          </div>
        </div>
        <div class="row w-100">
          <div class="col-auto my-10 d-flex align-items-center">
            <el-popover placement="top-start" title="Vue" trigger="hover">
              Используем VueJS для создания<br />
              пользовательских интерфейсов.
              <img
                slot="reference"
                width="60"
                height="50"
                src="/icons/Vue-Icon.png"
              />
            </el-popover>
          </div>

          <div class="col-auto my-10 d-flex align-items-center">
            <el-popover placement="top-start" title="React" trigger="hover">
              Используем ReactJS & React Native <br />
              для создания пользовательских <br />
              интерфейсов веб и мобильных приложений.
              <img
                slot="reference"
                width="67"
                height="87"
                src="/icons/react.e3058fa.png"
              />
            </el-popover>
          </div>
          <div class="col-auto my-10 d-flex align-items-center">
            <el-popover placement="top-start" title="Python" trigger="hover">
              Используем Python в машинном обучении,<br />
              прикладных задачах, обработке спутниковых<br />
              снимков, веб-сервисах и проч.
              <img
                slot="reference"
                width="53"
                height="53"
                src="/icons/python.4b6c2f3.png"
              />
            </el-popover>
          </div>
          <div class="col-auto my-10 d-flex align-items-center">
            <el-popover placement="top-start" title="Flutter" trigger="hover">
              Несмотря на то, что Flutter от <br />
              Google – молодая технология для<br />
              создания кроссплатформенных<br />
              приложений, решения на её основе<br />
              зарекомендовали надежностью<br />
              и плавностью своей работы.
              <img
                slot="reference"
                width="42"
                height="52"
                src="/icons/Flutter.png"
              />
            </el-popover>
          </div>

          <div class="col-auto my-10 d-flex align-items-center">
            <el-popover placement="top-start" title="Laravel" trigger="hover">
              Laravel отлично подходит как<br />
              для MVP-проектов, так и для<br />
              проектов со сложной бизнес-логикой,<br />
              внутренних административных<br />
              панелей и типовых решений.
              <img
                slot="reference"
                width="68"
                height="48"
                src="/icons/laravel.b46bc5c.png"
              />
            </el-popover>
          </div>
          <div class="col-auto my-10 d-flex align-items-center">
            <el-popover placement="top-start" title="NodeJS" trigger="hover">
              Из-за отсутствия альтернатив<br />
              в других языках применяем в <br />
              некоторых микросервисах менеджер<br />
              пакетов NodeJS, имеющий большое<br />
              количество готовых решений.
              <img
                slot="reference"
                width="96"
                height="50"
                src="/icons/Node.png"
              />
            </el-popover>
          </div>
          <div class="col-auto my-10 d-flex align-items-center">
            <el-popover
              placement="top-start"
              title="TypeScript"
              trigger="hover"
            >
              Язык программирования, представленный<br />
              Microsoft в 2012 году. <br />Позиционируется как средство<br />
              разработки веб-приложений,<br />
              расширяющее возможности JavaScript.

              <img
                slot="reference"
                width="52"
                height="52"
                src="/icons/TS.png"
              />
            </el-popover>
          </div>
          <div class="col-auto my-10 d-flex align-items-center">
            <el-popover placement="top-start" title="Java" trigger="hover">
              Используем Java/Kotlin в разработке<br />
              мобильных приложений под Android,<br />
              а также в Enterprise-сегменте.
              <img
                slot="reference"
                width="60"
                height="62"
                src="/icons/java.1b76ea8.png"
              />
            </el-popover>
          </div>
          <div class="col-auto my-10 d-flex align-items-center">
            <el-popover placement="top-start" title="PHP" trigger="hover">
              Быстро развивающийся на текущий<br />
              момент противоречивый язык с <br />богатой историей. Широко<br />
              используем в задачах веб-сегмента.
              <img
                slot="reference"
                width="88"
                height="88"
                src="/icons/php.234ed83.png"
              />
            </el-popover>
          </div>
          <div class="col-auto my-10 d-flex align-items-center">
            <el-popover
              placement="top-start"
              title="PostgreSQL"
              trigger="hover"
            >
              PostgreSQL – основная реляционная<br />
              база данных для большинства проектов.
              <img
                slot="reference"
                width="53.5"
                height="55"
                src="/icons/postgres.b606028.png"
              />
            </el-popover>
          </div>
          <div class="col-auto my-10 d-flex align-items-center">
            <el-popover
              placement="top-start"
              title="Kubernetes"
              trigger="hover"
            >
              Умеем и используем Kubernetes<br />
              для оркестрации сервисов в наших<br />
              и клиентских проектах. Опыт с 2016 года.
              <img
                slot="reference"
                width="60"
                height="58"
                src="/icons/kbs.76852b5.png"
              />
            </el-popover>
          </div>
          <div class="col-auto my-10 d-flex align-items-center">
            <el-popover placement="top-start" title="Docker" trigger="hover">
              Без контейнеризации в современном<br />
              мире никуда. Используем с 2015 года.
              <img
                slot="reference"
                width="74.5"
                height="53"
                src="/icons/docker.4f834e2.png"
              />
            </el-popover>
          </div>
          <div class="col-auto my-10 d-flex align-items-center">
            <el-popover placement="top-start" title="Голанг" trigger="hover">
              Компилируемый многопоточный язык<br />
              программирования, разработанный<br />
              внутри компании Google.

              <img
                slot="reference"
                width="42"
                height="58"
                src="/icons/go.e4961c9.png"
              />
            </el-popover>
          </div>
          <div class="col-auto my-10 d-flex align-items-center">
            <el-popover placement="top-start" title="Dart" trigger="hover">
              Язык программирования,<br />
              созданный Google и используемый<br />
              для разработки на Flutter и в Web.
              <img
                slot="reference"
                width="52"
                height="52"
                src="/icons/dart.d0bcda9.png"
              />
            </el-popover>
          </div>

          <div class="col-auto my-10 d-flex align-items-center">
            <el-popover placement="top-start" title="MySQL" trigger="hover">
              Свободная реляционная<br />
              база данных, часто применяемая<br />
              в типовых решениях.
              <img
                slot="reference"
                width="114"
                height="58"
                src="/icons/mysql.3b779ac.png"
              />
            </el-popover>
          </div>
          <div class="col-auto my-10 d-flex align-items-center">
            <el-popover placement="top-start" title="MongoDB" trigger="hover">
              Документоориентированная система<br />
              управления базами данных с открытым<br />
              исходным кодом, не требующая<br />
              описания схемы таблиц.
              <img
                slot="reference"
                width="159"
                height="41"
                src="/icons/mongo.ea6fcec.png"
              />
            </el-popover>
          </div>
        </div>
      </div>
    </section>
    <section class="works_section pb-100">
      <div class="container">
        <div
          class="row mb-80 border-section text-white"
          style="border-bottom: 1px solid rgba(255, 255, 255, 0.2)"
        >
          <div class="col-lg-5">
            <h3 class="section-title">наши работы</h3>
          </div>
          <div class="col-lg-7">
            <div class="filter-wrap">
              <ul class="filter-wrapper clearfix">
                <li>
                  <a
                    href="#"
                    data-filter="*"
                    class="selected cursor-item active"
                    >Все работы</a
                  >
                </li>
                <li>
                  <a href="#" class="cursor-item" data-filter=".design"
                    >Дизайн</a
                  >
                </li>
                <li>
                  <a href="#" class="cursor-item" data-filter=".brand"
                    >Брендинг</a
                  >
                </li>
                <li>
                  <a href="#" class="cursor-item" data-filter=".web"
                    >Web-разработка</a
                  >
                </li>
                <li>
                  <a href="#" class="cursor-item" data-filter=".mobile"
                    >Mobile-разработка</a
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="row" style="height: 100vh">
          <div class="col-lg"></div>
          <div class="col-lg">
            <iframe
              src="https://my.spline.design/deviceiphone12-bfcf77e601cdf3d98a55a3109c1089a6/"
              frameborder="0"
              width="100%"
              height="100%"
            ></iframe>
          </div>
        </div>
      </div>
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
  layout: "newlayout",
};
</script>

<style lang="scss">
.line {
  width: 63px;
  height: 0.8px;
  margin-left: 12px;
  background-color: #ffffff;
}

@media screen and (max-width: 767px) {
  .backround-frame {
    left: 0 !important;
  }
}
.works_section {
  .filter-wrapper {
    padding: 0px;
    margin-bottom: 0px;
    overflow: hidden;
    li {
      display: inline-block;
      margin: 0px 0 10px 0;
      a {
        margin-left: 30px;
        -webkit-transition: all 0.4s ease-in-out;
        transition: all 0.4s ease-in-out;
        color: rgba(255, 255, 255, 0.4);
        line-height: 22px;
        letter-spacing: 1px;
        position: relative;
        font-size: 14px;
        font-weight: 400;
        &:hover {
          color: #fff;
        }
      }
      a.selected {
        color: #fff;
      }
    }
  }
}
.service_section {
  .project {
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    padding: 13px 0;
    display: flex;
    justify-content: space-between;
    position: relative;
    z-index: 2;
    color: #fff;
    mix-blend-mode: difference;
  }
}

.about_section {
  .big_title {
    font-size: 55px;
    line-height: 1;
    margin-bottom: 20px;
    .text-break {
      word-wrap: break-word !important;
      word-break: break-word !important;
    }
  }
  @media screen and (max-width: 767px) {
    .big_title {
      font-size: 45px;
      line-height: 1;
      margin-bottom: 20px;
    }
  }
}

.banner_section {
  margin-top: 100px;
  .round_text {
    right: 0;
    bottom: -40px;
    position: absolute;
    animation: loopMove 10s infinite;
    -webkit-animation: loopMove 10s infinite;
  }

  @keyframes loopMove {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  .banner_content {
    // max-width: 550px;
    .banner_title {
      line-height: 0.95em;
    }
    .banner_title {
      font-size: 95px;
      font-weight: normal;
      margin-bottom: 60px;
      .text_effect_wrap3 {
        margin-left: -10px;
        color: #fff;
      }
      .text_outline {
        color: #ffffff;
        -webkit-text-stroke-width: 1px;
        -webkit-text-stroke-color: #ffffff;
        -webkit-text-fill-color: transparent;
      }
    }
  }
  @media screen and (max-width: 767px) {
    .order-last {
      -webkit-box-ordinal-group: 1 !important;
      -ms-flex-order: 0 !important;
      order: 0 !important;
    }
  }
  @media screen and (max-width: 1460px) {
    .banner_image {
      width: 100%;
      height: 100%;
      padding: 25px;
      margin-left: 0;
    }
  }
  @media screen and (max-width: 767px) {
    .a-btn {
      padding: 16px 20px !important;
      font-size: 12px !important;
    }
    .banner_title {
      font-size: 3.2rem !important;
    }
  }
}

a:active,
a:focus,
a:hover,
a:visited {
  outline: 0;
  text-decoration: none;
}
.a-btn {
  z-index: 1;
  border: none;
  outline: none;
  color: #ffffff;
  font-size: 13px;
  line-height: 1.09;
  position: relative;
  padding: 26px 40px;
  padding-bottom: 20px;
  border-radius: 0px;
  letter-spacing: 2px;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  display: -webkit-inline-box;
  display: -ms-inline-flexbox;
  display: inline-flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  font-weight: 400;
  transition: 0.6s cubic-bezier(0.25, 1, 0.5, 1);
  &:before {
    top: 0px;
    left: auto;
    right: 0px;
    bottom: 0px;
    width: 0px;
    content: "";
    z-index: -1;
    position: absolute;
    background-color: #ffffff;
    transition: 0.6s cubic-bezier(0.25, 1, 0.5, 1);
  }
  &:hover:before {
    left: 0px;
    width: 100%;
    right: auto;
  }
}
.a-btn.btn_white:hover {
  color: #ffffff;
}
.a-btn.btn_white {
  font-weight: 600;
  color: #000000;
  background-color: #ffffff;
}
.a-btn.btn_white:before {
  background-color: #2b2b2b;
}
.btn_border {
  font-size: 13px;
  font-weight: 600;
  color: #ffffff;
  padding: 25px 40px;
  padding-bottom: 19px;
  border: 1px solid transparent;
}
.border_light {
  color: #c8c8c8;
  border-color: #d3d3d3;
  &:hover {
    color: #000;
  }
}
</style>
