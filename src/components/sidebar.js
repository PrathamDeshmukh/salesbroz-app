import React, { Component } from 'react';
import { Link } from 'react-router-dom';
export default class Sidebar extends Component {
  render() {
    return (

      <div>


        <div className="theme-setting-wrapper">
          <div id="settings-trigger"><i className="ti-settings" /></div>
          <div id="theme-settings" className="settings-panel">
            <i className="settings-close ti-close" />
            <p className="settings-heading">SIDEBAR SKINS</p>
            <div className="sidebar-bg-options selected" id="sidebar-light-theme">
              <div className="img-ss rounded-circle bg-light border me-3" />Light
            </div>
            <div className="sidebar-bg-options" id="sidebar-dark-theme">
              <div className="img-ss rounded-circle bg-dark border me-3" />Dark
            </div>
            <p className="settings-heading mt-2">HEADER SKINS</p>
            <div className="color-tiles mx-0 px-4">
              <div className="tiles success" />
              <div className="tiles warning" />
              <div className="tiles danger" />
              <div className="tiles light" />
              <div className="tiles info" />
              <div className="tiles dark" />
              <div className="tiles default" />
            </div>
          </div>
        </div>
        <nav className="sidebar sidebar-offcanvas" id="sidebar">
          <ul className="nav">
            <li className="nav-item">
              <Link to="/" className="nav-link" >
                <i className="icon-grid menu-icon" />
                <span className="menu-title">Dashboard</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/my_employee" className="nav-link" >
                <i className="icon-grid menu-icon" />
                <span className="menu-title">My Employee</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/my_sales" className="nav-link" >
                <i className="icon-grid menu-icon" />
                <span className="menu-title">My Sales</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/my_purchase" className="nav-link" >
                <i className="icon-grid menu-icon" />
                <span className="menu-title">My Purchase</span>
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-bs-toggle="collapse" href="#form-elements" aria-expanded="false" aria-controls="form-elements">
                <i className="icon-align-right menu-icon" />
                <span className="menu-title">My Invoice</span>
                <i className="menu-arrow" />
              </a>
              <div className="collapse" id="form-elements">
                <ul className="nav flex-column sub-menu">
                  <li className="nav-item">
                    <Link to="/invoice" className="nav-link" >Invoice Dashboard</Link></li>
                  <li className="nav-item">
                    <Link to="/sale_invoice" className="nav-link" >Sales invoice</Link></li>
                  <li className="nav-item">
                    <Link to="/purchase_invoice" className="nav-link" >Purchase Invoice</Link></li>
                  <li className="nav-item">
                    <Link to="/invoice_setting" className="nav-link" >Invoice Settings</Link></li>
                </ul>
              </div>
            </li>
            <li className="nav-item">
              <Link to="/ledger" className="nav-link" >
                <i className="icon-grid menu-icon" />
                <span className="menu-title">Ledger</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/imei_tracker" className="nav-link" >
                <i className="icon-grid menu-icon" />
                <span className="menu-title">IMEI_TRACKER</span>
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-bs-toggle="collapse" href="#editors" aria-expanded="false" aria-controls="editors">
                <i className="icon-book menu-icon" />
                <span className="menu-title">My Returns</span>
                <i className="menu-arrow" />
              </a>
              <div className="collapse" id="editors">
                <ul className="nav flex-column sub-menu">
                  <li className="nav-item">
                    <Link to="/sales_return" className="nav-link">Sales Return</Link></li>
                  <li className="nav-item">
                    <Link to="/purchase_return" className="nav-link" >Purchase Retun</Link></li>
                </ul>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-bs-toggle="collapse" href="#ui-basic" aria-expanded="false" aria-controls="editors">
                <i className="icon-book menu-icon" />
                <span className="menu-title">Customer Relation</span>
                <i className="menu-arrow" />
              </a>
              <div className="collapse" id="ui-basic">
                <ul className="nav flex-column sub-menu">
                  <li className="nav-item">
                    <Link to="/my_customer" className="nav-link" >My Customers</Link></li>
                  <li className="nav-item">
                    <Link to="/my_distributor" className="nav-link" >My Distributors</Link></li>
                </ul>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-bs-toggle="collapse" href="#ui-advanced" aria-expanded="false" aria-controls="editors">
                <i className="icon-book menu-icon" />
                <span className="menu-title">Schemes Mgmt</span>
                <i className="menu-arrow" />
              </a>
              <div className="collapse" id="ui-advanced">
                <ul className="nav flex-column sub-menu">
                  <li className="nav-item">
                    <Link to="/scheme_dashboard" className="nav-link" >Schemes Dashboard</Link></li>
                  <li className="nav-item">
                    <Link to="/add_your_scheme" className="nav-link" >Add Your Schemes</Link></li>
                  <li className="nav-item">
                    <Link to="/my_earnings" className="nav-link" >My Earnings</Link></li>
                  <li className="nav-item"><a className="nav-link" href="<?php echo base_url();?>my_retailer_types">My Retailer Types</a></li>
                </ul>
              </div>
            </li>
            <li className="nav-item">
              <Link to="/ledger" className="nav-link" >
                <i className="icon-grid menu-icon" />
                <span className="menu-title">Ledger</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/imei_tracker" className="nav-link" >
                <i className="icon-grid menu-icon" />
                <span className="menu-title">IMEI_TRACKER</span>
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="<?php echo base_url();?>welcome">
                <i className="icon-power menu-icon" />
                <span className="menu-title">Logout</span>
              </a>
            </li>
          </ul>
        </nav>

      </div>




    );
  }
}
