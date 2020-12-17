import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import {GlobalContext} from '../Context/GlobalState'
import {
  ListGroup,
  ListGroupItem,
  Button
} from 'reactstrap'

export const UserList = () => {
  const { users, deleteUser } = useContext(GlobalContext)
  return (
    <ListGroup className="mt-4">
      {users.length > 0 ? (
      <>
        {users.map(user => (
          <ListGroupItem className="d-flex">
            <strong>{user.name}</strong>
            <div className="ml-auto">
              <Link className="btn btn-warning mr-1" to={`/edit/${user.id}`}>Edit</Link>
              <Button onClick={()=> deleteUser(user.id)} color="danger">Delete</Button>
            </div>
          </ListGroupItem>
        ))}
        </>
      ) : (
        <h4 className="text-center">No User</h4>
      )}
    </ListGroup>
  )
}
