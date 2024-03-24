<script>
    export default {
        props:['essay']
}
</script>
<template>
<div class="essay">
    <router-link :to="{name:'EssayDetail', params:{id:essay.id}}">
        <h3>{{essay.Title}}</h3>
    </router-link>
</div>
</template>
<style>
.essay a{
    display: block;
    margin:40px 0;
    padding: 20px;
    border-left: 6px solid #eb4d4b;
    cursor: pointer;
}
.essay a:hover h3{
    color:#eb4d4b
}
</style>