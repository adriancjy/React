// import external modules
import React, { Fragment } from "react";
import { Row, Col, Card, CardTitle, CardHeader, CardBody } from "reactstrap";
import { Bar, Line, Scatter, Radar, Pie, Polar, Doughnut } from "react-chartjs-2";

import {
   PieData,
} from "./chartData";

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
                           matter.
                        </p>
                        <ol>
                           <li>Lorem ipsum dolor sit amet</li>
                           <li>Consectetur adipiscing elit</li>
                           <li>Integer molestie lorem at massa</li>
                           <li>Facilisis in pretium nisl aliquet</li>
                           <li>
                              Nulla volutpat aliquam velit
                              <ol>
                                 <li>Phasellus iaculis neque</li>
                                 <li>Purus sodales ultricies</li>
                                 <li>Vestibulum laoreet porttitor sem</li>
                                 <li>Ac tristique libero volutpat at</li>
                              </ol>
                           </li>
                           <li>Faucibus porta lacus fringilla vel</li>
                           <li>Aenean sit amet erat nunc</li>
                           <li>Eget porttitor lorem</li>
                        </ol>
                     </CardBody>
                  </Card>
               </Col>
      </Row>

   </Fragment>
);

export default ChartJS;
