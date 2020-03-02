import React from 'react';
import demo from '../../img/demo.jpg';

class Inxsql extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1>INxSQL E-Commerce</h1>
          </div>
        </div>

        <div className="row">
          <div className="col-12 col-lg-6 col-xl-4 font-md">
            <p className="font-lg">INxSQL Software is an ERP Distribution Software designed for wholesalers, distributors and industrial resellers. INxSQL's e-commerce website allows businesses to sell their inventory online, allows their customers to manage their account, and reconnects it all back into INxSQL.</p>
            <p>INxSQL's e-commerce templates were in need of a new look with the user experience as the primary focus. I gave it a complete redesign including modern fonts, colors, and mobile-friendly layouts.</p>
            <p>Toolbox:</p>
              <ul>
                <li>JavaScript</li>
                <li>Razor</li>
                <li>Visual Basic</li>
                <li>Visual Studio</li>
              </ul>
          </div>
          <div className="col-12 col-lg-6 col-xl-8">
            <img src={demo} className="img-responsive" alt="INxSQL Homepage Screenshot" title="INxSQL Homepage Screenshot"/>
          </div>
        </div>
      </div>
    )
  }
}

export default Inxsql;
