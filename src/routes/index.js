import { createRouter, createWebHistory } from "vue-router";
import Home from "./Home";
import MovieDetails from "./MovieDetails";
import NotFound from "./NotFound";

export default createRouter({
  history: createWebHistory(),
  scrollBehavior: () => ({ top: 0 }),
  routes: [
    {
      path: "/",
      component: Home,
    },
    {
      path: "/details",
      component: MovieDetails,
    },
    {
      path: "/:notFound(.*)",
      component: NotFound,
    },
  ],
});
