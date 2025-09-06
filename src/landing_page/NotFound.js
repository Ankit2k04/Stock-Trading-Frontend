import React from "react";

function NotFound(){
    return (
        <div className="container p-5 mb-5">
            <div className="row text-center">
                <h1 className="mt-5 mb-4 text-muted">404 Not Found</h1>
                <img className="m-auto" src="media/images/error404.png" style={{width:"30%"}}></img>
                <h2 className="mt-5 mb-4">Kiaan couldn’t find that page</h2>
                <p className="mb-4">We couldn’t find the page you were looking for.<br/> Visit Zerodha’s home page</p>
            </div>
        </div>
    );
}

export default NotFound;