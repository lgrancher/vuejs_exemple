<template>
  <div class="produit">
    <h1>{{ produit | capitalize }} {{ compteur }}</h1>
  </div>
</template>

<script>
import '../filters/CapitalizeFilter';

export default {
  name: 'Produit',
  data() {
      return {
          compteur: '',
          produit: 'produit'
      }
  },
  created() {
      this.compteur = this.$route.params.compteur;
  }
}
</script>

<style scoped>
    .produit {
        color: #ff0000;
    }
</style>

