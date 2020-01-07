import React from 'react';
import { Table } from 'reactstrap';


export default class Example extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      types: [],
      amounts: [],
      dates: [],
      tags: [],
      referenceNumbers: []
    }
  }

  async componentWillMount() {

    try 
    {
      console.log(this.props.data[0]);
      if(this.props.data[0]){

          var types = []
          var amounts = []
          var dates = []
          var tags = []
          var referenceNumbers = []
          
          var i;
          for(i=0; i<this.props.data.length ; i++ ) {
            types.push(this.props.data[i]['type'])
            amounts.push(this.props.data[i]['amount'])
            dates.push(this.props.data[i]['date'])
            tags.push(this.props.data[i]['tag'])
            referenceNumbers.push(this.props.data[i]['referenceNumber'])
          }
          this.setState({types});
          this.setState({amounts});
          this.setState({dates});
          this.setState({tags});
          this.setState({referenceNumbers});

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
