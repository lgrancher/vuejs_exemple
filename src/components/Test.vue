<template>
  <div>
    input dans le composant enfant : <input v-model="donnees.donnee2"> 
    <button @click="displayTest(donnees.donnee2)" type="button">Test !</button>
  </div>
</template>

<script>
export default {
  name: 'Test',
  props:['donnees', 'displayTest']
}
</script>