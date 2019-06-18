import React from 'react';
import axios from 'axios';
import { Table } from 'react-bootstrap';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table'
import DataTable from '../tableComponent';


const products = [];

function addProducts(quantity) {
    const startId = products.length;
    for (let i = 0; i < quantity; i++) {
        const id = startId + i;
        products.push({
            id: id,
            name: 'Item name ' + id + 1,
            price: 2100 + (i+2)
        });
    }
}

addProducts(5);

export default class TeamComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            teams: []
        };
    }

    cleanSort = () => {
        this.refs.table.cleanSort();
    }

    componentDidMount() {
        this.getTeams();
    }

    getTeams() {
        axios.get("https://localhost:44315/api/team").then(res => {
            this.setState({
                teams: res.data
            });
            console.log(this.state.teams);
        });
    }

    renderTeam = (teams, k) => {
        return (
            <div>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Team Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {teams.map((val) =>
                            <tr>
                                <td>{val.teamId}</td>
                                <td>{val.name}</td>
                            </tr>)
                        }
                    </tbody>
                </Table>
                <button className='btn btn-default' onClick={this.cleanSort}>Clean Sort</button>
                <BootstrapTable ref='table' data={products}>
                    <TableHeaderColumn dataField='id' isKey dataSort>Product ID</TableHeaderColumn>
                    <TableHeaderColumn dataField='name' dataSort>Product Name</TableHeaderColumn>
                    <TableHeaderColumn dataField='price'>Product Price</TableHeaderColumn>
                </BootstrapTable>
            </div>
        )
    }




    render() {
        //const teams = this.state.teams.map((val, index) => {
        //    return this.renderTeam(val, index);
        //});

        return (
            <div>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Nazwa</th>
                            <th>Wygrane</th>
                            <th>Przegrane</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Team 1</td>
                            <td>5</td>
                            <td>6</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Team 2</td>
                            <td>2</td>
                            <td>3</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Team 3</td>
                            <td>1</td>
                            <td>2</td>
                        </tr>

                    </tbody>
                </Table>
                <BootstrapTable ref='table' data={this.state.teams}>
                    <TableHeaderColumn dataField='teamId' isKey dataSort>Product ID</TableHeaderColumn>
                    <TableHeaderColumn dataField='name' dataSort>Product Name</TableHeaderColumn>
                    <TableHeaderColumn dataField='description'>Product Price</TableHeaderColumn>
                </BootstrapTable>

            </div>
        );
    }
}
