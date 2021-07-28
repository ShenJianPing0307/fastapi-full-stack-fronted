import { createRouter, createWebHistory } from "vue-router";
// import Home from "../views/Home.vue";
import Layout from "../layout";
import Authors from "../views/authors";
import Books from "../views/books";
import Publishers from "../views/publishers";

const routes = [
  // {
  //   path: "/",
  //   name: "layout",
  //   component: Layout,
  // },
  {
    path: "/",
    name: "layout",
    component: Layout,
    redirect: "/authors",
    children:[
      //作者管理
      {
        path: "/authors",
        component: Authors,
      },
      //出版社管理
      {
        path: "/publishers",
        component: Publishers,
      },
      //书籍管理
      {
        path: "/books",
        component: Books,
      }
    ]
  },
  // {
  //   path: "/about",
  //   name: "About",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue"),
  // },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
