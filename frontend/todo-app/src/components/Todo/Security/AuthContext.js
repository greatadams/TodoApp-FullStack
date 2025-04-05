import { createContext, useContext, useState } from "react";
import { executeBasicAuthenticationService, executeJwtAuthenticationService } from "../api/AuthenticationApiService";
import { apiClient } from "../api/ApiClient";


//create a context
export const AuthContext = createContext();

export const useAuth =() => useContext(AuthContext)


//share the created context with other component
 export default function AuthProvider({children}){


//put some state in the context

const [number,setNumber]=useState(0)

const [isAuthenticated,setAuthenticated]=useState(false)

const [username,setUsername]=useState(null)

const [token,setToken]=useState(null)

// function login(username,password){
//    if(username === 'in28minutes' && password ==='dummy'){
//       setAuthenticated(true)
//       setUsername(username)
//       return true;
//   }else{
//       setAuthenticated(false)
//       setUsername(null)
//       return false;
      
//   }
// }


// 

async function login(username,password){
  
   try{
      const response = await executeJwtAuthenticationService(username,password)
       if(response.status==200){
         const jwtToken = 'Bearer ' +  response.data.token
         setAuthenticated(true)
         setUsername(username)
         setToken('Bearer ' + response.data.token)

         apiClient.interceptors.request.use(
            (config)=> {
              console.log('intercepting and adding a token');
              config.headers.Authorization= jwtToken
              return config
            }
         )
         
         return true;
     }else{
         logout()
         return false;
         
     }
   }catch(error){
        logout()
         return false;
   }
   
}

function logout(){
   setAuthenticated(false)
   setUsername(null)
   setToken(null)
}
    return(
       <AuthContext.Provider value={{isAuthenticated,login,logout,username,token}}>
        {children}
       </AuthContext.Provider>
    )
}