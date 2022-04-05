<template>
  <div class="container-card">
    <h2>{{ cardData.title }}</h2>
    <ul>
      <li v-for="link in cardData.arrLinks" :key="link">
        <font-awesome-icon icon="fa-solid fa-chevron-right" />
        <a href="">{{ link }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
    name: 'CardLinks',
    props: {
      cardData: Object,
    }
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/style.scss';

  .container-card {
    width: 260px;
    padding: 2rem;
    margin: 0 1rem;
    background-color: #19191f;
    border-radius: .5rem;
  }

  h2 {
    margin-bottom: 2rem;
    color: white;
    font-weight: 600;
  }

  ul {
    list-style: none;

    li {
      margin-bottom: .5rem;
      color: white;
      font-size: 18px;

      a {
        margin-left: .5rem;
        color: white;
        text-decoration: none;
      }

      &:hover,
      &:hover a {
        color: $secondary-hover;
      }
    }
  }
</style>