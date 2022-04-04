<template>
  <main>
      <section-description />
      <section-company />
      <section-services />
      <section-prices />
  </main>
</template>

<script>
import SectionDescription from './SectionDescription.vue';
import SectionCompany from './SectionCompany.vue';
import SectionServices from './SectionServices.vue';
import SectionPrices from './SectionPrices.vue';




export default {
    name: 'MainLead',
    components: {
        SectionDescription,
        SectionCompany,
        SectionServices,
        SectionPrices,
    }
}
</script>

<style lang="scss" scoped>

</style>