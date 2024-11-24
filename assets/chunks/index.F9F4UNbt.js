var g=e=>{throw TypeError(e)};var m=(e,t,r)=>t.has(e)||g("Cannot "+r);var c=(e,t,r)=>(m(e,t,"read from private field"),r?r.call(e):t.get(e)),d=(e,t,r)=>t.has(e)?g("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,r);const h=`
:host {
  transition: transform var(--transition-duration);
  position: relative;
  margin: 0.15rem;
  height: calc(100% - 0.3rem);
  overflow: hidden;
}

.sg-img {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.sg-img .search-icon {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  filter: opacity(0);
  z-index: 1;
}
.sg-img .search-icon .search-glass {
  position: absolute;
  left: -1rem;
  top: -1rem;
  width: 1rem;
  height: 1rem;
  border: 2px solid white;
  border-radius: 50%;
}
.sg-img .search-icon .search-handgrip {
  position: absolute;
  top: calc(50% + 0.35rem);
  left: 50%;
  width: 1rem;
  height: 0.25rem;
  background-color: white;
  transform-origin: center center;
  transform: rotate(45deg);
}
.sg-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.sg-img::after {
  content: "";
  bottom: 0;
  left: 0;
  position: absolute;
  width: 100%;
  height: 100%;
  background: var(--mask-color);
  transform-origin: center bottom;
  transform: translateY(100%);
}
.sg-img:hover .search-icon {
  filter: opacity(1);
}
.sg-img:hover::after {
  transform: translateY(50%);
}
.sg-img:hover img {
  transform: scale(1.2);
}
.sg-img.has-picture {
  visibility: hidden;
  pointer-events: none;
}
.sg-img.with-transition .search-icon {
  transition: filter var(--transition-duration);
}
.sg-img.with-transition img {
  transition: transform var(--transition-duration);
}
.sg-img.with-transition::after {
  transition: transform var(--transition-duration);
}
`;class p extends HTMLElement{constructor(){super();const t=this.attachShadow({mode:"open"});t.innerHTML=`
            <style>
                ${h}
            </style>
            <div class="sg-img has-picture" part="container">
                <div class="search-icon" part="search-icon">
                    <div class="search-glass" part="search-glass"></div>
                    <div class="search-handgrip" part="search-handgrip"></div>
                </div>
                <img class="img" part="img">
            </div>
        `,this._container=t.querySelector(".sg-img"),this._img=t.querySelector(".img")}get src(){return this.getAttribute("src")||""}set src(t){if(!t)return;const r=new Image;r.src=t,this._container.classList.remove("has-picture"),r.onerror=()=>{console.error("[gr-picture] 图片加载失败！"),this._img.src=new URL("/gr-component-doc/assets/error.CdcQQenQ.png",import.meta.url).href},r.onload=()=>{this._img.src=t}}connectedCallback(){setTimeout(()=>{this._container.classList.add("with-transition")},100)}}window.customElements.get("gr-sg-img")||window.customElements.define("gr-sg-img",p);const u=`
:host {
  --transition-duration: 0.5s;
  --mask-color: linear-gradient(to top, rgba(255, 0, 0, 0.3), transparent);
  display: block;
  width: 100%;
  height: 100%;
  cursor: pointer;
}

[class*=col-] {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.col-6 {
  flex: 6 0 25%;
  min-width: 25%;
}

.col-12 {
  flex: 6 0 50%;
  min-width: 50%;
}

.gr-picture-group-container {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  height: 100%;
  width: 100%;
  overflow-y: hidden;
}
.gr-picture-group-container .col-6 > gr-sg-img {
  height: calc(50% - 0.3rem);
}
`,f=()=>{const e=[],t=i.index+5;for(let r=i.index;r<t&&i.urls[r];r++,i.index++)e.push(i.urls[r]);if(!e.length)throw new Error;return e},l=e=>{const t=f(),r=document.createElement("gr-picture");r.addEventListener("gr-picture-load",()=>{r.pictures=t}),e.appendChild(r),i.prevNode=e.children[e.children.length-1]},v=(e,t)=>{e.unobserve(i.prevNode);try{l(t),e.observe(i.prevNode)}catch{e.disconnect(),document.dispatchEvent(new CustomEvent("gr-picture-render-finished"))}},i={index:0,prevNode:document.body,urls:[]};window.$GrPictureInfinateScrollRenderer=(e={root:document.body,urls:[]})=>{const{root:t,urls:r}=e;i.urls=r,l(t),i.prevNode=t.children[t.children.length-1]||document.body;const o=new IntersectionObserver(n=>{n[0].intersectionRatio<=0||v(o,t)},{root:document.body,threshold:.9});o.observe(i.prevNode)};var s;class w extends HTMLElement{constructor(){super();d(this,s,{pictures:[]});const r=this.attachShadow({mode:"open"});r.innerHTML=`
            <style>
                ${u}
            </style>
            <div class="gr-picture-group-container pc" part="container">
                <div class="col-6" part="left-wrap">
                    <gr-sg-img part="left-top-img"></gr-sg-img>
                    <gr-sg-img part="left-bottom-img"></gr-sg-img>
                </div>
                <div class="col-12" part="center-wrap">
                    <gr-sg-img part="center-img"></gr-sg-img>
                </div>
                <div class="col-6" part="right-wrap">
                    <gr-sg-img part="right-top-img"></gr-sg-img>
                    <gr-sg-img part="right-bottom-img"></gr-sg-img>
                </div>
            </div>
        `}get pictures(){return c(this,s).pictures||[]}set pictures(r){if(!Array.isArray(r))return;const o=this.shadowRoot.querySelectorAll("gr-sg-img");c(this,s).pictures=r,c(this,s).pictures.forEach((n,a)=>{o[a].src=n,o[a].addEventListener("click",()=>{window.open(n)})})}connectedCallback(){setTimeout(()=>{this.dispatchEvent(new CustomEvent("gr-picture-load"))},20)}}s=new WeakMap;window.customElements.get("gr-picture")||window.customElements.define("gr-picture",w);
