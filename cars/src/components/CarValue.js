import { useDispatch, useSelector } from 'react-redux';
import { changeName} from '../store';

function CarValue(){
    const totalCost = useSelector(({cars: { data, searchTerm }}) => 
          data.filter((car) =>
            car.name.toLowerCase().includes(searchTerm.toLowerCase())
        ).reduce((acc,car) => acc + car.cost, 0)

        // let cost = 0;
        // for(let car of filteredCars){
        //     cost+=car.cost;
        // }
        // return cost;

        //more javascript-y way:
        // return filteredCars.reduce((acc,car) => {
        //     return acc + car.cost
        // }, 0)
        
    );
    return(
        <div className="car-value">
        Total Cost: ${totalCost}    
        </div>
    );
}
export default CarValue;