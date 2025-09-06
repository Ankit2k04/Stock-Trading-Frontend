import React from "react";

function Hero(){
    return (
        <section className="container-fluid" id="supportHero">

            <div className="p-2" id="supportWrapper">
                <h4 className="mt-5">Support Portal</h4>
                <a className="mt-5" href="" style={{color:"white", textDecoration:"underline"}}>Track Tickets</a>
            </div>

            <div className="row p-5">
                <div className="col-6 p-5">
                    <h1 className="fs-3">Search for an answer or browse help to create a ticket</h1>
                    <input className="p-3 mb-4 mt-4" style={{width:"70%",borderRadius:"10px",border:"none"}} placeholder="Eg. how do i activate F&O, why is my order getting rejected"/><br/>
                    
                    <a className="me-2" style={{color:"white", textDecoration:"underline"}} href="">Track account opening</a>
                    <a className="me-2" style={{color:"white", textDecoration:"underline"}} href="">Track segment activation</a>
                    <a className="me-2" style={{color:"white", textDecoration:"underline"}} href="">Intraday margins</a>
                    <a className="me-2" style={{color:"white", textDecoration:"underline"}} href="">Kite user manual</a>
                </div>
                <div className="col-6 p-5">
                    <h1 className="fs-3 mb-4 ms-4">Featured</h1>
                    <ol>
                        <li className="mb-3">
                            <a style={{color:"white", textDecoration:"underline"}} href="">Exclusion of F&O contracts on 8 securities from August 29, 2025</a>
                        </li>
                        <li>
                            <a style={{color:"white", textDecoration:"underline"}} href="">Revision in expiry day of Index and Stock derivatives contracts</a>
                        </li>
                    </ol>
                </div>
            </div>

        </section>
    )
}

export default Hero;