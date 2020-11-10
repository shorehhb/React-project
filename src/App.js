//第三方的东西
import React, { memo, Suspense } from 'react'
import {renderRoutes} from "react-router-config"
import routes from "./router"
//共享store
import {Provider} from "react-redux"
import store from "./store"
//网络请求的东西

//组件的东西
import HAppHeader from "@/commponents/app-header"
import HAppFooter from "@/commponents/app-footer"
import HAppPlayerBar from "./pages/player/app-player-bar"
import { HashRouter } from 'react-router-dom'


export default memo(function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <HAppHeader/>
          <Suspense fallback={<div>页面正在相应</div>}>{renderRoutes(routes)}</Suspense> 
        <HAppFooter/>
        <HAppPlayerBar/>
      </HashRouter>
    </Provider>
    
  )
})
