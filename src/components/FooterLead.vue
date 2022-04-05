<template>
  <footer>
    <div class="container">
      <div class="contact-info">
        <div class="logo">
          <span class="overlay">N E X</span>
          <span>G E N</span>
        </div>
        <p>A Functional HTML Template for Corporate & Business.</p>
        <ul>
          <li>
            <font-awesome-icon class="icon" icon="fa-solid fa-phone" />
            <a href="#">+1 (305) 1234-5678</a>
          </li>
          <li>
            <font-awesome-icon class="icon" icon="fa-solid fa-envelope" />
            <a href="#">hello@example.com</a>
          </li>
          <li>
            <font-awesome-icon class="icon" icon="fa-solid fa-location-dot" />
            <a target="_blank" href="https://www.google.com/maps/place/Cala+Mariolu/@40.1268161,9.6796839,14.5z/data=!4m13!1m7!3m6!1s0x12de5a57bb086adf:0xf82e71d83aa551d8!2sCala+Goloritz%C3%A9!3b1!8m2!3d40.1084992!4d9.6893168!3m4!1s0x12de5b5bbf8d6b7b:0x1b2926e3f1e63638!8m2!3d40.1238999!4d9.6758088">Main Avenue, 987</a>
          </li>
        </ul>
        <a href="#section-contact" class="btn">GET IN TOUCH</a>
      </div>
      <card-links v-for="card in arrCardLinks" :key="card.title"
      :cardData="card"
      />
    </div>
    <div class="credits">
      <div class="container-credits">
        <span>Enjoy the low price. We are tracking any intention of piracy.</span>
        <span>&COPY; 2022 BOOLGEN is Proudly Powered by <a target="_blank" href="https://github.com/MuraFederico">Mura Federico</a>.</span>
      </div>
    </div>
    
  </footer>
</template>

<script>
import CardLinks from './CardLinks.vue';

export default {
    name: 'FooterLead',
    components: {
      CardLinks,
    },
    data() {
      return {
        arrCardLinks: [
          {
            title: 'About',
            arrLinks: [
              'The Company',
              'Institutional',
              'Social & Events',
              'Innovation',
              'Enviroment',
              'Technology',
            ]
          },
          {
            title: 'Services',
            arrLinks: [
              'Audit & Assurance',
              'Financial Advisory',
              'Analytics M&A',
              'Middle Marketing',
              'Legal Consulting',
              'Regulatory Risks',
            ]
          },
          {
            title: 'Support',
            arrLinks: [
              'Responsability',
              'Terms of Use',
              'Aboout Cookies',
              'Privacy Policy',
              'Accessibility',
              'Infomration',
            ]
          },
        ]
      }
    }
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/style.scss';

  footer {
    background-color: $dark-bg;
  }

  .container {
    width: 60%;
    margin: 0 auto;
    padding: 7rem 0;
    display: flex;
  }

  .logo {
    font-size: 26px;
    font-weight: 600;
}

  .overlay {
    position: relative;
    padding: .5rem 0rem .5rem 1.5rem;
    color: #39c4c6;

    &::before {
      content: "";
      position: absolute;
      top: 0px;
      right: 0px;
      bottom: 0px;
      left: 0px;
      background-color: $secondary-color;
      border-radius: 100px 0 0 100px;
      opacity: 0.2;
    }
  }

  .contact-info {
    width: calc(100% / 4);
    p {
      margin: 2rem 0;
      color: white;
    }

    ul {
      margin-bottom: 3rem;
      list-style: none;

      li {
        display: flex;
        margin-bottom: 1rem;
        color: white;
        font-size: 18px;

        .icon {
          margin-right: 1rem;
        }

        a {
          color: white;
          text-decoration: none;
        }

        &:hover,
        &:hover a {
          color: $secondary-hover;
        }
      }
    }

    .btn {
      @include btn-empty-dark
    }
  }

  .credits {
    background-color: #0d0d11;
  }

  .container-credits {
    width: 60%;
    margin: 0 auto;
    padding: 2rem 0;
    display: flex;
    justify-content: space-between;
    color: white;
    font-size: 14px;

    a {
      color: $secondary-hover;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
  }

  
</style>