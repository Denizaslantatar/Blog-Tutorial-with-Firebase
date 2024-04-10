<script>
import {db, timestamp} from "../firebase/config";
import {useRouter} from "vue-router";
import {ref} from "vue";
export default {
    setup() {
        const title = ref("");
        const content = ref("");
        const router = useRouter();
        const AddEssay = async () => {
            const essay = {
                Title: title.value,
                Content: content.value,
                CreatedDate: timestamp(),
            };
            console.log(essay);
            const res = await db
                .collection("Essays")
                .add(essay)
                .then(() => {
                    router.push({name: "Home"});
                })
                .catch((err) => {
                    console.log(err.message);
                });
        };
        return {title, content, AddEssay};
    },
};
</script>
<template>
    <div class="addEssay">
        <form @submit.prevent="AddEssay">
            <label>Essay Title:</label>
            <input type="text" id="title" v-model="title" name="title" required />
            <label>Essay Content:</label>
            <textarea type="text" id="content" v-model="content" name="content" required></textarea>
            <button class="btn btn-success">Create</button>
        </form>
    </div>
</template>
<style scoped>
.addEssay form {
    max-width: 400px;
    margin: 0 auto;
}
.addEssay input,
.addEssay textarea {
    display: block;
    width: 100%;
    margin: 10px 0;
    padding: 8px;
}
.addEssay label {
    display: block;
    margin-top: 24px;
}
textarea {
    height: 120px;
}
.addEssay button {
    margin-top: 20px;
    border-radius: 10px;
    font-size: 1.2em;
    cursor: pointer;
}
</style>
