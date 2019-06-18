import React from 'react';
import axios from 'axios';
import { Table } from 'react-bootstrap';


export default ({ data, k }) => {

    return (
        <Table striped bordered hover data={this.props.data} k={this.props.k}>
            <thead>
                <tr>#</tr>
                <tr>Team Name</tr>
            </thead>
            <tbody>
                {data.map((x, i) => <tr><th scope="row">{i}</th>
                    <td>{x.name}</td></tr>)}

            </tbody>
        </Table>
    )
}
