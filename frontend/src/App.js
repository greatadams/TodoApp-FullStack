import './App.css';
import Counter from './components/Counter/Counter';
import TodoApp from './components/Todo/TodoApp';

function App() {
  return(
    <div className='App'>
    <TodoApp/>
    
    {/* <Counter/> */}
    
    </div>
  )
  
}
// function PlayingWithProps(properties){

//   console.log(properties);
//   console.log(properties.property1);
//   console.log(properties.property2);
//   return(
//     <div>

//     </div>
//   )
// }

// function PlayingWithProps({property1,property2}){
//   console.log(property1);
//   console.log(property2);

//   return(
//     <div>Props</div>
//   )
// }


export default App;
