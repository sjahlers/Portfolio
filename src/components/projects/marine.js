import React from 'react';
import marine from '../../img/marine.jpg';
import marine2 from '../../img/marine2.jpg';
import marineHover from '../../img/marine-hover.jpg';

class Marine extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1 className="hotpink">Marine Fasteners</h1>
          </div>
        </div>

        <div className="row">
          <div className="col-12 col-lg-6 col-xl-4 font-md">
            <p className="font-lg">Marine Fasteners is a full e-commerce site built upon INxSQL's web templates.</p>
            <p>Marine Fasteners wanted to convert their Wordpress site to e-commerce on INxSQL's platform. I recreated the content and appearance of their former site, making the transition to e-commerce seamless for their customers.</p>
            <p><i className="fas fa-tools" aria-hidden="true"></i> Toolbox:</p>
              <ul>
                <li>Sass</li>
                <li>Bootstrap 3 Grid</li>
                <li>JavaScript</li>
                <li>JQuery</li>
                <li>Razor</li>
                <li>Visual Basic</li>
                <li>Visual Studio</li>
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
      </div>
    )
  }
}

export default Marine;
