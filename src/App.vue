<template>
    <Navbar />
    <router-view />
</template>

<script>
import Navbar from "./components/Navbar.vue";
export default {
    components: {
        Navbar,
    },
};
</script>

<style lang="css">
@import url("https://fonts.googleapis.com/css2?family=Yusei+Magic&display=swap");
body {
    padding: 0 20px;
    font-family: "Yusei Magic", sans-serif;
    background-color: #dfe4ea;
}
p,
h1,
h2,
h3,
a,
ul {
    margin: 0;
    padding: 0;
}

h2 {
    margin-bottom: 40px;
}

h3 {
    text-transform: capitalize;
    margin-bottom: 8px;
}
</style>
