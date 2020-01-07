// import external modules
import React, { Fragment } from "react";
import { Row, Col, Card, CardTitle, CardHeader, CardBody } from "reactstrap";
import { Bar, Line, Scatter, Radar, Pie, Polar, Doughnut } from "react-chartjs-2";
import axios from 'axios';
import {
   PieData,
} from "./chartData";
async function test(){
   const url = 'http://127.0.0.1:5000';
   var accID = localStorage.getItem("accId");
   const breakdownResponse = await axios.get(url + '/breakdown/' + accID);
   console.log(breakdownResponse);
}



const ChartJS = props => (
   <Fragment>
      <Row>
         <Col sm="12" className="content">
            <div className="content-header text-dark">Aggregated Expenditure </div>
         </Col>
      </Row>
      <Row>
         <Col sm="12">
            <Card>
               <CardHeader>
                  <CardTitle>Overview</CardTitle>
               </CardHeader>
               <CardBody>
                  <Pie height={400} data={PieData.data} options={PieData.options} />
               </CardBody>
            </Card>
         </Col>
      </Row>
      <Row>
      <Col sm="12">
                  <Card>
                     <CardBody>
                        <CardTitle>
                           Products You May Be Interested In ...
                           <small className="text-muted ml-2"></small>
                        </CardTitle>
                        <p>
                           List of items in which the order does explicitly
                           matter. [Placeholder for recommended products]
                        </p>
                        
                     </CardBody>
                  </Card>
               </Col>
      </Row>

   </Fragment>
);

export default ChartJS;
