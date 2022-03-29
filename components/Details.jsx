import { Button,Table } from 'react-bootstrap';
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';




function Detail() {
  const { id } = useParams();
  const users = useSelector((state) => state.users);
  const currentUser = users.filter((user) => user.id === parseInt(id));
  console.log(currentUser);
  
  
  return (
    <div>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>id</th>
            <th>Full Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {currentUser          
            ?.map((user) => {
              return (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                  <td>
                  <Button variant="primary" size="sm">
                      Detail
                    </Button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </Table>
    </div>
  )
}

export default Detail