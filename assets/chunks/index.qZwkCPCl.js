const r=`
:host {
  --title-color: white;
  --theme-color: white;
  --transition-duration: 0.5s;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center center;
  cursor: pointer;
}

.gr-hover-card {
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.gr-hover-card .info-wrap {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  z-index: 1;
  transition: top var(--transition-duration);
}
.gr-hover-card .info-wrap .title {
  color: var(--title-color);
  font-weight: 800;
  font-size: 1.25rem;
  white-space: nowrap;
}
.gr-hover-card .info-wrap .desc {
  color: var(--theme-color);
  position: relative;
}
.gr-hover-card .info-wrap .desc::before, .gr-hover-card .info-wrap .desc::after {
  content: "";
  display: block;
  position: absolute;
  top: 50%;
  width: 50%;
  height: 1px;
  background-color: var(--theme-color);
}
.gr-hover-card .info-wrap .desc::before {
  left: -0.5rem;
  transform: translate(-100%, -50%);
}
.gr-hover-card .info-wrap .desc::after {
  right: -0.5rem;
  transform: translate(100%, -50%);
}
.gr-hover-card::after {
  content: "";
  display: block;
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  transition: filter var(--transition-duration);
}
.gr-hover-card:hover .info-wrap {
  top: 70%;
}
.gr-hover-card:hover::after {
  filter: opacity(0);
}
`;class o extends HTMLElement{constructor(){super();const t=this.attachShadow({mode:"open"});t.innerHTML=`
            <style>${r}</style>
            <a class="gr-hover-card" part="container">
                <div class="info-wrap" part="info-wrap">
                    <p class="title" part="title"></p>
                    <p class="desc" part="desc"></p>
                </div>
            </a>
        `,this._container=t.querySelector(".gr-hover-card"),this._titleWrap=t.querySelector(".title"),this._descWrap=t.querySelector(".desc")}get title(){return this.getAttribute("title")||""}set title(t){t&&(this._titleWrap.innerHTML=t)}get desc(){return this.getAttribute("desc")||""}set desc(t){t&&(this._descWrap.innerHTML=t.toUpperCase())}get color(){return this.getAttribute("color")}set color(t){if(!t)return;const e=new Option;e.style.color=t,this.style.setProperty("--theme-color",e?t:"white")}get href(){return this.getAttribute("href")}set href(t){var e;t&&((e=this._container)==null||e.setAttribute("href",t))}connectedCallback(){this.title=this.title,this.desc=this.desc,this.color=this.color,this.href=this.href}}window.customElements.get("gr-hover-card")||window.customElements.define("gr-hover-card",o);
