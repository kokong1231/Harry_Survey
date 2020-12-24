import React, { Component, Fragment } from 'react';
import '../App.css';
import '../App.scss';

class Main extends Component {
    render() {
        return (
            <Fragment>
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
                            <div class="form__group">
                                <input type="input" className="form__field" placeholder="Name" name="name" id='name' autocomplete="off" required />
                                <label for="name" className="form__label">성씨를 입력하세요. (Please enter your last name)</label>
                                <input className="Namebutton" type="submit" value="시작!" />
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default Main;
