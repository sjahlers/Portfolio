import React from 'react';

class SectionTitle extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col-12">
          <div className="section-title">
            <div className={'triangle section-triangle ' + this.props.color}></div>
            <h3>{this.props.title}</h3>
          </div>
        </div>
      </div>
    )
  }
}

export default SectionTitle;
