<template>
  <div>
    <navBarComp/>
    <router-view/>
  </div>
</template>

<script>
import NavBarComp from './components/NavBarComp.vue';
export default {
  components:{
    NavBarComp
  }
}
</script>

<style>

</style>
