<script>
import {ref} from 'vue'
import {useRoute,useRouter} from 'vue-router';
import BringEssayWithId from '../composables/BringEssayWithId';
import {db} from '../firebase/config'

export default {
    setup(){
        const route = useRoute();
        const router = useRouter();
        const id = ref(route.params.id)
        const {essay,errors,LoadEssay} = BringEssayWithId(route.params.id)
        LoadEssay();
        const deleteEssay = async ()=>{
            await db.collection('Essays').doc(id).delete().then(()=>{
                router.push('/')
            })
        }
        return {essay,errors,deleteEssay}
    }
}
</script>
<template>
<h1>Essay Detail</h1>
<div v-if="errors">
    {{errors}}
</div>
<div v-if="essay" class="detail content">
    <h2><i>Makale Başlık:</i> {{essay.Title}}</h2>
    <div class="content">
        <i>Makale İçerik:</i>
        <p>{{essay.Content}}</p>
    </div>
    <div class="content">
        <i>Oluşturulma Tarihi:</i>
        <p>{{essay.CreatedDate}}</p>
    </div>
    <a class="delete" @click="deleteEssay">
        <img src="/trashcan.svg" alt="delete essay" />
    </a>
</div>
<div v-else>
    Loading...
</div>
</template>
<style>
    .detail{
        position: relative;
    }
    .content{
        margin-bottom:30px;
    }
    .delete{
        position: absolute;
        top: 0;
        right: 0;
        border-radius: 50%;
        padding: 8px;
        cursor: pointer;
    }
</style>