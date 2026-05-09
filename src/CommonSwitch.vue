<template>
  <div class="flex items-center">
    <Switch
      v-model="internalValue"
      :class="[
        internalValue ? 'bg-primary-900' : 'bg-gray-200',
        disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer',
        'relative inline-flex flex-shrink-0 rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary-900 focus:ring-offset-2',
        sizeClasses.switch
      ]"
      @click="handleClick"
    >
      <span class="sr-only">{{ label }}</span>
      <span
        aria-hidden="true"
        :class="[
          internalValue ? sizeClasses.toggleOn : 'translate-x-0',
          'pointer-events-none inline-block transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out',
          sizeClasses.toggle
        ]"
      />
    </Switch>
    <span 
      v-if="label"
      :class="[
        disabled ? 'text-gray-400' : 'text-gray-700',
        'ml-3 font-medium',
        sizeClasses.label
      ]"
    >
      {{ label }}
    </span>
  </div>
</template>

<script setup>
import { Switch } from '@headlessui/vue';
import { computed, ref, watch } from 'vue';

const props = defineProps({
  modelValue: {
    type: Boolean,
    required: true,
  },
  label: {
    type: String,
    default: '',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  size: {
    type: String,
    default: 'sm',
    validator: (value) => ['sm', 'md', 'lg'].includes(value),
  },
});

const emit = defineEmits(['update:modelValue', 'on-handle-switch-click', 'open-disabled-modal']);

const internalValue = ref(props.modelValue);

const handleClick = (event) => {
  if (props.disabled) {
    // If disabled, prevent default toggle behavior and emit special event
    if (event) event.preventDefault();
    emit('open-disabled-modal');
  } else {
    // If not disabled, emit the regular click event and allow toggle
    emit('on-handle-switch-click');
    internalValue.value = !internalValue.value;
    emit('update:modelValue', internalValue.value);
  }
};

const sizeClasses = computed(() => {
  switch (props.size) {
    case 'sm':
      return {
        switch: 'h-[19px] w-9',
        toggle: 'h-4 w-4',
        toggleOn: 'translate-x-4',
        label: 'text-sm',
      };
    case 'lg':
      return {
        switch: 'h-7 w-14',
        toggle: 'h-6 w-6',
        toggleOn: 'translate-x-7',
        label: 'text-lg',
      };
    default: // 'md'
      return {
        switch: 'h-6 w-11',
        toggle: 'h-5 w-5',
        toggleOn: 'translate-x-5',
        label: 'text-base',
      };
  }
});

watch(() => props.modelValue, (newValue) => {
  internalValue.value = newValue;
});

// watch(internalValue, (newValue) => {
//   emit('update:modelValue', newValue);
// });
</script>