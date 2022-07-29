<template>
  <div id="app">
    <nav-bar-component/>
    <router-view/>
  </div>
</template>
<script>
import navBarComponent from "./components/navBarComponent.vue";

export default {
  components: {
    navBarComponent
  }
}
</script>
<style>
</style>
