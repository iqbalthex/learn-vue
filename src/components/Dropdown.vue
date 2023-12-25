<template>
  <button class="toggle-btn">
    <slot name="toggler" />
  </button>

  <div class="items">
    <slot name="items" />
  </div>
</template>

<style scoped>
.toggle-btn:not(:focus) ~ .items {
  @apply hidden;
}
</style>
