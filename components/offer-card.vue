<template>
  <!-- eslint-disable -->
  <div v-if="offerData" class="offer-card">
    <div class="card-wrap">
      <div class="row">
        <div class="col-lg-8">
          <Breadcrumbs :offerTitle="offerData.title" />
          <h1 class="mt-10" style="line-height: 1.2 !important;">
            {{ typeDeal }} {{ offerData.title }}
          </h1>
        </div>
        <div class="col-lg d-lg-flex justify-content-end">
          <div class="mt-10 fs-14 text-grey">
            {{ offerData.date }} &nbsp;/&nbsp;
            <span><i class="bi bi-eye"></i> {{ offerData.view }}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-8">
        <!-- СЛАЙДЕР -->
        <div class="card-wrap">
          <hooper
            group="group1"
            :wheelControl="false"
            class="gallery-slide mt-10"
          >
            <slide v-for="(img, index) in offerData.offerPhothos" :key="index">
              <el-image
                draggable="false"
                class="w-100 h-100 border-rad-10 "
                :src="img.imgName"
                fit="cover"
              ></el-image>
            </slide>
            <hooper-navigation slot="hooper-addons"></hooper-navigation>
          </hooper>

          <hooper
            group="group1"
            :itemsToShow="3"
            class="gallery-thumb"
            :wheelControl="false"
          >
            <slide v-for="(img, index) in offerData.offerPhothos" :key="index">
              <el-image
                draggable="false"
                class="w-100 h-100 border-rad-10"
                :src="img.imgName"
                fit="cover"
              ></el-image>
            </slide>
          </hooper>
        </div>
        <div class="card-wrap">
          <div class="p-10">
            <client-only>
              <OfferMap
                :mapCoords="offerData.map_marker"
                :staticZoom="true"
              ></OfferMap>
            </client-only>
          </div>
        </div>
        <!-- КРАТКАЯ ИНФОРМАЦИЯ -->
        <div class="card-wrap" v-if="!offerData.offer_object.office_type">
          <div class="row text-line-height">
            <div
              class="col-6 col-md-3 my-10 text-center"
              v-if="offerData.offer_object.area_house"
            >
              <h3>{{ offerData.offer_object.area_house }}м²</h3>
              <span class="fs-14 text-grey">площадь дома</span>
            </div>
            <div
              class="col-6 col-md-3 my-10 text-center"
              v-if="offerData.offer_object.area_land"
            >
              <h3>{{ offerData.offer_object.area_land }} соток</h3>
              <span class="fs-14 text-grey">площадь участка</span>
            </div>
            <div
              class="col-6 col-md-3 my-10 text-center"
              v-if="offerData.offer_object.area"
            >
              <h3>{{ offerData.offer_object.area }}м²</h3>
              <span class="fs-14 text-grey">общая</span>
            </div>
            <div
              v-if="offerData.offer_object.count_rooms"
              class="col-6 col-md-3 my-10 text-center"
            >
              <h3>{{ offerData.offer_object.count_rooms }}</h3>
              <span class="fs-14 text-grey">кол. комнат</span>
            </div>

            <div
              class="col-6 col-md-3 my-10 text-center"
              v-if="offerData.offer_object.floor"
            >
              <h3>
                {{ offerData.offer_object.floor }} из
                {{ offerData.offer_object.floorsHouse }}
              </h3>
              <span class="fs-14 text-grey">этаж</span>
            </div>

            <div
              class="col-6 col-md-3 my-10 text-center"
              v-if="
                offerData.offer_object.floorsHouse &&
                  !offerData.offer_object.floor
              "
            >
              <h3>
                {{ offerData.offer_object.floorsHouse }}
              </h3>
              <span
                class="fs-14 text-grey"
                v-if="offerData.offer_object.floorsHouse == 1"
              >
                этаж
              </span>
              <span
                class="fs-14 text-grey"
                v-else-if="
                  offerData.offer_object.floorsHouse > 1 &&
                    offerData.offer_object.floorsHouse < 5
                "
              >
                этажа
              </span>
              <span class="fs-14 text-grey" v-else>этажей</span>
            </div>
          </div>
        </div>

        <!-- ОПИСАНИЕ -->
        <div class="card-wrap">
          <div class="p-10">
            <h2>Описание</h2>
            <span style="white-space: pre-line;">
              {{ offerData.offerDescription }}
            </span>
          </div>
        </div>

        <!-- ОБЩАЯ ИНФОРМАЦИЯ -->
        <div class="card-wrap">
          <div class="p-10">
            <h2>Общая информация</h2>
            <div class="row">
              <div class="col-6 my-10">Город</div>
              <div class="col-6 text-blue my-10">
                {{ offerData.offer_object.city }}
              </div>
            </div>
            <div class="row" v-if="offerData.offer_object.office_type">
              <div class="col-6 my-10">
                Тип помещения
              </div>
              <div class="col-6 text-blue my-10">
                {{ offerData.offer_object.office_type }}
              </div>
            </div>
            <div class="row" v-if="offerData.offer_object.object">
              <div class="col-6 my-10">Тип жилья</div>
              <div class="col-6 text-blue my-10">
                {{ offerData.offer_object.object }}
              </div>
            </div>
            <div class="row" v-if="offerData.offer_object.building_renovation">
              <div class="col-6 my-10">Ремонт</div>
              <div class="col-6 text-blue my-10">
                {{ offerData.offer_object.building_renovation }}
              </div>
            </div>
            <div class="row" v-if="offerData.offer_object.building_type">
              <div class="col-6 my-10">Тип постройки</div>
              <div class="col-6 text-blue my-10">
                {{ offerData.offer_object.building_type }}
              </div>
            </div>
            <div class="row" v-if="offerData.offer_object.ground_type">
              <div class="col-6 my-10">Статус участка</div>
              <div class="col-6 text-blue my-10">
                {{ offerData.offer_object.ground_type }}
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- СТОИМОСТЬ И АККАУНТ -->
      <div class="col-lg-4" sticky-container>
        <div v-sticky>
          <!-- ЕСЛИ ОБЬЯВЛЕНИЕ НА ПРОДАЖУ -->
          <div class="card-wrap" v-if="offerData.offer_price.deal == 'sell'">
            <div class="p-10">
              <div class="text-blue fs-28">
                {{ offerData.offer_price.price.toLocaleString("ru") }}
                <span class="fs-22">сомони</span>
              </div>
              <div class="text-grey fs-14">
                {{ offerData.price_m2.toLocaleString("ru") }} сомони/м²
              </div>
              <div class="mt-10">
                Тип продажи -
                <span style="text-transform:lowercase" class="text-blue">
                  {{ offerData.offer_price.type_sell }}
                </span>
              </div>
              <div
                class="mt-10"
                v-if="offerData.offer_price.percentageTransaction"
              >
                Процент от сделки агенту -
                <span style="text-transform:lowercase" class="text-blue">
                  {{ offerData.offer_price.percentageTransaction }}%
                </span>
              </div>
            </div>
          </div>

          <!-- ЕСЛИ ОБЬЯВЛЕНИЕ НА ДЛИТЕЛЬНУЮ АРЕНДУ -->
          <div
            class="card-wrap"
            v-else-if="offerData.offer_price.deal == 'rent_long'"
          >
            <div class="p-10">
              <div class="text-blue fs-28">
                {{ offerData.offer_price.price_mounth.toLocaleString("ru") }}
                <span class="fs-22">сомони в месяц</span>
              </div>
              <div class="mt-10" v-if="offerData.offer_price.deposit">
                Залог -
                <span class="text-blue">
                  {{ offerData.offer_price.deposit.toLocaleString("ru") }}
                  сомони
                </span>
              </div>
              <div class="mt-10" v-else>
                Без залога
              </div>
              <div class="mt-10">
                Предоплата -
                <span class="text-blue">
                  {{ offerData.offer_price.prepayment }}
                </span>
              </div>
              <div class="mt-10">
                Состав съемщиков -
                <span style="text-transform:lowercase" class="text-blue">
                  {{ offerData.offer_price.for_who }}
                </span>
              </div>
            </div>
          </div>

          <!-- ЕСЛИ ОБЬЯВЛЕНИЕ ПОСУТОЧНО -->
          <div class="card-wrap" v-else>
            <div class="p-10">
              <div class="text-blue fs-28">
                {{ offerData.offer_price.price_day.toLocaleString("ru") }}
                <span class="fs-22">сомони в день</span>
              </div>
              <div class="mt-10">
                Состав съемщиков -
                <span style="text-transform:lowercase" class="text-blue">
                  {{ offerData.offer_price.for_who }}
                </span>
              </div>
            </div>
          </div>
          <div class="card-wrap">
            <div class="p-10">
              <div class="row d-flex">
                <div>
                  <div class="my-5 ">{{ offerData.userInfo }}</div>
                  <div class="fs-14 text-grey my-5" v-if="offerData.is_agent">
                    агентство недвижимости
                  </div>
                  <div class="fs-14 text-grey my-5" v-else>Собственник</div>
                  <button
                    class="el-button el-button--primary fs-14 py-5 px-5 my-5"
                    @click="view_tel(offerData._id)"
                    v-if="!showTel"
                  >
                    показать телефон
                  </button>
                  <a
                    class="my-10 fs-14"
                    :href="'tel:' + offerData.tel"
                    v-if="showTel"
                    >{{ offerData.tel }}</a
                  >
                </div>

                <div class="col px-0 d-flex justify-content-end">
                  <div class="avatar">
                    <el-image
                      draggable="false"
                      class="w-100 h-100 border-rad-5"
                      :src="offerData.user_avatar"
                      fit="cover"
                      v-if="offerData.user_avatar"
                    ></el-image>
                    <div v-else>
                      <i
                        class="bi bi-briefcase fs-22"
                        v-if="offerData.is_agent"
                      ></i>
                      <i class="bi bi-person-check fs-22" v-else></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Api from "~/utils/api";
