// import {useState} from 'react';
// import { GoChevronDown,GoChevronLeft  } from "react-icons/go";


// function Dropdown({options, selection, onSelect}){
//     const [isOpen, setIsOpen] = useState(false);

//     const handleClick = () => {
//         setIsOpen(!isOpen);
//     };

//     const handleOptionClick = (option) => {
//         setIsOpen(false);
//         onSelect(option);
//     };

//     const renderedOptions = options.map((option)=> {
//         return(
//              <div className="hover:bg-sky-100 rounded cursor-pointer p-1" onClick={() => handleOptionClick(option)} key = {option.value}>
//                 {option.label}
//             </div>
//         );
//     });

//     // let content = 'select...';
//     // if(selection){
//     //   content = selection.label;  
//     // };

//     return (
//     <div className="w-48 relative">
//         <div  className="flex justify-between items-center cursor-pointer border rounded p-3 shadow bg-white w-full" onClick={handleClick}>
//         {selection?.label || 'select...'}
//         <GoChevronDown className="text-lg"/>
//         </div>
//         {isOpen && <div className="absolute top-full border rounded p-3 shadow bg-white w-full">{renderedOptions}</div>}    
//     </div>
//     );
// }
// export default Dropdown;