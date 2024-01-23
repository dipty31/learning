import { fragment } from 'react';

function Table({data, config, keyFn}){

    const renderedHeaders = config.map((column)=>{
        if(column.header){
            return <fragment key = {column.label}>{column.header()}</fragment>
        }
        
        return <th key ={column.label}>{column.label}</th>
    });

    const renderedRows = data.map((rowData) => {
        const renderedCells = config.map((column) => {
            return (
            <td className="p-2" key = {column.label}>
            {column.render(rowData)}
            </td>
            );
        });
        return (
            <tr className="border-b" key={keyFn(rowData.name)}>
                {renderedCells}
                {/* <td className="p-3">{config[0].render(fruit)}</td>
                <td className="p-3">{config[1].render(fruit)}</td>
                <td className="p-3">{config[2].render(fruit)}</td> */}
            </tr>
        )
    });
    return(
        <table className="table-auto border-spacing-2">
        <thead>
            <tr className="border-b-2">{renderedHeaders}</tr>
        </thead>
        <tbody>{renderedRows}</tbody>
        </table>
    );
}
export default Table;