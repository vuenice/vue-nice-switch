import { describe, it, expect, vi } from 'vitest';
import { mount } from '@vue/test-utils';
import VueNiceSwitch from '@/VueNiceSwitch.vue';

describe('VueNiceSwitch', () => {
  it('renders with default props', () => {
    const wrapper = mount(VueNiceSwitch, {
      props: { modelValue: false },
    });
    expect(wrapper.exists()).toBe(true);
  });

  it('renders with label', () => {
    const wrapper = mount(VueNiceSwitch, {
      props: { modelValue: false, label: 'Enable feature' },
    });
    expect(wrapper.text()).toContain('Enable feature');
  });

  it('renders without label when not provided', () => {
    const wrapper = mount(VueNiceSwitch, {
      props: { modelValue: false },
    });
    expect(wrapper.text()).toBe('');
  });

  it('applies correct size classes for sm', () => {
    const wrapper = mount(VueNiceSwitch, {
      props: { modelValue: false, size: 'sm' },
    });
    const switchEl = wrapper.find('[class*="h-\\[19px\\]"]');
    expect(switchEl.exists()).toBe(true);
  });

  it('applies correct size classes for md', () => {
    const wrapper = mount(VueNiceSwitch, {
      props: { modelValue: false, size: 'md' },
    });
    const switchEl = wrapper.find('[class*="h-6 w-11"]');
    expect(switchEl.exists()).toBe(true);
  });

  it('applies correct size classes for lg', () => {
    const wrapper = mount(VueNiceSwitch, {
      props: { modelValue: false, size: 'lg' },
    });
    const switchEl = wrapper.find('[class*="h-7 w-14"]');
    expect(switchEl.exists()).toBe(true);
  });

  it('emits update:modelValue when toggled', async () => {
    const wrapper = mount(VueNiceSwitch, {
      props: { modelValue: false },
    });
    await wrapper.find('button').trigger('click');
    expect(wrapper.emitted('update:modelValue')).toBeTruthy();
    expect(wrapper.emitted('update:modelValue')[0]).toEqual([true]);
  });

  it('does not toggle when disabled', async () => {
    const wrapper = mount(VueNiceSwitch, {
      props: { modelValue: false, disabled: true },
    });
    await wrapper.find('button').trigger('click');
    expect(wrapper.emitted('update:modelValue')).toBeFalsy();
    expect(wrapper.emitted('open-disabled-modal')).toBeTruthy();
  });

  it('emits on-handle-switch-click when toggled', async () => {
    const wrapper = mount(VueNiceSwitch, {
      props: { modelValue: false },
    });
    await wrapper.find('button').trigger('click');
    expect(wrapper.emitted('on-handle-switch-click')).toBeTruthy();
  });

  it('applies disabled styling when disabled', () => {
    const wrapper = mount(VueNiceSwitch, {
      props: { modelValue: false, disabled: true },
    });
    const switchEl = wrapper.find('button');
    expect(switchEl.classes()).toContain('opacity-50');
    expect(switchEl.classes()).toContain('cursor-not-allowed');
  });

  it('updates internal value when modelValue prop changes', async () => {
    const wrapper = mount(VueNiceSwitch, {
      props: { modelValue: false },
    });
    await wrapper.setProps({ modelValue: true });
    expect(wrapper.vm.internalValue).toBe(true);
  });

  it('renders label with correct size classes', () => {
    const wrapper = mount(VueNiceSwitch, {
      props: { modelValue: false, label: 'Test', size: 'sm' },
    });
    const label = wrapper.find('span.ml-3');
    expect(label.classes()).toContain('text-sm');
  });

  it('renders label with medium size', () => {
    const wrapper = mount(VueNiceSwitch, {
      props: { modelValue: false, label: 'Test', size: 'md' },
    });
    const label = wrapper.find('span.ml-3');
    expect(label.classes()).toContain('text-base');
  });

  it('renders label with large size', () => {
    const wrapper = mount(VueNiceSwitch, {
      props: { modelValue: false, label: 'Test', size: 'lg' },
    });
    const label = wrapper.find('span.ml-3');
    expect(label.classes()).toContain('text-lg');
  });

  it('shows on state with correct classes', () => {
    const wrapper = mount(VueNiceSwitch, {
      props: { modelValue: true },
    });
    const switchEl = wrapper.find('button');
    expect(switchEl.classes()).toContain('bg-primary-900');
  });

  it('shows off state with correct classes', () => {
    const wrapper = mount(VueNiceSwitch, {
      props: { modelValue: false },
    });
    const switchEl = wrapper.find('button');
    expect(switchEl.classes()).toContain('bg-gray-200');
  });
});