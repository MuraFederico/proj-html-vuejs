<template>
  <section id="section-description">
    <div class="container">
      <card-description v-for="card in arrCards" :key="card.title"
      :cardData="card"
      theme="light"
      />
    </div>
  </section>
</template>

<script>
import CardDescription from './CardDescription.vue'

export default {
    name: 'SectionDescription',
    components: {
      CardDescription,
    },
    data() {
      return {
        arrCards: [
          {
            icon: 'fa-solid fa-user-group',
            title: 'Human Capital',
            content: 'Humanizing buisness: Harness the power of technology to improve the way people work.',
          },
          {
            icon: 'fa-solid fa-chart-pie',
            title: 'Core Business',
            content: 'It takes innovative approaches to transform, modernize, and run existing plattforms.',
          },
          {
            icon: 'fa-solid fa-gauge-high',
            title: 'Performance',
            content: 'Achieving maximum impact and value from investments in finance and supply chain.',
          },
        ]
      }
    }
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/style';

#section-description {
  // height: 300px;
  background-color: $light-bg;
  position: relative;
  
}

.container {
  width: 60%;
  margin: 0 auto;
  padding: 7rem 0;
  display: flex;
  justify-content: center;
  
}

</style>