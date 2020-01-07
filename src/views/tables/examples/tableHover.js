import React from 'react';
import { MDBDataTable } from 'mdbreact';

export default class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      types: [],
      amounts: [],
      dates: [],
      tags: [],
      referenceNumbers: [],
      dataRow: [],
      dataCol: []
    }
  }

 async componentWillReceiveProps(nextProps) {
    console.log(nextProps.data.length);
    try 
    {
      if(nextProps.data){
        var types = []
        var amounts = []
        var dates = []
        var tags = []
        var referenceNumbers = []
        var transactionArray = []
        var arrayColumn = [
          {
            label: 'Type',
            field: 'type',
            sort: 'asc',
            width: 150
          },
          {
            label: 'Amount',
            field: 'amount',
            sort: 'asc',
            width: 150
          },
          {
            label: 'Date',
            field: 'date',
            sort: 'asc',
            width: 150
          },
          {
            label: 'Tag',
            field: 'tag',
            sort: 'asc',
            width: 150
          },
          {
            label: 'Reference',
            field: 'referenceNumber',
            sort: 'asc',
            width: 150
          }
        ]
        
        var i;
        for(i=0; i<nextProps.data.length ; i++ ) {
          types.push(nextProps.data[i]['type'])
          amounts.push(nextProps.data[i]['amount'])
          dates.push(nextProps.data[i]['date'])
          tags.push(nextProps.data[i]['tag'])
          referenceNumbers.push(nextProps.data[i]['referenceNumber'])
          var arrData = 
            {
              type: nextProps.data[i]['type'],
              amount: nextProps.data[i]['amount'],
              date: nextProps.data[i]['date'],
              tag: nextProps.data[i]['tag'],
              referenceNumber: nextProps.data[i]['referenceNumber']
            };
          
          transactionArray.push(arrData);

        }
        this.setState({dataRow: transactionArray});
        this.setState({dataCol: arrayColumn});

        

    }
    }
    catch (e) 
    {
      console.log(e);
    }
    
  };
  render() {
    const data = {
      columns: this.state.dataCol,
      rows: this.state.dataRow
    };
    return (
      
      <MDBDataTable
      striped
      hover
      data={data}
      />
    );
  }
}
