Vue.component('vue-directives', {
  template: `<div>
                <h1 v-text="title"></h1>
                <p v-text="text"></p>
                <a :href="link.href" :title="link.title" v-text="link.text"></a>
                <DirectiveHtml/>
                <DirectiveShow/>
                <DirectiveIf/>
              </div>
              `,
  data() {
    return {
      title: 'Directiva de Vue-Js',
      text: 'Texto de Prueba V-Text',
      link: {
        text: 'VueJS Home',
        href: 'https://vuejs.org/',
        title: 'Documentacion Vue Js'
      }
    }
  },
  components: {
    DirectiveHtml,
    DirectiveShow,
    DirectiveIf
  }
})