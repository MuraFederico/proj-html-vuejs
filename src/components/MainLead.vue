<template>
  <main>
      <section-description/>
      <section-company />
      <section-services />
  </main>
</template>

<script>
import SectionDescription from './SectionDescription.vue';
import SectionCompany from './SectionCompany.vue';
import SectionServices from './SectionServices.vue';



export default {
    name: 'MainLead',
    components: {
        SectionDescription,
        SectionCompany,
        SectionServices,
    }
}
</script>

<style lang="scss" scoped>

</style>