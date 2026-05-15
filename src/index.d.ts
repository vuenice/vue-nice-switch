import { DefineComponent } from 'vue';

declare const VueNiceSwitch: DefineComponent<{
  modelValue: boolean;
  label?: string;
  disabled?: boolean;
  size?: 'sm' | 'md' | 'lg';
}, {
  'update:modelValue': (value: boolean) => void;
  'on-handle-switch-click': () => void;
  'open-disabled-modal': () => void;
}, {}>;

export { VueNiceSwitch };

export default {
  install(app: any): void;
};