import {http} from './config'
const acessToken = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjQ3MjIxM2RjMjYyYTU3ZWIxNDA0MzhlODljZWNiNGNkZmIxZDc1Mjg5ZTI1MGFhMGRlN2UyYzc2ODUyYmRkNzAxMGE2OWU3M2QyN2E1NThiIn0.eyJhdWQiOiJBUFAtN2U5MTgzOGUtZTkwYi00Nzk2LWFlN2ItOThkODNjZWI4YmQ0IiwianRpIjoiNDcyMjEzZGMyNjJhNTdlYjE0MDQzOGU4OWNlY2I0Y2RmYjFkNzUyODllMjUwYWEwZGU3ZTJjNzY4NTJiZGQ3MDEwYTY5ZTczZDI3YTU1OGIiLCJpYXQiOjE2MDY1MjM2NzksIm5iZiI6MTYwNjUyMzY3OSwiZXhwIjoxNjIyMTYyMDc5LCJzdWIiOiI2OTYzMSIsInNjb3BlcyI6WyJpbnN0YWxsX2FwcCIsInJlYWRfYWdlbnRfcHJvZmlsZSJdfQ.MgwVrTJhW7kIhdDHG-r2fG1-jxQjagb1l_IaHWe_r5-dRUjkgkCIBJpYi4joe4CbL9C9rWE17U8QervpBU9aEZNgSjqAIxNKSOUD8QjZwdIiNAAkGQBiD4vl_Zu6DEGNV8sj3z6-3uoxuPdxhAifTFKlZ0QnxUAynPbhlfqjsMU"

export default {
    listar:() => {
        return http.get('', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + acessToken

            }
        })
    }
}