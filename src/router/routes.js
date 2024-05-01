const routes = [
    {
      path: "/",
      name: "index",
      title: "最新消息",  
      component: () => import("@/views/News.vue"),
    },
    {
      path: "/price",
      name: "price",
      title: "價目表",  
      component: () => import("@/views/Price.vue"),
    },
    {
      path: "/tantra",
      name: "tantra",
      title: "關於譚崔",
      component: () => import("@/views/Tantra.vue"),
    },
    {
      path: "/leader",
      name: "leader",
      title: "課程帶領者",
      component: () => import("@/views/Leader.vue"),
    },
    {
      path: "/services/long-gin",
      name: "services-longGin",
      title: "龍筋覺知按摩",
      component: () => import("@/views/services/LongGin.vue"),
    },
    {
      path: "/services/gua-sha",
      name: "services-guaSha",
      title: "刮痧",
      component: () => import("@/views/services/GuaSha.vue"),
    },
    {
      path: "/contract",
      name: "contract",
      title: "聯絡資訊",
      component: () => import("@/views/Contract.vue"),
    }
  ];
   
  export default routes;