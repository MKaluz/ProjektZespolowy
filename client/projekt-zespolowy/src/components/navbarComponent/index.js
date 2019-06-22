import React from 'react';



export default class AppNavbar extends React.Component {
    render() {
        return (
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark" >
                <a class="navbar-brand" href="/teams">Teams</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>   
                <a class="navbar-brand" href="/teamsDetails">Team Datails</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>             
            </nav>
        )

    }
}