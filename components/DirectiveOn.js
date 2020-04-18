let DirectiveOn = {
  template: `<div>
                <h1 v-text="title"></h1>
                <p v-html="message"></p>
                <button v-on:click="decir_hola">Dame Click</button>
              </div>
              `,
  data() {
    return {
      title: 'Directiva V-ON',
      message: '<b>Hola desde directive v-On</b>',
      welcometext: 'Bienvenidos desde datos',
      user: {
        permission: false,
      }
    }
  },
  methods: {
    decir_hola: function () {
      alert(this.welcometext)
    }
  }
}