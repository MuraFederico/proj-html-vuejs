<template>
  <section id="section-services">
    <div class="container">
      <h5>OUR BUSINESS AREAS</h5>
      <h2><span>Exellence in </span> <span class="overlay"> Services</span></h2>
      <div class="container-content">
        <p>We are leaders in providing consultancy services with a set of cutting-edge technologies and a team of experienced and renowed professionals. These are some options that you can hire.</p>
        <a href="#" class="btn">SEE ALL</a>
      </div>
      <div class="container-cards">
        <card-description v-for="card in arrCards" :key="card.title"
        :cardData="card"
        theme="dark"
        :btnTitle="card.btnTitle"
        />
      </div>
    </div>

  </section>
</template>

<script>
import CardDescription from './CardDescription.vue'

export default {
    name: 'SectionServices',
    components: {
      CardDescription,
    },
    data() {
      return {
        arrCards: [
          {
            icon: 'fa-solid fa-network-wired',
            title: 'Audit & Assurance',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            btnTitle: 'READ MORE',
          },
          {
            icon: 'fa-solid fa-briefcase',
            title: 'Financial Advisory',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            btnTitle: 'READ MORE',
          },
          {
            icon: 'fa-solid fa-chart-simple',
            title: 'Analytics and M&A',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            btnTitle: 'READ MORE',
          },
          {
            icon: 'fa-solid fa-plane-up',
            title: 'Middle Marketing',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            btnTitle: 'READ MORE',
          },
          {
            icon: 'fa-solid fa-scale-balanced',
            title: 'Legal Consulting',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            btnTitle: 'READ MORE',
          },
          {
            icon: 'fa-solid fa-inbox',
            title: 'Regulatory Risks',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            btnTitle: 'READ MORE',
          },
        ]
      }
    }
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/style';

  #section-services {
    padding: 7rem 0;
    background-color: $dark-bg;
    color: white;

    .container {
      width: 60%;
      margin: 0 auto;
      
    }

    h5 {
      @include section-title;
    }

    .container-content {
      margin-bottom: 3rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    h2 {
      margin: 1.5rem 0;
      font-size: 42px;
      .overlay {
        position: relative;
        padding: 0 .3em;
        
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
      width: 75%;
    }
    .btn {
      @include btn-empty-dark
    }

    .container-cards {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-evenly;
    }
  }
</style>