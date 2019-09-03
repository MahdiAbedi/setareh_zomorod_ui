import React from 'react';

class PassengerCount extends React.Component{
    constructor(props){
        super(props);
        this.state={
            adult:1,
            child:0,
            infant:0
        };
    }


    render(){
        return(

            <span>

            
            <input type="text"  className="left-border" id="mosafer" placeholder="تعداد مسافر"/>

            <div className="passengers_count_container">
            <div className="passengers_count">
                <label>بزرگسال</label>
                <span className="count">
                    <button className="plus-btn" onClick={this.setState({adult:this.state.adult + 1})}>+</button>
                    <span>{this.state.adult}</span>
                    <button className="plus-btn">-</button>
                </span>
            </div>
            <div className="passengers_count">
                <label>کودک</label>
                <span className="count">
                    <button className="plus-btn">+</button>
                    <span>{this.state.child}</span>
                    <button className="plus-btn">-</button>
                </span>
            </div>
            <div className="passengers_count">
                <label>نوزاد</label>
                <span className="count">
                    <button className="plus-btn">+</button>
                    <span>{this.state.infant}</span>
                    <button className="plus-btn">-</button>
                </span>
            </div>
        </div>

        </span>
        );
    }



}

export default PassengerCount;