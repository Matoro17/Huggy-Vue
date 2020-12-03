<template>
  <div class="hello">
    <div class="topo">{{msg}}</div>
    <nav v-bind:class="['navbar', darkMode ? 'navbar-dark' : 'navbar-light', darkMode ? 'bg-dark' : '']">
        <div class="mt-lg-0">
          <span class="navbar-brand mb-0 h1" id="titulo">ShortHuggy</span>
        </div>
        <div class="my-2 my-lg-0">
            <span class="navbar-brand mb-0 h3">Modo Noturno</span><toggle-button @change="changeBack" v-model="darkMode"/>
        </div>
    </nav>
    <!--<span class="navbar-brand mb-0 h3">Public</span><toggle-button @change="thisForceUpdate" v-model="filter"/>-->
    <ul id="example-1" v-bind:class="[darkMode ? 'darkBody' : 'whiteBody']">
      <li v-for="atalho in atalhos" :key="atalho.index">
        <card v-if="canShow(atalho.public)" v-bind:atalho="atalho"></card>
      </li>
    </ul>
    <div id="links-fixos" v-bind:class="[darkMode ? 'darkBody' : 'whiteBody']">
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
            <select class="custom-select" id="public" v-model="atalho.public" name="public" >
              <option value=true>Sim</option>
              <option value=false>Não</option>
            </select>
        </ul>
        <p style="margin-top: 16px">
          <button type="submit" class="btn btn-primary" v-if="atalhoExiste">Adicionar</button>
        </p>
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
      filter: false,
      darkMode: false,
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
    atalhoExiste(){
      console.log("entrou" + atalhos.some(e => e.key == atalho.key))
      return atalhos.some(e => e.key == atalho.key)
    },
    changeBack(){
      var dark = '#222C3C'
      var light = '#C5D9E8'
      document.querySelector('html').style.backgroundColor = (this.darkMode ? dark : light)
    },
    thisForceUpdate() {
      this.atalhos = ''
      this.listar()
    },
    canShow(pub){
      return this.filter ? pub : true
    },
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
        this.$swal.fire('Houve um erro!' + this.errorMessage)
        console.error("There was an error!", error);
      });
    
    },
    showEditModal (short) {
      this.$refs['card-edit'].show()
      this.atalhoEdit = {
            "id": short.id,
            "name": short.name,
            "key":  short.key,
            "file": short.file,
            "text": short.text,
            "public": short.public
        }
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
  margin-bottom: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
#links-fixos{
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
.darkBody{
  background-color: #222C3C;
}
.whiteBody{
  background-color: #C5D9E8;
}
.topo{
  background: linear-gradient(90deg, rgba(135,0,69,0.75) 0%, rgba(9,15,121,0.75) 47%, rgba(0,134,255,0.75) 100%);
  height: 0.5rem
}
html{
  background-color: red;
}
</style>
