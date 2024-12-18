export const stylesheet = `
:host {
  --transition-duration: 0.4s;
}

.tabs-container .tab-wrap {
  position: relative;
  user-select: none;
}
.tabs-container .tab-wrap .tab-list-wrap {
  display: flex;
  align-items: center;
}
.tabs-container .tab-wrap .tab-list-wrap .tab-item {
  --sign-text: "";
  --sign-color: red;
  --sign-font-size: 0.9rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  perspective: 1px;
  position: relative;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  padding: 0.75rem 1.25rem;
  cursor: pointer;
  color: white;
  z-index: 0;
}
.tabs-container .tab-wrap .tab-list-wrap .tab-item:hover .title {
  color: darkgrey;
}
.tabs-container .tab-wrap .tab-list-wrap .tab-item .index {
  position: absolute;
  left: 0;
  top: 0;
  color: var(--sign-color);
  font-size: var(--sign-font-size);
  filter: opacity(0);
  transition: filter var(--transition-duration);
}
.tabs-container .tab-wrap .tab-list-wrap .tab-item .index::after {
  content: "";
  position: absolute;
  right: -1px;
  bottom: -1px;
  width: 1px;
  height: 0.75rem;
  transform: rotate(45deg);
  background-color: red;
}
.tabs-container .tab-wrap .tab-list-wrap .tab-item.active .index {
  filter: opacity(1);
}
.tabs-container .tab-wrap .tab-line {
  --tab-line-height: 1.25px;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 1.25rem;
  height: var(--tab-line-height);
  background-color: red;
  transition: left var(--transition-duration);
}
.tabs-container .tab-wrap .tab-line::before {
  content: "";
  position: absolute;
  left: -4px;
  top: 0;
  width: 2px;
  height: var(--tab-line-height);
  background-color: red;
}
.tabs-container .tab-wrap .tab-cursor {
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(50%);
  transition: left var(--transition-duration);
}
.tabs-container .tab-wrap .tab-cursor .cursor-tail {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 3px;
  height: 3px;
  background-color: red;
}
.tabs-container .tab-wrap .tab-cursor .cursor-arrow {
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%) rotate(-45deg);
  width: 0.5rem;
  height: 0.5rem;
  border: 2px solid red;
  border-radius: 3px;
  border-top: transparent;
  border-left: transparent;
}
.tabs-container .content-wrap {
  overflow: hidden;
}
.tabs-container .content-wrap .list-wrap {
  display: flex;
  transition: transform var(--transition-duration);
}
.tabs-container .content-wrap .list-wrap .content-item {
  flex: 1 0 100%;
  width: 100%;
}
.tabs-container .content-wrap .list-wrap .content-item gr-list:nth-child(odd) {
  --odd-background-color: rgba(255, 255, 255, 0.1);
}
`;