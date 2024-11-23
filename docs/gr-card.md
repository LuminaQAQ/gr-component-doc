<script setup> 
import { onMounted } from 'vue'

onMounted(() => { 
    import('../components/gr-card/index.js')
    
}) 
</script>

<style>
.main-wrap {
    width: 100%;
    height: 20rem;

    display: flex;
}
</style>

# Card 卡片

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
背景图片是通过元素上的 `style` 属性中的 `background | background-image` 样式来设置的。
:::

<div class="main-wrap">
    <gr-hover-card title="官方周边" desc="products" color="blue"
        href="/"
        style="background-image: url(/gr-component-doc/imgs/other/官方周边.png);">
    </gr-hover-card>
    <gr-hover-card title="官方漫画" desc="cartoon" color="red"
        href="/"
        style="background-image: url(/gr-component-doc/imgs/other/官方漫画.png);"></gr-hover-card>
    <gr-hover-card title="WIKI攻略" desc="introduction" color="aqua"
        href="/"
        style="background-image: url(/gr-component-doc/imgs/other/WIKI攻略.png);"></gr-hover-card>
</div>

::: details 查看代码

`css`

```css
.main-wrap {
  width: 100%;
  height: 20rem;

  display: flex;
}
```

`html`

```html
<div class="main-wrap">
  <gr-hover-card
    title="官方周边"
    desc="products"
    color="blue"
    href="/"
    style="background-image: url(./assets/imgs/other/官方周边.png);"
  >
  </gr-hover-card>
  <gr-hover-card
    title="官方漫画"
    desc="cartoon"
    color="red"
    style="background-image: url(./assets/imgs/other/官方漫画.png);"
  ></gr-hover-card>
  <gr-hover-card
    title="WIKI攻略"
    desc="introduction"
    color="aqua"
    style="background-image: url(./assets/imgs/other/WIKI攻略.png);"
  ></gr-hover-card>
</div>
```

:::

## Attributes

| 参数  | 说明   | 类型   | 可选值 | 默认值 |
| ----- | ------ | ------ | ------ | ------ |
| title | 标题名 | string | -      | -      |
| desc  | 副标题 | string | -      | -      |
| color | 主题色 | string | -      | -      |
| href  | 链接   | string | -      | -      |

## Css Part

> 用法可参考 [MDN ::part()伪类](https://developer.mozilla.org/zh-CN/docs/Web/CSS/::part)

| 参数      | 说明   |
| --------- | ------ |
| container | 根容器 |
| info-wrap | 遮罩层 |
| title     | 标题   |
| desc      | 副标题 |
