(this["webpackJsonpworkshop-youtube"]=this["webpackJsonpworkshop-youtube"]||[]).push([[0],{73:function(e,t,c){},74:function(e,t,c){},93:function(e,t,c){"use strict";c.r(t);var i=c(0),n=c.n(i),a=c(10),s=c.n(a),l=(c(73),c(74),c(20)),r=c(60),h=c(15),d=c(16),o=c(23),u=c(19),j=c(18),b=c(4),O=function(e){Object(u.a)(c,e);var t=Object(j.a)(c);function c(){return Object(h.a)(this,c),t.apply(this,arguments)}return Object(d.a)(c,[{key:"render",value:function(){return Object(b.jsx)("div",{className:"header",children:Object(b.jsx)("h2",{className:"headerTitle",children:"Best Trance and Other Music"})})}}]),c}(n.a.Component),m=c(53),v=c.n(m),k=function(e){Object(u.a)(c,e);var t=Object(j.a)(c);function c(e){return Object(h.a)(this,c),t.call(this,e)}return Object(d.a)(c,[{key:"render",value:function(){var e=this.props,t=e.currentItem,c=e.isFullVideo,i=void 0!==c&&c,n=e.handleClick,a=t.url,s=t.chanel,l=t.name;return Object(b.jsxs)("div",{className:"card",children:[Object(b.jsx)("div",{children:Object(b.jsx)(v.a,{controls:!0,width:"100%",height:i?"500px":"100px",url:a,light:!i,onClick:function(){n(t)}})}),Object(b.jsxs)("div",{className:"descrCard",children:[Object(b.jsxs)("h2",{className:"cardChanel",children:[" ",s,"    "]}),Object(b.jsx)("p",{className:"cardName",children:l})]})]})}}]),c}(i.Component),x=function(e){Object(u.a)(c,e);var t=Object(j.a)(c);function c(e){return Object(h.a)(this,c),t.call(this,e)}return Object(d.a)(c,[{key:"render",value:function(){var e=this.props,t=e.list,c=e.handleClick;return Object(b.jsx)("div",{children:Object(b.jsx)("div",{className:"cardList",children:t.map((function(e){return Object(b.jsx)(k,{currentItem:e,handleClick:c},e.id)}))})})}}]),c}(n.a.Component),f=c(129),w=c(122),p=c(59),C=c.n(p),y=function(e){var t=e.handleSort;return Object(b.jsxs)("div",{className:"searchBar",children:[Object(b.jsx)(w.a,{type:"submit","aria-label":"search",className:"search-icon",children:Object(b.jsx)(C.a,{})}),Object(b.jsx)(f.a,{placeholder:"Search",inputProps:{"aria-label":"search"},onChange:function(e){t(e.target.value)}})]})},N=c(127),g=c(128),S=function(e){Object(u.a)(c,e);var t=Object(j.a)(c);function c(){return Object(h.a)(this,c),t.call(this)}return Object(d.a)(c,[{key:"render",value:function(){return Object(b.jsx)("div",{className:"reviewSection",children:Object(b.jsx)(g.a,{className:"review-field",label:"Review",variant:"outlined"})})}}]),c}(n.a.Component),L=[{id:1,url:"https://www.youtube.com/watch?v=8eYEW4q42y8",chanel:" Astrix Official",name:"Astrix @ Universo Paralello 2019-2020 [Full Set]"},{id:2,url:"https://www.youtube.com/watch?v=cnVPm1dGQJc",chanel:"TSG Music",name:"1https://www.youtube.com/watch?v=cnVPm1dGQJc"},{id:3,url:"https://www.youtube.com/watch?v=1ekNqFMkImw",chanel:"   RazNitzanMusic   ",name:"VOCAL TRANCE 2020 [FULL ALBUM - OUT NOW]"},{id:4,url:"https://www.youtube.com/watch?v=c8ijHgTvv9I",chanel:"    Miracle Music",name:"Dua Lipa, Coldplay, Martin Garrix & Kygo, The Chainsmokers Style - Feeling Me #76"},{id:5,url:"https://www.youtube.com/watch?v=CN7y6FVBdR8",chanel:"     Yanni ",name:"YYanni \u2013 FELITSA-LIVE_1080p (From the Master)"},{id:6,url:" https://www.youtube.com/watch?v=dS0fNXgAxkw",chanel:"TranceForLife",name:"The 30 Best Trance Music Songs Ever (by Armin van Buuren)"}],T=c(126),A=function(e){Object(u.a)(c,e);var t=Object(j.a)(c);function c(e){var i;return Object(h.a)(this,c),(i=t.call(this,e)).handleSubmit=function(e){i.setState({comments:[].concat(Object(r.a)(i.state.comments),[e])})},i.data=L,i.isFullVideo=!0,i.state={currentItem:i.data[0],like:0,dislike:0,seacrhText:"",comments:[]},i.handleClick=i.handleClick.bind(Object(o.a)(i)),i.handleLikeClick=i.handleLikeClick.bind(Object(o.a)(i)),i.handleDislikeClick=i.handleDislikeClick.bind(Object(o.a)(i)),i.handleSort=i.handleSort.bind(Object(o.a)(i)),i.showAll=i.showAll.bind(Object(o.a)(i)),i}return Object(d.a)(c,[{key:"getVideoList",value:function(e){var t=this,c=e.slice(),i=e.find((function(e){return e.id===t.state.currentItem.id}));return c.splice(c.indexOf(i),1),c}},{key:"handleSort",value:function(e){this.setState(Object(l.a)(Object(l.a)({},this.state),{},{seacrhText:e}))}},{key:"handleClick",value:function(e){this.setState(Object(l.a)(Object(l.a)({},this.state),{},{currentItem:e}))}},{key:"handleDislikeClick",value:function(){this.setState(Object(l.a)(Object(l.a)({},this.state),{},{dislike:this.state.dislike+1}))}},{key:"handleLikeClick",value:function(){this.setState(Object(l.a)(Object(l.a)({},this.state),{},{like:this.state.like+1}))}},{key:"showAll",value:function(){this.setState({seacrhText:""})}},{key:"render",value:function(){var e=this;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(O,{}),Object(b.jsxs)("div",{className:"content",children:[Object(b.jsxs)("div",{className:"mainContent",children:[Object(b.jsx)(y,{handleSort:this.handleSort,pickedMovie:this.pickedMovie}),Object(b.jsx)(k,{currentItem:this.state.currentItem,isFullVideo:this.isFullVideo}),Object(b.jsxs)("div",{className:"reviewLikes",children:[Object(b.jsx)("div",{className:"review",children:Object(b.jsx)(S,{})}),Object(b.jsx)("div",{className:"likes",children:Object(b.jsxs)("span",{className:"buttonLike",onClick:this.handleLikeClick,children:[Object(b.jsx)("img",{src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoTsU_yabuUlDCzn7CK4k6qlpOwuCNtY7sHA&usqp=CAU"})," ",this.state.like]})})]})]}),Object(b.jsxs)("div",{className:"cardList",children:[Object(b.jsx)("div",{children:this.getVideoList(this.data).filter((function(t){return t.chanel.includes(e.state.seacrhText)})).length<this.getVideoList(this.data).length?Object(b.jsx)(T.a,{variant:"contained",color:"secondary",onClick:function(){return e.showAll()},children:"Show all movie"}):null}),Object(b.jsx)("div",{children:0===this.getVideoList(this.data).filter((function(t){return t.chanel.includes(e.state.seacrhText)})).length?Object(b.jsx)(N.a,{variant:"subtitle1",children:"There is no video"}):Object(b.jsx)(x,{list:this.getVideoList(this.data).filter((function(t){return t.chanel.includes(e.state.seacrhText)})),handleClick:this.handleClick,showAll:this.showAll})})]})]})]})}}]),c}(n.a.Component);var F=function(){return Object(b.jsx)("div",{className:"App",children:Object(b.jsx)(A,{})})},M=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,131)).then((function(t){var c=t.getCLS,i=t.getFID,n=t.getFCP,a=t.getLCP,s=t.getTTFB;c(e),i(e),n(e),a(e),s(e)}))};s.a.render(Object(b.jsx)(n.a.StrictMode,{children:Object(b.jsx)(F,{})}),document.getElementById("root")),M()}},[[93,1,2]]]);
//# sourceMappingURL=main.88f4708d.chunk.js.map