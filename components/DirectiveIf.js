let DirectiveIf = {
  template: `<div>
                <h1 v-text="title"></h1>
                <p v-show="bandera" v-html="message"></p>
                <p v-show="user.permission">'El usuario tiene permiso de ver esto'</p>
              </div>
              `,
  data() {
    return {
      title: 'Directiva V-show',
      message: '<b>Hola desde directive v-show</b>',
      bandera: true,
      user: {
        permission: false,
      }
    }
  },
}