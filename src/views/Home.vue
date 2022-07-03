<template>
  <div>
    <mavon-editor
      :value="article.content"
      default-open="preview"
      :subfield="false"
      :toolbars-flag="false"
      :ishljs="true"
      :navigation="isPC()"
      code-style="a11y-dark"
    />
  </div>
</template>

<script>
import { mavonEditor } from "mavon-editor"
import "mavon-editor/dist/css/index.css"
import {markdown} from '@/assets/js/markdown.js'
import Clipboard from "clipboard"
export default {
  name: 'Home',
  components: {
    mavonEditor
  },
  data () {
    return {
      article: '',
      loading: true,
      toc: [],
      result: '',
    }
  },
  mounted() {
    this.loading = true
    let id = this.$route.params.id
    this.$api.article.getArticle(id)
      .then(data =>{
        this.article = data["data"]
        this.article.content = markdown(mavonEditor, this.article.content)
      })
      .catch( error => console.log(error)
    ).finally(() => this.loading = false)
    
    this.$nextTick(() => {
      let clipboard = new Clipboard(".copy-btn");
      // 复制成功失败的提示
      clipboard.on("success", () => {
        this.$toast.success("复制成功");
      });
      clipboard.on("error", () => {
        this.$toast.error("复制失败");
      })
    }) 
},
  methods:{
    render(){
    },
    isPC() {  
       var userAgentInfo = navigator.userAgent;  
       var Agents = ['Android', 'iPhone',  
           'SymbianOS', 'Windows Phone',  
           'iPad', 'iPod'  
       ];  
       var flag = true;  
       for (var i = 0; i < Agents.length; i++) {  
           if (userAgentInfo.indexOf(Agents[i]) != -1) {  
               flag = false;  
               break;  
           }  
       }  
       return flag;  
   } 
  },
  
}
</script>

<style scoped>
::v-deep .v-note-wrapper .v-note-panel .v-note-navigation-wrapper.transition{
  display: none;
}
</style>