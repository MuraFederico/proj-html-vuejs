<template>
  <section id="section-contact">
    <div class="container">
      <div class="left-side">
        <h5>SEND A MESSAGE</h5>
        <h2>Get in <span class="overlay">Touch</span></h2>
        <p>We will respond to your message as soon as possible.</p>
        <form @submit.prevent="" action="">
          <div class="container-input">
            <input placeholder="Name" type="text">
            <input placeholder="Email" type="email">
            <input placeholder="Phone" type="tel">
            <select name="info" id="info">
              <option value="" disabled selected hidden>More Info</option>
              <option value="">IDK</option>
            </select>
          </div>
          <textarea placeholder="Message" name="" id="" cols="30" rows="5"></textarea>
          <button class="btn-send">SEND</button>
        </form>
      </div>
      <div class="right-side">
        <h2>Example Inc.</h2>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
        <p>Sunt harum veritatis nam, iure obcaecati modi nisi quibusdam.</p>
        <ul>
          <li><span class="container-icon">
            <font-awesome-icon class="icon" icon="fa-solid fa-phone" /></span> 
            <a href="#">+1 (305) 1234-5678</a>
          </li>
          <li>
            <span class="container-icon"><font-awesome-icon class="icon" icon="fa-solid fa-envelope" /></span> 
            <a href="#">hello@example.com</a>
          </li>
          <li>
            <span class="container-icon"><font-awesome-icon class="icon" icon="fa-solid fa-location-dot" /></span> 
            <a target="_blank" href="https://www.google.com/maps/place/Cala+Mariolu/@40.1268161,9.6796839,14.5z/data=!4m13!1m7!3m6!1s0x12de5a57bb086adf:0xf82e71d83aa551d8!2sCala+Goloritz%C3%A9!3b1!8m2!3d40.1084992!4d9.6893168!3m4!1s0x12de5b5bbf8d6b7b:0x1b2926e3f1e63638!8m2!3d40.1238999!4d9.6758088">Main Avenue, 987</a>
          </li>
        </ul>
        <a target="_blank" href="https://www.google.com/maps/place/Cala+Mariolu/@40.1268161,9.6796839,14.5z/data=!4m13!1m7!3m6!1s0x12de5a57bb086adf:0xf82e71d83aa551d8!2sCala+Goloritz%C3%A9!3b1!8m2!3d40.1084992!4d9.6893168!3m4!1s0x12de5b5bbf8d6b7b:0x1b2926e3f1e63638!8m2!3d40.1238999!4d9.6758088" class="btn-map">VIEW MAP</a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
    name: 'SectionContact',
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/style';

  .container {
    width: 60%;
    margin: 0 auto;
    padding: 7rem 0;
    display: flex;
  }

  .left-side {
    width: 70%;
    padding-right: 2rem;
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
      margin-bottom: 3rem;
      color: $title-color;
      font-size: 18px;
    }
  }

  .container-input {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;

    input,
    select,
    option {
      width: 49%;
      padding: 1rem;
      margin: .7rem 0;
      background-color: $light-bg;
      border: transparent;
      border-radius: .3rem;
      font-size: 18px;

      &:focus{
        outline: none;
        border:2px solid $secondary-hover;
        border-radius: .3rem;
      }
    }
  }

  textarea {
    width: 100%;
    padding: 1rem;
    margin-bottom: 2rem;
    background-color: $light-bg;
    border: transparent;
    border-radius: .3rem;
    font-size: 18px;
    resize: none;

    &:focus{
      outline: none;
      border:2px solid $secondary-hover;
      border-radius: .3rem;
    }
  }

  .btn-send {
    @include btn-full
  }

  .right-side {
    padding-left: 2rem;
    h2 {
      margin-bottom: 1rem;
      color: $title-color;
      font-weight: 600;
    }

    p {
      margin-bottom: 1.5rem;
      color: $title-color;
    }

    ul {
      list-style: none;
      margin: 2rem 0;

      li {
        display: flex;
        align-items: center;
        padding-bottom: 1.5rem;

        .container-icon {
          position: relative;
          width: 45px;
          height: 45px;
          padding: .5rem;
          margin-right: 1rem;
          display: inline-block;
          border-radius: 100px;
          overflow: hidden;
          color: $secondary-color;
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
          .icon {
            position: relative;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            font-size: 20px;
          }
        }
      }
      a {
        color: $secondary-color;
        font-size: 20px;
        font-weight: 200;
        text-decoration: none;

        &:hover {
          text-decoration: underline;
        }
      }
    }

    .btn-map {
      @include btn-empty-light
    }
  }
</style>