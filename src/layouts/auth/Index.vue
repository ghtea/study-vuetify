<template>
  <v-app>
    <auth-view />
  </v-app>
</template>

<script>
import AuthView from "./View";
export default {
  name: "AuthLayout",
  components: {
    AuthView,
  },
};
</script>
