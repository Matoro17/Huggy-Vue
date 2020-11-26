<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div containter-fluid>
      <card></card><card></card><card></card>
    </div>
    <card></card>
    <h2>Comente</h2>
    <div class="form-todo" form-group>
      <p>
        <input placeholder="Nome" type="text" name="author" class="form-control" v-model="name">

      </p>
      <p>
        <input placeholder="Comentário"  name="message" class="form-control" v-model="message">

      </p>
      <button v-on:click="addComment" type="submit"  class="btn btn-primary">Comentar</button>
    </div>
    <h2>Comentários</h2>
    <ul>
      <li v-for="comment in comments" :key="comment.id">
        <div container>
          <p>{{comment.name}}</p>
          <p>{{comment.message}}</p>
          <a title="Excluir" v-on:click.prevent="removeComment(comment.id)">Excluir</a>
        </div>
      </li>
    </ul>
    <div id="links-fixos">
      <a href="link-para-pagina">
      <button class="btn btn-primary rounded"><font-awesome-icon :icon="['fas', 'plus']" /></button>
    </a>
    </div>
  </div>
</template>

<script>
import card from './card.vue'
export default {
  components: { card },
  name: 'HelloWorld',
  data () {
    return {
      msg: 'HuggyApp',
      comments: [
        {name: 'johson', message: 'lalala'}
      ],
      name: '',
      message: ''
    }
  },
  methods: {
    addComment () {
      if (this.name.trim() === '' || this.message.trim() === '') {
        return
      }
      this.comments.push({name: this.name, message: this.message})
      this.name = ''
      this.message = ''
    },
    removeComment (index) {
      this.comments.splice(index, 1)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
#links-fixos{
  /*você pode alterar largura usando width*/
  padding:5px;
  background:rgba(0,0,0,0);
  position:fixed;
  top:85%;/*altura da classe*/
  left:1%;
}
.rounded{
  width: 5rem;
  height: 5rem;
  font-size: 2.5rem;
}
</style>
