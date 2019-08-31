
import React from 'react';
import moment from 'moment-jalaali';
import DatePicker from 'react-datepicker2';


class DateSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: moment(),
      isGregorian:false
    };
  }
  render() {
    return <div className="DatePicker">
            <DatePicker
              value={this.state.value}
              isGregorian={this.state.isGregorian}
              onChange={value => this.setState({ value })}
            />
            <br />
            <button onClick={() => this.setState({ isGregorian: !this.state.isGregorian })}>
              {this.state.isGregorian?'FA':'EN'}
            </button>
          </div>
  }
}



  export default DateSelector;