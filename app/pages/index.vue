<template>
  <div>
    <UAccordion :items="items">
      <template #content="{ item }">
        {{ item.propthatisnottypedbyui }}
      </template>
    </UAccordion>

    <UColorPicker />
  </div>
</template>

<script setup lang="ts">
const items = ref([
  {
    label: 'Icons',
    icon: 'i-lucide-smile',
    propthatisnottypedbyui: 'You have nothing to do, @nuxt/icon will handle it automatically.'
  },
  {
    label: 'Colors',
    icon: 'i-lucide-swatch-book',
    propthatisnottypedbyui: 'Choose a primary and a neutral color from your Tailwind CSS theme.'
  },
  {
    label: 'Components',
    icon: 'i-lucide-box',
    propthatisnottypedbyui: 'You can customize components by using the `class` / `ui` props or in your app.config.ts.'
  }
])
</script>