// import external modules
import React, { Component } from "react";

import {
   Home,
   Mail,
   MessageSquare,
   ChevronRight,
   Aperture,
   Box,
   Edit,
   Grid,
   Layers,
   Sliders,
   Map,
   BarChart2,
   Calendar,
   Copy,
   Book,
   CheckSquare,
   LifeBuoy,
   Users
} from "react-feather";
import { NavLink } from "react-router-dom";

// Styling
import "../../../../assets/scss/components/sidebar/sidemenu/sidemenu.scss";
// import internal(own) modules
import SideMenu from "../sidemenuHelper";

class SideMenuContent extends Component {
   render() {
      return (
         <SideMenu className="sidebar-content" toggleSidebarMenu={this.props.toggleSidebarMenu}>
            <SideMenu.MenuMultiItems
               name="Links"
               Icon={<Home size={18} />}
               ArrowRight={<ChevronRight size={16} />}
               collapsedSidebar={this.props.collapsedSidebar}
            >
               <NavLink to="/analytics-dashboard" exact className="item" activeclassname="active">
                  <span className="menu-item-text">Dashboard</span>
               </NavLink>
               <NavLink to="/tables/regular" className="item" activeclassname="active">
                  <span className="menu-item-text">Transaction History</span>
               </NavLink>
               <NavLink to="/charts/chartjs" className="item" activeclassname="active">
                  <span className="menu-item-text">Aggregated Expenditure</span>
               </NavLink>
               <NavLink to="/pages/user-profile" className="item" activeclassname="active">
                  <span className="menu-item-text">User Profile</span>
               </NavLink>
            </SideMenu.MenuMultiItems>
           
           
         </SideMenu>
      );
   }
}

export default SideMenuContent;
