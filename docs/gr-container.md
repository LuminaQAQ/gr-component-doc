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

移步到 [CSS Part](#gr-component-css-part)。

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

## Gr-aside-item Attributes

| 参数  | 说明                                              | 类型   | 可选值 | 默认值 |
| ----- | ------------------------------------------------- | ------ | ------ | ------ |
| path  | 路由路径（需要与 `Gr-page` 组件的 `path` 相匹配） | string | -      | -      |
| title | 导航标题                                          | string | -      | -      |
| desc  | 导航描述                                          | string | -      | -      |

## Gr-page Attributes

| 参数 | 说明                                                    | 类型   | 可选值 | 默认值 |
| ---- | ------------------------------------------------------- | ------ | ------ | ------ |
| path | 路由路径（需要与 `Gr-aside-item` 组件的 `path` 相匹配） | string | -      | -      |

## Gr-component CSS Part

> 用法可参考 [MDN ::part()伪类](https://developer.mozilla.org/zh-CN/docs/Web/CSS/::part)

| 名称            | 说明                                           |
| --------------- | ---------------------------------------------- |
| main-container  | 根容器                                         |
| aside-wrap      | 侧边栏容器                                     |
| switch-btn      | 侧边栏切换按钮                                 |
| cursor          | 侧边栏的游标（即跟随导航选中的对应元素的切换） |
| user-aside-wrap | 插槽 `slot="aside"` 的父容器                   |
| user-pages-wrap | 插槽 `slot="pages"` 的父容器                   |

## Gr-aside-item CSS Part

> 用法可参考 [MDN ::part()伪类](https://developer.mozilla.org/zh-CN/docs/Web/CSS/::part)

| 名称      | 说明     |
| --------- | -------- |
| container | 根容器   |
| title     | 标题容器 |
| desc      | 描述容器 |

## Gr-page CSS Part

> 用法可参考 [MDN ::part()伪类](https://developer.mozilla.org/zh-CN/docs/Web/CSS/::part)

| 名称      | 说明   |
| --------- | ------ |
| container | 根容器 |
