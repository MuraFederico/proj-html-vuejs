<template>
  <div :class="theme">
    <div class="container-card">
      <div class="container-icon">
        <font-awesome-icon class="icon" :icon="cardData.icon" />
      </div>
      <h2>{{ cardData.title }}</h2>
      <p>{{ cardData.content }}</p>
    </div>
  </div>
</template>

<script>
export default {
    name: 'CardDescription',
    props: {
      cardData: Object,
      theme: String,
    }
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/style';

.light {
  @include light-theme
}

</style>