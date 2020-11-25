<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
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
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Blog da Maciota',
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
</style>
