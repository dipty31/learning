import { createSlice, nanoid } from '@reduxjs/toolkit';

const carsSlice = createSlice({
    name: 'cars',
    initialState: {
        searchTerm: '',
        data: [] //to avoid the confusion in accessing this array we changed it's name to data from cars
    },
    reducers: {
        changeSearchTerm(state, action){
            state.searchTerm = action.payload;
        },
        /* Assumption:
           action.payload === {name: 'some string' , 
                               cost: 1837 } 
         */
        addCar(state, action){
            state.data.push({
                name: action.payload.name, //it's our responsibility that the action payload
                cost: action.payload.cost,  // should look like this (this object)
                id: nanoid(), 
            });
        },
        removeCar(state, action){
            //Assumption:
            // action.payload === id of the car we want to remove
            const updated = state.data.filter((car)=>{
                return car.id!==action.payload
            });
            state.data = updated;
        },
    },
});
export const { changeSearchTerm, addCar, removeCar} = carsSlice.actions;
export const carsReducer = carsSlice.reducer;