import React from 'react'
import Buttons from '../Buttons/Buttons'

function AdminRequest() {
    let req = [
        {No:1, date: '1-1-2022', Name: 'Anglina', Proiraty: 'Low'},
        {No:2, date: '2-2-2034', Name: 'Kavela', Proiraty: 'High'},
        {No:3, date:  '3-3-2020', Name: 'Nomila', Proiraty: 'Low'}
    ]
  return (
    <table className="table table-responsive">
    <thead>
      <tr>
        <th scope="col">NO</th>
        <th scope="col">Date</th>
        <th scope="col">Name</th>
        <th scope="col">Action</th>
      </tr>
    </thead>
    <tbody className="table-group-divider">
        {req.map((request)=>(
      <tr>
        <th scope="row">{request.No}</th>
        <td>{request.date}</td>
        <td>{request.Name}</td>
        <td><Buttons solved='Accept' reject='Delete'/></td>
      </tr>
        ))}
    </tbody>
  </table>
  )
}

export default AdminRequest