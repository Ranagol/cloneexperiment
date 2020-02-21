<template>
  <div>
    <h3>(Multiplier.vue)</h3>
    <clone v-for="n in 3"></clone>

    
  </div>
</template>

<script>
 import Clone from './Clone.vue';

 export default {
   components: {
     'clone': Clone,
   }
 }

</script>

<style>
</style>