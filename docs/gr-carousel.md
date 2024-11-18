<script setup> 
import { onMounted } from 'vue'

onMounted(() => { 
    import('../components/gr-carousel/index.js')
}) 
</script>

# Carousel 轮播图

- `gr-carousel`：轮播图的根组件，其子元素只能是 `gr-carousel-item` 组件。

- `gr-carousel-item`：轮播图的子组件，每个轮播图的内容在此定义。

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

移步到 [CSS Part](#gr-carousel-css-part)。

## 基本用法

:::tip
内置了 `鼠标拖动切换` 和 `触摸拖动切换` 的功能
:::

<gr-carousel>
    <gr-carousel-item>1</gr-carousel-item>
    <gr-carousel-item>
        <img src="./assets/imgs/home-bg.png" alt="">
    </gr-carousel-item>
    <gr-carousel-item>3</gr-carousel-item>
</gr-carousel>

::: details 查看代码

```html
<gr-carousel>
  <gr-carousel-item>1</gr-carousel-item>
  <gr-carousel-item>
    <img src="./assets/imgs/home-bg.png" alt="" />
  </gr-carousel-item>
  <gr-carousel-item>3</gr-carousel-item>
</gr-carousel>
```

:::

## Gr-carousel Attributes

| 参数     | 说明                       | 类型     | 可选值 | 默认值 |
| -------- | -------------------------- | -------- | ------ | ------ |
| duration | 切换的时间间隔`(单位: ms)` | `Number` | -      | 4000   |

## Gr-carousel CSS Part

> 用法可参考 [MDN ::part()伪类](https://developer.mozilla.org/zh-CN/docs/Web/CSS/::part)

| 名称           | 说明   |
| -------------- | ------ |
| main-container | 根容器 |

- ### 轮播图顶部

| 名称            | 说明               |
| --------------- | ------------------ |
| statistics-wrap | 轮播图统计的根容器 |
| current-index   | 当前轮播图索引     |
| total-index     | 总共的轮播图个数   |

- ### 轮播图列表

| 名称          | 说明           |
| ------------- | -------------- |
| carousel-wrap | 轮播图列表容器 |

- ### 轮播图底部

| 名称           | 说明           |
| -------------- | -------------- |
| footer-wrap    | 轮播图底部容器 |
| indicator-wrap | 指示器容器     |
| indicator-item | 指示器元素     |

## Gr-carousel-item CSS Part

> 用法可参考 [MDN ::part()伪类](https://developer.mozilla.org/zh-CN/docs/Web/CSS/::part)

| 名称      | 说明   |
| --------- | ------ |
| container | 根容器 |
