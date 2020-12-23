<template>
  <div class="m-auto w-full md:w-2/3 px-4">
    <h1 class="text-6xl font-bold mb-4">{{ title }}</h1>
    <p class="text-lg mb-8">{{ description }}</p>
    <div class="mb-8">
      <SbRichText :text="body" />
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ app }) {
    try {
      const { data } = await app.$storyapi.get(`cdn/stories/home`, {
        version: process.env.STORYBLOK_VERSION || 'draft',
      })
      return {
        ...data.story.content,
      }
    } catch (e) {
      console.error(e)
    }
  },
}
</script>

<style lang="postcss"></style>
