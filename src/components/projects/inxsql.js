import React from 'react';
import demo from '../../img/demo.jpg';
import demoMobile from '../../img/demo-mobile.jpg';
import demoProducts from '../../img/demo-products.jpg';
import demoAccount from '../../img/demo-account.jpg';

class Inxsql extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1 className="hotpink">INxSQL E-Commerce</h1>
          </div>
        </div>

        <div className="row">
          <div className="col-12 col-lg-6 col-xl-4 font-md">
            <p className="font-lg">INxSQL Software is an ERP Distribution Software designed for wholesalers, distributors and industrial resellers. INxSQL's e-commerce website allows businesses to sell their inventory online, allows their customers to manage their account, and reconnects it all back into INxSQL.</p>
            <p>INxSQL's e-commerce templates needed a modern update with an enhanced user experience. I gave it a complete redesign including modern fonts, colors, and mobile-friendly layouts.</p>

            <p><a href="https://demo.inxsql.com/" target="_blank">demo.inxsql.com</a></p>

            <p><i className="fas fa-tools" aria-hidden="true"></i> Toolbox:</p>
              <ul>
                <li>Sass</li>
                <li>Bootstrap 4 Grid</li>
                <li>JavaScript</li>
                <li>JQuery</li>
                <li>Razor</li>
                <li>Visual Basic</li>
                <li>Visual Studio</li>
              </ul>
          </div>
          <div className="col-12 col-lg-6 col-xl-8">
            <img src={demo} className="img-responsive screenshot" alt="INxSQL Homepage Screenshot" title="INxSQL Homepage Screenshot"/>
          </div>
        </div>

        <div className="row">
          <div className="col-12 col-md-4">
            <p className="caption">Homepage mobile view</p>
            <img src={demoMobile} className="img-responsive screenshot" alt="INxSQL Mobile View" title="INxSQL Mobile View"/>
          </div>
          <div className="col-12 col-md-8">
            <p className="caption">Product list page with product filters</p>
            <img src={demoProducts} className="img-responsive screenshot" alt="INxSQL Products Listing" title="INxSQL Products Listing"/>
            <p className="caption">Account dashboard page</p>
            <img src={demoAccount} className="img-responsive screenshot" alt="INxSQL Account Page" title="INxSQL Account Page"/>
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

export default Inxsql;
