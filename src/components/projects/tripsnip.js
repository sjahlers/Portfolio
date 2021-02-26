import React from 'react';
import marine from '../../img/marine.jpg';
import marine2 from '../../img/marine2.jpg';
import marineHover from '../../img/marine-hover.jpg';

class TripSnip extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1 className="hotpink">TripSnip</h1>
          </div>
        </div>

        <div className="row">
          <div className="col-12 col-lg-6 col-xl-4 font-md">
            <p className="font-lg">TripSnip</p>

            <p><a href="https://sjahlers.github.io/tripsnip/" target="_blank">TripSnip</a></p>

            <p><i className="fas fa-tools" aria-hidden="true"></i> Toolbox:</p>
              <ul>
                <li>AngularJS</li>
                <li>REST API</li>
                <li>JavaScript</li>
                <li>Gulp</li>
              </ul>
          </div>
          <div className="col-12 col-lg-6 col-xl-8">
            <img src={marine} className="img-responsive screenshot" alt="Marine Homepage Screenshot" title="Marine Homepage Screenshot"/>
          </div>
        </div>

        <div className="row">
          <div className="col-12 col-md-6">
            <p className="caption">Vivid photos with overlay content and informational graphic row</p>
            <img src={marine2} className="img-responsive screenshot" alt="Marine Icon Row" title="Marine Icon Row"/>
          </div>
          <div className="col-12 col-md-6">
            <p className="caption">Photo links with color overlay and hover effect</p>
            <img src={marineHover} className="img-responsive screenshot" alt="Marine Photo Link Hover Effect" title="Marine Photo Link Hover Effect"/>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <p className="text-center"><a href="../#projects"><i className="fas fa-chevron-left" aria-hidden="true"></i> Back to Projects</a></p>
          </div>
        </div>
      </div>
    )
  }
}

export default TripSnip;
