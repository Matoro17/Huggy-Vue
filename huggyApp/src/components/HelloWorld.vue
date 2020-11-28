<template>
  <div class="hello">
    <nav class="navbar navbar-dark bg-dark">
      <span class="navbar-brand mb-0 h1">HuggyApp</span>
    </nav>
    <ul id="example-1">
      <li v-for="atalho in atalhos" :key="atalho.index">
        <card v-bind:atalho="atalho"></card>
      </li>
    </ul>
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
      <button class="btn btn-primary rounded" id="show-modal" @click="showmodal = true"><font-awesome-icon :icon="['fas', 'plus']" /></button>
    </div>
    <transition name="fade" appear>
      <div class="modal-overlay" v-if="showmodal"></div>
    </transition>
  </div>
</template>

<script>
//var code = def5020073913413b4f1090aa3b38d3bf73b98e7ad190a65cbd45b2e21665a5c7527882ca520a78d656c6f987c5058dd1181a0c08eaaab95c8ee1538567b859f9997cad3c09bc2c64f677b65c981bcc3f4a7128f9ff7f91b5e65e454c4b5f42ff7337cc64d42ea161e0877ae28466169ba8e480ede4e0b206fed4bfa1017a6e64deda44be5679b0d6a76923a066a45a6595e6f390d9432ef8feae2f9729017f39b00b2644b841927ef14dd4ecb630d68254c06ccf3e59b0d95a321fe21907d5433d499f9e85ab31c2832b4ed9c8932171e3794ec19fd9943a0ba1224ad9206a0d6341e65be6e57f3ea47aeb3d8947f7f6e78324530f7ea9d2155b596cca91f2375a1de09c11d3cbdd47bed3b0d10dd74eb52a4cfa17c6edffb242abb7cde99f597515ca05a3c4fffcc2bf119187838d7b448a1ffee528087a9ac38841b36d028e3c414f4e54efd1ca07be17391b5cce31e9f60af10f847fd7d1857896773d7e0f2df239d5f9b91967c454575e3c93b176b57aad90c4abab710d52a7df915bac146dd3cf5af50dda1cf460be319f918f8f60f14f8219c7aca7c10fe1b1cda2171870682ddc0b9c3344c9a;

import card from './card.vue'
//import atalhos from './../assets/atalhos'
import atalhos from './../services/atalhos'

export default {
  mounted(){
    atalhos.listar().then(resposta=> {this.atalhos = resposta.data})
  },
  components: { card },
  name: 'HelloWorld',
  data () {
    return {
      showmodal: true,
      atalhos: [],
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
