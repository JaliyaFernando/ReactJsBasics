import React, {Component} from 'react';
import Users from "./Users";

export default class Home extends Component{

    render() {
        return <div>
            <h2>Users</h2>
            <Users/>
        </div>;
    }
}