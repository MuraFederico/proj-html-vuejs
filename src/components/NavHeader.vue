<template>
  <nav>
    <div class="logo">
        <span class="overlay">N E X</span>
        <span>G E N</span>
    </div>

    <ul>
        <li v-for="link in arrLinks" :key="link.scr">
            <a :href="link.src">{{ link.title }}</a>
        </li>
        <li><a class="btn-full" href="#section-contact">GET IN TOUCH</a></li>
    </ul>    
  </nav>
</template>

<script>
export default {
    name: 'NavHeader',
    data() {
        return {
            arrLinks: [
                {
                    title: 'home',
                    src: '#section-description'
                },
                {
                    title: 'about',
                    src: '#section-company'
                },
                {
                    title: 'services',
                    src: '#section-services'
                },
                {
                    title: 'pricing',
                    src: '#section-prices'
                },
                {
                    title: 'blog',
                    src: '#section-news'
                },
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/style';

nav {
    width: 60%;
    margin: 0 auto;
    padding: 2rem 1.5rem;
    display: flex;
    justify-content: space-between;
    position: relative;
    ul {
        display: flex;
        list-style: none;
        li {
            margin: 0 1rem;
            font-size: 18px;
            font-weight: 600;
            a {
                text-decoration: none;
                text-transform: uppercase;
                color: white;

                &:hover {
                    color: $secondary-hover;
                }
            }
        }
    }
}
.btn-full {
    @include btn-full
}

.logo {
    color: white;
    font-size: 22px;
    font-weight: 600;
}

.overlay {
    position: relative;
    padding: .5rem 0rem .5rem 1.5rem;
    margin-right: .3rem;
    color: #39c4c6;
}

.overlay::before {
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
</style>