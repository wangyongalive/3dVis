import { createApp, h } from 'vue';
import DialogComponent from './index.vue';

let currentInstanceId = null;
let appInstance = null;
let container = null;

function useDialog() {
  const open = (content, { id, dialogProps = {}, contentProps = {} } = {}, target = document.body) => {
    const isNewInstance = id !== currentInstanceId;

    if (isNewInstance) {
      // 如果是不同的弹出框，先关闭旧的弹出框
      close();
      // 创建新的容器
      container = document.createElement('div');
      target.appendChild(container);

      currentInstanceId = id; // 更新当前弹出框的id

      // 创建内容组件
      const isHtmlString = typeof content === 'string';
      const ContentComponent = {
        render() {
          return isHtmlString ? h('div', { innerHTML: content }) : h(content, contentProps);
        }
      };

      // 创建并挂载Vue应用实例
      appInstance = createApp({
        render() {
          return h(DialogComponent, {
            ...dialogProps,
            'onUpdate:visible': (newVal) => {
              if (!newVal) close();
              if (dialogProps['onUpdate:visible']) {
                dialogProps['onUpdate:visible'](newVal);
              }
            },
          }, { default: () => h(ContentComponent) });
        }
      });
      appInstance.mount(container);

    } else if (container && appInstance) {
      // 如果是相同的弹出框，只更新位置
      const { left, top } = dialogProps;
      Object.assign(container.children[0].style, {
        left,
        top
      });
    }
  };

  const close = () => {
    if (appInstance && container) {
      console.log(appInstance, 'appInstance')
      appInstance.unmount();
      container.remove();
      appInstance = null;
      container = null;
      currentInstanceId = null; // 重置当前弹出框的id
    }
  };

  return { open, close };
}

export default useDialog;
