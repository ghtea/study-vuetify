<template>
  <v-app>
    <default-app-bar @toggleDrawer="isShowingDrawer = !isShowingDrawer" />
    <default-drawer v-model="isShowingDrawer" />
    <default-view />
  </v-app>
</template>

<script>
import DefaultAppBar from "./AppBar";
import DefaultDrawer from "./Drawer";
import DefaultView from "./View";

export default {
  name: "DefaultLayout",
  components: {
    DefaultAppBar,
    DefaultDrawer,
    DefaultView,
  },
  data: () => ({
    isShowingDrawer: false,
  }),
};
</script>
