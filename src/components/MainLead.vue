<template>
  <main>
      <selection-description/>
      <selection-company />
  </main>
</template>

<script>
import SelectionDescription from './SectionDescription.vue';
import SelectionCompany from './SectionCompany.vue';


export default {
    name: 'MainLead',
    components: {
        SelectionDescription,
        SelectionCompany
    }
}
</script>

<style lang="scss" scoped>

</style>