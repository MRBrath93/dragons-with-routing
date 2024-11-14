<script setup>
import { RouterLink } from 'vue-router';
const props = defineProps({
    dragons: Array,
});

</script>

<template>
    <h1>Velkommen til min homeview-side</h1>
    <section class="dragons">
        <router-link class="newtab" v-for="dragon in props.dragons" :key="dragon.id" :dragon="dragon" :to="`/singledragon/${dragon.id}`">
            <article>
                <h2 class="name">{{dragon.name}}</h2>
                <img :src="dragon.img_url" :alt="dragon.name">
                <p class="skills">{{dragon.Skills}}</p>
            </article>
        </router-link>
    </section>
</template>

<style scoped>
article{
    box-shadow: 0 0 3px 1px rgb(0, 0, 0, .2);
    border-radius: 6px;
    padding: 10px;
    width: 400px;
}

img{
    height: 300px;
    width: 100%;
    object-fit: contain;
}

section{
    grid-column: 1/-1;
    display: grid;
    grid-template-columns: repeat(3,1fr);
    gap: 1rem
}

.newtab{
    text-decoration: none;
    color: black;
}

.newtab:hover{
    color: red;
}
</style>