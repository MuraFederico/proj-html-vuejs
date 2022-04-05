<template>
  <div class="container-card">
    <img :src="`img/${cardData.image}`" alt="">
    <div class="container-content">
      <div class="container-info">
        <div class="author show">
          <font-awesome-icon icon="fa-regular fa-user" />
          {{ cardData.author }}
        </div>
        <div class="date show">
          <font-awesome-icon icon="fa-regular fa-clock" />
          {{ cardData.date }}
        </div>
      </div>
      <h4>{{ cardData.title }}</h4>
      <p class="show">{{ cardData.content }}</p>
    </div>
  </div>
</template>

<script>
export default {
    name: 'CardNews',
    props: {
      cardData: Object,
    }
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/style';

  .container-card {
    width: 360px;
    height: 360px;
    margin: .5rem .5rem;
    position: relative;
    overflow: hidden;
    border-radius: .5rem;
    &:hover {
      cursor: pointer;
    }
    &:hover .show {
      display: inline;
    }
    img {
      position: absolute;
      width: 100%;
      filter: brightness(50%);
    }
    
    .container-content {
      height: 100%;
      margin: 0 2rem;

      position: absolute;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      text-align: center;

      .container-info {
        margin-top: 1rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: white;
      }

      h4 {
        margin-top: auto;
        margin-bottom: 2rem;
        color: white;
        font-size: 22px;
      }
      p {
        margin-bottom: 2rem;
        color: white;
      }
    }
    .show {
      display: none;
    }
  }
</style>