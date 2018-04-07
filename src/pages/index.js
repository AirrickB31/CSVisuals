import React from 'react'
import Link from 'gatsby-link'
import { Container, Title, Columns, Column, Button } from 'bloomer'
import InputForm from '../components/InputForm'
import SalaryTable from '../components/SalaryTable'
import firebase from 'firebase'
import people from '../utils/populateDB.js'

const config = {
  apiKey: 'AIzaSyCQG1sEbCVYYmCxBlhbY0ACZsP25BHh0u0',
  authDomain: 'privet-83a48.firebaseapp.com',
  databaseURL: 'https://privet-83a48.firebaseio.com',
  projectId: 'privet-83a48',
  storageBucket: 'privet-83a48.appspot.com',
  messagingSenderId: '864513816118',
}
firebase.initializeApp(config)
const db = firebase.database()

class IndexPage extends React.Component {
  constructor(){
    super()
    this.state = {
      tableData: [],
      test: 'hi'

    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handle50people = this.handle50people.bind(this);
  }

  handle50people(e){
    e.preventDefault();
    people.forEach(x => {
      db.ref().push({
        name: x.name,
        role: x.role,
        startDate: x.startDate,
        monthlySalary: x.salary,
        monthsTotal: 5,
        totalBilled: 5
      });
    })
  }

  handleSubmit(e){
    e.preventDefault()
    const data = new FormData(e.target);
    console.log(data);
  }

  componentDidMount(){
    const listen = db.ref().once('value', (snapshot)=>{
      let data = this.state.tableData;
      this.setState({
        tableData: Object.entries(snapshot.val()).map(x=>x[1])
      })
    });
    
  }
  render() {
    const salaries = this.state.tableData;
    return (
      <Container hasTextAlign="centered">
        <Title isSize="1">Employee Billing</Title>
        <Columns>
          <Column isSize="1/2">
            <Title isSize="3">Stored Salaries</Title>
            <SalaryTable data={this.state.tableData} test={this.state.test} />
          </Column>
          <Column isSize="1/2">
            <Title isSize="3">Input Form</Title>
            <InputForm onSubmit={this.handleSubmit}/>
          </Column>
        </Columns>
        <Button onClick={this.handle50people}>populate 50 people</Button>
      </Container>
    )
  }
}

export default IndexPage
