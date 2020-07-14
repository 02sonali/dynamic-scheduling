import React from 'react';
import Table from 'react-bootstrap/Table';

class TableComponent extends React.Component {
    getColumns(item) {
        return this.props.headers.map(header => <td key={header.name}>
                {(this.props.type==="tick" && header.name !== "type") ? <div> {item[header.name]===0 ? <span className="text-danger">&#10006;</span> : <span className="text-success">&#10004;</span>}</div> : item[header.name]}
            </td>
        );
    }
    render() {
        const tableHeaders = this.props.headers.map(header => <th key={header.name}>{header.displayName}</th>);
        const tableRows = this.props.data.map(item => <tr key={item.type}>
            {this.getColumns(item)}
        </tr>)
        return(
            <Table striped bordered variant="light" className="mt-3">
                <thead>
                    <tr>
                        {tableHeaders}
                    </tr>
                </thead>
                <tbody>
                    {tableRows}
                </tbody>
            </Table>
        )
    }
}
export default TableComponent;