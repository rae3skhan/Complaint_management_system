import React from "react";

function SolvedCases() {
  let cases = [
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
    <th scope="col">Prioraty</th>
    <th scope="col">Action</th>
  </tr>
</thead>
<tbody className="table-group-divider">
    {cases.map((cased)=>(
  <tr>
    <th scope="row">{cased.No}</th>
    <td>{cased.date}</td>
    <td>{cased.Name}</td>
    <td>{cased.Proiraty}</td>
    <td>Solved</td>
  </tr>
    ))}
</tbody>
</table>
  );
}

export default SolvedCases;
