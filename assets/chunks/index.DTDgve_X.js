var v=d=>{throw TypeError(d)};var w=(d,e,t)=>e.has(d)||v("Cannot "+t);var s=(d,e,t)=>(w(d,e,"read from private field"),t?t.call(d):e.get(d)),g=(d,e,t)=>e.has(d)?v("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(d):e.set(d,t);var c=(d,e,t)=>(w(d,e,"access private method"),t);const S=`
<style>
.ls-item {
    padding: 1.25rem;
    width: 100%;
    color: #fff;
    text-decoration: none;
    cursor: pointer;
    border-left: 1px solid rgba(212, 212, 212, 0.7);
}
.ls-item .title {
    font-size: var(--fs-title);
    transition: font-size 0.3s;
}
.ls-item .desc {
    display: block;
    font-size: var(--fs-desc);
    filter: opacity(0);
    transition: filter 0.3s;
}
.ls-item .desc,
.ls-item .title {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
}
.ls-item .desc::before, .ls-item .desc::after {
    content: "";
    display: inline-block;
    width: 0.95rem;
    height: 1px;
    transform: translateY(-2px);
    scale: 0;
    background-color: red;
    transition: scale 0.8s;
}
.ls-item .desc::before {
    transform-origin: left center;
    margin-right: 5px;
}
.ls-item .desc::after {
    transform-origin: right center;
    margin-left: 5px;
}
.ls-item.active .title {
    font-size: var(--fs-title-active);
}
.ls-item.active .desc {
    filter: opacity(1);
}
.ls-item.active .desc::after, .ls-item.active .desc::before {
    scale: 1;
}
</style>
`;class H extends HTMLElement{constructor(){super();const e=this.attachShadow({mode:"open"});e.innerHTML=`
      ${S}
      <li class="ls-item" part="container">
          <div class="title" part="title"></div>
          <span class="desc" part="desc"></span>
      </li>
    `,this._container=e.querySelector(".ls-item"),this._titleEl=e.querySelector(".title"),this._descEl=e.querySelector(".desc")}get active(){return this.hasAttribute("active")}set active(e){e?this.setAttribute("active",""):this.removeAttribute("active"),this._container.classList.toggle("active",e)}get path(){return this.getAttribute("path")}set path(e){this.setAttribute("path",e)}get title(){return this.getAttribute("title")}set title(e){this._titleEl.innerHTML=e}get desc(){return this.getAttribute("desc")}set desc(e){this._descEl.innerHTML=e}connectedCallback(){this.active=this.active,this.title=this.title,this.desc=this.desc,this.addEventListener("click",e=>{this.dispatchEvent(new CustomEvent("gr-aside-item-click",{bubbles:!0,detail:{path:this.path}}))}),setTimeout(()=>{this.dispatchEvent(new CustomEvent("gr-aside-item-loaded",{bubbles:!0,composed:!0,detail:{path:this.path}}))},20)}}window.customElements.define("gr-aside-item",H);const P=`
<style>
    .sg-page {
        position: relative;
        height: 100vh;

        overflow: hidden;
    }
</style>
`;class _ extends HTMLElement{constructor(){super();const e=this.attachShadow({mode:"open"});e.innerHTML=`
            ${P}
            <div class="sg-page" part="container">
                <slot></slot>
            </div >
        `}get path(){return this.getAttribute("path")}set path(e){this.setAttribute("path",e)}connectedCallback(){this.style.display="block",setTimeout(()=>{this.dispatchEvent(new CustomEvent("gr-page-loaded",{bubbles:!0,composed:!0,detail:{path:this.path}}))},20)}}window.customElements.define("gr-page",_);const D=`
<style>
::slotted(ul) {
  display: block;
  list-style-type: none;
  margin-block-start: 0em;
  margin-block-end: 0em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 0px;
  unicode-bidi: isolate;
}

.main-container {
  overflow: hidden;
  position: relative;
}
.main-container .gr-aside {
  position: relative;
  user-select: none;
  display: block;
  position: fixed;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  z-index: 999;
}
.main-container .gr-aside .navigation-switch {
  cursor: pointer;
  position: absolute;
  top: 0;
  left: 0.5rem;
  width: 1.5rem;
  height: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: translateY(-200%);
  transition: transform 0.3s;
  z-index: 1;
  background-image: linear-gradient(to bottom, rgb(193, 193, 193) 50%, transparent 50%);
  background-size: 8px 8px;
}
.main-container .gr-aside .cursor {
  display: block;
  position: absolute;
  left: 1.25rem;
  top: 0;
  transform: translate(-50%, -50%);
  width: 3px;
  height: 1.25rem;
  background-color: red;
  z-index: 1000;
  transition: top 0.3s, left 0.3s;
}
.main-container .gr-aside .aside-list {
  position: absolute;
  transform: translateY(-50%);
  background-image: linear-gradient(to right, rgba(0, 0, 0, 0.4), transparent);
  transition: transform 0.3s;
}
.main-container .gr-aside ::slotted(*) {
  display: block;
  position: relative;
  padding: 1rem 0;
  padding-left: 1.25rem;
}
.main-container .gr-aside.is-hidden .cursor {
  left: -100%;
  transform: translate(-150%, -50%);
}
.main-container .gr-aside.is-hidden .navigation-switch {
  transform: translateY(-200%) rotate(90deg);
}
.main-container .gr-aside.is-hidden .aside-list {
  transform: translate(-150%, -50%);
}
.main-container .gr-pages-container {
  position: relative;
}
.main-container .gr-pages-container slot {
  position: relative;
}
.main-container .gr-pages-container ::slotted(*) {
  display: block;
  transform: translateY(0);
  transform-origin: center top;
  transition: transform 0.5s;
}
</style>
`;var i,n,u,b,y,E,m,x,L,k,A,C;class I extends HTMLElement{constructor(){super();g(this,n);g(this,i,{routes:[],curPage:"",isDone:!0,isHidden:!1});const t=this.attachShadow({mode:"open"});t.innerHTML=`
            ${D}
            <div class="main-container" part="main-container">
                <aside class="gr-aside" part="aside-wrap">
                    <div class="navigation-switch" part="switch-btn"></div>
                    <div class="cursor" part="cursor"></div>
                    <div class="aside-list" part="user-aside-wrap">
                        <slot name="aside"></slot>
                    </div>
                </aside>
                <main class="gr-pages-container" part="user-pages-wrap">
                    <slot name="pages"></slot>
                </main>
            </div>
        `,this._cursor=t.querySelector(".cursor"),this._asideContainer=t.querySelector(".gr-aside"),this._navigationSwitch=t.querySelector(".navigation-switch"),this._asideListContainer=t.querySelector(".aside-list")}get active(){return this.getAttribute("active")||""}set active(t){this.setAttribute("active",t);const l=this.querySelector("[slot='aside']")||[],a=this.querySelector("[slot='pages']")||[];c(this,n,b).call(this,l.children,a,this._cursor)}connectedCallback(){this.style.position="relative",c(this,n,C).call(this)}}i=new WeakMap,n=new WeakSet,u=function(t,l,a=!1){let o=0;Array.from(t.childNodes).forEach(r=>{r.tagName!==l?r.remove():(r.index=o++,a&&s(this,i).routes.push(r.path))})},b=function(t,l,a){const o=window.location.hash.substring(1);c(this,n,m).call(this,l,o),Array.from(t).forEach(r=>{c(this,n,y).call(this,r,o,a)})},y=function(t,l,a){t.active=l===t.path,l===t.path&&(a.style.top=`${t.index*t.offsetHeight-t.offsetHeight/2}px`)},E=function(){const t=this.querySelector("[slot='aside']")||[],l=this.querySelector("[slot='pages']")||[],a=this.shadowRoot.querySelector(".cursor");c(this,n,u).call(this,t,"GR-ASIDE-ITEM",!0),c(this,n,u).call(this,l,"GR-PAGE"),this.addEventListener("gr-aside-item-click",o=>{if(o.stopPropagation(),!s(this,i).isDone)return;const r=window.location.hash.substring(1),{path:h}=o.detail;r!==h&&(window.location.hash=h,s(this,i).isDone=!1,c(this,n,m).call(this,l,h),Array.from(t.children).forEach((p,f)=>{this.active=h}))}),a.addEventListener("transitionend",()=>{s(this,i).isDone=!0}),window.addEventListener("hashchange",()=>{this.active=window.location.hash.substring(1)})},m=function(t,l){const a=Array.from(t.children).findIndex(o=>o.path===l);if(!t.children[a])throw new Error("[gr-component] 没有匹配该路径的页面！");t.style.transform=`translateY(-${t.children[a].offsetTop}px)`},x=function(){window.addEventListener("touchstart",t=>{if(s(this,i).routes.length<1||!s(this,i).isDone)return;const l=window.location.hash.substring(1),a=new AbortController,o=t.touches[0].pageY;let r=o;window.addEventListener("touchmove",h=>{r=h.touches[0].pageY},{signal:a.signal}),window.addEventListener("touchend",h=>{const p=s(this,i).routes.findIndex(f=>f===l);o-r>10?p<s(this,i).routes.length-1&&(window.location.hash=s(this,i).routes[p+1],s(this,i).isDone=!1):o-r<-10&&p>0&&(window.location.hash=s(this,i).routes[p-1],s(this,i).isDone=!1),a.abort()},{signal:a.signal})})},L=function(){window.addEventListener("wheel",t=>{if(s(this,i).routes.length<1||!s(this,i).isDone)return;const l=window.location.hash.substring(1),a=s(this,i).routes.findIndex(o=>o===l);t.deltaY>0?a<s(this,i).routes.length-1&&(window.location.hash=s(this,i).routes[a+1],s(this,i).isDone=!1):t.deltaY<0&&a>0&&(window.location.hash=s(this,i).routes[a-1],s(this,i).isDone=!1)})},k=function(){const t=this._asideListContainer.offsetHeight;this._navigationSwitch.style.top=`${-t*.5}px`},A=function(){const t=window.location.hash.substring(1);s(this,i).routes.length<1||(!t||!s(this,i).routes.includes(t))&&(window.location.hash=s(this,i).routes[0])},C=function(){const t=new AbortController,l=new Promise(o=>{this.addEventListener("gr-page-loaded",r=>{r.preventDefault(),r.stopPropagation(),r.stopImmediatePropagation(),o(!0)},{signal:t.signal})}),a=new Promise(o=>{this.addEventListener("gr-aside-item-loaded",r=>{r.preventDefault(),r.stopPropagation(),r.stopImmediatePropagation(),o(!0)},{signal:t.signal})});Promise.all([l,a]).then(()=>{t.abort(),c(this,n,E).call(this),c(this,n,x).call(this),c(this,n,A).call(this),c(this,n,L).call(this),c(this,n,k).call(this),this._navigationSwitch.addEventListener("click",o=>{s(this,i).isHidden=!s(this,i).isHidden,this._asideContainer.classList.toggle("is-hidden",s(this,i).isHidden),this.dispatchEvent(new CustomEvent("gr-aside-toggle",{detail:{isHide:!s(this,i).isHidden}}))}),this.active=this.active,this.dispatchEvent(new CustomEvent("gr-component-load"))})};window.customElements.define("gr-component",I);
