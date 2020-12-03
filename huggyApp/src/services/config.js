import axios from 'axios'
import {env} from '../../env'
const url = 'https://api.huggy.app/v3/companies/' + env.company + '/shortcuts';



export const http = axios.create({baseURL: url})
