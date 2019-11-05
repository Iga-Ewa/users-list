import React from "react";


const UsersList = props => {

    const listItems = props.usersList.map((user, index) =>
        <li key={index} onClick = { () => props.deleteUser(index)}>{user}</li>
    );

    return (
        <ul className= "UsersList">
            {listItems}
        </ul>
    );
}


export default UsersList;