import React from 'react'
import Link from 'gatsby-link'
import { Container, 
  Title, 
  Columns, 
  Column, 
  Table, 
  Field, 
  Control, 
  Label, 
  Input } from 'bloomer'

const IndexPage = () => (
  <Container hasTextAlign="centered">
    <Title isSize="1">Employee Billing</Title>
    <Columns>
      <Column isSize='1/2'>
    <Title isSize="3">
      Stored Salaries
    </Title>
      
      <Table isBordered isStriped isNarrow>
    <thead>
        <tr>
            <th>Name</th>
            <th>Score</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Ryu</td>
            <td>10000</td>
        </tr>
        <tr className='is-selected'>
            <td>Ken</td>
            <td>5000</td>
        </tr>
        <tr>
            <td>Akuma</td>
            <td>1200</td>
        </tr>
    </tbody>
</Table>
      </Column>
      <Column isSize='1/2'>
      <Title isSize="3">
      Input Form
    </Title>
    <Field>
    <Label>Name</Label>
    <Control>
        <Input type="text" placeholder='Text Input' />
    </Control>
</Field>

      </Column>
    </Columns>
    
  </Container>
)

export default IndexPage
