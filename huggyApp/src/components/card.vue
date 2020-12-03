<!-- 
    Componente "card" onde cada unidade de atalho é renderizado
    com os métodos para enviar para a classe superior para abrir um modal para editá-lo e um método para excluir o mesmo
    ambos que em seguida utilizam o método para re-fazer a listagem dos atalhos
-->
<template>
<div id="cartao" class="card">
    <div class="head-card">
        <div class="row align-items-center">
            <div class="col-9">
                <h6 title="Name" class="card-title titulo" style="margin-top: 0.4rem">{{atalho.name | truncate(20, '...') }}</h6>
            </div>
            <div class="col-3" style="text-align:right">
                <p title="ID" style="float: right">{{atalho.id}}</p>
            </div>
        </div>
    </div>
    <div class="card-body" v-bind:class="[this.$parent.darkMode ? 'card-dark':'']">
            <div class="row align-items-center">
                <div class="col texto">
                    <div class="subtitle row">
                        <div class="col">
                            Mensagem:
                        </div>
                        <div class="col" style="text-align:right">
                            Key: <i style="font-weight: 200"> {{atalho.key}}</i>
                        </div>
                    </div>
                    <p class="card-text">{{atalho.text | truncate(75, '...')}}</p>
                </div>
            </div>
            <div class="row align-items-end">
                <div class="col-3" style="text-align:left" title="Public">
                    <font-awesome-icon v-if="atalho.public" :icon="['fas', 'eye']" />
                    <font-awesome-icon v-if="!atalho.public" :icon="['fas', 'eye-slash']" />
                </div>
                <div class="col-9" style="text-align:right">
                    <a title="Arquivo" v-on:click="abrirLink" class="btn btn-primary"><font-awesome-icon :icon="['fas', 'link']" /></a>
                    <a title="Editar Atalho" v-on:click="showEdit" class="btn btn-primary"><font-awesome-icon :icon="['fas', 'edit']" /></a>
                    <a title="Deletar Atalho" v-on:click="excluirAtalho" class="btn btn-danger"><font-awesome-icon :icon="['fas', 'trash']" /></a>
                </div>
            </div>
        
    </div>
</div>
</template>

<script>
import atalhos from './../services/atalhos'
export default {
    props: ['atalho'],
    methods: {
        showEdit () {
            this.$parent.showEditModal(this.atalho)
        },
        excluirAtalho () {
            this.$swal({
                title: 'Você tem certeza que gostaria de deletar o Atalho: ' + this.atalho.id,
                showDenyButton: true,
                confirmButtonText: 'Sim',
                denyButtonText: 'Não'
            }).then((result) => {
                if (result.isConfirmed) {
                    console.log('Vc mandou deletar ' + this.atalho.id)
                    atalhos.deletar(this.atalho).then(resposta => {
                        console.log('Vc conseguiu deletar!')
                        this.$swal.fire('Deletado com Sucesso!')
                        this.$parent.listar()
                    }).catch(error => {
                        this.errorMessage = error.message;
                        console.error('There was an error!', error);
                    });
                    this.$parent.listar()
                }                
            })
        },
        abrirLink () {
            window.open(this.atalho.file)
        }
    },
    filters: {
        truncate: function (text, length, suffix) {
            if (text.length > length) {
                return text.substring(0, length) + suffix;
            } else {
                return text;
            }
        }
    }
}
</script>

<style scoped>
.card{
    border: 0px;
}
.card-dark{
    background-color: #171E29;
    color: white;
}
#cartao {
    margin-bottom: 0.5rem;
    margin-top: 0.5rem;
    width: 18rem;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    box-shadow: 2px 2px rgba(0,0,0,0.2);
    min-height: 15rem;
    max-height: 15rem;
}
.head-card{
    color: white;
    vertical-align: middle;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    padding-left: 0.7rem;
    padding-top: 0.7rem;
    padding-right: 0.7rem;
    text-align: left; 
    background: rgb(135,0,69,0.5);
    background: linear-gradient(90deg, rgba(135,0,69,0.75) 0%, rgba(9,15,121,0.75) 47%, rgba(0,134,255,0.75) 100%);
}
.titulo{
    font-weight: 700;
}
.texto{
    margin-bottom: 0.7rem;
    text-align: justify;
    min-height: 6rem;
}
.subtitle{
    font-weight: 600;
    font-size: 75%;
}
</style>
