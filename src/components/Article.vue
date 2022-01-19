<template>
  <div>
    <mavon-editor v-model="article.content" />
  </div>
</template>

<script>
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'

export default {
  name: 'ArticleCard',
  props: {
      article: {
        type: Object,
        default: null
      }
  },
  components:{
    mavonEditor
  }
}
</script>
