<script>
    import Essay from './Essay.vue';
    export default {
        props:['Essays'],
        components:{Essay},
    }
</script>
<template>
<div class="essay-list">
    <div v-for="essay in Essay" :key="essay.id">
        <Essay :Essays="Essays" />
    </div>
</div>
</template>
<style>
    .essay-list {
        margin-left: 120px !important;
    }
</style>