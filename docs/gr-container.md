<script setup> 
import { onMounted } from 'vue'

onMounted(() => { 
    import('../components/gr-component/index.js')
}) 
</script>

# Container 布局容器

- `<gr-components>`：根元素容器。其中包含`slot="aside"` 和 `slot="pages"` 插槽。其子元素只能是这两个具名插槽。

- `<gr-aside-item>`：单个侧边栏元素容器。

- `<gr-page>`：单个页面元素容器。

<!-- ## 引入

> `js`

```html
<script type="module">
  import "./node_modules/easy-component-ui/components/ea-alert/index.js";
</script>
```

> `css`

::: tip
需要注意的是, 如果需要使用到带有图标的 `属性/组件`, 需要提前使用 `link` 标签引入图标文件
:::

```html
<link
  rel="stylesheet"
  href="./node_modules/easy-component-ui/components/ea-icon/index.css"
/>
``` -->

## 自定义样式

移步到 [CSS Part](#css-part)。

## 基本用法

::: tip
因为包含 `wheel` 和 `touch` 事件，所以在本页面体验会大打折扣。

推荐到到 [此处](https://luminaqaq.github.io/GrayRaven/GrComponent/index.html#News) 进行体验
:::

<iframe width="100%" height="500" src="https://luminaqaq.github.io/GrayRaven/GrComponent/index.html#News">
</iframe>

::: details 查看代码

```html
<gr-component active="News">
  <ul slot="aside">
    <gr-aside-item path="Home" title="首页" desc="HOME"></gr-aside-item>
    <gr-aside-item path="News" title="新闻" desc="NEWS"></gr-aside-item>
  </ul>
  <div slot="pages">
    <gr-page path="News">News</gr-page>
    <gr-page path="Home">Home</gr-page>
  </div>
</gr-component>
```

:::
