<script setup> 
import { onMounted } from 'vue'

onMounted(() => { 
    import('../components/gr-tabs/index.js')

    const mockList = [
        {
            prefix: "【最新】",
            content: "《战双帕弥什》锈夜逐光版本一览",
            surfix: "【2024-11-07】",
            href: ""
        },
        {
            prefix: "【最新】",
            content: "《战双帕弥什》新版本「锈夜逐光」PV公开 | 时轮重构，孤影洄光",
            surfix: "【2024-11-06】",
            href: ""
        },
        {
            prefix: "【最新】",
            content: "《锈夜逐光》版本更新公告",
            surfix: "【2024-11-05】",
            href: ""
        },
    ];

    const grTab = document.querySelector("#grTab");
    const fetchData = () => new Promise(resolve => {
        setTimeout(() => {
            resolve({ data: mockList })
        }, 200);
    })
    grTab.addEventListener("gr-tabs-load", async () => {
        const tab1 = grTab.shadowRoot.querySelector("[data-tab-title='标签一']");
        fetchData().then(res => {
            const template = window.$renderGrList(tab1, res.data);
        })
    });
}) 
</script>

<style>
#grTab::part(list-wrap) {
  min-height: 10rem;
}
</style>

# Tab 标签页

- `gr-tabs`：标签页的根组件，其子元素只能是 `gr-tab` 组件。

- `gr-tab`：标签页的子组件，每个标签页的内容在此定义。

- `gr-list`：标签页内的列表元素。

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

