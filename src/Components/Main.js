import React, { Component } from 'react';
import '../App.css';
import '../App.scss';
import SurveyPage from './SurveyPage';
// import SmokeElment from "smoke-effect-react";

class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            page_change: 0,
            name: ''
        };
    };

    handleClick = () => {
        if ( this.state.name === '' ) {
            return (
                <div>
                    {alert("이름을 입력하세요.")}
                </div>
            )
        }
        else (
            this.setState(() => {
                return {page_change: this.state.page_change + 1}
            })
        )
    };

    input_value = (e) => {
        this.setState(() => {
            return {name: e.target.value}
        })
    }

    mainPage = () => {
        if ( this.state.page_change === 0 ) {
            return (
                <div className="Main">
                    {/* <SmokeElment 
                        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/95637/quickText.png"
                        opacity="1"
                        smokeSrc="https://s3-us-west-2.amazonaws.com/s.cdpn.io/95637/Smoke-Element.png"
                        smokeOpacity="0.3"
                         /> */}
                    <div className="Comment">
                        <div className="Maincomment">
                            해리포터 세계 속 당신의 기숙사는 어디로 배정될까요?<br/><br/>
                            Where will your dormitory be assigned in the world of Harry Potter?<br/><br/>
                        </div>
                        <div className="Subcomment">
                            지금 바로 시작하세요!<br/><br/>
                            Get started right now!
                        </div>
                    </div>
                    <div>
                        <div className="Inputbox">
                            <div className="form__group">
                                <input type="input" className="form__field" placeholder="Name" name="name" id='name' autocomplete="nope" required onChange={this.input_value} />
                                <label for="name" className="form__label">이름을 입력하세요. (Please enter your name)</label>
                                <input className="Namebutton" type="submit" value="시작!" onClick={this.handleClick} />
                            </div>
                        </div>
                    </div>
                </div>
            )
        }

        else {
            return (
                <SurveyPage name={this.state.name} />
            )
        }
    }

    render() { 
        return <this.mainPage />
    }
}

export default Main;
