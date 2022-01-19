<template>
  <div>
    <div>
      <div
        v-for="item in toc"
        :key="item.name"
      >
        <a @click="scrollToPosition(item.href)">{{ item.name }}</a>
      </div>
    </div>

    <mavon-editor
      v-if="!loading"
      v-model="article.content"
      default-open="preview"
      :toolbars-flag="false"
      code-style="github-dark-dimmed"
      :subfield="false"
      :ishljs="true"
      :navigation="true"
    />
  </div>
</template>

<script>
import $ from 'jquery'
export default {
  name: 'Home',
  data () {
    return {
      article: {},
      loading: true,
      toc: []
    }
  },
  mounted() {
    this.loading = true
    let id = this.$route.params.id
    this.$api.article.getArticle(id)
      .then(data => this.article = data["data"])
      .catch( error => console.log(error)
    ).finally(() => this.loading = false)
    let toc=[]
    this.$nextTick(()=>{
      const aArr = $('.v-note-wrapper .v-note-panel .v-note-navigation-wrapper .v-note-navigation-content a').toArray()
      aArr.forEach(item => {
        let href = $(item).attr('id')
        let name = $(item).parent().text()
        if (href){
          toc.push({
            href: '#' + href,
            name,
          })
        }
      })
      console.log(toc)
    }
    )
},
  methods:{
    scrollToPosition(id){
      let position = $(id).offset();
      position.top -= 80
      $("html,body").animate({scrollTop:position.top}, 1000)
    }
  }
}
</script>

<style scoped>
</style>