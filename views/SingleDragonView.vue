<script setup>
import { useRoute } from 'vue-router';
const props = defineProps({
    dragons: Array,
});

const route = useRoute();

const ThisDragon = props.dragons.find(dragon => dragon.id == route.params.id)
</script>
<template>
    <article>
            <h1 class="name">{{ThisDragon.name}}</h1>
            <img :src="ThisDragon.img_url" :alt="ThisDragon.name">
            <p class="skills">{{ThisDragon.Skills}}</p>
            <p class="senses">{{ThisDragon.Senses }}</p>
            <p class="Languages">{{ThisDragon.Languages}}</p>
    </article>
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
</style>