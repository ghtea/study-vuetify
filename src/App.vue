<template>
  <v-app>
    <router-view name="menu" />

    <v-content>
      <router-view name="content" />  
    </v-content>
    
  </v-app>
</template>

<script>
export default {
  name : "app"
};
</script>

