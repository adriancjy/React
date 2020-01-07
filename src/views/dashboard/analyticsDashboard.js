import React, { Component, Fragment } from "react";
import { Row, Col, Card, CardTitle, CardHeader, CardBody } from "reactstrap";

import * as Icon from "react-feather";
import axios from "axios";
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

class AnalyticsDashboard extends Component {
  cardClicked(val) {
    switch (val) {
      case 1:
            this.setState({
               series1: sgconsumerseries,
               series2: sgconsumerpriceseries,
               series3: sgyearprice,               
             })
        break;
      case 2:
        alert("2");
        break;
      case 3:
        alert("3");
        break;
      case 4:
        alert("4");
        break;
    }
  }

  constructor(props) {
   super(props);
   this.state = {
     custId: "",
     accId: "",
     availableBalance: "",
     currency: "",
     dateOfBalance: "",
     displayName: "",
     accountNumber: "",
     accountType: "",
     series1: [{
       data: [0, 0, 0, 0, 0, 0, 0, 0, 0]
     }],
     series2: [{
       data: [0, 0, 0, 0, 0, 0, 0, 0, 0],
     }],
     series3: [{
       data: [0, 0, 0, 0, 0, 0, 0, 0, 0],
     }],

     
     /*
           newseries1: [{
             data: [19.8, 19.4, 18.9, 18.5, 18.1, 17.8, 17.5, 17.3, 17.0]
           }],
           newseries2: [{
             data: [7.36, 7.73, 8.12, 8.45, 8.84, 9.16, 9.36, 9.87, 10.21],
           }],
           newseries3: [{
             data: ['2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016'],
           }],
     
           */

     chartOptionsLine1: {
       chart: {
         id: 'tw',
         group: 'social',
       },
       title: {
         text: 'Average Cigarettes Per Smoker Per Day',
         align: 'left'
       },
       xaxis: {
         type: 'category',
         categories: ['2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016']
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
         text: 'Average Price of a 20-Pack of Cigarettes (US$)',
         align: 'left'
       },
       xaxis: {
         type: 'category',
         categories: ['2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016']
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
     chartOptionsArea: {
       chart: {
         id: 'yt',
         group: 'social',
       },
       title: {
         text: 'Average Amount of Money Spent on Cigarettes Per Year in (US$)',
         align: 'left'
       },
       xaxis: {
         type: 'category',
         categories: ['2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016']
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

       colors: ['#E53935'],
       //colors: ['#00E396'],

     }
   }

 }

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
       .get(`http://techtrek-api-gateway.ap-southeast-1.elasticbeanstalk.com/accounts/deposit/79/balance?month=1&year=2018`,{headers})
       .then(res => {
         const persons = res.data;
         this.state.currency = persons["currency"];
         this.state.dateOfBalance = persons["dateOfBalance"];
         this.state.displayName = persons["displayName"];
         this.state.accountNumber = persons["accountNumber"];
         this.state.accountType = persons["accountType"];
         this.setState({availableBalance: persons["availableBalance"]});

    
    });
  }
  catch (e) 
  {
    console.log(e);
  }
  
};


  render() {
    console.log(this.state.availableBalance);
    return (
      <Fragment>
        {/* Statistics 
        can put things like balance, deposits this month, spending this month, net profit/loss this month
        or different accounts depending on the API
        If different account, below chart can populate deposits, spending etc.
        */}

        <Row className="row-eq-height">
          <Col sm="12" md="6" xl="3">
            <a onClick={() => this.cardClicked(1)}>
              <MinimalStatisticsChart2
                chartData={StaticCardData.ChartistData2}
                cardBgColor="bg-danger"
                /* Put money value from API */
                statistics = {this.state.availableBalance}
                //statistics="$500"
                text="Account Balance"
                iconSide="right"
              >
                <Icon.PieChart size={36} strokeWidth="1.3" color="#fff" />
              </MinimalStatisticsChart2>
            </a>
          </Col>
          <Col sm="12" md="6" xl="3">
            <a onClick={() => this.cardClicked(2)}>
              <MinimalStatisticsChart2
                chartData={StaticCardData.ChartistData2}
                cardBgColor="bg-success"
                statistics="$1567"
                text="Deposits this month"
                iconSide="right"
              >
                <Icon.Box size={36} strokeWidth="1.3" color="#fff" />
              </MinimalStatisticsChart2>
            </a>
          </Col>
          <Col sm="12" md="6" xl="3">
            <a onClick={() => this.cardClicked(3)}>
              <MinimalStatisticsChart2
                chartData={StaticCardData.ChartistData2}
                cardBgColor="bg-warning"
                statistics="$4566"
                text="Spending this month"
                iconSide="right"
              >
                <Icon.Filter size={36} strokeWidth="1.3" color="#fff" />
              </MinimalStatisticsChart2>
            </a>
          </Col>
          <Col sm="12" md="6" xl="3">
            <a onClick={() => this.cardClicked(4)}>
              <MinimalStatisticsChart2
                chartData={StaticCardData.ChartistData2}
                cardBgColor="bg-info"
                statistics="$4566"
                text="Net profit/loss"
                iconSide="right"
              >
                <Icon.DollarSign size={36} strokeWidth="1.3" color="#fff" />
              </MinimalStatisticsChart2>
            </a>
          </Col>
        </Row>
        {/* Discover people & sales analysis */}
        <Row className="row-eq-height">
        {/* This is the orignal col sizing
        <Col sm="12" lg="6" xl="8"> */}
          <Col>
            {/* <SalesAnalysisChartCarda
                     salesAnalysisData={AdvancedCardData.SalesAnalysisData}
                     cardTitle="Sales Analysis"
                     salesText="Sales"
                     visitText="Visits"
                     clickText="Clicks"
                  /> */}

               {/* insert a real time chart instead */}
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

                  <div id="chart-area">
                    <Apexchart
                      type="area"
                      height="200"
                      options={this.state.chartOptionsArea}
                      series={this.state.series3}
                    />
                  </div>
                </div>
              </CardBody>
            </Card>
          </Col>
          {/* <Col sm="12" lg="6" xl="4">
            <DiscoverPeopleListCard
              discoverPeopleList={AdvancedCardData.DiscoverPeopleList}
              cardTitle="Peoples"
            />
          </Col>
        </Row> */}
        {/* Fitness charts */}
        {/* <Row className="row-eq-height">
          <Col sm="12" md="4">
            <FitnessStatisticsChart
              donutChartData={StaticCardData.DonutChartData1}
              dountChartClass="donut1"
              textTop="Steps"
              statisticsTop="3261"
              textBottom="Steps Today's Target"
              statisticsBottom="5000"
              textColor="primary"
            />
            <Icon.TrendingUp
              size={60}
              strokeWidth="1"
              className="primary icon-dount-center"
            />
          </Col>
          <Col sm="12" md="4">
            <FitnessStatisticsChart
              donutChartData={StaticCardData.DonutChartData2}
              dountChartClass="donut2"
              textTop="Distance"
              statisticsTop="7.6"
              statisticsTopUnit="miles"
              textBottom="Miles Today's Target"
              statisticsBottom="10"
              textColor="warning"
            />
            <Icon.Zap
              size={60}
              strokeWidth="1"
              className="warning icon-dount-center"
            />
          </Col>
          <Col sm="12" md="4">
            <FitnessStatisticsChart
              donutChartData={StaticCardData.DonutChartData3}
              dountChartClass="donut3"
              textTop="Calories"
              statisticsTop="4,025"
              statisticsTopUnit="kcal"
              textBottom="kcla Today's Target"
              statisticsBottom="5000"
              textColor="danger"
            />
            <Icon.Heart
              size={60}
              strokeWidth="1"
              className="danger icon-dount-center"
            />
          </Col>
        </Row> */}

        {/* Sales per Visit & Daily Diet Chart */}
        {/* <Row className="row-eq-height">
          <Col sm="12" md="8">
            <SalesPerVisitChartCard
              salesPerVisitData={AdvancedCardData.SalesPerVisitData}
              cardTitle="Sales Per Visit"
              salesText="Sales"
              visitText="Visits"
            />
          </Col>
          <Col sm="12" md="4">
            <DailyDietListCard
              dailyDietList={AdvancedCardData.DailyDietList}
              cardTitle="Daily Diet"
              cardSubTitle="Some quick example text to build on the card."
            />
          </Col>
        </Row> */}
        {/* Misc Cards */}
        {/* <Row className="row-eq-height">
          <Col sm="12" md="4">
            <UserStatisticsChartCard
              userStatisticData={AdvancedCardData.UserStatisticData}
              fullName="Kevin Sullivan"
              designation="UX Designer"
            />
          </Col>
          <Col sm="12" md="4">
            <CarouselSliderCard
              cardTitle="Card Titile"
              description="Sweet halvah dragée jelly-o halvah carrot cake oat cake. Donut jujubes jelly chocolate cake."
            />
          </Col>
          <Col sm="12" md="4">
            <EarningStatisticsChartCard
              earningStatisticData={AdvancedCardData.EarningStatisticData}
              cardTitle="Earning"
              cardSubTitle="Mon 18 - Sun 21"
              earningAmount="$4295.36"
              earningText="Total Earnings"
            />
          </Col> */}
        </Row>
      </Fragment>
    );
  }
}

export default AnalyticsDashboard;
