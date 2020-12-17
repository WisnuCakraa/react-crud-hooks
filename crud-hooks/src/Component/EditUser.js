import React, {useState,useContext, useEffect} from 'react'
import { GlobalContext } from "../Context/GlobalState";
import { Link, useHistory } from 'react-router-dom'

import {
  Form,
  FormGroup,
  Label,
  Input,
  Button,
} from 'reactstrap'

export const EditUser = (props) => {
  const [selectedName, setSelectedName] = useState({
    id: '',
    name: ''
  })
  const { users, editUser } = useContext(GlobalContext)
  const history = useHistory();
  const currentUserId = props.match.params.id

  useEffect(() => {
    const userId = currentUserId;
    const selectedNames = users.find(user => user.id === userId)
    setSelectedName(selectedNames)
  }, [currentUserId, users])
  const onSubmit = () => {
    editUser(selectedName)

    history.push('/')
  }

  const onChange = (e) => {
    setSelectedName({...selectedName, [e.target.name]: e.target.value})
  }
  return (
    <Form onSubmit={onSubmit}>
      <FormGroup>
        <Label>Name</Label>
        <Input type="text" name="name" value={selectedName.name} onChange={onChange} placeholder="input name" ></Input>
      </FormGroup>
      <Button type="submit">Edit Name</Button>
      <Link to="/" className="btn btn-danger ml-2">Cancel</Link>
    </Form>
  )
}
