import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../../views/HomeView.vue";
import NotFound from "../components/NotFound.vue";
import ContactView from "../../views/ContactView.vue";
import SingleDragonView from "../../views/SingleDragonView.vue";

const routes = [
  { path: '/', component: HomeView, name: 'Homeview' },
  { path: '/contact', component: ContactView, name: 'Contact' },
  { path: '/singledragon/:id', component: SingleDragonView, name: 'Singledragon' },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
];

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
});



export default router;
