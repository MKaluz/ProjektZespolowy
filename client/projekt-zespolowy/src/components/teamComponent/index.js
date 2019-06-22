import React from 'react';
import axios from 'axios';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import { Button, Form, Card } from "react-bootstrap";
import "./style.css";



export default class TeamComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            teams: [],
            newTeamName: "",
            newTeamDescription: "",
            updateTeamName: "",
            updateTeamDescription: "",
            updateTeamId: 0,
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

    addNewTeam = e => {
        axios
            .post("https://localhost:44315/api/team", {
                name: this.state.newTeamName,
                description: this.state.newTeamDescription
            }) //jeśli zakończyłeś dodawanie taska, pobierz wszysktkie i odśwież wlistę tasków
            .then(() => {
                this.getTeams();
            });
    };

    updateTeam = () => {
        const id = this.state.updateTeamId;
        axios
            .put(`https://localhost:44315/api/team/${id}`, {
                name: this.state.updateTeamName,
                description: this.state.updateTeamDescription
            }) //jeśli zakończyłeś dodawanie taska, pobierz wszysktkie i odśwież wlistę tasków
            .then(() => {
                this.getTeams();
            });
    };

    deleteTeam = () => {
        const id = this.state.deleteTeamId;
        axios
            .delete(`https://localhost:44315/api/team/${id}`) //jeśli zakończyłeś dodawanie taska, pobierz wszysktkie i odśwież wlistę tasków
            .then(() => {
                this.getTeams();
            });
    };




    onChange = e => {
        console.log(e.target.value);

        this.setState({ [e.target.name]: e.target.value });
    };






    render() {

        return (
            <div>
                <div class='row' >
                    <div class="col-md-6">
                        <BootstrapTable ref='table' data={this.state.teams}>
                            <TableHeaderColumn dataField='teamId' isKey dataSort width = '60px'>Id</TableHeaderColumn>
                            <TableHeaderColumn dataField='name' dataSort width = '200px'>Nazwa</TableHeaderColumn>                            
                            <TableHeaderColumn dataField='wins' dataSort width = '200px'>Wygrane</TableHeaderColumn>
                            <TableHeaderColumn dataField='loses' dataSort width = '200px'>Przegrane</TableHeaderColumn>
                            <TableHeaderColumn dataField='draws' dataSort width = '200px'>Remisy</TableHeaderColumn>
                        </BootstrapTable>
                    </div>
                    <div class="col-md-6">
                        <Card>
                            <Card.Header>
                                <h1>Add Team</h1>
                            </Card.Header>
                            <Card.Body>
                                <Form.Group>
                                    <Form.Label>Name:</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter name"
                                        name="newTeamName"
                                        onChange={this.onChange}
                                        required
                                    />
                                </Form.Group>

                                <Form.Group>
                                    <Form.Label>Description:</Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        rows="5"
                                        name="newTeamDescription"
                                        onChange={this.onChange}
                                    />
                                </Form.Group>
                                <Button
                                    variant="primary"
                                    disabled={this.state.newTeamName === ""}
                                    onClick={this.addNewTeam}
                                >
                                    Submit
                         </Button>
                            </Card.Body>

                        </Card>
                    </div>
                </div>                
                <div>
                    <div class="row">
                    <div class="col-md-6">
                            <Card>
                                <Card.Header>
                                    <h1>Delete Team</h1>
                                </Card.Header>
                                <Card.Body>
                                    <Form
                                        id="updateTaskForm"
                                        onSubmit={e => {
                                            e.preventDefault();
                                        }}
                                    >
                                        <Form.Group>
                                            <Form.Label>Id:</Form.Label>
                                            <Form.Control
                                                type="text"
                                                placeholder="Enter id"
                                                name="deleteTeamId"
                                                onChange={this.onChange}
                                                required
                                            />
                                        </Form.Group>
                                    </Form>
                                    <Button
                                        variant="primary"
                                        disabled={!this.state.deleteTeamId}
                                        onClick={this.deleteTeam}
                                    >
                                        Delete
            </Button>
                                </Card.Body>
                            </Card>
                        </div>
                        <div class="col-md-6">
                            <Card>
                                <Card.Header>
                                    <h1>Update Team</h1>
                                </Card.Header>
                                <Card.Body>
                                <Form
                        id="updateTaskForm"
                        onSubmit={e => {
                            e.preventDefault();
                        }}
                    >
                        <Form.Group>
                            <Form.Label>Id:</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter id"
                                name="updateTeamId"
                                onChange={this.onChange}
                                required
                            />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Name:</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter name"
                                onChange={this.onChange}
                                name="updateTeamName"
                            />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Description:</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows="5"
                                name="updateTeamDescription"
                                onChange={this.onChange}
                            />
                        </Form.Group>
                        <Button
                            variant="primary"
                            disabled={!this.state.updateTeamId}
                            onClick={this.updateTeam}
                        >
                            Update
            </Button>
                    </Form>
                                </Card.Body>
                            </Card>
                        </div>
                        
                    </div>

                </div>

            </div>







        );
    }
}
