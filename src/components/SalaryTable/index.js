import React from 'react'
import Link from 'gatsby-link'
import { Table } from 'bloomer'

const SalaryTable = props => (
  <Table isBordered isStriped isNarrow>
    <thead>
      <tr>
        <th>Name</th>
        <th>Role</th>
        <th>DateStart</th>
        <th>Monthly Salary</th>
        <th>Months on the Job</th>
        <th>Total Billed</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>{props.name}</td>
        <td>{props.role}</td>
        <td>{props.start}</td>
        <td>{props.salary}</td>
        <td>{props.months}</td>
        <td>{props.total}</td>
      </tr>
      <tr className="is-selected">
        <td>Ken</td>
        <td>5000</td>
      </tr>
    </tbody>
  </Table>
)

export default SalaryTable;
