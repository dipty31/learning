import { useDispatch, useSelector } from 'react-redux';
import { removeCar } from '../store';

function CarList(){
    const dispatch = useDispatch();
    const { cars, name } = useSelector(({ form, cars: {data, searchTerm}}) => {
        //filtering logic for search car
            const filteredCars = data.filter(
            (car) => car.name.toLowerCase().includes(searchTerm.toLowerCase())
        );

        return{
            cars: filteredCars,
            name: form.name
        };
    
});

console.log(name)

    const handleCarDelete = (car) => {
        dispatch(removeCar(car.id));
    };

    const renderedCars = cars.map((car) => {
        //LOGIC TO DECIDE IF THIS CAR SHOULD BE BOLD
        console.log(name)
        const bold = name && car.name.toLowerCase().includes(name.toLowerCase());

        return(
            <div key = {car.id} className = {`panel ${bold && 'bold'}`}>
                <p>
                    {car.name} - ${car.cost}
                </p>
                <button className="button is-danger"
                onClick = {() => handleCarDelete(car)}>
                    Delete
                </button>
            </div>
        );
    });
    return(
    <div className="car-list">
        {renderedCars}
        <hr />
    </div>
    );
}
export default CarList;