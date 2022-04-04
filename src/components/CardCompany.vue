<template>
  <div class="container">
    <font-awesome-icon class="icon" :icon="CardData.icon" />
    <h2>{{ CardData.title }}</h2>
    <p>{{ CardData.content }}</p>
  </div>
</template>

<script>
export default {
    name: 'CardCompany',
    props: {
      CardData: Object,
    }
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/style';

  .container {
    width: 50%;
    .icon{
      color: $secondary-hover;
    }
    h2 {
      display: inline-block;
      margin: 1rem .3rem;
      font-size: 16px;
      font-weight: 600;
      color: $title-color;
    }
    p {
      margin-bottom: 1rem;
      color: $title-color;
      font-size: 12px;
    }
  }
</style>