let DirectiveHtml = {
  template: `<div>
                <h1 v-text="title"></h1>
                <p v-html="message"></p>
              </div>
              `,
  data() {
    return {
      title: 'Directiva V-Html',
      message: '<b>Hola desde directive html</b>',
    }
  },
}