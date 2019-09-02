import React from 'react'

export default function Headers({score, topScore, message}) {

    return (
        <header>
          <nav>
            {/* <div class="container"> */}
              <div className="row bg-secondary p-10 text-content-center text-uppercase font-weight-bold text-white" style={{height: '50px', fontSize: 25}}>
                <div className="col-sm float-left ml-4">Clicky Game</div>
                <div className="col-sm text-center">{message}</div>
                <div className="col-sm text-right mr-4">Score: {score} | Top Score: {topScore}</div>
              </div>
            {/* </div> */}
          </nav>
          <div className="jumbotron jumbotron-fluid text-center">
            <div className="container">
              <h1 className="display-4">Clicky Game</h1>
              <p className="lead">
                We all make our choices in life, but in the end our choices make
                us.
              </p>
              <p>- Play if you dare</p>
            </div>
          </div>
        </header>
    )
}
