import React, { Component, Fragment } from "react";
import CustomTabs from "../../components/tabs/customTabs";
import ContentHeader from "../../components/contentHead/contentHeader";
import ContentSubHeader from "../../components/contentHead/contentSubHeader";
import { Card, CardBody, CardTitle, Row, Col } from "reactstrap";
import axios from 'axios';

//Prism
// eslint-disable-next-line
import Prism from "prismjs"; //Include JS
import "prismjs/themes/prism-okaidia.css"; //Include CSS
import { PrismCode } from "react-prism"; //Prism Component

// Table exmple pages
import TableExample from "./examples/table";
import TableDarkExample from "./examples/tableDark";
import TableStripedExample from "./examples/tableStriped";
import TableBorderedExample from "./examples/tableBordered";
import TableBorderlessExample from "./examples/tableBorderless";
import TableHoverExample from "./examples/tableHover";
import TableSizingExample from "./examples/tableSizing";
import TableResponsiveExample from "./examples/tableResponsive";

//Table exmple souece pages
import TableExampleSource from "./example-source/table";
import TableProperties from "./example-source/tableProperties";
import TableDarkExampleSource from "./example-source/tableDark";
import TableStripedExampleSource from "./example-source/tableStriped";
import TableBorderedExampleSource from "./example-source/tableBordered";
import TableBorderlessExampleSource from "./example-source/tableBorderless";
import TableHoverExampleSource from "./example-source/tableHover";
import TableSizingExampleSource from "./example-source/tableSizing";
import TableResponsiveExampleSource from "./example-source/tableResponsive";
import {
  Badge,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownItem,
  DropdownMenu
} from "reactstrap";

import Apexchart from "react-apexcharts";
import {test1, test2, test3} from "./testData";

class regular extends Component {
  constructor(props) {
    super(props);
    this.state = {
      transaction: []
    }
 
  }

 monthDdl = e =>{
    if(parseInt(e.target.value) == 1 ){
       this.setState({
          series1: test1,
          series2: test2,
          series3: test3
       })
    }
 };

 accountDdl = e =>{
    if(parseInt(e.target.value) == 1 ){
       console.log("treu");
    }
 };

 async componentWillMount() {

  try 
  {
    const headers = 
    {
      'identity': 'T7',
      'token': 'af1c9e83-266a-4c97-80fa-25c84e2f39fd'
    }
    this.state.custId = localStorage.getItem("custId");
    this.state.accId = localStorage.getItem("accId");

    axios
       .get(`http://techtrek-api-gateway.ap-southeast-1.elasticbeanstalk.com/transactions/${this.state.accId}?from=01-01-2018&to=01-30-2020`,{headers})
       .then(res => {
         const transaction = res.data;
         this.setState({transaction});
         
    
    })
    .catch(error => {
      console.log(error);
    });
  }
  catch (e) 
  {
    console.log(e);
  }
  
};

  render() {
    return (
      <Fragment>
        <ContentHeader>Transaction History</ContentHeader>
        <ContentSubHeader>
          View your transaction history for your account
        </ContentSubHeader>
        
        <Row>
          <Col sm="12">
            <Card>
              <CardBody>
               
                <CustomTabs
                  TabContent1={<TableHoverExample data={this.state.transaction} />}
                  TabContent2={
                    <PrismCode component="pre" className="language-javascript">
                      {TableHoverExampleSource}
                    </PrismCode>
                  }
                />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Fragment>
    );
  }
}

export default regular;
