import React from 'react';
import axios from 'axios';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import { Button, Form, Card } from "react-bootstrap";
import "./style.css";

export default class TeamDatailsComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            teams: [],
            members: [],
            newTeamName: "",
            newTeamDescription: "",
            updateTeamName: "",
            updateTeamDescription: "",
            teamDetailId: 0,
            deleteTeamId: 0
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
        });
    }

    getMembers() {
        const id = this.state.updateTeamId;
        axios
            .put(`https://localhost:44315/api/team/${id}`, {
                name: this.state.updateTeamName,
                description: this.state.updateTeamDescription,
                members: this.state.members
            }) //jeśli zakończyłeś dodawanie taska, pobierz wszysktkie i odśwież wlistę tasków
            .then(() => {
                this.getTeams();
            });
    }

    onChange = e => {
        console.log(e.target.value);

        this.setState({ [e.target.name]: e.target.value });
    };

    render() {
        return (
            <div>
                <div class='row'>
                    <div class="col-md-6">
                        <BootstrapTable ref='table' data={this.state.teams}>
                            <TableHeaderColumn dataField='teamId' isKey dataSort width='60px'>Id</TableHeaderColumn>
                            <TableHeaderColumn dataField='name' dataSort width='200px'>Nazwa</TableHeaderColumn>
                        </BootstrapTable>
                    </div>

                    <div class='col-md-6'>
                        <Card >
                            <Card.Header>
                                <h1>Choose team</h1>
                            </Card.Header>
                            <Card.Body>
                                <Form.Group>
                                    <Form.Label>Id:</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter name"
                                        name="teamDetailId"
                                        onChange={this.onChange}
                                        required
                                    />
                                </Form.Group>
                                <Button
                                    variant="primary"
                                    disabled={this.state.newTeamName === ""}
                                    onClick={this.addNewTeam}
                                >
                                    Choose
                         </Button>
                            </Card.Body>

                        </Card>
                    </div>
                </div>

            </div>
        )
    }
}