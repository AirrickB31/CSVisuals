import React from 'react'
import Link from 'gatsby-link'
import { Table } from 'bloomer'

function SalaryTable(props) {
  const persons = props.data
  const listPersons = persons.map((x, i) => (
    <tr key={i}>
      <td>{x.name}</td>
      <td>{x.role}</td>
      <td>{x.startDate}</td>
      <td>{x.monthlySalary}</td>
      <td>{x.monthsTotal}</td>
      <td>{x.totalBilled}</td>
    </tr>
  ))
  return (
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
        {listPersons}
      </tbody>
    </Table>
  )
}

export default SalaryTable
