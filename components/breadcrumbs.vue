<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }" class="mt-10"
        >Главная</el-breadcrumb-item
      >
      <div v-if="!offerTitle">
        <el-breadcrumb-item
          :to="item.path"
          v-for="(item, i) in crumbs"
          :key="i"
          class="mt-10"
        >
          {{ item.name || "" }}
        </el-breadcrumb-item>
      </div>
      <div v-else>
        <el-breadcrumb-item :to="{ path: '/' + params.dealPath }" class="mt-10">
          {{ params.deal }}
        </el-breadcrumb-item>
        <el-breadcrumb-item
          :to="{ path: '/' + params.dealPath + '/' + params.typePath }"
          class="mt-10"
        >
          {{ params.type }}
        </el-breadcrumb-item>
        <el-breadcrumb-item class="mt-10">{{ offerTitle }}</el-breadcrumb-item>
      </div>
    </el-breadcrumb>
  </div>
</template>

<script>
export default {
  props: {
    offerTitle: {
      type: String,
      required: false,
      default: null
    }
  },
  computed: {
    params() {
      const params = {};
      params.dealPath = this.$route.path.split("/")[1];
      params.deal = this.$i18n.t("route." + this.$route.path.split("/")[1]);
      params.typePath = this.$route.path.split("/")[2];
      params.type = this.$i18n.t("route." + this.$route.path.split("/")[2]);
      return params;
    },
    crumbs() {
      const crumbs = [];
      this.$route.matched.forEach((item, i, { length }) => {
        const crumb = {};
        crumb.path = item.path;
        crumb.name = this.$i18n.t("route." + item.path.match(/[^/]*$/)[0]);

        if (i === length - 1) {
          if (item.regex.keys.length > 0) {
            crumbs.push({
              path: item.path.replace(/\/:[^/:]*$/, ""),
              name: this.$i18n.t("route." + item.name.replace(/-[^-]*$/, ""))
            });
            crumb.path = this.$route.path;
            crumb.name = this.$i18n.t(
              "route." + [crumb.path.match(/[^/]*$/)[0]]
            );
          }
        }
        crumbs.push(crumb);
      });

      return crumbs;
    }
  }
};
</script>
