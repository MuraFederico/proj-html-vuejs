<template>
  <section id="section-mails">
    <div class="container">
      <div class="left-side">
        <h5>NEWSLETTER</h5>
        <h2><span class="overlay">Know</span> First</h2>
        <p>Follow closely and recive content about our company and the news of the current market.</p>
      </div>
      <div class="right-side">
        <form @submit.prevent="" action="">
          <input placeholder="Name" type="text">
          <input placeholder="Email" type="text">
          <button class="btn">SUBSCRIBE</button>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
export default {
    name: 'SectionMails',
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/style';

  #section-mails {
    padding: 7rem;
    background-image: url('../assets/img/bg-1.jpg');
    background-position: center;
  }

  .container {
    width: 60%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
  }

  .left-side {
    width: 50%;
    padding: 0 2rem;
    h5 {
      @include section-title
    }

    h2 {
      margin: 1.5rem 0;
      color: white;
      font-size: 50px;

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
          opacity: .3;
        }
      }
    }

    p {
      color: white;
    }
  }
  .right-side {
    width: 50%;
    padding: 0 2rem;
  }
  form {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    input {
      width: 100%;
      padding: 1rem;
      margin-bottom: 1.5rem;
      opacity: .5;
      border: transparent;
      border-radius: .5rem;
      font-size: 18px;

      &:focus{
        outline: none;
        border:2px solid $secondary-hover;
        border-radius: .5rem;
      }
    }

    .btn {
      @include btn-full
    }
  }

</style>