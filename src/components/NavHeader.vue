<template>
  <nav>
    <div class="logo">
        <span>NEX</span>
        <span>GEN</span>
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
            margin: 0 .5rem;
            a {
                text-decoration: none;
                text-transform: uppercase;
                color: white;
            }
        }
    }
}
.btn-full {
    @include btn-full
}
</style>