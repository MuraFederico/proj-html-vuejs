<template>
  <main>
      <section-description />
      <section-company />
      <section-services />
      <section-prices />
      <section-news />
      <section-mails />
  </main>
</template>

<script>
import SectionDescription from './SectionDescription.vue';
import SectionCompany from './SectionCompany.vue';
import SectionServices from './SectionServices.vue';
import SectionPrices from './SectionPrices.vue';
import SectionNews from './SectionNews.vue';
import SectionMails from './SectionMails.vue';






export default {
    name: 'MainLead',
    components: {
        SectionDescription,
        SectionCompany,
        SectionServices,
        SectionPrices,
        SectionNews,
        SectionMails,
    }
}
</script>

<style lang="scss" scoped>

</style>