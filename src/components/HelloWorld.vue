<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div>
      Compteur {{ compteur }} <button @click="increment">Incrémenter</button>
      <router-link v-show="compteur > 0" :to="'produit/'+compteur">Produit</router-link>
    </div><br>
    
    <form @submit.prevent="checkForm">
      input dans composant parent: <input v-model="donnees.donnee1" name="donnee1">
      <test :donnees="donnees" :displayTest="displayTest"></test>
      <button type="submit">Valider</button>
    </form>
  
  </div>
</template>

<script>
import Test from "./Test";
import router from 'vue-router'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: "HelloWorld",
  components: {
    test: Test
  },
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      donnees: {}
    };
  },
  computed: {
    ...mapGetters([
      'compteur'
    ]),
  },
  methods: {
    ...mapActions([
      'updateCompteur'
    ]),
    increment() {
      this.updateCompteur(this.compteur+1);
    },
    checkForm(submitEvent) {
      alert(JSON.stringify(this.donnees));
    },
    displayTest(value) {
      alert("test " + value);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

