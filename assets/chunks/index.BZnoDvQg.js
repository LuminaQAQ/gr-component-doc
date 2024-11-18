var u=s=>{throw TypeError(s)};var f=(s,a,t)=>a.has(s)||u("Cannot "+t);var i=(s,a,t)=>(f(s,a,"read from private field"),t?t.call(s):a.get(s)),h=(s,a,t)=>a.has(s)?u("Cannot add the same private member more than once"):a instanceof WeakSet?a.add(s):a.set(s,t);var p=(s,a,t)=>(f(s,a,"access private method"),t);var d;class _ extends HTMLElement{constructor(){super();h(this,d,{list:[]});this.attachShadow({mode:"open"})}get title(){return this.getAttribute("title")}set title(t){this.setAttribute("title",t)}connectedCallback(){}}d=new WeakMap;window.customElements.define("gr-tab",_);const E=`
:host {
  --odd-background-color: inherit;
}

.list-item-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1.25rem;
  color: white;
  text-decoration: none;
  cursor: pointer;
  background-color: var(--odd-background-color);
}
.list-item-container .content-wrap {
  position: relative;
  display: flex;
  align-items: center;
  transition: transform 0.5s;
}
.list-item-container .content-wrap::before {
  content: "";
  position: absolute;
  display: block;
  height: 100%;
  width: 0;
  background-color: red;
  transition: width 0.3s;
}
.list-item-container .msg-wrap,
.list-item-container .content-wrap {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.list-item-container .suffix-desc-wrap,
.list-item-container .prefix-desc-wrap {
  white-space: nowrap;
}
.list-item-container ::slotted(*) {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.list-item-container ::slotted(*[slot=prefix]),
.list-item-container ::slotted(*[slot=suffix]) {
  white-space: nowrap;
}
.list-item-container:hover .content-wrap {
  transform: translateX(0.5rem);
}
.list-item-container:hover .content-wrap::before {
  width: 2px;
}
`;var c;class W extends HTMLElement{constructor(){super();h(this,c,{prefix:"",content:"",surfix:"",href:""});const t=this.attachShadow({mode:"open"});t.innerHTML=`
            <style>
                ${E}
            </style>
            <a class="list-item-container" part="container">
                <span class="content-wrap" part="content-wrap">
                    <span class="prefix-desc-wrap" part="prefix-desc">
                        <slot name="prefix"></slot>
                    </span>
                    <span class="msg-wrap" part="msg-wrap">
                        <slot></slot>
                    </span>
                </span>
                <span class="suffix-desc-wrap" part="suffix-desc">
                    <slot name="suffix"></slot>
                </span>
            </a>
        `,this._container=t.querySelector(".list-item-container"),this._prefixWrap=t.querySelector(".prefix-desc-wrap"),this._surfixWrap=t.querySelector(".suffix-desc-wrap"),this._contentWrap=t.querySelector(".msg-wrap")}get prefix(){return i(this,c).prefix}set prefix(t){t&&(i(this,c).prefix=t,this._prefixWrap.innerHTML=t)}get surfix(){return i(this,c).surfix}set surfix(t){t&&(i(this,c).surfix=t,this._surfixWrap.innerHTML=t)}get content(){return i(this,c).content}set content(t){t&&(i(this,c).surfix=t,this._contentWrap.innerHTML=t)}get href(){return i(this,c).href||this.getAttribute("href")}set href(t){t&&(i(this,c).href=t,this._container.setAttribute("href",t))}connectedCallback(){this.href=this.href}}c=new WeakMap;window.$renderGrList=(s,a)=>{a.forEach(t=>{const r=document.createElement("gr-list");for(const e in t)r[e]=t[e];s.appendChild(r)})};window.customElements.define("gr-list",W);const k=`
:host {
  --transition-duration: 0.4s;
}

.tabs-container .tab-wrap {
  position: relative;
  user-select: none;
}
.tabs-container .tab-wrap .tab-list-wrap {
  display: flex;
  align-items: center;
}
.tabs-container .tab-wrap .tab-list-wrap .tab-item {
  --sign-text: "";
  --sign-color: red;
  --sign-font-size: 0.9rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  perspective: 1px;
  position: relative;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  padding: 0.75rem 1.25rem;
  cursor: pointer;
  color: white;
  z-index: 0;
}
.tabs-container .tab-wrap .tab-list-wrap .tab-item:hover .title {
  color: darkgrey;
}
.tabs-container .tab-wrap .tab-list-wrap .tab-item .index {
  position: absolute;
  left: 0;
  top: 0;
  color: var(--sign-color);
  font-size: var(--sign-font-size);
  filter: opacity(0);
  transition: filter var(--transition-duration);
}
.tabs-container .tab-wrap .tab-list-wrap .tab-item .index::after {
  content: "";
  position: absolute;
  right: -1px;
  bottom: -1px;
  width: 1px;
  height: 0.75rem;
  transform: rotate(45deg);
  background-color: red;
}
.tabs-container .tab-wrap .tab-list-wrap .tab-item.active .index {
  filter: opacity(1);
}
.tabs-container .tab-wrap .tab-line {
  --tab-line-height: 1.25px;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 1.25rem;
  height: var(--tab-line-height);
  background-color: red;
  transition: left var(--transition-duration);
}
.tabs-container .tab-wrap .tab-line::before {
  content: "";
  position: absolute;
  left: -4px;
  top: 0;
  width: 2px;
  height: var(--tab-line-height);
  background-color: red;
}
.tabs-container .tab-wrap .tab-cursor {
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(50%);
  transition: left var(--transition-duration);
}
.tabs-container .tab-wrap .tab-cursor .cursor-tail {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 3px;
  height: 3px;
  background-color: red;
}
.tabs-container .tab-wrap .tab-cursor .cursor-arrow {
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%) rotate(-45deg);
  width: 0.5rem;
  height: 0.5rem;
  border: 2px solid red;
  border-radius: 3px;
  border-top: transparent;
  border-left: transparent;
}
.tabs-container .content-wrap {
  overflow: hidden;
}
.tabs-container .content-wrap .list-wrap {
  display: flex;
  transition: transform var(--transition-duration);
}
.tabs-container .content-wrap .list-wrap .content-item {
  flex: 1 0 100%;
  width: 100%;
}
.tabs-container .content-wrap .list-wrap .content-item gr-list:nth-child(odd) {
  --odd-background-color: rgba(255, 255, 255, 0.1);
}
`;var l,o,w,m,x,g,v;class T extends HTMLElement{constructor(){super();h(this,o);h(this,l,{LEN:0,curIndex:0});const t=this.attachShadow({mode:"open"});t.innerHTML=`
            <style>
                ${k}
            </style>
            <section class="tabs-container" part="container">
                <header class="tab-wrap" part="tab-wrap">
                    <div class="tab-list-wrap" part="tab-list-wrap"></div>
                    <span class="tab-line" part="tab-line"></span>
                    <span class="tab-cursor" part="tab-cursor">
                        <span class="cursor-tail" part="cursor-tail"></span>
                        <span class="cursor-arrow" part="cursor-arrow"></span>
                    </span>
                </header>
                <main class="content-wrap" part="content-wrap">
                    <div class="list-wrap" part="list-wrap"></div>
                </main>
                <footer class="footer-wrap" part="footer-wrap">
                    <slot name="footer"></slot>
                </footer>
            </section>
            <div class="temp">
                <slot></slot>
            </div>
        `,this._tabWrap=t.querySelector(".tab-list-wrap"),this._tabLine=t.querySelector(".tab-line"),this._tabCursor=t.querySelector(".tab-cursor"),this._contentWrap=t.querySelector(".list-wrap"),this._temp=t.querySelector(".temp")}get curIndex(){return i(this,l).curIndex}set curIndex(t){i(this,l).curIndex=t}connectedCallback(){p(this,o,x).call(this),p(this,o,v).call(this),setTimeout(()=>{const t=this._tabWrap.querySelectorAll(".tab-item"),r=t[0].offsetWidth;t.forEach((e,n)=>{e.classList.toggle("active",n===this.curIndex)}),this._tabLine.style.left=`${r*(this.curIndex+1)-28}px`,this.dispatchEvent(new CustomEvent("gr-tabs-load"))},50)}}l=new WeakMap,o=new WeakSet,w=function(t,r){const e=document.createElement("div");return e.classList.add("tab-item"),e.part="tab-item",e.innerHTML=`
            <span class="index">0${r}</span>
            <span class="title">${t}</span>
        `,e},m=function(t,r){const e=document.createElement("div");return e.classList.add("content-item"),e.part="content-item",e.setAttribute("data-tab-title",t),e.innerHTML=r,e},x=function(){Array.from(this.children).forEach((t,r)=>{if(t.tagName==="GR-TAB"){const e=p(this,o,w).call(this,t.title,r),n=p(this,o,m).call(this,t.title,t.innerHTML);e.index=r,n.index=r,e.style.setProperty("--sign-text",`"0${r+1}"`),e.addEventListener("click",()=>{this._contentWrap.style.transform=`translateX(${-r*100}%)`,this.curIndex=r,this._tabLine.style.left=`${e.offsetWidth*(r+1)-28}px`,this._tabCursor.style.left=`${e.offsetWidth*r}px`,this._tabWrap.querySelectorAll(".tab-item").forEach((y,L)=>{y.classList.toggle("active",L===r)})}),this._tabWrap.appendChild(e),this._contentWrap.appendChild(n),t.remove(),i(this,l).LEN++}}),this._temp.remove()},g=function(t,r){const e=this._contentWrap.offsetWidth,n=this._tabWrap.querySelectorAll(".tab-item");t>r&&t-r>e/2?n[this.curIndex+1>i(this,l).LEN-1?i(this,l).LEN-1:this.curIndex+1].click():t<r&&r-t>e/2?n[this.curIndex-1<0?0:this.curIndex-1].click():n[this.curIndex].click()},v=function(){this._contentWrap.addEventListener("touchstart",t=>{const r=new AbortController,e=t.touches[0].clientX;let n=null;this._contentWrap.addEventListener("touchmove",b=>{n=b.touches[0].clientX,this._contentWrap.style.transform=`translateX(calc(${this.curIndex*-100}% - ${e-n}px))`},{signal:r.signal}),this._contentWrap.addEventListener("touchend",()=>{p(this,o,g).call(this,e,n),r.abort()},{signal:r.signal})})};window.customElements.define("gr-tabs",T);
