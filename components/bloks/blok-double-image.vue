<template>
  <div class="flex -mx-2 my-4">
    <div class="px-2 w-1/2">
      <div
        class="bg-image"
        :style="{ backgroundImage: `url('${body.one.filename}')` }"
      ></div>
    </div>
    <div class="px-2 w-1/2">
      <div
        class="bg-image"
        :style="{ backgroundImage: `url('${body.two.filename}')` }"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    body: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style lang="postcss">
.bg-image {
  height: 400px;
  @apply bg-cover bg-center bg-no-repeat;
}
</style>
