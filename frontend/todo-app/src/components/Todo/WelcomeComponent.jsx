import { useState } from 'react';
import { useAuth } from "./Security/AuthContext"
import { Link,useParams} from 'react-router-dom'
import { retrieveHelloWorldBean,retrieveHelloWorldBeanPathVariable } from './api/HelloWorldApiService';

function WelcomeComponent(){

    const {username} = useParams()

    const authContext =useAuth()

    const [message,setMessage]=useState(null)
    

    function callHelloWorldRestApi() {
      console.log('called');
       

    retrieveHelloWorldBeanPathVariable('Great',authContext.token)
    .then((response) => successfulResponse(response))
    .catch((error) => errorResponse(error))
    .finally(() => console.log('cleanup'));
  }

    function successfulResponse(response){
      console.log(response)
      //setMessage(response.data)
      setMessage(response.data.message)
    }

    function errorResponse(error){
      console.log(error);
    }

  return(
    <div className='welcomeComponent'>
        <h1>Welcome {username}</h1>
        <div className="Welcome">
          Manage Your Todos - <Link to='/todos'>Go Here</Link>
        </div>
        <div>
          <button className='btn btn-success m-5' onClick={callHelloWorldRestApi}>
            Call Hello World REST API 
          </button> </div>

          <div className="text-info">{message}</div>
    </div>
        
    )
}

export default WelcomeComponent