// import external modules
import React, { Fragment, Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import {
   TabContent,
   TabPane,
   NavLink,
   Row,
   Col,
   Button,
   Form,
   Input,
   FormGroup,
   Card,
   CardHeader,
   CardBody,
   CardFooter
} from "reactstrap";
import classnames from "classnames";

// import internal(own) modules
import gallery1 from "../../assets/img/gallery/1.jpg";
import gallery2 from "../../assets/img/gallery/2.jpg";
import gallery3 from "../../assets/img/gallery/3.jpg";
import gallery4 from "../../assets/img/gallery/4.jpg";
import gallery5 from "../../assets/img/gallery/5.jpg";
import gallery6 from "../../assets/img/gallery/6.jpg";
import gallery7 from "../../assets/img/gallery/7.jpg";
import gallery8 from "../../assets/img/gallery/8.jpg";
import gallery9 from "../../assets/img/gallery/9.jpg";
import gallery10 from "../../assets/img/gallery/10.jpg";
import gallery11 from "../../assets/img/gallery/11.jpg";
import gallery12 from "../../assets/img/gallery/12.jpg";
import gallery13 from "../../assets/img/gallery/13.jpg";
import gallery14 from "../../assets/img/gallery/14.jpg";
import gallery15 from "../../assets/img/gallery/15.jpg";
import gallery16 from "../../assets/img/gallery/16.jpg";

import avatarm8 from "../../assets/img/portrait/medium/avatar-m-8.png";
import avatarS3 from "../../assets/img/portrait/small/avatar-s-3.png";
import avatarS5 from "../../assets/img/portrait/small/avatar-s-5.png";
import avatarS6 from "../../assets/img/portrait/small/avatar-s-6.png";
import avatarS9 from "../../assets/img/portrait/small/avatar-s-9.png";
import avatarS11 from "../../assets/img/portrait/small/avatar-s-11.png";
import avatarS12 from "../../assets/img/portrait/small/avatar-s-12.png";
import avatarS14 from "../../assets/img/portrait/small/avatar-s-14.png";
import avatarS16 from "../../assets/img/portrait/small/avatar-s-16.png";
import avatarS18 from "../../assets/img/portrait/small/avatar-s-18.png";
import photo6 from "../../assets/img/photos/06.jpg";
import photo7 from "../../assets/img/photos/07.jpg";
import photo8 from "../../assets/img/photos/08.jpg";
import photo9 from "../../assets/img/photos/09.jpg";
import photo14 from "../../assets/img/photos/14.jpg";

class UserProfile extends Component {
   state = {
      activeTab: "2"
   };

   toggle = tab => {
      if (this.state.activeTab !== tab) {
         this.setState({
            activeTab: tab
         });
      }
   };

async componentDidMount() {
  try 
  {
    const headers = 
    {
      'identity': 'T7',
      'token': 'af1c9e83-266a-4c97-80fa-25c84e2f39fd'
    }
    this.state.custId = localStorage.getItem("custId");
    this.state.accId = localStorage.getItem("accId");
    console.log(this.state.custId);
    console.log(this.state.accId);

    axios
       .get(`http://techtrek-api-gateway.ap-southeast-1.elasticbeanstalk.com/customers/${this.state.custId}/details`,{headers})
       .then(res => {
         const persons = res.data;
         document.getElementById("name").innerHTML = persons["firstName"] + " " + persons["lastName"];
         document.getElementById("Name_2").innerHTML = persons["firstName"] + " " + persons["lastName"];
         document.getElementById("name_3").innerHTML = persons["firstName"] + " " + persons["lastName"];
         document.getElementById("Birthday").innerHTML = persons["dateOfBirth"];
         document.getElementById("Gender").innerHTML = persons["gender"];
         document.getElementById("lastLogIn").innerHTML = persons["lastLogIn"];
         document.getElementById("riskLevel").innerHTML = persons["riskLevel"];

       });

    console.log(this.state.customerId);
    console.log(this.state.gender);
    console.log(this.state.firstName);
    console.log(this.state.lastName);
    console.log(this.state.lastLogIn);
    console.log(this.state.ateOfBirth);
    console.log(this.state.riskLevel);
  }
  catch (e) 
  {
    console.log(e);
  }
};

   render() {
      return (
         <Fragment>
            <Row>
               <Col xs="12" id="user-profile">
                  <Card className="profile-with-cover">
                     <div
                        className="card-img-top img-fluid bg-cover height-300"
                        style={{ background: `url("${photo14}") 50%` }}
                     />
                     <Row className="media profil-cover-details">
                        <Col xs="5">
                           <div className="align-self-start halfway-fab pl-3 pt-2">
                              <div className="text-left">
                                 <h3 id= "name_3" className="card-title text-white">Jose Diaz</h3>
                              </div>
                           </div>
                        </Col>
                        <Col xs="2">
                           <div className="align-self-center halfway-fab text-center">
                              <Link to="/pages/user-profile" className="profile-image">
                                 <img
                                    src={avatarm8}
                                    className="rounded-circle img-border gradient-summer width-100"
                                    alt="Card avatar"
                                 />
                              </Link>
                           </div>
                        </Col>
                        <Col xs="5">
                           
                        </Col>
                     </Row>
                     <div className="profile-section">
                        <Row>
                           <Col lg="5" md="5">
                              <ul className="profile-menu no-list-style">
                                 <li>
                                    <NavLink
                                       className={classnames("primary font-medium-2 font-weight-600", {
                                          active: this.state.activeTab === "1"
                                       })}
                                       onClick={() => {
                                          this.toggle("1");
                                       }}
                                    >
                                      
                                    </NavLink>
                                 </li>
                              </ul>
                           </Col>

                           <Col lg="2" md="2" className="text-center">
                                    <span id = "name" className="font-medium-2 text-uppercase"></span>
                              <p className="grey font-small-2"></p>
                           </Col>

                           <Col lg="5" md="5">
                              <ul className="profile-menu no-list-style">
                                 <li>
                                    <NavLink
                                       className={classnames("primary font-medium-2 font-weight-600", {
                                          active: this.state.activeTab === "3"
                                       })}
                                       onClick={() => {
                                          this.toggle("3");
                                       }}
                                    >
              
                                    </NavLink>
                                 </li>
                                 <li>
                                 
                                 </li>
                              </ul>
                           </Col>
                        </Row>
                     </div>
                  </Card>
               </Col>
            </Row>

            <TabContent activeTab={this.state.activeTab}>
              
               {/* Friends */}
               <TabPane tabId="2">
                  <Row>
                     <Col sm="12">
                        <Card>
                           <CardBody>
                              <div className="mb-3">
                                 <span className="text-bold-500 primary">About Me:</span>
                              </div>
                              <hr />
                              <Row>
                                 <Col xs="12" md="6" lg="4">
                                    <ul className="no-list-style">
                                       <li className="mb-2">
                                          <span className="text-bold-500 primary">
                                             <Link to="/pages/useer-profile">Name:</Link>
                                          </span>
                                          <span id = "Name_2" className="display-block overflow-hidden"></span>
                                       </li>
                                       <li className="mb-2">
                                          <span className="text-bold-500 primary">
                                             <Link to="/pages/user-profile">Birthday:</Link>
                                          </span>
                                          <span id = "Birthday" className="d-block overflow-hidden">New Jersey, USA</span>
                                       </li>
                                    </ul>
                                 </Col>
                                 <Col xs="12" md="6" lg="4">
                                    <ul className="no-list-style">
                                       <li className="mb-2">
                                          <span className="text-bold-500 primary">
                                             <Link to="/pages/user-profile">Gender:</Link>
                                          </span>
                                          <span id = "Gender" className="display-block overflow-hidden"></span>
                                       </li>
                                       <li className="mb-2">
                                          <span className="text-bold-500 primary">
                                             <Link to="/pages/user-profile">Risk Level:</Link>
                                          </span>
                                          <span id = "riskLevel" className="display-block overflow-hidden"></span>
                                       </li>
                                    </ul>
                                 </Col>
                                 <Col xs="12" md="6" lg="4">
                                    <ul className="no-list-style">
                                       <li className="mb-2">
                                          <span className="text-bold-500 primary">
                                             <Link to="/pages/user-profile">Last Login:</Link>
                                          </span>
                                          <span id = "lastLogIn"className="display-block overflow-hidden"></span>
                                       </li>
                                    </ul>
                                 </Col>
                              </Row>
                              <hr />
                           </CardBody>
                        </Card>
                     </Col>
                     <Col sm="12">
                        
                     </Col>
                  </Row>
               </TabPane>
               {/* User Timeline */}

               
            </TabContent>
         </Fragment>
      );
   }
}

export default UserProfile;
