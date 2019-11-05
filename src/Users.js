
import React, {Component} from 'react';

import Heading from './Heading';

import UsersList from './UsersList';


class Users extends Component {

    constructor() {
        super();
        this.state = {
            users: ['Adam', 'Olga', 'Karol']
        }
    }

    addUser = (e) => {
        e.preventDefault() // po kliknieciu zablokuj
        console.log(this.userInput.value);


        this.setState(prevState => { // ustaw nowy stan przekaz go do tej funkcji
            return({users: [...prevState.users, this.userInput.value]}) // i zwroc poprzednia tablice rozbita na elementy i wstaw nowy element
        });
        
        console.log(this.state.users);
    }
    
    removeUser = (indexToDelete) => {

            let filteredArray = this.state.users.filter((elem, index) =>{

                return index !== indexToDelete;

            });

            this.setState({users: filteredArray});
    }

    render() {

        return (
            <div className="users">
                <Heading  text="Users' List"/>

                <form onSubmit={this.addUser} className="add-user-form">
                    <input type='text' placeholder="nazwa uzytkownika" ref={ input => this.userInput = input}/>
                    <button>Add user</button>
                </form>

                <UsersList usersList={this.state.users} deleteUser={this.removeUser}/>
            </div> 
        );
    }
}

export default Users;