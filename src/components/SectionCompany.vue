<template>
  <section id="section-company">
    <div class="svg-up"></div>
    <div class="content">
      <div class="section-title">
        <h5>ABOUT THE NETWORK</h5>
        <div class="container-title">
          <h2>
           <span class="overlay">The</span> <span>Company</span>
          </h2>
        </div>
        <p>For 12 years we have been providing audit and warranty, financial advice, risk advice, taxes and related services to select clients.</p> 
      </div>
      <div class="container-cards">
        <card-company v-for="card in arrCards" :key="card.title"
        :CardData="card"
        />
      </div>
    </div>
    <div class="container-img">
      <img src="../assets/img/about-3.jpg" alt="">
    </div>
  </section>
</template>

<script>
import CardCompany from './CardCompany.vue'

export default {
    name: 'SectionCompany',
    components: {
      CardCompany,
    },
    data() {
      return {
        arrCards: [
          {
            icon: 'fa-solid fa-award',
            title: 'Tradition',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
          },
          {
            icon: 'fa-solid fa-lock',
            title: 'Security',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
          },
          {
            icon: 'fa-regular fa-pen-to-square',
            title: 'Certificate',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
          },
          {
            icon: 'fa-solid fa-graduation-cap',
            title: 'Expertise',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
          },
        ]
      }
    }
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/style';

  #section-company {
    display: flex;
    justify-content: flex-end;
    position: relative;
    
    &::after {
      content: url('../assets/img/dotted-grid.svg');
      width: 150px;
      position: absolute;
      top: -30px;
      left: 50%;
      transform: translateX(-50%);
      z-index: 1000;
    }
    &::before {
      content: url('../assets/img/dotted-grid.svg');
      width: 150px;
      position: absolute;
      bottom: -30px;
      left: 50%;
      transform: translateX(-50%);
      z-index: 1000;
    }
  }

  .content {
    width: 30%;
    margin-right: 2rem;
    align-self: center;
  }

  .section-title {
    .container-title {
      padding: .5rem 0;
    }
    h5 {
      @include section-title;
    }
    h2 {
      color: $title-color;
      font-size: 30px;
    }
    .overlay {
      position: relative;
      padding: 0 .3em;
      color: $secondary-hover;


      &::before {
          content: '';
          position: absolute;
          top: 0px;
          right: 0px;
          bottom: 0px;
          left: 0px;
          background-color: $secondary-color;
          opacity: .15;
      }
    }
    p {
      margin-bottom: 2rem;
      color: $title-color;
      font-size: 12px;
    }
  }

  .container-cards{
    display: flex;
    flex-wrap: wrap;
  }

  .container-img {
    width: 50%;
    img {
      width: 100%;
    }
  }
</style>