import { Hooper, Slide, Navigation as HooperNavigation } from "hooper";
import "hooper/dist/hooper.css";
import OfferMap from "@/pages/account/add_offer/components/offer_map.vue";

export default {
  components: {
    Hooper,
    Slide,
    HooperNavigation,
    OfferMap
  },
  head() {
    return {
      title: this.whatTitle()
    };
  },
  props: ["typeDeal"],
  data() {
    return {
      showTel: false,
      offerId: this.$route.params.id,
      offerData: ""
    };
  },
  mounted() {
    if (this.offerId) {
      Api.getInstance()
        .offer.get_offer(this.offerId)
        .then(response => {
          this.offerData = response.data;
        })
        .catch(error => {
          Api.typicalNTFS(error.response.status);
        });
    }
  },
  methods: {
    whatTitle() {
      if (this.offerData) {
        if (this.offerData.offer_price.deal == "rent_long") {
          return "Снять " + this.offerData.title;
        } else if (this.offerData.offer_price.deal == "sell") {
          return "Купить " + this.offerData.title;
        } else {
          return "Посуточно " + this.offerData.title;
        }
      }
    },
    view_tel(id) {
      Api.getInstance()
        .offer.view_tel({ id: id })
        .then(response => {
          this.showTel = !this.showTel;
        })
        .catch(error => {
          Api.typicalNTFS(error.response.status);
        });
    }
  }
};
</script>

<style lang="scss">
.offer-card {
  .top-sticky {
    margin-top: 20px;
  }
  .gallery-slide {
    height: 400px !important;
    .hooper-slide {
      padding: 0px 10px !important;
    }
  }
  .gallery-thumb {
    height: 130px !important;
    .is-current {
      opacity: 1;
      .el-image {
        background-color: #409eff;
        border: 2px solid #409eff !important;
        .el-image__inner {
          border-radius: 10px !important;
        }
      }
    }
    .hooper-slide {
      opacity: 0.8;
      padding: 15px 10px !important;
    }
    .is-current {
      opacity: 1;
    }
  }

  @media (max-width: 992px) {
    .gallery-slide {
      height: 250px !important;
    }
    .gallery-thumb {
      height: 100px !important;
    }
  }
}
</style>
