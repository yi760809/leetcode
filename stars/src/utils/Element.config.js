import ElementUI from 'element-ui';

ElementUI.Dialog.props.closeOnClickModal.default = false;   // 关闭Dialog点击窗体外关闭
ElementUI.TableColumn.props.showOverflowTooltip ={type:Boolean, default: true};   // 全局开启表格超出部分以tooltip显示


export default ElementUI