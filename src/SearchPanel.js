import React from 'react';
import ReactDOM from 'react-dom';
import InlineTicket from './components/SearchPanel/InlineTicket';
import OutLineTicket from './components/SearchPanel/OutLineTicket';

class SearchPanel extends React.Component{
    render(){
        return (        
            <div class="search-container">
                {/* آیکون های  */}
                <div class="search_icons">
                    {/* پرواز خارجی */}
                    <div class="search_icon">
                        <div class="icon_container">
                            <img class="outline-flight" src="img/outline-flight-white.png" alt="" />
                        </div>
                        <h4 class="out-flight-title"><span>پرواز خارجی</span></h4>

                    </div>
                    {/* پرواز داخلی */}
                    <div class="search_icon">
                        <div class="icon_container">
                            <img src="img/inline-flight-white.png" alt="" />
                        </div>
                        <h4 class="inner-flight-title"><span>پرواز داخلی</span></h4>
                    </div>
                    {/* قطار */}
                    <div class="search_icon">
                        <div class="icon_container">
                            <img src="img/train-white.png" alt="" />
                        </div>
                        <h4>قطار</h4>
                    </div>
                    {/* هتل */}
                    <div class="search_icon">
                        <div class="icon_container">
                            <img src="img/hotel-white.png" alt=""/>
                        </div>
                        <h4>هتل</h4>
                    </div>
                    {/* تور */}
                    <div class="search_icon">
                        <div class="icon_container">
                            <img src="img/tour-white.png" alt=""/>
                        </div>
                        <h4>تور</h4>
                    </div>
                    {/* بیمه */}
                    <div class="search_icon">
                        <div class="icon_container">
                            <img src="img/bime-white.png" alt=""/>
                        </div>
                        <h4>بیمه</h4>
                    </div>
                </div>
                {/* بلیط داخلی */}
                <InlineTicket />

                {/* بلیط خارجی */}
                <OutLineTicket />
            </div>
    );
    }
}


ReactDOM.render(<SearchPanel/> , document.querySelector('.SearchPanel'));