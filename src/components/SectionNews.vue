<template>
  <section id="section-news">
    <div class="container">
      <h5>OUR EDITORIAL CONTENT</h5>
      <h2>Latest <span class="overlay">News</span></h2>
      <div class="container-content">
        <p>Every week we publish content about what is best in the business world</p>
        <button class="btn">SEE ALL</button>
      </div>
      <div class="container-cards">
        <card-news v-for="card in arrCards" :key="card.title"
        :cardData="card"
        />
      </div>
    </div>
  </section>
</template>

<script>
import CardNews from './CardNews.vue'

export default {
    name: 'SectionNews',
    components: {
      CardNews,
    },
    data() {
      return {
        arrCards: [
          {
            author: 'Andrea Miller',
            image: 'news-1.jpg',
            date: '2 Days Ago',
            title: 'Increasing creativity is possible for everyone',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
          },
          {
            author: 'Andrea Miller',
            image: 'news-2.jpg',
            date: '2 Days Ago',
            title: 'Because market research is part of the business plan',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
          },
          {
            author: 'Andrea Miller',
            image: 'news-3.jpg',
            date: '2 Days Ago',
            title: 'Working from home is now a trend',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
          },
        ]
      }
    }
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/style';

  #section-news {
    padding: 7rem 0;
  }
  .container {
    width: 60%;
    margin: 0 auto;

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

    .container-content {
      margin-bottom: 3rem;
      display: flex;
      justify-content: space-between;
      align-items: center;

      p{
        color: $title-color;
        font-size: 18px;
      }

      .btn {
        @include btn-full
      }
    }
    .container-cards {
      display: flex;
      justify-content: space-around;
    }
  }

</style>