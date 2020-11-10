import React from "react"
import { Redirect } from "react-router-dom";

//使用路由懒加载
const HDiscover = React.lazy(() => import("@/pages/discover"))
const HRecommend = React.lazy(_ => import("../pages/discover/c-pages/recommend"))
const HRanking = React.lazy(_ => import("../pages/discover/c-pages/ranking"))
const HSongs = React.lazy(_ => import("../pages/discover/c-pages/songs"))
const HDjradio = React.lazy(_ => import("../pages/discover/c-pages/djradio"))
const HArtist = React.lazy(_ => import("../pages/discover/c-pages/artist"))
const HAlbum = React.lazy(_ => import("../pages/discover/c-pages/album"))
const HPlayer = React.lazy(_ => import("../pages/player"))
const HMine = React.lazy(_ => import("@/pages/mine"))
const HFriend = React.lazy(_ => import("@/pages/friend"))




// import HDiscover from "@/pages/discover";
// import HRecommend from "../pages/discover/c-pages/recommend";
// import HRanking from "../pages/discover/c-pages/ranking";
// import HSongs from "../pages/discover/c-pages/songs";
// import HDjradio from "../pages/discover/c-pages/djradio";
// import HArtist from "../pages/discover/c-pages/artist";
// import HAlbum from "../pages/discover/c-pages/album";
// import HPlayer from "../pages/player"

// import HMine from "@/pages/mine";
// import HFriend from "@/pages/friend";


const routes = [
  {
    path:"/",
    exact:true,
    render: () => (
      <Redirect to="/discover"/>
    )
  },
  {
    path:"/discover",
    component:HDiscover,
    routes: [
      {
        path: "/discover",
        exact: true,
        render: () => (
          <Redirect to="/discover/recommend"/>
        )
      },
      {
        path: "/discover/recommend",
        component: HRecommend
      },
      {
        path: "/discover/ranking",
        component: HRanking
      },
      {
        path: "/discover/songs",
        component: HSongs
      },
      {
        path: "/discover/djradio",
        exact: true,
        component: HDjradio
      },
      {
        path: "/discover/artist",
        component: HArtist
      },
      {
        path: "/discover/album",
        component: HAlbum
      },
      {
        path:"/discover/player",
        component: HPlayer
      }
    ]
  },
  {
    path:"/mine",
    component:HMine
  },
  {
    path:"/friend",
    component:HFriend
  },
  
];

export default routes;