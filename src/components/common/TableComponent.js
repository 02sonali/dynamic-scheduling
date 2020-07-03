import React from 'react';
import Table from 'react-bootstrap/Table';

class TableComponent extends React.Component {
    constructor(props) {
        super(props);
        console.log(props.headers, props.data);
        //type: string, headers: array, data: array
    }
    getColumns(item) {
        return this.props.headers.map(header => <td key={header.name}>{item[header.name]}</td>);
    }
    render() {
        const tableHeaders = this.props.headers.map(header => <th key={header.name}>{header.displayName}</th>);
        const tableRows = this.props.data.map(item => <tr key={item.type}>
            {this.getColumns(item)}
        </tr>)
        return(
            <Table striped bordered hover className="mt-3">
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