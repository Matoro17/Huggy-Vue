import {http} from './config'
import {env} from '../../env'
const headers = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Authorization': 'Bearer ' + env.access.access_token
}

export default {
    listar:() => {
        return http.get('', {
            headers: headers,

        })
    },

    adicionar: (atalho) => {
        var publico;
        if (atalho.public === "true"){
            publico = true
        } else{
            publico = false
        }
        return http.post('',{
                    "name": atalho.name,
                    "key":  atalho.key,
                    "file": atalho.file,
                    "text": atalho.text,
                    "public": publico
            },{
                headers: headers,
            }
        )
    },
    deletar: (atalho) =>{
        return http.delete("/"+atalho.id,{
            headers: headers
        })
    },
    editar: (atalho) => {
        var publico;
        if (atalho.public === "true"){
            publico = true
        } else{
            publico = false
        }
        return http.put("/"+atalho.id,{
            "name": atalho.name,
            "key":  atalho.key,
            "file": atalho.file,
            "text": atalho.text,
            "public": publico
        },{
            headers: headers
        })
    }
}