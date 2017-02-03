import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.animation = null;
    this.state = {
      progressWidth: 1
    }
  }
  componentDidMount(){
      let progress = 1;
      this.animation = setInterval(() => {
        this.setState({progressWidth: progress++});
      },100);
  }

  render() {
    if(this.state.progressWidth === this.props.max){
      clearInterval(this.animation);
    }
    return (
      <div className="panel main-content">
        <div className="panel-heading">Your Progress</div>
        <div className="panel-body">
          <div className="panel-body inner">
            <div className="clearfix">
              <div className="progress-container">
                <span>Reached</span>
                <div className="progress">
                  <div className="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style={{width:`${this.state.progressWidth}%`}}>
                    <label><i className="glyphicon glyphicon-chevron-up icon"></i> {`$${this.state.progressWidth}%`}</label>
                  </div>
                </div>
              </div>
              <div className="target">
                Target $125
              </div>
            </div>
            <p className="disclaimer"><i className="glyphicon glyphicon-info-sign info"></i> You need {`$${this.props.target - this.state.progressWidth}`} more to reach your target.</p>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
