import React from 'react';
import { Table } from 'reactstrap';


export default class Example extends React.Component {

  async componentWillMount() {

    try 
    {
      console.log(this.props.data[0]);
      if(this.props.data[0]){
        console.log(this.props.data[0].type);
      }
    }
    catch (e) 
    {
      console.log(e);
    }
    
  };

  render() {
    return (
      <Table hover>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </Table>
    );
  }
}
