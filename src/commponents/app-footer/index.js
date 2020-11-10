import React, { Fragment, memo } from 'react'

import { footerLinks, footerImages} from "@/common/local-data"
import {
  FooterWrapper,
  FooterLeft,
  FooterRight
} from "./style"
export default memo(function HAppFooter() {
  return (
    <FooterWrapper>
      <div className="wrap-v2 content">
        <FooterLeft className="left">
          <div className="link">
         {
           footerLinks.map(item => {
             {/* <Fragment></Fragment>是为了让JSX在返回节点信息时，产生不必要的节点。其语法糖<></> */}
             return (
               <Fragment key={item.title}>
                 <a href={item.link} target="_blank" rel="noopener noreferrer">{item.title}</a>
                 <span className="line">|</span>
               </Fragment>
             )
           })
         }
         </div>
         <div className="copyright">
           <span>网易公司版权所有@1997-2020</span>
           <span>
             杭州乐读科技有限公司运营：
             <a href="https://p1.music.126.net/Mos9LTpl6kYt6YTutA6gjg==/109951164248627501.png" rel="noopener noreferrer" target="_blank">浙网文[2018]3506-263号</a>
           </span>           
         </div>
         <div className="report">
          <span>违法和不良信息举报电话：0571-89853516</span>
          <span>
            举报邮箱：
            {/* 当使用target="_blank"，用户会跳转到新的页面，此时恶意用户可以使用window.opener,从父页面获取相关信息，对用户来说非常不利，
              可以使用rel="noopener noreferrer"此时获取window.opener的值时会为空，可以帮助防止钓鱼网站 */}
            <a href="mailto:ncm5990@163.com" target="_blank" rel="noopener noreferrer">ncm5990@163.com</a>
          </span>
         </div>

         <div className="info">
           <span>粤B2-20090191-18</span>
           <a href="http://www.beian.miit.gov.cn/publish/query/indexFirst.action" rel="noopener noreferrer" target="_blank">
           工业和信息化部备案管理系统网站
           </a>
         </div>
        </FooterLeft>
        <FooterRight className="right">
        
          {
            footerImages.map((item,index) => {
              return (
                <li className="item" key={item.link}>
                  <a className="link" href={item.link} rel="noopener noreferrer" target="_blank"> </a>
                  <span className="title">{item.title}</span>
                </li>
              )
            })
          }
        
        </FooterRight>
      </div>
    </FooterWrapper>
  )
})
