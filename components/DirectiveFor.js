let DirectiveFor = {
  template: `<div>
                <h1 v-text="title"></h1>
                <p v-html="message"></p>
                <ul>
                  <li v-for= "(item,key,index) in object_list" :key="index">
                  {{ key}} : {{item}}
                  </li>
                </ul>
              </div>
              `,
  data() {
    return {
      title: 'Directiva V-show',
      message: '<b>Hola desde directive v-for</b>',
      list: ['Red', 'Yellow', 'Blue', 'Purple', 'Pink'],
      object_list: {
        name: 'Jaime',
        last_name: 'Salas',
        nick: 'Jaime Andres'
      }
    }
  },
}