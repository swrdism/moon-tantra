import { createRouter, createWebHashHistory } from "vue-router";
import routes from "./routes";
 
const router = createRouter({
  history: createWebHashHistory('/moon-tantra'),
  routes: routes,
});
 
router.beforeEach((to, from, next) => {
  next();
});
 
router.afterEach((to, from) => {
  const _title = to.meta.title;
  if (_title) {
    window.document.title = _title;
  }
});
 
export default router;