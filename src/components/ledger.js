import React, { Component } from 'react'
export default class Ledger extends Component {
    render() {
        return (
            <div>
                <div classname="row">
                    <div classname="col-md-12 grid-margin transparent">
                        <div classname="row">
                            <div classname="col-md-4 mb-4  transparent">
                                <img src="../assets/images/add.jpg" style={{ height: 300, width: 300 }} />
                                <h3>Add your first Client</h3>
                                <h5>You can add your Suppliers, Customers, <br />Contacts and many more</h5>
                                <h4>Learn more</h4>
                                <button type="button" classname="btn btn-primary ">+Add Client</button>
                            </div>
                            <div classname="col-md-8 mb-2  transparent">
                                <div classname="row">
                                    <h6>If the value shown do not match as per your books , select customer/supplier and 'Add Transaction' to rectify/correct it.</h6>
                                    <div classname="row">
                                        <div classname="col-md-12 grid-margin transparent">
                                            <div classname="card">
                                                <div classname="card-body">
                                                    <div classname="row">
                                                        <div classname="col-md-6 mb-4 transparent">
                                                            <h4>Transaction</h4>
                                                            <h6>From 17/04/2024 to 24/04/2024</h6>
                                                        </div>
                                                        <div classname="col-md-6 mb-4 justify-content-end stretch-card transparent ">
                                                            <button type="button" classname="btn btn-primary ">Add Transaction</button>
                                                            <button type="button" classname="btn btn-primary ">Filter</button>
                                                        </div>
                                                        <div classname="col-md-12 mb-4 justify-content-center transparent">
                                                            <img src="../assets/images/trans.jpg" style={{ height: 300, width: 300 }} />
                                                            <h3>Add your first Transaction</h3>
                                                            <h5>You can add your credit, debit transaction of<br /> your customers, suppliers and manange your<br /> Ledger</h5>
                                                            <h4>Learn more</h4>
                                                            <button type="button" classname="btn btn-primary ">+Add transaction</button>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* <input type="text" className="form-control" name="tags" id="tags" defaultValue="Arvind" />
                                            </div>
                                            <div className="col-md-2 mb-1  justify-content-end transparent">
                                                <button type="button" className="btn btn-primary float-end">Filter</button>
                                            </div>
                                            <div className="col-md-2 mb-1 justify-content-end transparent">
                                                <button type="button" className="btn btn-primary float-end">Download</button> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}