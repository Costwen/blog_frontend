<template>
  <div>
    <mavon-editor
      v-model="article.content"
    />
  </div>
</template>

<script>

export default {
  name: 'ArticleCard',
  props: {
      article: {
        type: Object,
        default: null
      }
  },
}
</script>

<style>
</style>