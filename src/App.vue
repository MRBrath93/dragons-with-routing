<script setup>
import {ref} from "vue";
import { RouterView } from "vue-router";
import { RouterLink } from "vue-router";


import dragonData from "@/assets/js/dragons.js";
import TheHeader from "./components/TheHeader.vue";
const dragons = ref(dragonData);




// 12. Men...det er da lidt dumt at vi skal hardcode hver eneste drage...vi skal have gang i dynamisk routing. Se dagens video eller læs op på de her to steder: https://router.vuejs.org/guide/essentials/dynamic-matching.html & https://router.vuejs.org/guide/advanced/composition-api.html Prøv at se et eksempel på hvordan det kunne se ud: https://youtu.be/ZgDwze7ed1k

// 12.1 Opdatér routeren så den sender alle url'er med /dragon/12 og /dragon/BLAH over til SingleDragonView

// 12.2 I SingleDragonView skal vi nu fange id'et fra urlen og vise den rigtige drage - ikke bare den første som vi gjorde før

// 12.3 Nu mangler vi bare at opdatere navigationen i App.vue - prøv det

// 12.4 Kan vi gøre det bedre? Er det en pæn navigation? Hvad med at de enkelte "dragon cards" i HomeView fungerer som links? Do it og slet de dumme 20 links i nav!
</script>

<template>
 <TheHeader></TheHeader>
 <nav>
      <router-link class="atab" to="/" >Forside</router-link>
      <router-link class="atab" to="/contact" >Kontakt</router-link>
  </nav>
  <main>
    <router-view :dragons = "dragons">
      
    </router-view>
    </main>
</template>

<style scoped>

span {
  color: crimson;
}

main {
  width: fit-content;
  margin: 1rem auto;
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  box-shadow: 0 0 3px 2px rgba(0, 0, 0, 0.3);
  padding: 1rem;
  border-radius: 6px;
}

nav {
  display: flex;
  justify-content: center;
}

a {
  color: red;
  text-decoration: none;
  display: block;
  padding: 1rem;
  transition: all 0.3s;
}

a:hover {
  background: #ddd;
}

.atab{
  background-color: rgb(50, 50, 50);
}


</style>
