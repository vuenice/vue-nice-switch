# @vuenice/switch

Vue 3 toggle/switch component using Headless UI.

## Installation

```bash
npm install @vuenice/switch
```

## Usage

```vue
<script setup>
import { ref } from 'vue';
import { VueNiceSwitch } from '@vuenice/switch';

const enabled = ref(false);
</script>

<template>
  <VueNiceSwitch v-model="enabled" label="Enable feature" />
</template>
```

## Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `modelValue` | `Boolean` | No | `false` | Switch state |
| `label` | `String` | No | `''` | Label text |
| `disabled` | `Boolean` | No | `false` | Disabled state |
| `size` | `String` | No | `'md'` | Size: `'sm'`, `'md'`, `'lg'` |

## Events

| Event | Payload | Description |
|-------|---------|-------------|
| `update:modelValue` | `Boolean` | State change |

## Example

```vue
<VueNiceSwitch
  v-model="isEnabled"
  label="Dark mode"
  size="md"
/>
```

## With Size

```vue
<VueNiceSwitch v-model="val" size="sm" />
<VueNiceSwitch v-model="val" size="md" />
<VueNiceSwitch v-model="val" size="lg" />
```

## License

MIT