import FirstComponent from './FirstComponent'
import { FifthComponent } from './FirstComponent'; 
import SecondComponent from './SecondComponent';
import ThirdComponent from './ThirdComponent';
import FourthComponent from './FourthComponent';
import LearningJavaSript from './LearningJavaSript';


export default function App() {
    return (
      <div className="App">
        <FirstComponent></FirstComponent>
        <SecondComponent></SecondComponent>
        <ThirdComponent></ThirdComponent>
        <FourthComponent></FourthComponent>
        <FifthComponent/>
        <LearningJavaSript/>
      </div>
    );
  }