<script setup> 
import { onMounted } from 'vue'

onMounted(() => { 
    import('../components/gr-picture/index.js').then(res => {

    const mockData = [
        "./imgs/other/WIKI攻略.png",
        "./imgs/other/官方周边.png",
        "./imgs/other/官方漫画.png",
        "./imgs/other/官方周边.png",
        "./imgs/other/WIKI攻略.png",
    ];

    const mockFetchData = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve({ data: mockData })
            }, 200);
        })
    }

    const container1 = document.querySelector("gr-picture");
    mockFetchData().then(res => {
        container1.pictures = res.data;
    })

    })
}) 
</script>

<style>
.main-container {
    width: 100%;
    height: 30rem;

    overflow: auto;
}
</style>

# Picture 壁纸

## 自定义样式

移步到 [CSS Part](#gr-picture-css-part)。

## 基本用法

<div class="main-container">
    <gr-picture></gr-picture>
</div>

::: details 查看代码

```css
.main-container {
  width: 100%;
  height: 30rem;

  overflow: auto;
}
```

`html`

```html
<div class="main-container">
  <gr-picture></gr-picture>
</div>
```

`js`

```js
// 测试数据
const mockData = [
  "../../assets/imgs/other/WIKI攻略.png",
  "../../assets/imgs/other/官方周边.png",
  "../../assets/imgs/other/官方漫画.png",
  "../../assets/imgs/other/官方周边.png",
  "../../assets/imgs/other/WIKI攻略.png",
];

// 模拟数据获取
const mockFetchData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ data: mockData });
    }, 200);
  });
};

const container = document.querySelector("gr-picture");
mockFetchData().then((res) => {
  container.pictures = res.data; // 为该元素设置图片列表
});
```

:::

## 无限加载

:::tip
当传入的所有图片渲染完成之后，再次触底，将会触发 `gr-picture-render-finished` 事件。仅需在 `document` 对象上添加监听事件即可。

```js
document.addEventListener("gr-picture-render-finished", () => {
  console.log("finished");
});
```

:::

<iframe src="https://luminaqaq.github.io/GrayRaven/components/gr-picture/utils/renderer.html" width="100%" height="400px"></iframe>

::: details 查看代码

`html`

```html
<div class="main-container"></div>
```

`js`

```js
const mockData = [
  "../../../../assets/imgs/other/WIKI攻略.png",
  "../../../../assets/imgs/other/官方周边.png",
  "../../../../assets/imgs/other/官方漫画.png",
  "../../../../assets/imgs/other/官方周边.png",
  "../../../../assets/imgs/other/WIKI攻略.png",
  "../../../../assets/imgs/home-bg.png",
  "../../../../assets/imgs/other/WIKI攻略.png",
  "../../../../assets/imgs/other/官方周边.png",
  "../../../../assets/imgs/other/官方漫画.png",
  "../../../../assets/imgs/other/官方周边.png",
  "../../../../assets/imgs/other/WIKI攻略.png",
  "../../../../assets/imgs/other/WIKI攻略.png",
];

const container = document.querySelector(".main-container");
window.$GrPictureInfinateScrollRenderer({ root: container, urls: mockData });
```

:::

## Attributes

| 参数     | 说明     | 类型  | 可选值 | 默认值 |
| -------- | -------- | ----- | ------ | ------ |
| pictures | 图片链接 | Array | -      | -      |

## Gr-picture CSS Part

> 用法可参考 [MDN ::part()伪类](https://developer.mozilla.org/zh-CN/docs/Web/CSS/::part)

| 参数      | 说明   |
| --------- | ------ |
| container | 根容器 |

- ### 左边部分

| 参数            | 说明           |
| --------------- | -------------- |
| left-wrap       | 左边部分根容器 |
| left-top-img    | 上面的图片     |
| left-bottom-img | 下面的图片     |

- ### 中间部分

| 参数        | 说明           |
| ----------- | -------------- |
| center-wrap | 中间部分根容器 |
| center-img  | 中间的图片     |

- ### 右边部分

| 参数             | 说明           |
| ---------------- | -------------- |
| right-wrap       | 右边部分根容器 |
| right-top-img    | 上面的图片     |
| right-bottom-img | 下面的图片     |

## Gr-sg-img CSS Part

| 参数            | 说明           |
| --------------- | -------------- |
| container       | 根容器         |
| search-icon     | 搜索图标的容器 |
| search-glass    | 搜索图标的镜框 |
| search-handgrip | 搜索图标的手柄 |
| img             | 图片           |
