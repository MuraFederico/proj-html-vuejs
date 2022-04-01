<template>
  <div id="app">
    <header-lead/>
    <main-lead/>
    <footer-lead/>
  </div>
</template>

<script>
import HeaderLead from './components/HeaderLead.vue'
import MainLead from './components/MainLead.vue'
import FooterLead from './components/FooterLead.vue'


export default {
  name: 'App',
  components: {
    HeaderLead,
    MainLead,
    FooterLead,
  }
}
</script>

<style lang="scss">
@import './assets/styles/style.scss';

#app {
  font-family: 'Roboto', sans-serif;
}

</style>
