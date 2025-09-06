import React from "react";

function LeftSection({imageURL,productName,productDescription,tryDemo,learnMore,googlePlay,appStore}){
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-6">
                    <img src={imageURL}></img>
                </div>
                
                <div className="col-6 p-5 mt-5">
                    <h1>{productName}</h1>
                    <p>{productDescription}</p>
                    <div className="mb-3">
                        <a className="me-5" href={tryDemo}>Try Demo <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                        <a className="ms-5" href={learnMore}>Learn More <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                    </div>
                    <div className="mt-3">
                        <a className="me-4" href={googlePlay}><img src="media\images\googlePlayBadge.svg"></img></a>
                        <a href={appStore}><img src="media\images\appstoreBadge.svg"></img></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LeftSection;