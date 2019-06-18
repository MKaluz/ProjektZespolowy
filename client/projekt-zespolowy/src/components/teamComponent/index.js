import React from 'react';
import axios from 'axios';


export default class TeamComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            teams: []
        };
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

    renderTeam = (team, k) => {
        return (
            <table>
                <thead>
                    <tr>#</tr>
                    <tr>Team Name</tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">{team.teamId}</th>
                        <td>{team.name}</td>
                    </tr>
                </tbody>
            </table>
        )
    }

    render() {
        const teams = this.state.teams
            .map((value, index) => {
                return this.renderTeam(value, index);
            });

        return (
            <div>
                <div>

                    <table class="table table-dark">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">First</th>
                                <th scope="col">Last</th>
                                <th scope="col">Handle</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>Larry</td>
                                <td>the Bird</td>
                                <td>@twitter</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>
        );
    }
}
