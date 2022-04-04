<template>
  <section id="section-prices">
    <div class="container">
      <h5>MONTHLY PLANS</h5>
      <h2><span class="overlay">Pricing</span> Table</h2>
      <p>We can help you deliver and execute your future, wherever you compete, using the latest technologies, from strategy develpoment to implementation.</p>
      <div class="container-cards">
        <card-price v-for="card in arrCards" :key="card.title"
        :cardData="card"
        />
      </div>  
    </div>
  </section>
</template>

<script>
import CardPrice from './CardPrice.vue'

export default {
    name: 'SectionPrices',
    components: {
      CardPrice,
    },
    data() {
      return {
        arrCards: [
          {
            isPopular: false,
            icon: 'fa-solid fa-rocket',
            title: 'Standard',
            price: '490',
            arrBenefits: [
              {
                benefit: 'Standard Accounting',
                isIncluded: true,
              },
              {
                benefit: 'Platform Access',
                isIncluded: true,
              },
              {
                benefit: 'Business Orientation',
                isIncluded: false,
              },
              {
                benefit: 'Dedicated Consultant',
                isIncluded: false,
              },
              {
                benefit: 'Personal Assistance',
                isIncluded: false,
              },
            ]
          },
           {
            isPopular: true,
            icon: 'fa-solid fa-briefcase',
            title: 'Professional',
            price: '890',
            arrBenefits: [
              {
                benefit: 'Standard Accounting',
                isIncluded: true,
              },
              {
                benefit: 'Platform Access',
                isIncluded: true,
              },
              {
                benefit: 'Business Orientation',
                isIncluded: true,
              },
              {
                benefit: 'Dedicated Consultant',
                isIncluded: false,
              },
              {
                benefit: 'Personal Assistance',
                isIncluded: false,
              },
            ]
          },
           {
            isPopular: false,
            icon: 'fa-regular fa-gem',
            title: 'Ultimate',
            price: '1.390',
            arrBenefits: [
              {
                benefit: 'Standard Accounting',
                isIncluded: true,
              },
              {
                benefit: 'Platform Access',
                isIncluded: true,
              },
              {
                benefit: 'Business Orientation',
                isIncluded: true,
              },
              {
                benefit: 'Dedicated Consultant',
                isIncluded: true,
              },
              {
                benefit: 'Personal Assistance',
                isIncluded: true,
              },
            ]
          },
        ]
      }
    }
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/style';
  #section-prices {
    padding: 7rem 0;
    background-color: $light-bg;
  }

  .container {
    width: 60%;
    margin: 0 auto;
    text-align: center;

    h5 {
      @include section-title
    }

    h2 {
      margin: 1.5rem 0;
      color: $title-color;
      font-size: 50px;

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
            border-radius: .3rem;
            opacity: .15;
        }
      }
    }
    p {
      width: 70%;
      margin: 0 auto;
      margin-bottom: 3rem;
      color: $title-color;
    }
  }

  .container-cards {
    display: flex;
    align-items: center;
  }
</style>