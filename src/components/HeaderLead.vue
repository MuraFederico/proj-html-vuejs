<template>
  <header>
    <div class="container-infos">
        <div class="content-infos">
            <div class="opening">
                <span>
                    <font-awesome-icon icon="fa-solid fa-clock" />
                    <p>Open Hours: Mon - Sat - 9:00 - 18:00</p> 
                </span>
            </div>
            <div class="other-info">
                <span class="phone">
                    <font-awesome-icon icon="fa-solid fa-phone" />
                    <p>+1 (305) 1234-5678</p>                
                </span>
                <span class="mail">
                    <font-awesome-icon icon="fa-solid fa-envelope" />
                    <p>hello@example.com</p>
                </span>
                <span class="facebook">
                    <font-awesome-icon icon="fa-brands fa-facebook-f" />
                </span>
                <span class="twitter">
                    <font-awesome-icon icon="fa-brands fa-twitter" />
                </span>
                <span class="linkedin">
                    <font-awesome-icon icon="fa-brands fa-linkedin-in" />
                </span>
            </div>
        </div>
    </div>
    <div class="jumbo">
        <nav-header/>
        <div class="header-content">
            <h1>Lead ~ <span class="overlay">Customer</span></h1>
            <p>Successful strategies require data analysis, creativity and customer focus, taking advantage of the latest technologies to offer eccellent services.</p>
            <div class="container-btn">
                <a class="btn-full" href="#section-contact">GET IN TOUCH</a>
                <a class="btn-empty" href="#section-contact">READ MORE</a>
            </div>
        </div>
    </div>
  </header>
</template>

<script>
import NavHeader from './NavHeader.vue'

export default {
    name: 'HeaderLead',
    components: {
        NavHeader,
    }
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/style';

.container-infos {
    padding: .7rem;
    background-color: #24333d;
}
.content-infos {
    width: 60%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    span {
        margin: 0 .7rem;
        color: white;
        font-size: 14px;
        p {
            padding-left: .5rem;
            display: inline-block;
        }
    }
    .other-info > *:hover {
        color: $secondary-hover;
        cursor: pointer;
    }
}
.jumbo {
    position: relative;
    height: 800px;
    width: 100%;
    background-image: url('../assets/img/hero-image.png');
    background-size: cover;
    background-position: bottom;
    
    &::before {
        content: ' ';
        display: block;
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        opacity:  0.7;
        background-color: #000;    
    }
}

.header-content {
    width: 45%;
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    h1 {
        color: white;
        font-size: 70px;
        font-weight: bold;
    }
    
    .overlay {
        position: relative;
        padding: 0 .8rem;
        &::before {
            content: "";
            position: absolute;
            top: 0px;
            right: 0px;
            bottom: 0px;
            left: 0px;
            background-color: $secondary-color;
            opacity: 0.2;
        }
    }
    
    p {
        padding: 3rem 0 calc(3rem + 10px) 0;
        color: white;
        font-size: 18px;
        line-height: 1.5rem;
    }

    a {
        margin: 0 .5rem;
    }

    .btn-full {
        @include btn-full
    }
    
    .btn-empty {
        @include btn-empty-dark
    }
}
</style>