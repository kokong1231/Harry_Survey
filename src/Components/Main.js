import React, { Component, Fragment } from 'react';
import '../App.css';
import '../App.scss';
import SurveyPage from './SurveyPage';

class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            page_change: 0
        };
    };

    handleClick = () => {
        this.setState(() => {
            return {page_change: this.state.page_change + 1}
        })
    };

    mainPage = () => {
        if ( this.state.page_change === 0 ) {
            return (
                <div className="Main">
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
                                <input type="input" className="form__field" placeholder="Name" name="name" id='name' autocomplete="off" required />
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
                <SurveyPage />
            )
        }
    }

    render() { 
        return <this.mainPage />
    }
}

export default Main;
