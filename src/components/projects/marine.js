import React from 'react';
import marine from '../../img/marine.jpg';


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
            <p className="font-lg">Marine Fasteners is a full e-commerce site built upon INxSQL's web templates. Marine was using a Wordpress site and wanted the same look for their new e-commerce site on a tight timeframe. I recreated the content and appearance of their old site, making the transition to e-commerce seamless for their users.</p>            
            <p><i class="fas fa-tools" aria-hidden="true"></i> Toolbox:</p>
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

          </div>
      </div>
    )
  }
}

export default Marine;
