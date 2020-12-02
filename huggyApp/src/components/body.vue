<template>
  <div class="hello">
    <nav class="navbar navbar-dark bg-dark">
      <div class="row">
        <div class="col-8">
          <span class="navbar-brand mb-0 h1">ShortHuggy</span>
        </div>
        <!-- 
        <div class="col-2 navbar-brand mb-0 h4">
          Total de Atalhos: {{atalhos.length}}
        </div> -->
      </div>
    </nav>
    <ul id="example-1">
      <li v-for="atalho in atalhos" :key="atalho.index">
        <card v-bind:atalho="atalho"></card>
      </li>
    </ul>
    <div id="links-fixos">
      <button title="Adicionar Atalho" v-b-modal.meu-modal class="btn btn-primary rounded" id="show-modal" ><font-awesome-icon :icon="['fas', 'plus']" /></button>
    </div>
    <b-modal ref="my-modal" id="meu-modal" hide-footer>
      <template #modal-title>
        <h2>Adicionar Atalho</h2>
      </template>
      <form @submit.prevent="adicionarAtalho" class="form-todo" form-group>
        {{alert}}
        <ul>
          <li>
            <p>
              <label>Nome</label>
              <input v-model="atalho.name" placeholder="Nome" type="text" name="author" class="form-control">
            </p>
          </li>
          <li>
            <p>
              <label>Key (Chave)</label>
              <input v-model="atalho.key" placeholder="Key"  name="key" class="form-control">
            </p>
          </li>
        </ul>
        <ul>
            <p>
              <label>Arquivo</label>
              <input v-model="atalho.file" placeholder="File"  name="file" class="form-control">
            </p>
            <p>
              <label>Texto</label>
              <input v-model="atalho.text" placeholder="Text"  name="text" class="form-control">
            </p>
            <label>Public</label>
            <select id="public" v-model="atalho.public" name="public" >
              <option value=true>Sim</option>
              <option value=false>Não</option>
            </select>
        </ul>
        <button type="submit" class="btn btn-primary" >Adicionar</button>
      </form>
    </b-modal>
    <b-modal ref="card-edit" id="card-edit-modal" hide-footer>
      <template #modal-title>
        <h2>Editar Atalho</h2>
      </template>
      <form @submit.prevent="editarAtalho" class="form-todo" form-group>
        {{alert}}
        <ul>
          <li>
            <p>
              <label>Nome</label>
              <input v-model="atalhoEdit.name" placeholder="Nome" type="text" name="author" class="form-control">
            </p>
          </li>
          <li>
            <p>
              <label>Key (Chave)</label>
              <input v-model="atalhoEdit.key" placeholder="Key"  name="key" class="form-control">
            </p>
          </li>
        </ul>
        <ul>
            <p>
              <label>Arquivo</label>
              <input v-model="atalhoEdit.file" placeholder="File"  name="file" class="form-control">
            </p>
            <p>
              <label>Texto</label>
              <input v-model="atalhoEdit.text" placeholder="Text"  name="text" class="form-control">
            </p>
            <label>Public</label>
            <select id="public" v-model="atalhoEdit.public" name="public" >
              <option value=true>Sim</option>
              <option value=false>Não</option>
            </select>
        </ul>
        <button type="submit" class="btn btn-primary" >Enviar</button>
      </form>
    </b-modal>
  </div>
</template>

<script>
// var code = def5020073913413b4f1090aa3b38d3bf73b98e7ad190a65cbd45b2e21665a5c7527882ca520a78d656c6f987c5058dd1181a0c08eaaab95c8ee1538567b859f9997cad3c09bc2c64f677b65c981bcc3f4a7128f9ff7f91b5e65e454c4b5f42ff7337cc64d42ea161e0877ae28466169ba8e480ede4e0b206fed4bfa1017a6e64deda44be5679b0d6a76923a066a45a6595e6f390d9432ef8feae2f9729017f39b00b2644b841927ef14dd4ecb630d68254c06ccf3e59b0d95a321fe21907d5433d499f9e85ab31c2832b4ed9c8932171e3794ec19fd9943a0ba1224ad9206a0d6341e65be6e57f3ea47aeb3d8947f7f6e78324530f7ea9d2155b596cca91f2375a1de09c11d3cbdd47bed3b0d10dd74eb52a4cfa17c6edffb242abb7cde99f597515ca05a3c4fffcc2bf119187838d7b448a1ffee528087a9ac38841b36d028e3c414f4e54efd1ca07be17391b5cce31e9f60af10f847fd7d1857896773d7e0f2df239d5f9b91967c454575e3c93b176b57aad90c4abab710d52a7df915bac146dd3cf5af50dda1cf460be319f918f8f60f14f8219c7aca7c10fe1b1cda2171870682ddc0b9c3344c9a;

import card from './card.vue'
import atalhos from './../services/atalhos'

export default {
  mounted () {
    
    this.listar()
  },
  components: { card },
  data () {
    return {
      atalhos: [],
      atalho:{
        name: '',
        key: '',
        file: '',
        text: '',
        public: Boolean
      },
      atalhoEdit:{
        name: '',
        key: '',
        file: '',
        text: '',
        public: Boolean
      },
      alert: ''
    }
  },
  methods: {
    hideModal () {
      this.$refs['my-modal'].hide()
    },
    listar () {
      atalhos.listar().then(resposta => { this.atalhos = resposta.data })
    },
    adicionarAtalho () {
      atalhos.adicionar(this.atalho).then(resp => {
        this.atalho = {}
        this.hideModal()
        this.$swal.fire('Salvo com sucesso')
        this.listar()
      }).catch(error => {
        this.errorMessage = error.message;
        this.$swal.fire('Houve um erro!')
        console.error("There was an error!", error);
      });
    
    },
    showEditModal (atalho) {
      this.$refs['card-edit'].show()
      this.atalhoEdit = atalho
    },
    editarAtalho () {
      atalhos.editar(this.atalhoEdit).then(resp => {
        this.$refs['card-edit'].hide()
        this.atalhoEdit = {}
        this.$swal.fire('Editado com sucesso')
        this.listar()
      })
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
