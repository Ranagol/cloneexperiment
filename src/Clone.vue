<template>
  <div>
    <h3>(Clone.vue)</h3>
    <input v-model="name" type="text">
    <p>Name: {{ name }}</p>
    <input v-model="age" type="text">
    <p>Age: {{ age }}</p>
    <p v-show="ride">Look, I am riding a bicycle!</p>
    <p v-show="!ride">I am not doing anything</p>
    <button @click="ride = true" class="btn btn-info">Ride a bicycle</button>
    <button @click="ride = false" class="btn btn-danger">Stop riding a bicycle</button>
    <button @click="age++" class="btn btn-info">Increase age</button>
    <button @click="age--" class="btn btn-danger">Decrease age</button>
  </div>
</template>

<script>
export default {
  data: function(){
    return {
      name: 'name of the clone',
      age: 20,
      behaviour: 'doing nothing',
      ride: false

    }
  }
}

</script>

<style>
</style>