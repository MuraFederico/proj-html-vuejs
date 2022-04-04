<template>
  <div class="card-content" :class="cardData.isPopular ? 'bigger-card' : ''">
    <span v-if="cardData.isPopular" class="most-popular">
      Most Popular
    </span>
    <font-awesome-icon class="show" icon="fa-solid fa-arrow-right" />
    <font-awesome-icon class="icon" :icon="cardData.icon" />
    <h2>{{ cardData.title }}</h2>
    <div class="container-price">$ <span class="price">{{ cardData.price }}</span>/mo</div>
    <ul>
      <li v-for="benefit in cardData.arrBenefits" :key="benefit.benefit">
        <span class="benefit">{{ benefit.benefit }}</span>
        <font-awesome-icon class="check" v-if="benefit.isIncluded" icon="fa-solid fa-check" />
        <font-awesome-icon class="check" v-else icon="fa-solid fa-xmark" />
      </li>
    </ul>
  </div>
</template>

<script>

export default {
    name: 'CardPrice',
    props: {
      cardData: Object,
    }
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/style';

  .card-content {
    margin: 0 1rem;
    padding: 3rem;
    position: relative;
    flex-grow: 1;
    background-color: white;
    border-radius: .7rem;

    .most-popular {
      width: 90px;
      padding: .5rem;
      position: absolute;
      top: 10px;
      left: 0;
      background-color: $secondary-hover;
      border-top-right-radius: 100px;
      border-bottom-right-radius: 100px;
      color: white;
      font-weight: 600;
      text-align: left;
      line-height: 1rem;
    }

    .icon {
      color: $secondary-hover;
      font-size: 46px;
    }

    h2 {
      margin: 1rem 0;
      color: $title-color;
      font-weight: 600;
    }

    .container-price {
      margin-bottom: 1rem;
      color: $secondary-color;
      font-size: 24px;
    }
    .price {
      font-size: 40px;
      font-weight: 600;
    }

    ul {
      list-style: none;
      text-align: left;
      li {
        margin: 1.5rem 0;
        display: flex;
        justify-content: space-between;
        color: $title-color;
        
      }
      .check {
        color: $secondary-hover;
        font-size: 20px;
      }
    }

    &:hover .show {
      visibility: visible;
    }
  }
  
  .bigger-card {
    padding-bottom: 5rem;
  }

  .show {
    position: absolute;
    top: 20px;
    right: 1.5rem;
    color: $secondary-hover;
    font-size: 30px;
    visibility: hidden;
  }
</style>