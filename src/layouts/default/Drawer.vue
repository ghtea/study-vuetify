<template>
  <v-navigation-drawer
    v-bind="$attrs"
    app
  >
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="text-h6">
          내일의 집
        </v-list-item-title>
        <!-- <v-list-item-subtitle> subtext </v-list-item-subtitle> -->
      </v-list-item-content>
    </v-list-item>

    <v-divider />

    <v-list
      dense
      nav
    >
      <v-list-item
        v-for="item in items"
        :key="item.title"
        link
        :to="item.to"
        active-class="primary white--text"
      >
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: "DefaultDrawer",
  data() {
    return {
      items: [
        { title: "Home", icon: "mdi-view-dashboard", to: "/" },
        { title: "List", icon: "mdi-view-dashboard", to: "/product-list" },
        { title: "LogIn", icon: "mdi-login", to: "/auth/log-in" },
        { title: "SignUp", icon: "mdi-login", to: "/auth/sign-up" },
      ],
      right: null,
    };
  },
};
</script>
<style lang=""></style>
