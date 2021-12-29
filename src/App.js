import React, { Component } from 'react';

class Table extends Component {

  constructor(props) {
    super(props)
    this.state = {
      users: [],
      isLoading: false,
      isError: false,
    }
  }

  async componentDidMount(){
    this.setState({isLoading: true})
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    /* console.log(response.json()) */

    if(response.ok){

      const users = await response.json()
      /* console.log(users) */
      this.setState( { users, isLoading: false} )
    }else{
      this.setState( {isError: true, isLoading: false} )
    }
  }

  renderTableHeader = () =>{
    return Object.keys(this.state.users[0]).map(attr => <th key={attr}> 
    {attr.toUpperCase()}
    </th>)
  }
  
  renderTableRows = () => {
    return this.state.users.map(user => {
      return (
        <tr key={user.id}>
          <td>{user.id}</td>
          <td>{user.name}</td>
          <td>{user.username}</td>
          <td>{user.email}</td>
          <td>{user.address.city}</td>
          <td>{"empty"}</td>
          <td>{"empty"}</td>
          <td>{user.company.name}</td>

        </tr>
      )
    })
  }

  render() {
    const {users, isLoading, isError} = this.state
    if (isLoading) {
      return <div>the data is loading</div>
    }
    if (isError) {
      return <div>¡Ups! an error occurred</div>
    }
    return users.length > 0 
    ? ( 
      <table>
        <thead>
          <tr>
            {this.renderTableHeader()}
          </tr>
        </thead>
        <tbody>
          {this.renderTableRows()}
        </tbody>
      </table>
    ) : (
      <div>no users!</div>
    )
  }
}

export default Table