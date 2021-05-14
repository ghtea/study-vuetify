<template>
  <v-app-bar
    app
    dark
  >
    <v-app-bar-nav-icon @click="$emit('toggleDrawer')" />
    <v-toolbar-title>Default Layout</v-toolbar-title>
    <v-spacer />
  </v-app-bar>
</template>

<script>
export default {
  name: "DefaultAppBar",
};
</script>
