    <script>
    import EssayList from '../components/EssayList.vue';
    import BringEssays from '../composables/BringEssays';
    
    export default {
      name: 'Home',
      components:{
        EssayList
      },
      setup(){
        const {Essays,Errors,LoadEssayList} = BringEssays();
        LoadEssayList();
        return {Essays,Errors}
      }
    }
    </script>
<template>
  <div class="home">
    <div v-if="Errors">
      {{Errors}}
    </div>
    <div v-else-if="Essays.length">
      <EssayList :Essays="Essays" />
    </div>
    <div v-else>
      Loading...
    </div>
  </div>
</template>

