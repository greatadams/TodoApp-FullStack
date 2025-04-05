import { BrowserRouter,Route, Routes,Navigate} from 'react-router-dom'
import LogoutComponent from  './LogoutComponent';
import HeaderComponent from './HeaderComponent';
import ListTodosComponent from './ListTodosComponent';
import ErrorComponent from './ErrorComponent';
import WelcomeComponent from './WelcomeComponent';
import LoginComponent from './LoginComponent';
import AuthProvider from './Security/AuthContext';
import { useAuth } from './Security/AuthContext'
import TodoComponent from './TodoComponent';

import './TodoApp.css'
function AuthenticatedRoute({children}){
    const authContext = useAuth()
    if(authContext.isAuthenticated)
    return children

    return <Navigate to ="/" />
}


export default function TodoApp(){
    return (
        <div className="TodoApp">
             <AuthProvider> 
                <BrowserRouter>
                <HeaderComponent/>
                <Routes>
                    <Route path='/' element={<LoginComponent/>}/>

                    <Route path='/login' element={<LoginComponent/>}/> 

                    <Route path='/welcome/:username' element={
                        <AuthenticatedRoute>
                        <WelcomeComponent/>
                        </AuthenticatedRoute>
                        }/> 

                    <Route path='/todos' element={
                        <AuthenticatedRoute>
                        <ListTodosComponent/>
                        </AuthenticatedRoute>
                        }/> 

                         <Route path='/todos/:id' element={
                        <AuthenticatedRoute>
                        <TodoComponent/>
                        </AuthenticatedRoute>
                        }/> 

                    <Route path='/logout' element={
                         <AuthenticatedRoute>
                        <LogoutComponent/>
                        </AuthenticatedRoute>
                        }/> 

                    <Route path='*' element={<ErrorComponent/>}/> 
                </Routes>
    
                </BrowserRouter>
                
            </AuthProvider>
       
   
            
             </div>
    )
}



  
  
  

  

