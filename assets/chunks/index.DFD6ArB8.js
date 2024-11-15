var w=n=>{throw TypeError(n)};var b=(n,o,t)=>o.has(n)||w("Cannot "+t);var i=(n,o,t)=>(b(n,o,"read from private field"),t?t.call(n):o.get(n)),m=(n,o,t)=>o.has(n)?w("Cannot add the same private member more than once"):o instanceof WeakSet?o.add(n):o.set(n,t);var s=(n,o,t)=>(b(n,o,"access private method"),t);const W=`
.carousel-item {
  position: relative;
  display: flex;
  width: 100%;
  height: 100%;
}
.carousel-item ::slotted(*) {
  width: 100%;
  height: 100%;
  object-fit: cover;
  -webkit-user-drag: none;
}
`;class k extends HTMLElement{constructor(){super();const o=this.attachShadow({mode:"open"});o.innerHTML=`
            <style>${W}</style>
            <section class="carousel-item" part="container">
                <slot></slot>
            </section>
        `}}window.customElements.define("gr-carousel-item",k);const I=`
.main-container {
  overflow: hidden;
  width: 100%;
}
.main-container .statistics-wrap {
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  color: #eeeeee;
  font-size: 1rem;
}
.main-container .statistics-wrap .current-index {
  display: inline-block;
  line-height: 1;
  width: 1.25rem;
  color: red;
}
.main-container .statistics-wrap .total-index {
  line-height: 1;
}
.main-container .carousel-wrap {
  list-style-type: none;
  margin-block-start: 0em;
  margin-block-end: 0em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 0px;
  unicode-bidi: isolate;
  display: flex;
  margin: 0.25rem 0;
  transition: transform 0.3s;
}
.main-container .carousel-wrap ::slotted(gr-carousel-item) {
  flex: 1 0 100%;
  width: 100%;
  height: 10rem;
  overflow: hidden;
  background-color: #99a9bf;
}
.main-container .footer-wrap .indicator-wrap {
  position: relative;
  display: flex;
  justify-content: flex-end;
}
.main-container .footer-wrap .indicator-wrap::before {
  content: "";
  display: block;
  position: relative;
  width: 100%;
  height: 1px;
  margin: auto 1rem;
  margin-left: 0.2rem;
  background-color: #ccc;
}
.main-container .footer-wrap .indicator-wrap .carousel-indicator-item {
  position: relative;
  display: block;
  width: 0.25rem;
  height: 0.25rem;
  margin: 0.35rem;
  background-color: white;
  border: 1px solid transparent;
  transition: background-color 0.3s;
}
.main-container .footer-wrap .indicator-wrap .carousel-indicator-item::before {
  content: "";
  display: block;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 0.6rem;
  height: 0.6rem;
  background-color: transparent;
  border: 1px solid transparent;
  transition: border-color 0.3s;
}
.main-container .footer-wrap .indicator-wrap .carousel-indicator-item.active {
  background-color: red;
}
.main-container .footer-wrap .indicator-wrap .carousel-indicator-item.active::before {
  border-color: red;
}
`;var e,r,E,h,f,y,g,x,_,u,d,v,L,N;class T extends HTMLElement{constructor(){super();m(this,r);m(this,e,{ITEM_LEN:0,index:0,timer:null,isDrag:!1});const t=this.attachShadow({mode:"open"});t.innerHTML=`
            <style>${I}</style>
            <section class="main-container" part="container">
                <header class="statistics-wrap" part="statistics-wrap">
                    <span class="current-index" part="current-index"></span>
                    <span>/</span>
                    <span class="total-index" part="total-index"></span>
                    <span>//</span>
                </header>
                <ul class="carousel-wrap" part="carousel-wrap">
                    <slot></slot>
                </ul>
                <footer class="footer-wrap" part="footer-wrap">
                    <div class="indicator-wrap" part="indicator-wrap"></div>
                </footer>
            </section>
        `,this._carouselWrap=t.querySelector(".carousel-wrap"),this._indicatorWrap=t.querySelector(".indicator-wrap"),this._currentIndex=t.querySelector(".current-index"),this._totalIndex=t.querySelector(".total-index")}get duration(){const t=this.getAttribute("duration");return Number.isNaN(Number(t))?4e3:Number(t)||4e3}set duration(t){t=Number.isNaN(Number(t))?4e3:Number(t)||4e3,this.setAttribute("duration",t)}connectedCallback(){this.duration=this.duration,s(this,r,E).call(this),s(this,r,y).call(this),s(this,r,x).call(this),this._totalIndex.innerHTML=`0${i(this,e).ITEM_LEN-2}`,s(this,r,N).call(this),s(this,r,d).call(this)}}e=new WeakMap,r=new WeakSet,E=function(){Array.from(this.childNodes).forEach(l=>{l.tagName!=="GR-CAROUSEL-ITEM"&&l.remove()});const t=this.children,a=t[0].cloneNode(!0),c=t[t.length-1].cloneNode(!0);this.insertBefore(c,this.firstChild),this.appendChild(a),i(this,e).ITEM_LEN=t.length,i(this,e).index=(i(this,e).index+1)%(t.length+2),this._carouselWrap.style.transform=`translateX(${-i(this,e).index*100}%)`},h=function(){i(this,e).index=(i(this,e).index+1)%i(this,e).ITEM_LEN,this._carouselWrap.style.transform=`translateX(${-i(this,e).index*100}%)`},f=function(){i(this,e).index=(i(this,e).index-1)%i(this,e).ITEM_LEN,this._carouselWrap.style.transform=`translateX(${-i(this,e).index*100}%)`},y=function(){for(let t=0;t<i(this,e).ITEM_LEN-2;t++){const a=document.createElement("span");a.index=t+1,a.className="carousel-indicator-item",a.part="indicator-item",a.classList.toggle("active",i(this,e).index===t+1),a.addEventListener("click",()=>{i(this,e).index=a.index,this._carouselWrap.style.transform=`translateX(${-i(this,e).index*100}%)`,s(this,r,g).call(this),s(this,r,u).call(this),s(this,r,d).call(this)}),this._indicatorWrap.appendChild(a)}},g=function(){const t=this._indicatorWrap.children;Array.from(t).forEach(a=>{a.classList.toggle("active",a.index===i(this,e).index)})},x=function(){this._currentIndex.innerHTML=`0${i(this,e).index}`},_=function(){this._carouselWrap.style.transitionDuration="0s",i(this,e).index===i(this,e).ITEM_LEN-1&&(i(this,e).index=1,this._carouselWrap.style.transform=`translateX(${-i(this,e).index*100}%)`),i(this,e).index===0&&(i(this,e).index=i(this,e).ITEM_LEN-2,this._carouselWrap.style.transform=`translateX(${-i(this,e).index*100}%)`),s(this,r,g).call(this),s(this,r,x).call(this),setTimeout(()=>{this._carouselWrap.style.transitionDuration=".3s",i(this,e).isDrag=!1},0)},u=function(){i(this,e).timer&&clearInterval(i(this,e).timer)},d=function(){i(this,e).timer=setInterval(()=>{s(this,r,h).call(this)},this.duration)},v=function(t){if(i(this,e).isDrag)return;i(this,e).isDrag=!0;const a=new AbortController,c=t.touches[0].clientX;let l=null;s(this,r,u).call(this),this._carouselWrap.addEventListener("touchmove",p=>{l=p.touches[0].clientX},{signal:a.signal}),this._carouselWrap.addEventListener("touchend",()=>{c<l?s(this,r,f).call(this):c>l?s(this,r,h).call(this):this._carouselWrap.style.transform=`translateX(${-i(this,e).index*100}%)`,s(this,r,d).call(this),a.abort()},{signal:a.signal})},L=function(t){if(i(this,e).isDrag)return;i(this,e).isDrag=!0;const a=new AbortController,c=t.clientX;let l=null;s(this,r,u).call(this),this._carouselWrap.addEventListener("mousemove",p=>{l=p.clientX},{signal:a.signal}),this._carouselWrap.addEventListener("mouseup",()=>{c<l?s(this,r,f).call(this):c>l?s(this,r,h).call(this):this._carouselWrap.style.transform=`translateX(${-i(this,e).index*100}%)`,s(this,r,d).call(this),a.abort()},{signal:a.signal})},N=function(){const t=()=>{s(this,r,_).call(this)};this._carouselWrap.addEventListener("transitionend",t);const a=l=>{s(this,r,v).call(this,l)};this._carouselWrap.addEventListener("touchstart",a);const c=l=>{s(this,r,L).call(this,l)};this._carouselWrap.addEventListener("mousedown",c)};window.customElements.define("gr-carousel",T);
