import { apiClient } from './ApiClient';


//  export const retrieveHelloWorldBean=()=>
//  apiClient.get('/hello-world-bean', {
    
//       })


export const retrieveHelloWorldBeanPathVariable
=(username,token)=>
  apiClient.get(`/hello-world/path-variable/${username}`, 
    // {
    //     headers:{
    //         Authorization:token
            
    //     }
    //     }
    )
  
 