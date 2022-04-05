<template>
  <div id="app">
    <header-lead/>
    <main-lead/>
    <footer-lead/>
    <div class="btn-container">
      <a href="#" class="btn-up"><font-awesome-icon class="icon" icon="fa-solid fa-arrow-up" /></a>
    </div>
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

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  position: relative;
  font-family: 'Poppins', sans-serif;
  color: $primary-color;
}

.btn-up {
  width: 50px;
  height: 50px;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 10px;
  right: 10px;
  background-color: $light-bg;
  border: 2px solid $secondary-hover;
  border-radius: 100px;
  opacity: .7;

  .icon {
    color: $secondary-hover;
    font-size: 20px;
  }
}
</style>
