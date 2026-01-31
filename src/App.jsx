import React, { Component } from 'react'
import CourseCard from './CourseCard';
import './App.css'

export default class App extends Component {
  constructor(){
    super();
    this.state = {courses:[
      {name:"Data Structure and Algorithms",duration:"40hrs",price:"Rs.100",img:"data structures.jpg"},
      {name:"Java Programming",duration:"30hrs",price:"Rs.80",img:"java programming.jpg"},
      {name:"React JS",duration:"35hrs",price:"Rs.120",img:"react js.png"},
      {name:"Machine Learning",duration:"40hrs",price:"Rs.200",img:"machine learning.jpg"},
    ]}
  }
  render() {
    const {courses}=this.state;
    return (
      <div>
        <div className='app'></div>
          <div className='header'>Cource Catlog - 2500030946 - Hansini.K</div>
          <div className='section'>
            {courses.map((data) => (
              <CourseCard data={data}/>
            ))}
          </div>
          <div className='footer'>Copyright @ 2026.All rights reserved. - Hansini.K</div>
      </div>
    )
  }
}