移步到 [CSS Part](#gr-tabs-css-part)。

## 基本用法

:::tip
内置了 `触摸拖动切换` 的功能
:::

<gr-tabs>
    <gr-tab title="标签一">
        <gr-list>
            <div slot="prefix">【最新】</div>
            <div>《战双帕弥什》锈夜逐光版本一览</div>
            <div slot="suffix">【2024-11-07】</div>
        </gr-list>
    </gr-tab>
    <gr-tab title="标签二">
        <gr-list>
            <div slot="prefix">【攻略】</div>
            <div>content</div>
            <div slot="suffix">【2023-11-07】</div>
        </gr-list>
    </gr-tab>
    <div slot="footer">
        <button>hhhh</button>
    </div>
</gr-tabs>

::: details 查看代码

`html`

```html
<gr-tabs id="grTab">
  <gr-tab title="标签一">
    <gr-list>
      <div slot="prefix">【最新】</div>
      <div>《战双帕弥什》锈夜逐光版本一览</div>
      <div slot="suffix">【2024-11-07】</div>
    </gr-list>
  </gr-tab>
  <gr-tab title="标签二">
    <gr-list>
      <div slot="prefix">【攻略】</div>
      <div>content</div>
      <div slot="suffix">【2023-11-07】</div>
    </gr-list>
  </gr-tab>
  <div slot="footer">
    <button>hhhh</button>
  </div>
</gr-tabs>
```

:::

## 批量渲染列表元素

:::warning
需要注意的是，若数据的获取是异步操作。那么最好给内容区域设置一个最小高度，避免出现页面抖动。

```css
gr-tabs::part(list-wrap) {
  min-height: 10rem;
}
```

:::

<gr-tabs id="grTab">
    <gr-tab title="标签一"></gr-tab>
    <gr-tab title="标签二">
        <gr-list>
            <div slot="prefix">【攻略】</div>
            <div>content</div>
            <div slot="suffix">【2023-11-07】</div>
        </gr-list>
    </gr-tab>
    <div slot="footer">
        <button>hhhh</button>
    </div>
</gr-tabs>

::: details 查看代码

`html`

```html
<gr-tabs id="grTab">
  <gr-tab title="标签一"></gr-tab>
  <gr-tab title="标签二">
    <gr-list>
      <div slot="prefix">【攻略】</div>
      <div>content</div>
      <div slot="suffix">【2023-11-07】</div>
    </gr-list>
  </gr-tab>
  <div slot="footer">
    <button>hhhh</button>
  </div>
</gr-tabs>
```

`js`

```js
// 标签页元素
const grTab = document.querySelector("#grTab");

// 模拟数据
const mockList = [
  {
    prefix: "【最新】",
    content: "《战双帕弥什》锈夜逐光版本一览",
    surfix: "【2024-11-07】",
    href: "",
  },
  {
    prefix: "【最新】",
    content: "《战双帕弥什》新版本「锈夜逐光」PV公开 | 时轮重构，孤影洄光",
    surfix: "【2024-11-06】",
    href: "",
  },
  {
    prefix: "【最新】",
    content: "《锈夜逐光》版本更新公告",
    surfix: "【2024-11-05】",
    href: "",
  },
];
// 模拟数据获取
const fetchData = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve({ data: mockList });
    }, 200);
  });

// 当组件加载完毕时，使用 window.$renderGrList 进行列表渲染
grTab.addEventListener("gr-tabs-load", async () => {
  // 因为组件会将传入的 gr-tab 转换成普通元素，所以这里是需要使用 gr-tab 上传入的标签名作为唯一标识。
  const tab1 = grTab.shadowRoot.querySelector("[data-tab-title='标签一']");
  fetchData().then((res) => {
    const template = window.$renderGrList(tab1, res.data);
  });
});
```

:::

:::tip
在组件引入后，会在 `window` 对象上挂载名为 `$renderGrList` 的函数。

```js
/**
 * @typedef {Object} Option
 * @property {String} prefix - 前缀内容
 * @property {String} content - 内容
 * @property {String} surfix - 后缀内容
 * @property {String} href - 链接
 */

const option = {
  prefix: String,
  content: String,
  surfix: String,
  href: String,
};

/**
 * 渲染 gr-list 元素到指定的根容器
 * @param {HTMLElement} root - 元素挂载的根容器
 * @param {Array.<Option>} optionsArr - 元素的配置信息数组
 */
window.$renderGrList(root, optionsArr);
```

:::

## Gr-tab Attributes

| 参数  | 说明   | 类型   | 可选值 | 默认值 |
| ----- | ------ | ------ | ------ | ------ |
| title | 标签名 | string | -      | -      |

## Gr-list Attributes

| 参数 | 说明     | 类型   | 可选值 | 默认值 |
| ---- | -------- | ------ | ------ | ------ |
| href | 链接地址 | string | -      | -      |

## Gr-list Slot

| 名称   | 说明     |
| ------ | -------- |
| -      | 默认插槽 |
| footer | 底部插槽 |

## Gr-tabs CSS Part

> 用法可参考 [MDN ::part()伪类](https://developer.mozilla.org/zh-CN/docs/Web/CSS/::part)

| 名称           | 说明   |
| -------------- | ------ |
| main-container | 根容器 |

- ### 标签页顶部

| 名称          | 说明                           |
| ------------- | ------------------------------ |
| tab-wrap      | 顶部的根容器                   |
| tab-list-wrap | 标签元素列表的容器             |
| tab-item      | 标签元素                       |
| tab-line      | 标签选中时，底部跟随的线       |
| tab-cursor    | 标签选中时，标签左边跟随的箭头 |
| cursor-tail   | 跟随的箭头的尾部               |
| cursor-arrow  | 跟随的箭头的头部               |

- ### 标签页的内容部分

| 名称         | 说明                 |
| ------------ | -------------------- |
| content-wrap | 标签页的内容的根容器 |
| list-wrap    | 标签页的内容容器     |
| content-item | 内容元素             |

- ### 标签页底部

| 名称        | 说明           |
| ----------- | -------------- |
| footer-wrap | 标签页底部容器 |

## Gr-list CSS Part

> 用法可参考 [MDN ::part()伪类](https://developer.mozilla.org/zh-CN/docs/Web/CSS/::part)

| 名称      | 说明   |
| --------- | ------ |
| container | 根容器 |

- ### 前半部分

| 名称         | 说明             |
| ------------ | ---------------- |
| content-wrap | 前半部分的根容器 |
| prefix-desc  | 前缀内容容器     |
| msg-wrap     | 内容容器         |

- ### 后半部分

| 名称        | 说明         |
| ----------- | ------------ |
| suffix-desc | 后缀内容容器 |
