
//import Sidebar from './components/Sidebar';
import Route from './components/Route';
// import AccordionPage from './pages/AccordionPage';
// import DropdownPage from './pages/DropdownPage';
// import ButtonPage from './pages/ButtonPage';
//import ModalPage from './pages/ModalPage';
import {useState} from 'react';
//import Dropdown from './components/Dropdown';
import TablePage from './pages/TablePage';

function App() {
    const [selection, setSelection] = useState(null);

    const handleSelect = (option) => {
        setSelection(option);
    };

    const options = [
        {label: 'Red', value: 'red'},
        {label: 'Green', value: 'green'},
        {label: 'Blue', value: 'blue'}
    ];
    return( 
    //<Dropdown options={options} selection = {selection} onSelect = {handleSelect}/>
    <div className="container mx-auto grid grid-cols-6 gap-4">
          {/* <Sidebar/> */}
        <div className="col-span-5">
            {/* <Route path="/accordion">
                <AccordionPage/>
            </Route>
            <Route path="/">
                <DropdownPage/>
            </Route>
            <Route path="/buttons">
                <ButtonPage/>
            </Route>
            <Route path="/modal">
                <ModalPage/>
            </Route> */}
            
                <TablePage/>
        </div>
    </div>
    );
}
export default App;