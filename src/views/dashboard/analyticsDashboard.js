import React, { Component, Fragment } from "react";
import { Row, Col, Card, CardTitle, CardHeader, CardBody } from "reactstrap";

import * as Icon from "react-feather";

import { StaticCardData } from "../cards/staticCardData";
import { AdvancedCardData } from "../cards/advancedCardData";

import MinimalStatisticsChart2 from "../../components/cards/minimalStatisticsWithChart2Card";

import DiscoverPeopleListCard from "../../components/cards/discoverPeopleListCard";
import SalesAnalysisChartCarda from "../../components/cards/salesAnalysisChartCard";

import FitnessStatisticsChart from "../../components/cards/fitnessStatisticsWithChartCard";

import SalesPerVisitChartCard from "../../components/cards/salesPerVisitChartCard";
import DailyDietListCard from "../../components/cards/dailyDietListCard";

import UserStatisticsChartCard from "../../components/cards/userStatisticsChartCard";
import CarouselSliderCard from "../../components/cards/carouselSliderCard";
import EarningStatisticsChartCard from "../../components/cards/earningStatisticsChartCard";

import Apexchart from "react-apexcharts";
import {sgconsumerseries, sgconsumerpriceseries, sgyearprice} from "../charts/echartjs/agedeathData";
import axios from 'axios';

class AnalyticsDashboard extends Component {

  constructor(props) {
   super(props);
   this.state = {
     data: {
       balance: '',
       credit: '',
       debit: ''
     },
     series1: [{
       data: [
           0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
         0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
         0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
       ]
     }],
     series2: [{
       data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
     }],

     chartOptionsLine1: {
       chart: {
         id: 'tw',
         group: 'social',
       },
       title: {
         text: 'Debit per day (SGD$)',
         align: 'left'
       },
       xaxis: {
         type: 'category',
         categories: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']
       },
       yaxis: {
         show: false,
         axisTicks: {
           show: false
         },
       },

       markers: {
         size: 6,
         hover: {
           size: 10
         }
       },
       colors: ['#5C6BC0'],
     },
     chartOptionsLine2: {
       chart: {
         id: 'tw',
         group: 'social',
       },
       title: {
         text: 'Credit per day (SGD$)',
         align: 'left'
       },
       xaxis: {
         type: 'category',
         categories: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']
       },
       yaxis: {
         show: false,
         axisTicks: {
           show: false
         },
       },

       markers: {
         size: 6,
         hover: {
           size: 10
         }
       },
       colors: ['#00BCD4'],
     },
   }

 }

 async componentDidMount() {
  try {
    this.state.data = localStorage.getItem("userEmail");
    const accID = 79;
    const url = 'http://127.0.0.1:5000';
    const balanceResponse = await axios.get(url + '/balance/' + accID);
    const balance = balanceResponse['data']['balance'];
    const creditResponse = await axios.get(url + '/credit/' + accID);
    const credit = creditResponse['data']['credit'];
    const debitResponse = await axios.get(url + '/debit/' + accID);
    const debit = debitResponse['data']['debit'];
    const debitPerDayResponse = await axios.get(url + '/debit_per_day/' + accID);
    const debitPerDay = debitPerDayResponse['data']['debit_per_day'];
    const creditPerDayResponse = await axios.get(url + '/credit_per_day/' + accID);
    const creditPerDay = creditPerDayResponse['data']['credit_per_day'];
    this.setState({series1: [{data:debitPerDay}], series2: [{data:creditPerDay}]});
    this.setState({data: {balance: balance, credit: credit, debit: debit}});
  } catch (e) {
    console.log(e);
  }
}

  render() {
    return (
      <Fragment>
        {/* Statistics 
        can put things like balance, deposits this month, spending this month, net profit/loss this month
        or different accounts depending on the API
        If different account, below chart can populate deposits, spending etc.
        */}

        <Row className="row-eq-height">
          <Col sm="12" md="6" xl="4">
              <MinimalStatisticsChart2
                chartData={StaticCardData.ChartistData2}
                cardBgColor="bg-danger"
                /* Put money value from API */
                statistics={this.state.data.balance}
                text="Account Balance"
                iconSide="right"
              >
                <Icon.PieChart size={36} strokeWidth="1.3" color="#fff" />
              </MinimalStatisticsChart2>
            
          </Col>
          <Col sm="12" md="6" xl="4">
            
              <MinimalStatisticsChart2
                chartData={StaticCardData.ChartistData2}
                cardBgColor="bg-success"
                statistics={this.state.data.credit}
                text="Credits this month"
                iconSide="right"
              >
                <Icon.Box size={36} strokeWidth="1.3" color="#fff" />
              </MinimalStatisticsChart2>
            
          </Col>
          <Col sm="12" md="6" xl="4">
              <MinimalStatisticsChart2
                chartData={StaticCardData.ChartistData2}
                cardBgColor="bg-warning"
                statistics={this.state.data.debit}
                text="Debits   this month"
                iconSide="right"
              >
                <Icon.Filter size={36} strokeWidth="1.3" color="#fff" />
              </MinimalStatisticsChart2>
            
          </Col>
        </Row>
        <Row className="row-eq-height">
          <Col>
            <Card>
              <CardBody>
                <div id="wrapper">
                  <div id="chart-line">
                    <Apexchart
                      type="area"
                      height="200"
                      options={this.state.chartOptionsLine1}
                      series={this.state.series1}
                    />
                  </div>

                  <div id="chart-line2">
                    <Apexchart
                      type="area"
                      height="200"
                      options={this.state.chartOptionsLine2}
                      series={this.state.series2}
                    />
                  </div>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Fragment>
    );
  }
}

export default AnalyticsDashboard;
