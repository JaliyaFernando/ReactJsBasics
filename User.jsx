import React, {Component} from 'react';

export default class User extends Component {
    render() {
        return<tbody>
        {this.props.users.map(user => <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.phone}</td>
        </tr>)}
        </tbody>;
    }
}
