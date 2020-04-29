import React, {Component} from 'react'
import Clock from '../subcomponents/Clock'

class Home extends Component {
  render () {
    return (
      <div>
        <h1>Welcome to the Jamelli React Boilerplate</h1>
        <h2>Teste</h2>
        <h2>The time is: <Clock /> and counting! </h2>
      </div>
    )
  }
}

export default Home
