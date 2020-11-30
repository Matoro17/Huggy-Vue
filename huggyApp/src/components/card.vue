<template>
<div id="cartao" class="card">
    <div class="head-card">
        <div class="row">
            <div class="col-sm-8">
                <h6 class="card-title titulo" style="margin-top: 0.4rem">{{atalho.name}}</h6>
            </div>
            <div class="col-sm" >
                <p style="float: right">{{atalho.id}}</p>
            </div>
        </div>
    </div>
    <p class="card-text">{{atalho.file}}</p>
    <div class="card-body">
        <div class="row">
            <div class="col">
                <p class="card-text">{{atalho.text}}</p>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-3" style="text-align:center">
                <font-awesome-icon v-if="atalho.public" :icon="['fas', 'volume-up']" />
                <font-awesome-icon v-if="!atalho.public" :icon="['fas', 'volume-mute']" />
            </div>
            <div class="col-sm-9" style="text-align:right">
                <a href="#" class="btn btn-primary">Edit</a>
                <a href="#" class="btn btn-primary">Del</a>
            </div>
        </div>
  </div>
</div>
</template>

<script>
export default {
    props: ['atalho']
}
</script>

<style scoped>
#cartao {
    margin-bottom: 1rem;
    margin-top: 1rem;
    width: 18rem;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    box-shadow: 2px 2px rgba(0,0,0,0.2);
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
</style>
