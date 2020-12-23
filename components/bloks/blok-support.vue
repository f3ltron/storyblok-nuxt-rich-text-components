<template>
  <div class="support w-full lg:w-1/2">
    <div class="rounded-lg shadow-xl p-4 flex">
      <div class="flex items-center w-1/3">
        <img
          :src="body.avatar.filename"
          :alt="body.avatar.alt"
          class="rounded-full object-cover"
        />
      </div>
      <div class="p-2 w-2/3">
        <p class="mb-4">{{ body.description }}</p>
        <a
          target="_blank"
          :href="body.url"
          class="bg-yellow-400 text-black px-4 py-2 rounded-lg flex items-center w-40"
        >
          <Coffee class="w-6 h-6 mr-2" />
          <span>Buy coffee</span>
        </a>
      </div>
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
.support {
  @apply m-auto my-4;
}
</style>
