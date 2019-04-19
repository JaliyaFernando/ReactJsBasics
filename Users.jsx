import React, {Component} from 'react';
import User from "./User";

export default class Users extends Component{


    constructor(props){
        super(props);
        this.state={
            users:[]
        };
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response=> response.json())
            .then(json => {
                this.setState({users: json});
            });
    }

    render() {
        return<table>
            <thead>
            <tr>
                <th>
                    Name
                </th>
                <th>
                    Email
                </th>
                <th>
                    Phone
                </th>
            </tr>
            </thead>
            <User users ={this.state.users}/>
        </table>;
    }
}
