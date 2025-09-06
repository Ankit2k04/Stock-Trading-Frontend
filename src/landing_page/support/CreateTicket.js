import React from "react";

function CreateTicket(){
    return (
        <div className="container mb-n5">

            <div className="row p-5 mt-5">
                <h1 className="fs-2">
                    To create a ticket, select a relevant topic
                </h1>

                <div className="col-4 p-5 mt-5">
                    <h4 className="mb-4">
                        <i class="fa-solid fa-circle-plus"></i>Account Opening
                    </h4>
                    <a href="" style={{lineHeight:"2.5"}}>Online Account Opening</a><br/>
                    <a href="" style={{lineHeight:"2.5"}}>Offline Account Opening</a><br/>
                    <a href="" style={{lineHeight:"2.5"}}>Company, Partnership and HUF Account Opening</a><br/>
                    <a href="" style={{lineHeight:"2.5"}}>NRI Account Opening</a><br/>
                    <a href="" style={{lineHeight:"2.5"}}>Charges at Zerodha</a><br/>
                    <a href="" style={{lineHeight:"2.5"}}>Zerodtha IDFC Bank 3-in-1 Account</a><br/>
                    <a href="" style={{lineHeight:"2.5"}}>Getting Started</a><br/>
                </div>

                <div className="col-4 p-5 mt-5">
                    <h4 className="mb-4">
                        <i class="fa-solid fa-user"></i>Your Zerodha Account
                    </h4>
                    <a href="" style={{lineHeight:"2.5"}}>Login Credentials</a><br/>
                    <a href="" style={{lineHeight:"2.5"}}>Account Modificaion and Segment Addition</a><br/>
                    <a href="" style={{lineHeight:"2.5"}}>DP ID and bank details</a><br/>
                    <a href="" style={{lineHeight:"2.5"}}>Your Profile</a><br/>
                    <a href="" style={{lineHeight:"2.5"}}>Transfer and conversion of shares</a><br/>
                </div>

                <div className="col-4 p-5 mt-5">
                    <h4 className="mb-4">
                        <i class="fa-solid fa-chart-line"></i>Your Zerodha Account
                    </h4>
                    <a href="" style={{lineHeight:"2.5"}}>Margin/leverage,Product and Order types</a><br/>
                    <a href="" style={{lineHeight:"2.5"}}>Kite Web and Mobiles</a><br/>
                    <a href="" style={{lineHeight:"2.5"}}>Trading FAQs</a><br/>
                    <a href="" style={{lineHeight:"2.5"}}>Corporate Actions</a><br/>
                    <a href="" style={{lineHeight:"2.5"}}>Sentinel</a><br/>
                    <a href="" style={{lineHeight:"2.5"}}>Kite API</a><br/>
                    <a href="" style={{lineHeight:"2.5"}}>Pi and other platforms</a><br/>
                    <a href="" style={{lineHeight:"2.5"}}>Stockreports+</a><br/>
                    <a href="" style={{lineHeight:"2.5"}}>GTT</a><br/>
                </div>
            </div>
            <hr/>
            <div className="row p-5 mt-n5">
                <div className="col-4 p-5 ">
                    <h4 className="mb-4">
                        <i class="fa-solid fa-credit-card"></i>Funds
                    </h4>
                    <a href="" style={{lineHeight:"2.5"}}>Adding Funds</a><br/>
                    <a href="" style={{lineHeight:"2.5"}}>Fund Withdrawl</a><br/>
                    <a href="" style={{lineHeight:"2.5"}}>eMandates</a><br/>
                    <a href="" style={{lineHeight:"2.5"}}>Adding Bank Accounts</a><br/>
                </div>

                <div className="col-4 p-5 ">
                    <h4 className="mb-4">
                        <i class="fa-solid fa-power-off"></i>Console
                    </h4>
                    <a href="" style={{lineHeight:"2.5"}}>Reports</a><br/>
                    <a href="" style={{lineHeight:"2.5"}}>Ledger</a><br/>
                    <a href="" style={{lineHeight:"2.5"}}>Portfolio</a><br/>
                    <a href="" style={{lineHeight:"2.5"}}>60 Day Challange</a><br/>
                    <a href="" style={{lineHeight:"2.5"}}>IPO</a><br/>
                    <a href="" style={{lineHeight:"2.5"}}>Referal Program</a><br/>
                </div>

                <div className="col-4 p-5 ">
                    <h4 className="mb-4">
                        <i class="fa-brands fa-bitcoin"></i>Coin
                    </h4>
                    <a href="" style={{lineHeight:"2.5"}}>Understanding Mutual Funds</a><br/>
                    <a href="" style={{lineHeight:"2.5"}}>About Coin</a><br/>
                    <a href="" style={{lineHeight:"2.5"}}>Buying and Selling through Coin</a><br/>
                    <a href="" style={{lineHeight:"2.5"}}>Starting an SIP</a><br/>
                    <a href="" style={{lineHeight:"2.5"}}>Managing your Portfolio</a><br/>
                    <a href="" style={{lineHeight:"2.5"}}>Coin API</a><br/>
                    <a href="" style={{lineHeight:"2.5"}}>Moving to Coin</a><br/>
                    <a href="" style={{lineHeight:"2.5"}}>Goverment Securities</a><br/>
                </div>
            </div>

        </div>
    );
}

export default CreateTicket;