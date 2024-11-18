import{v as a,V as s,c as i,a2 as e,o as r}from"./chunks/framework.DKSgzezt.js";const l="/gr-component-doc/assets/home-bg.D-GugTwO.png",p=JSON.parse('{"title":"Carousel 轮播图","description":"","frontmatter":{},"headers":[],"relativePath":"gr-carousel.md","filePath":"gr-carousel.md","lastUpdated":1731657683000}'),h={name:"gr-carousel.md"},c=Object.assign(h,{setup(d){return a(()=>{s(()=>import("./chunks/index.DFD6ArB8.js"),[])}),(o,t)=>(r(),i("div",null,t[0]||(t[0]=[e('<h1 id="carousel-轮播图" tabindex="-1">Carousel 轮播图 <a class="header-anchor" href="#carousel-轮播图" aria-label="Permalink to &quot;Carousel 轮播图&quot;">​</a></h1><ul><li><p><code>gr-carousel</code>：轮播图的根组件，其子元素只能是 <code>gr-carousel-item</code> 组件。</p></li><li><p><code>gr-carousel-item</code>：轮播图的子组件，每个轮播图的内容在此定义。</p></li></ul><h2 id="自定义样式" tabindex="-1">自定义样式 <a class="header-anchor" href="#自定义样式" aria-label="Permalink to &quot;自定义样式&quot;">​</a></h2><p>移步到 <a href="#gr-carousel-css-part">CSS Part</a>。</p><h2 id="基本用法" tabindex="-1">基本用法 <a class="header-anchor" href="#基本用法" aria-label="Permalink to &quot;基本用法&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>内置了 <code>鼠标拖动切换</code> 和 <code>触摸拖动切换</code> 的功能</p></div><gr-carousel><gr-carousel-item>1</gr-carousel-item><gr-carousel-item><img src="'+l+`" alt=""></gr-carousel-item><gr-carousel-item>3</gr-carousel-item></gr-carousel><details class="details custom-block"><summary>查看代码</summary><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">gr-carousel</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">gr-carousel-item</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;1&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">gr-carousel-item</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">gr-carousel-item</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">img</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> src</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;./assets/imgs/home-bg.png&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> alt</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">gr-carousel-item</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">gr-carousel-item</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;3&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">gr-carousel-item</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">gr-carousel</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div></details><h2 id="gr-carousel-attributes" tabindex="-1">Gr-carousel Attributes <a class="header-anchor" href="#gr-carousel-attributes" aria-label="Permalink to &quot;Gr-carousel Attributes&quot;">​</a></h2><table tabindex="0"><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>duration</td><td>切换的时间间隔<code>(单位: ms)</code></td><td><code>Number</code></td><td>-</td><td>4000</td></tr></tbody></table><h2 id="gr-carousel-css-part" tabindex="-1">Gr-carousel CSS Part <a class="header-anchor" href="#gr-carousel-css-part" aria-label="Permalink to &quot;Gr-carousel CSS Part&quot;">​</a></h2><blockquote><p>用法可参考 <a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/::part" target="_blank" rel="noreferrer">MDN ::part()伪类</a></p></blockquote><table tabindex="0"><thead><tr><th>名称</th><th>说明</th></tr></thead><tbody><tr><td>main-container</td><td>根容器</td></tr></tbody></table><ul><li><h3 id="轮播图顶部" tabindex="-1">轮播图顶部 <a class="header-anchor" href="#轮播图顶部" aria-label="Permalink to &quot;轮播图顶部&quot;">​</a></h3></li></ul><table tabindex="0"><thead><tr><th>名称</th><th>说明</th></tr></thead><tbody><tr><td>statistics-wrap</td><td>轮播图统计的根容器</td></tr><tr><td>current-index</td><td>当前轮播图索引</td></tr><tr><td>total-index</td><td>总共的轮播图个数</td></tr></tbody></table><ul><li><h3 id="轮播图列表" tabindex="-1">轮播图列表 <a class="header-anchor" href="#轮播图列表" aria-label="Permalink to &quot;轮播图列表&quot;">​</a></h3></li></ul><table tabindex="0"><thead><tr><th>名称</th><th>说明</th></tr></thead><tbody><tr><td>carousel-wrap</td><td>轮播图列表容器</td></tr></tbody></table><ul><li><h3 id="轮播图底部" tabindex="-1">轮播图底部 <a class="header-anchor" href="#轮播图底部" aria-label="Permalink to &quot;轮播图底部&quot;">​</a></h3></li></ul><table tabindex="0"><thead><tr><th>名称</th><th>说明</th></tr></thead><tbody><tr><td>footer-wrap</td><td>轮播图底部容器</td></tr><tr><td>indicator-wrap</td><td>指示器容器</td></tr><tr><td>indicator-item</td><td>指示器元素</td></tr></tbody></table><h2 id="gr-carousel-item-css-part" tabindex="-1">Gr-carousel-item CSS Part <a class="header-anchor" href="#gr-carousel-item-css-part" aria-label="Permalink to &quot;Gr-carousel-item CSS Part&quot;">​</a></h2><blockquote><p>用法可参考 <a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/::part" target="_blank" rel="noreferrer">MDN ::part()伪类</a></p></blockquote><table tabindex="0"><thead><tr><th>名称</th><th>说明</th></tr></thead><tbody><tr><td>container</td><td>根容器</td></tr></tbody></table>`,22)])))}});export{p as __pageData,c as default};
