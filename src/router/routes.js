const routes = [
    {
      path: "/",
      name: "index",
      title: "最新消息",  
      component: () => import("@/views/news.vue"),
    },
    {
      path: "/tantra",
      name: "tantra",
      title: "關於譚崔",
      component: () => import("@/views/tantra.vue"),
    },
    {
      path: "/leader",
      name: "leader",
      title: "課程帶領者",
      component: () => import("@/views/leader.vue"),
    },
    {
      path: "/services/kasai",
      name: "services-kasai",
      title: "龍筋覺知按摩",
      component: () => import("@/views/services/kasai.vue"),
    },
    {
      path: "/services/kerokan",
      name: "services-kerokan",
      title: "刮痧",
      component: () => import("@/views/services/kerokan.vue"),
    },
    {
      path: "/contract",
      name: "contract",
      title: "聯絡資訊",
      component: () => import("@/views/contract.vue"),
    }
  ];
   
  export default routes;