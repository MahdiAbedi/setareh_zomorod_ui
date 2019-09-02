import React from 'react';
import DateSelector from '../DateSelector';

class OutLineTicket extends React.Component{

    constructor(props){
        super(props);
        this.state={toWay:true}
    }

    showReturnDate = (e)=>{
        this.setState({toWay:true});
    }

    hideReturnDate = ()=>{
        this.setState({toWay:false});
    }
    render(){
        return (
        <div className="form" id="OutLineTicket"  style={{display:'none'}}>
            {/* <!-- فیلترهای پروازها --> */}
            <div className="filters" >
                <input type="radio" value="oneWay" id="oneWay" name="outline-ticket" onClick={this.showReturnDate} checked={this.state.toWay}/>
                <label for="oneWay">یک طرفه</label>
                <input type="radio" value="toWay" id="toWay" name="outline-ticket"  onClick={this.hideReturnDate} checked={!this.state.toWay}/>
                <label for="toWay">رفت و برگشت</label>
                <input type="radio" value="value2" id="group3" name="outline-ticket"/>
                <label for="group3">چند مسیره</label>
            </div>
            {/* <!-- فیلدهای جستجو --> */}
            <form  className="search">
                <div className="group margin-right">
                    <select className="right-border select2">
                        <option >مبداء</option>
                        <option value="">تهران</option>
                        <option value="">شیراز</option>
                        <option value="">تهران</option>
                        <option value="">شیراز</option>
                        <option value="">تهران</option>
                        <option value="">شیراز</option>
                        <option value="">تهران</option>
                        <option value="">شیراز</option>
                        <option value="">تهران</option>
                        <option value="">شیراز</option>

                    </select>
                    <button className="round-btn"><i className="icon-transfer"><img src="img/change-way.png"
                                alt=""/></i></button>
                </div>
                <div className="group">
                <select className="left-border select2">
                    <option>مقصد</option>
                        <option value="">تهران</option>
                        <option value="">شیراز</option>
                        <option value="">تهران</option>
                        <option value="">شیراز</option>
                        <option value="">تهران</option>
                        <option value="">شیراز</option>
                        <option value="">تهران</option>
                        <option value="">شیراز</option>
                        <option value="">تهران</option>
                        <option value="">شیراز</option>

                    </select>
                </div>
                <div className="group margin-right">
                    <DateSelector />
                </div>
                <div className="group">
                <DateSelector disabled={this.state.toWay} />
                </div>
                <div className="group">
                    <select name="mosafer" className="left-border" id="mosafer">
                        <option value="1">1 نفر</option>
                    </select>
                </div>
                <div className="group">
                    <input type="button" className="btn btn-zgreen" value="جستجو"/>
                    <i className="icon-search"></i>
                </div>

            </form>
        </div>
        );
    }

}


export default OutLineTicket;