import './App.css';
import {useState} from 'react';
import AnimalShow from './AnimalShow';

function getRandomAnimal(){
    const animals = ['bird','cat','cow','dog','gator','horse'];

    return animals[Math.floor(Math.random()*animals.length)]
}

function App(){
    const [animals, setAnimals] = useState([]);
    const handleClick = () => {
//we re not doing animals.push(getRandomAnimal()) becauase that will directly modify our current state, and we don't want that
        setAnimals([...animals,getRandomAnimal( )])
    };

    const renderedAnimals = animals.map((animal,index)=>{
        return <AnimalShow type = {animal} key = {index}/>;
    });

//in line 12 , giving reference of the function to the event handler gives the whole function to the button, so that it can call the function in future when it is clicked.
    return(
       <div className="app"> 
        <button onClick={handleClick}>Add Animal</button>
        <div className="animal-list">{renderedAnimals}</div>
       </div> 
    );
}
export default App;

//<button onClick={() => {
//  console.log('button was clicked');}  
// }></button>

//OR

//<button onClick={() =>
//  console.log('button was clicked')  
// }></button>

// this is equivalent to what we written in the App() function above, it'll only reference the function and won't call it right away