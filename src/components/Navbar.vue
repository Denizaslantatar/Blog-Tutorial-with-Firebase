<script>
export default {};
</script>
<template>
    <nav class="navbar navbar-expand-lg bg-primary">
        <div class="container-fluid">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="navbar-brand">
                        <router-link class="nav-it" :to="{name: 'Home'}">Essay List</router-link>
                    </li>
                    <li class="navbar-brand">
                        <router-link class="nav-it" :to="{name: 'AddEssay'}">Create Essay</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>
<style scoped>
.navbar {
    padding-left: 20px;
}
.nav-it {
    margin: 0 10px;
    color: rgb(234, 238, 241);
    text-decoration: none;
}
</style>
