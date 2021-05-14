<template>
  <v-app-bar
    app
    flat
    color="white"
  >
    <v-app-bar-nav-icon @click="$emit('toggleDrawer')" />
    <v-toolbar-title>내일의 집</v-toolbar-title>
    <v-spacer />

    <v-btn icon>
      <v-icon>mdi-heart</v-icon>
      <!-- <v-icon>mdi-heart-outline</v-icon> -->
    </v-btn>

    <v-btn icon>
      <v-icon>mdi-cart</v-icon>
    </v-btn>

    <template v-if="isLoggedIn">
      <v-btn
        color="primary"
        fab
        dark
      >
        <v-icon>mdi-account-circle</v-icon>
      </v-btn>
    </template>
    <template v-else>
      <v-btn
        text
        to="/auth/log-in"
      >
        로그인
      </v-btn>
      <v-btn
        text
        to="/auth/sign-up"
      >
        회원가입
      </v-btn>
    </template>
  </v-app-bar>
</template>

<script>
export default {
  name: "DefaultAppBar",
  computed: {
    isLoggedIn () {
      console.log(this.$store)
      return this.$store.getters.isLoggedIn
    }
  }
};
</script>
