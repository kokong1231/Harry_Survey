import React, { Component } from 'react';
import '../App.css';
import '../App.scss';

class SurveyPage extends Component {

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

    controlFunc = () => {
        switch ( this.state.page_change ) {
            case 0 :
                return (
                    <div>
                        <div>
                            <h2 className="SurveyTitle">1. 당신이 가장 좋아하는 동물은 무엇입니까?<br/><br/>What is your favorite animal?</h2>
                        </div>

                        <div className="container">
                            <input type="checkbox" className="toggle" id="toggle" checked="checked" /><label className="toggle" for="toggle"></label>
                            <div className="menu">
                                    <ul className="middle">
                                        <li tabindex="0" onClick={this.handleClick}><i className="fa fa-calendar"></i>상어 (Shark)</li>
                                        <li tabindex="0" onClick={this.handleClick}><i className="fa fa-camera"></i>독수리 (Eagle)</li>
                                        <li tabindex="0" onClick={this.handleClick}><i className="fa fa-check-square-o"></i>족재비 (Weasel)</li>
                                        <li tabindex="0" onClick={this.handleClick}><i className="fa fa-map-marker"></i>부엉이 (Owl)</li>
                                        <li tabindex="0" onClick={this.handleClick}><i className="fa fa-codepen"></i>강아지 (Dog)</li>
                                        <li tabindex="0" onClick={this.handleClick}><i className="fa fa-dribbble"></i>고양이 (Cat)</li>
                                        <li tabindex="0" onClick={this.handleClick}><i className="fa fa-user"></i>쥐 (Mouse)</li>
                                        <li tabindex="0" onClick={this.handleClick}><i className="fa fa-cogs"></i>뱀 (Snake)</li>
                                    </ul>
                                <div className="bottom"></div>
                                <div className="menu-back"></div>
                                <div className="glass-reflection"></div>
                            </div>
                        </div>
                    </div>
                )
            case 1 :
                return (
                    <div>
                        <div>
                            <h2 className="SurveyTitle">2. 당신이 가장 좋아하는 동물은 무엇입니까?<br/><br/>What is your favorite animal?</h2>
                        </div>

                        <div className="container">
                            <input type="checkbox" className="toggle" id="toggle" checked="checked" /><label className="toggle" for="toggle"></label>
                            <div className="menu">
                                    <ul className="middle">
                                        <li tabindex="0" onClick={this.handleClick}><i className="fa fa-calendar"></i>상어 (Shark)</li>
                                        <li tabindex="0" onClick={this.handleClick}><i className="fa fa-camera"></i>독수리 (Eagle)</li>
                                        <li tabindex="0" onClick={this.handleClick}><i className="fa fa-check-square-o"></i>족재비 (Weasel)</li>
                                        <li tabindex="0" onClick={this.handleClick}><i className="fa fa-map-marker"></i>부엉이 (Owl)</li>
                                        <li tabindex="0" onClick={this.handleClick}><i className="fa fa-codepen"></i>강아지 (Dog)</li>
                                        <li tabindex="0" onClick={this.handleClick}><i className="fa fa-dribbble"></i>고양이 (Cat)</li>
                                        <li tabindex="0" onClick={this.handleClick}><i className="fa fa-user"></i>쥐 (Mouse)</li>
                                        <li tabindex="0" onClick={this.handleClick}><i className="fa fa-cogs"></i>뱀 (Snake)</li>
                                    </ul>
                                <div className="bottom"></div>
                                <div className="menu-back"></div>
                                <div className="glass-reflection"></div>
                            </div>
                        </div>
                    </div>
                )
            case 2 :
                return (
                    <div>
                        <div>
                            <h2 className="SurveyTitle">3. 당신이 가장 좋아하는 동물은 무엇입니까?<br/><br/>What is your favorite animal?</h2>
                        </div>

                        <div className="container">
                            <input type="checkbox" className="toggle" id="toggle" checked="checked" /><label className="toggle" for="toggle"></label>
                            <div className="menu">
                                    <ul className="middle">
                                        <li tabindex="0" onClick={this.handleClick}><i className="fa fa-calendar"></i>상어 (Shark)</li>
                                        <li tabindex="0" onClick={this.handleClick}><i className="fa fa-camera"></i>독수리 (Eagle)</li>
                                        <li tabindex="0" onClick={this.handleClick}><i className="fa fa-check-square-o"></i>족재비 (Weasel)</li>
                                        <li tabindex="0" onClick={this.handleClick}><i className="fa fa-map-marker"></i>부엉이 (Owl)</li>
                                        <li tabindex="0" onClick={this.handleClick}><i className="fa fa-codepen"></i>강아지 (Dog)</li>
                                        <li tabindex="0" onClick={this.handleClick}><i className="fa fa-dribbble"></i>고양이 (Cat)</li>
                                        <li tabindex="0" onClick={this.handleClick}><i className="fa fa-user"></i>쥐 (Mouse)</li>
                                        <li tabindex="0" onClick={this.handleClick}><i className="fa fa-cogs"></i>뱀 (Snake)</li>
                                    </ul>
                                <div className="bottom"></div>
                                <div className="menu-back"></div>
                                <div className="glass-reflection"></div>
                            </div>
                        </div>
                    </div>
                )
            case 3 :
                return (
                    <div>
                        <div>
                            <h2 className="SurveyTitle">1. 당신이 가장 좋아하는 동물은 무엇입니까?<br/><br/>What is your favorite animal?</h2>
                        </div>

                        <div className="container">
                            <input type="checkbox" className="toggle" id="toggle" checked="checked" /><label className="toggle" for="toggle"></label>
                            <div className="menu">
                                    <ul className="middle">
                                        <li tabindex="0" onClick={this.handleClick}><i className="fa fa-calendar"></i>상어 (Shark)</li>
                                        <li tabindex="0" onClick={this.handleClick}><i className="fa fa-camera"></i>독수리 (Eagle)</li>
                                        <li tabindex="0" onClick={this.handleClick}><i className="fa fa-check-square-o"></i>족재비 (Weasel)</li>
                                        <li tabindex="0" onClick={this.handleClick}><i className="fa fa-map-marker"></i>부엉이 (Owl)</li>
                                        <li tabindex="0" onClick={this.handleClick}><i className="fa fa-codepen"></i>강아지 (Dog)</li>
                                        <li tabindex="0" onClick={this.handleClick}><i className="fa fa-dribbble"></i>고양이 (Cat)</li>
                                        <li tabindex="0" onClick={this.handleClick}><i className="fa fa-user"></i>쥐 (Mouse)</li>
                                        <li tabindex="0" onClick={this.handleClick}><i className="fa fa-cogs"></i>뱀 (Snake)</li>
                                    </ul>
                                <div className="bottom"></div>
                                <div className="menu-back"></div>
                                <div className="glass-reflection"></div>
                            </div>
                        </div>
                    </div>
                )
            case 4 :
                return (
                    <div>
                        <div>
                            <h2 className="SurveyTitle">1. 당신이 가장 좋아하는 동물은 무엇입니까?<br/><br/>What is your favorite animal?</h2>
                        </div>

                        <div className="container">
                            <input type="checkbox" className="toggle" id="toggle" checked="checked" /><label className="toggle" for="toggle"></label>
                            <div className="menu">
                                    <ul className="middle">
                                        <li tabindex="0" onClick={this.handleClick}><i className="fa fa-calendar"></i>상어 (Shark)</li>
                                        <li tabindex="0" onClick={this.handleClick}><i className="fa fa-camera"></i>독수리 (Eagle)</li>
                                        <li tabindex="0" onClick={this.handleClick}><i className="fa fa-check-square-o"></i>족재비 (Weasel)</li>
                                        <li tabindex="0" onClick={this.handleClick}><i className="fa fa-map-marker"></i>부엉이 (Owl)</li>
                                        <li tabindex="0" onClick={this.handleClick}><i className="fa fa-codepen"></i>강아지 (Dog)</li>
                                        <li tabindex="0" onClick={this.handleClick}><i className="fa fa-dribbble"></i>고양이 (Cat)</li>
                                        <li tabindex="0" onClick={this.handleClick}><i className="fa fa-user"></i>쥐 (Mouse)</li>
                                        <li tabindex="0" onClick={this.handleClick}><i className="fa fa-cogs"></i>뱀 (Snake)</li>
                                    </ul>
                                <div className="bottom"></div>
                                <div className="menu-back"></div>
                                <div className="glass-reflection"></div>
                            </div>
                        </div>
                    </div>
                )
            case 5 :
                return (
                    <div>
                        <div>
                            <h2 className="SurveyTitle">1. 당신이 가장 좋아하는 동물은 무엇입니까?<br/><br/>What is your favorite animal?</h2>
                        </div>

                        <div className="container">
                            <input type="checkbox" className="toggle" id="toggle" checked="checked" /><label className="toggle" for="toggle"></label>
                            <div className="menu">
                                    <ul className="middle">
                                        <li tabindex="0" onClick={this.handleClick}><i className="fa fa-calendar"></i>상어 (Shark)</li>
                                        <li tabindex="0" onClick={this.handleClick}><i className="fa fa-camera"></i>독수리 (Eagle)</li>
                                        <li tabindex="0" onClick={this.handleClick}><i className="fa fa-check-square-o"></i>족재비 (Weasel)</li>
                                        <li tabindex="0" onClick={this.handleClick}><i className="fa fa-map-marker"></i>부엉이 (Owl)</li>
                                        <li tabindex="0" onClick={this.handleClick}><i className="fa fa-codepen"></i>강아지 (Dog)</li>
                                        <li tabindex="0" onClick={this.handleClick}><i className="fa fa-dribbble"></i>고양이 (Cat)</li>
                                        <li tabindex="0" onClick={this.handleClick}><i className="fa fa-user"></i>쥐 (Mouse)</li>
                                        <li tabindex="0" onClick={this.handleClick}><i className="fa fa-cogs"></i>뱀 (Snake)</li>
                                    </ul>
                                <div className="bottom"></div>
                                <div className="menu-back"></div>
                                <div className="glass-reflection"></div>
                            </div>
                        </div>
                    </div>
            )
            case 6 :
                return (
                    <div>
                        <div>
                            <h2 className="SurveyTitle">1. 당신이 가장 좋아하는 동물은 무엇입니까?<br/><br/>What is your favorite animal?</h2>
                        </div>

                        <div className="container">
                            <input type="checkbox" className="toggle" id="toggle" checked="checked" /><label className="toggle" for="toggle"></label>
                            <div className="menu">
                                    <ul className="middle">
                                        <li tabindex="0" onClick={this.handleClick}><i className="fa fa-calendar"></i>상어 (Shark)</li>
                                        <li tabindex="0" onClick={this.handleClick}><i className="fa fa-camera"></i>독수리 (Eagle)</li>
                                        <li tabindex="0" onClick={this.handleClick}><i className="fa fa-check-square-o"></i>족재비 (Weasel)</li>
                                        <li tabindex="0" onClick={this.handleClick}><i className="fa fa-map-marker"></i>부엉이 (Owl)</li>
                                        <li tabindex="0" onClick={this.handleClick}><i className="fa fa-codepen"></i>강아지 (Dog)</li>
                                        <li tabindex="0" onClick={this.handleClick}><i className="fa fa-dribbble"></i>고양이 (Cat)</li>
                                        <li tabindex="0" onClick={this.handleClick}><i className="fa fa-user"></i>쥐 (Mouse)</li>
                                        <li tabindex="0" onClick={this.handleClick}><i className="fa fa-cogs"></i>뱀 (Snake)</li>
                                    </ul>
                                <div className="bottom"></div>
                                <div className="menu-back"></div>
                                <div className="glass-reflection"></div>
                            </div>
                        </div>
                    </div>
            )
            case 7 :
                return (
                    <div>
                        <div>
                            <h2 className="SurveyTitle">1. 당신이 가장 좋아하는 동물은 무엇입니까?<br/><br/>What is your favorite animal?</h2>
                        </div>

                        <div className="container">
                            <input type="checkbox" className="toggle" id="toggle" checked="checked" /><label className="toggle" for="toggle"></label>
                            <div className="menu">
                                    <ul className="middle">
                                        <li tabindex="0" onClick={this.handleClick}><i className="fa fa-calendar"></i>상어 (Shark)</li>
                                        <li tabindex="0" onClick={this.handleClick}><i className="fa fa-camera"></i>독수리 (Eagle)</li>
                                        <li tabindex="0" onClick={this.handleClick}><i className="fa fa-check-square-o"></i>족재비 (Weasel)</li>
                                        <li tabindex="0" onClick={this.handleClick}><i className="fa fa-map-marker"></i>부엉이 (Owl)</li>
                                        <li tabindex="0" onClick={this.handleClick}><i className="fa fa-codepen"></i>강아지 (Dog)</li>
                                        <li tabindex="0" onClick={this.handleClick}><i className="fa fa-dribbble"></i>고양이 (Cat)</li>
                                        <li tabindex="0" onClick={this.handleClick}><i className="fa fa-user"></i>쥐 (Mouse)</li>
                                        <li tabindex="0" onClick={this.handleClick}><i className="fa fa-cogs"></i>뱀 (Snake)</li>
                                    </ul>
                                <div className="bottom"></div>
                                <div className="menu-back"></div>
                                <div className="glass-reflection"></div>
                            </div>
                        </div>
                    </div>
            )
            case 8 :
                return (
                    <div>
                        <div>
                            <h2 className="SurveyTitle">1. 당신이 가장 좋아하는 동물은 무엇입니까?<br/><br/>What is your favorite animal?</h2>
                        </div>

                        <div className="container">
                            <input type="checkbox" className="toggle" id="toggle" checked="checked" /><label className="toggle" for="toggle"></label>
                            <div className="menu">
                                    <ul className="middle">
                                        <li tabindex="0" onClick={this.handleClick}><i className="fa fa-calendar"></i>상어 (Shark)</li>
                                        <li tabindex="0" onClick={this.handleClick}><i className="fa fa-camera"></i>독수리 (Eagle)</li>
                                        <li tabindex="0" onClick={this.handleClick}><i className="fa fa-check-square-o"></i>족재비 (Weasel)</li>
                                        <li tabindex="0" onClick={this.handleClick}><i className="fa fa-map-marker"></i>부엉이 (Owl)</li>
                                        <li tabindex="0" onClick={this.handleClick}><i className="fa fa-codepen"></i>강아지 (Dog)</li>
                                        <li tabindex="0" onClick={this.handleClick}><i className="fa fa-dribbble"></i>고양이 (Cat)</li>
                                        <li tabindex="0" onClick={this.handleClick}><i className="fa fa-user"></i>쥐 (Mouse)</li>
                                        <li tabindex="0" onClick={this.handleClick}><i className="fa fa-cogs"></i>뱀 (Snake)</li>
                                    </ul>
                                <div className="bottom"></div>
                                <div className="menu-back"></div>
                                <div className="glass-reflection"></div>
                            </div>
                        </div>
                    </div>
            )
            case 9 :
                return (
                    <div>
                        <div>
                            <h2 className="SurveyTitle">1. 당신이 가장 좋아하는 동물은 무엇입니까?<br/><br/>What is your favorite animal?</h2>
                        </div>

                        <div className="container">
                            <input type="checkbox" className="toggle" id="toggle" checked="checked" /><label className="toggle" for="toggle"></label>
                            <div className="menu">
                                    <ul className="middle">
                                        <li tabindex="0" onClick={this.handleClick}><i className="fa fa-calendar"></i>상어 (Shark)</li>
                                        <li tabindex="0" onClick={this.handleClick}><i className="fa fa-camera"></i>독수리 (Eagle)</li>
                                        <li tabindex="0" onClick={this.handleClick}><i className="fa fa-check-square-o"></i>족재비 (Weasel)</li>
                                        <li tabindex="0" onClick={this.handleClick}><i className="fa fa-map-marker"></i>부엉이 (Owl)</li>
                                        <li tabindex="0" onClick={this.handleClick}><i className="fa fa-codepen"></i>강아지 (Dog)</li>
                                        <li tabindex="0" onClick={this.handleClick}><i className="fa fa-dribbble"></i>고양이 (Cat)</li>
                                        <li tabindex="0" onClick={this.handleClick}><i className="fa fa-user"></i>쥐 (Mouse)</li>
                                        <li tabindex="0" onClick={this.handleClick}><i className="fa fa-cogs"></i>뱀 (Snake)</li>
                                    </ul>
                                <div className="bottom"></div>
                                <div className="menu-back"></div>
                                <div className="glass-reflection"></div>
                            </div>
                        </div>
                    </div>
            )
            case 10 :
                return (
                    <div>
                        <div>
                            <h2 className="SurveyTitle">1. 당신이 가장 좋아하는 동물은 무엇입니까?<br/><br/>What is your favorite animal?</h2>
                        </div>

                        <div className="container">
                            <input type="checkbox" className="toggle" id="toggle" checked="checked" /><label className="toggle" for="toggle"></label>
                            <div className="menu">
                                    <ul className="middle">
                                        <li tabindex="0" onClick={this.handleClick}><i className="fa fa-calendar"></i>상어 (Shark)</li>
                                        <li tabindex="0" onClick={this.handleClick}><i className="fa fa-camera"></i>독수리 (Eagle)</li>
                                        <li tabindex="0" onClick={this.handleClick}><i className="fa fa-check-square-o"></i>족재비 (Weasel)</li>
                                        <li tabindex="0" onClick={this.handleClick}><i className="fa fa-map-marker"></i>부엉이 (Owl)</li>
                                        <li tabindex="0" onClick={this.handleClick}><i className="fa fa-codepen"></i>강아지 (Dog)</li>
                                        <li tabindex="0" onClick={this.handleClick}><i className="fa fa-dribbble"></i>고양이 (Cat)</li>
                                        <li tabindex="0" onClick={this.handleClick}><i className="fa fa-user"></i>쥐 (Mouse)</li>
                                        <li tabindex="0" onClick={this.handleClick}><i className="fa fa-cogs"></i>뱀 (Snake)</li>
                                    </ul>
                                <div className="bottom"></div>
                                <div className="menu-back"></div>
                                <div className="glass-reflection"></div>
                            </div>
                        </div>
                    </div>
            )
            case 11 :
                return (
                    <div>
                        <div>
                            <h2 className="SurveyTitle">1. 당신이 가장 좋아하는 동물은 무엇입니까?<br/><br/>What is your favorite animal?</h2>
                        </div>

                        <div className="container">
                            <input type="checkbox" className="toggle" id="toggle" checked="checked" /><label className="toggle" for="toggle"></label>
                            <div className="menu">
                                    <ul className="middle">
                                        <li tabindex="0" onClick={this.handleClick}><i className="fa fa-calendar"></i>상어 (Shark)</li>
                                        <li tabindex="0" onClick={this.handleClick}><i className="fa fa-camera"></i>독수리 (Eagle)</li>
                                        <li tabindex="0" onClick={this.handleClick}><i className="fa fa-check-square-o"></i>족재비 (Weasel)</li>
                                        <li tabindex="0" onClick={this.handleClick}><i className="fa fa-map-marker"></i>부엉이 (Owl)</li>
                                        <li tabindex="0" onClick={this.handleClick}><i className="fa fa-codepen"></i>강아지 (Dog)</li>
                                        <li tabindex="0" onClick={this.handleClick}><i className="fa fa-dribbble"></i>고양이 (Cat)</li>
                                        <li tabindex="0" onClick={this.handleClick}><i className="fa fa-user"></i>쥐 (Mouse)</li>
                                        <li tabindex="0" onClick={this.handleClick}><i className="fa fa-cogs"></i>뱀 (Snake)</li>
                                    </ul>
                                <div className="bottom"></div>
                                <div className="menu-back"></div>
                                <div className="glass-reflection"></div>
                            </div>
                        </div>
                    </div>
            )
            case 12 :
                return (
                    <div>
                        <div>
                            <h2 className="SurveyTitle">1. 당신이 가장 좋아하는 동물은 무엇입니까?<br/><br/>What is your favorite animal?</h2>
                        </div>

                        <div className="container">
                            <input type="checkbox" className="toggle" id="toggle" checked="checked" /><label className="toggle" for="toggle"></label>
                            <div className="menu">
                                    <ul className="middle">
                                        <li tabindex="0" onClick={this.handleClick}><i className="fa fa-calendar"></i>상어 (Shark)</li>
                                        <li tabindex="0" onClick={this.handleClick}><i className="fa fa-camera"></i>독수리 (Eagle)</li>
                                        <li tabindex="0" onClick={this.handleClick}><i className="fa fa-check-square-o"></i>족재비 (Weasel)</li>
                                        <li tabindex="0" onClick={this.handleClick}><i className="fa fa-map-marker"></i>부엉이 (Owl)</li>
                                        <li tabindex="0" onClick={this.handleClick}><i className="fa fa-codepen"></i>강아지 (Dog)</li>
                                        <li tabindex="0" onClick={this.handleClick}><i className="fa fa-dribbble"></i>고양이 (Cat)</li>
                                        <li tabindex="0" onClick={this.handleClick}><i className="fa fa-user"></i>쥐 (Mouse)</li>
                                        <li tabindex="0" onClick={this.handleClick}><i className="fa fa-cogs"></i>뱀 (Snake)</li>
                                    </ul>
                                <div className="bottom"></div>
                                <div className="menu-back"></div>
                                <div className="glass-reflection"></div>
                            </div>
                        </div>
                    </div>
            )
            case 13 :
                return (
                    <div>
                        <div>
                            <h2 className="SurveyTitle">1. 당신이 가장 좋아하는 동물은 무엇입니까?<br/><br/>What is your favorite animal?</h2>
                        </div>

                        <div className="container">
                            <input type="checkbox" className="toggle" id="toggle" checked="checked" /><label className="toggle" for="toggle"></label>
                            <div className="menu">
                                    <ul className="middle">
                                        <li tabindex="0" onClick={this.handleClick}><i className="fa fa-calendar"></i>상어 (Shark)</li>
                                        <li tabindex="0" onClick={this.handleClick}><i className="fa fa-camera"></i>독수리 (Eagle)</li>
                                        <li tabindex="0" onClick={this.handleClick}><i className="fa fa-check-square-o"></i>족재비 (Weasel)</li>
                                        <li tabindex="0" onClick={this.handleClick}><i className="fa fa-map-marker"></i>부엉이 (Owl)</li>
                                        <li tabindex="0" onClick={this.handleClick}><i className="fa fa-codepen"></i>강아지 (Dog)</li>
                                        <li tabindex="0" onClick={this.handleClick}><i className="fa fa-dribbble"></i>고양이 (Cat)</li>
                                        <li tabindex="0" onClick={this.handleClick}><i className="fa fa-user"></i>쥐 (Mouse)</li>
                                        <li tabindex="0" onClick={this.handleClick}><i className="fa fa-cogs"></i>뱀 (Snake)</li>
                                    </ul>
                                <div className="bottom"></div>
                                <div className="menu-back"></div>
                                <div className="glass-reflection"></div>
                            </div>
                        </div>
                    </div>
            )
            case 14 :
                return (
                    <div>
                        <div>
                            <h2 className="SurveyTitle">1. 당신이 가장 좋아하는 동물은 무엇입니까?<br/><br/>What is your favorite animal?</h2>
                        </div>

                        <div className="container">
                            <input type="checkbox" className="toggle" id="toggle" checked="checked" /><label className="toggle" for="toggle"></label>
                            <div className="menu">
                                    <ul className="middle">
                                        <li tabindex="0" onClick={this.handleClick}><i className="fa fa-calendar"></i>상어 (Shark)</li>
                                        <li tabindex="0" onClick={this.handleClick}><i className="fa fa-camera"></i>독수리 (Eagle)</li>
                                        <li tabindex="0" onClick={this.handleClick}><i className="fa fa-check-square-o"></i>족재비 (Weasel)</li>
                                        <li tabindex="0" onClick={this.handleClick}><i className="fa fa-map-marker"></i>부엉이 (Owl)</li>
                                        <li tabindex="0" onClick={this.handleClick}><i className="fa fa-codepen"></i>강아지 (Dog)</li>
                                        <li tabindex="0" onClick={this.handleClick}><i className="fa fa-dribbble"></i>고양이 (Cat)</li>
                                        <li tabindex="0" onClick={this.handleClick}><i className="fa fa-user"></i>쥐 (Mouse)</li>
                                        <li tabindex="0" onClick={this.handleClick}><i className="fa fa-cogs"></i>뱀 (Snake)</li>
                                    </ul>
                                <div className="bottom"></div>
                                <div className="menu-back"></div>
                                <div className="glass-reflection"></div>
                            </div>
                        </div>
                    </div>
            )
            case 15 :
                return (
                    <div>
                        <div>
                            <h2 className="SurveyTitle">1. 당신이 가장 좋아하는 동물은 무엇입니까?<br/><br/>What is your favorite animal?</h2>
                        </div>

                        <div className="container">
                            <input type="checkbox" className="toggle" id="toggle" checked="checked" /><label className="toggle" for="toggle"></label>
                            <div className="menu">
                                    <ul className="middle">
                                        <li tabindex="0" onClick={this.handleClick}><i className="fa fa-calendar"></i>상어 (Shark)</li>
                                        <li tabindex="0" onClick={this.handleClick}><i className="fa fa-camera"></i>독수리 (Eagle)</li>
                                        <li tabindex="0" onClick={this.handleClick}><i className="fa fa-check-square-o"></i>족재비 (Weasel)</li>
                                        <li tabindex="0" onClick={this.handleClick}><i className="fa fa-map-marker"></i>부엉이 (Owl)</li>
                                        <li tabindex="0" onClick={this.handleClick}><i className="fa fa-codepen"></i>강아지 (Dog)</li>
                                        <li tabindex="0" onClick={this.handleClick}><i className="fa fa-dribbble"></i>고양이 (Cat)</li>
                                        <li tabindex="0" onClick={this.handleClick}><i className="fa fa-user"></i>쥐 (Mouse)</li>
                                        <li tabindex="0" onClick={this.handleClick}><i className="fa fa-cogs"></i>뱀 (Snake)</li>
                                    </ul>
                                <div className="bottom"></div>
                                <div className="menu-back"></div>
                                <div className="glass-reflection"></div>
                            </div>
                        </div>
                    </div>
            )
            case 16 :
                return (
                    <div>
                        <div>
                            <h2 className="SurveyTitle">1. 당신이 가장 좋아하는 동물은 무엇입니까?<br/><br/>What is your favorite animal?</h2>
                        </div>

                        <div className="container">
                            <input type="checkbox" className="toggle" id="toggle" checked="checked" /><label className="toggle" for="toggle"></label>
                            <div className="menu">
                                    <ul className="middle">
                                        <li tabindex="0" onClick={this.handleClick}><i className="fa fa-calendar"></i>상어 (Shark)</li>
                                        <li tabindex="0" onClick={this.handleClick}><i className="fa fa-camera"></i>독수리 (Eagle)</li>
                                        <li tabindex="0" onClick={this.handleClick}><i className="fa fa-check-square-o"></i>족재비 (Weasel)</li>
                                        <li tabindex="0" onClick={this.handleClick}><i className="fa fa-map-marker"></i>부엉이 (Owl)</li>
                                        <li tabindex="0" onClick={this.handleClick}><i className="fa fa-codepen"></i>강아지 (Dog)</li>
                                        <li tabindex="0" onClick={this.handleClick}><i className="fa fa-dribbble"></i>고양이 (Cat)</li>
                                        <li tabindex="0" onClick={this.handleClick}><i className="fa fa-user"></i>쥐 (Mouse)</li>
                                        <li tabindex="0" onClick={this.handleClick}><i className="fa fa-cogs"></i>뱀 (Snake)</li>
                                    </ul>
                                <div className="bottom"></div>
                                <div className="menu-back"></div>
                                <div className="glass-reflection"></div>
                            </div>
                        </div>
                    </div>
            )
            case 17 :
                return (
                    <div>
                        <div>
                            <h2 className="SurveyTitle">1. 당신이 가장 좋아하는 동물은 무엇입니까?<br/><br/>What is your favorite animal?</h2>
                        </div>

                        <div className="container">
                            <input type="checkbox" className="toggle" id="toggle" checked="checked" /><label className="toggle" for="toggle"></label>
                            <div className="menu">
                                    <ul className="middle">
                                        <li tabindex="0" onClick={this.handleClick}><i className="fa fa-calendar"></i>상어 (Shark)</li>
                                        <li tabindex="0" onClick={this.handleClick}><i className="fa fa-camera"></i>독수리 (Eagle)</li>
                                        <li tabindex="0" onClick={this.handleClick}><i className="fa fa-check-square-o"></i>족재비 (Weasel)</li>
                                        <li tabindex="0" onClick={this.handleClick}><i className="fa fa-map-marker"></i>부엉이 (Owl)</li>
                                        <li tabindex="0" onClick={this.handleClick}><i className="fa fa-codepen"></i>강아지 (Dog)</li>
                                        <li tabindex="0" onClick={this.handleClick}><i className="fa fa-dribbble"></i>고양이 (Cat)</li>
                                        <li tabindex="0" onClick={this.handleClick}><i className="fa fa-user"></i>쥐 (Mouse)</li>
                                        <li tabindex="0" onClick={this.handleClick}><i className="fa fa-cogs"></i>뱀 (Snake)</li>
                                    </ul>
                                <div className="bottom"></div>
                                <div className="menu-back"></div>
                                <div className="glass-reflection"></div>
                            </div>
                        </div>
                    </div>
            )
            case 18 :
                return (
                    <div>
                        <div>
                            <h2 className="SurveyTitle">1. 당신이 가장 좋아하는 동물은 무엇입니까?<br/><br/>What is your favorite animal?</h2>
                        </div>

                        <div className="container">
                            <input type="checkbox" className="toggle" id="toggle" checked="checked" /><label className="toggle" for="toggle"></label>
                            <div className="menu">
                                    <ul className="middle">
                                        <li tabindex="0" onClick={this.handleClick}><i className="fa fa-calendar"></i>상어 (Shark)</li>
                                        <li tabindex="0" onClick={this.handleClick}><i className="fa fa-camera"></i>독수리 (Eagle)</li>
                                        <li tabindex="0" onClick={this.handleClick}><i className="fa fa-check-square-o"></i>족재비 (Weasel)</li>
                                        <li tabindex="0" onClick={this.handleClick}><i className="fa fa-map-marker"></i>부엉이 (Owl)</li>
                                        <li tabindex="0" onClick={this.handleClick}><i className="fa fa-codepen"></i>강아지 (Dog)</li>
                                        <li tabindex="0" onClick={this.handleClick}><i className="fa fa-dribbble"></i>고양이 (Cat)</li>
                                        <li tabindex="0" onClick={this.handleClick}><i className="fa fa-user"></i>쥐 (Mouse)</li>
                                        <li tabindex="0" onClick={this.handleClick}><i className="fa fa-cogs"></i>뱀 (Snake)</li>
                                    </ul>
                                <div className="bottom"></div>
                                <div className="menu-back"></div>
                                <div className="glass-reflection"></div>
                            </div>
                        </div>
                    </div>
            )
            case 19 :
                return (
                    <div>
                        <div>
                            <h2 className="SurveyTitle">1. 당신이 가장 좋아하는 동물은 무엇입니까?<br/><br/>What is your favorite animal?</h2>
                        </div>

                        <div className="container">
                            <input type="checkbox" className="toggle" id="toggle" checked="checked" /><label className="toggle" for="toggle"></label>
                            <div className="menu">
                                    <ul className="middle">
                                        <li tabindex="0" onClick={this.handleClick}><i className="fa fa-calendar"></i>상어 (Shark)</li>
                                        <li tabindex="0" onClick={this.handleClick}><i className="fa fa-camera"></i>독수리 (Eagle)</li>
                                        <li tabindex="0" onClick={this.handleClick}><i className="fa fa-check-square-o"></i>족재비 (Weasel)</li>
                                        <li tabindex="0" onClick={this.handleClick}><i className="fa fa-map-marker"></i>부엉이 (Owl)</li>
                                        <li tabindex="0" onClick={this.handleClick}><i className="fa fa-codepen"></i>강아지 (Dog)</li>
                                        <li tabindex="0" onClick={this.handleClick}><i className="fa fa-dribbble"></i>고양이 (Cat)</li>
                                        <li tabindex="0" onClick={this.handleClick}><i className="fa fa-user"></i>쥐 (Mouse)</li>
                                        <li tabindex="0" onClick={this.handleClick}><i className="fa fa-cogs"></i>뱀 (Snake)</li>
                                    </ul>
                                <div className="bottom"></div>
                                <div className="menu-back"></div>
                                <div className="glass-reflection"></div>
                            </div>
                        </div>
                    </div>
                )
            case 20 :
                return (
                    <div>
                        <div>
                            <h2 className="SurveyTitle">1. 당신이 가장 좋아하는 동물은 무엇입니까?<br/><br/>What is your favorite animal?</h2>
                        </div>

                        <div className="container">
                            <input type="checkbox" className="toggle" id="toggle" checked="checked" /><label className="toggle" for="toggle"></label>
                            <div className="menu">
                                    <ul className="middle">
                                        <li tabindex="0" onClick={this.handleClick}><i className="fa fa-calendar"></i>상어 (Shark)</li>
                                        <li tabindex="0" onClick={this.handleClick}><i className="fa fa-camera"></i>독수리 (Eagle)</li>
                                        <li tabindex="0" onClick={this.handleClick}><i className="fa fa-check-square-o"></i>족재비 (Weasel)</li>
                                        <li tabindex="0" onClick={this.handleClick}><i className="fa fa-map-marker"></i>부엉이 (Owl)</li>
                                        <li tabindex="0" onClick={this.handleClick}><i className="fa fa-codepen"></i>강아지 (Dog)</li>
                                        <li tabindex="0" onClick={this.handleClick}><i className="fa fa-dribbble"></i>고양이 (Cat)</li>
                                        <li tabindex="0" onClick={this.handleClick}><i className="fa fa-user"></i>쥐 (Mouse)</li>
                                        <li tabindex="0" onClick={this.handleClick}><i className="fa fa-cogs"></i>뱀 (Snake)</li>
                                    </ul>
                                <div className="bottom"></div>
                                <div className="menu-back"></div>
                                <div className="glass-reflection"></div>
                            </div>
                        </div>
                    </div>
                )
            case 21 :
                return (
                    <div>
                        <div>
                            <h2 className="SurveyTitle">1. 당신이 가장 좋아하는 동물은 무엇입니까?<br/><br/>What is your favorite animal?</h2>
                        </div>

                        <div className="container">
                            <input type="checkbox" className="toggle" id="toggle" checked="checked" /><label className="toggle" for="toggle"></label>
                            <div className="menu">
                                    <ul className="middle">
                                        <li tabindex="0" onClick={this.handleClick}><i className="fa fa-calendar"></i>상어 (Shark)</li>
                                        <li tabindex="0" onClick={this.handleClick}><i className="fa fa-camera"></i>독수리 (Eagle)</li>
                                        <li tabindex="0" onClick={this.handleClick}><i className="fa fa-check-square-o"></i>족재비 (Weasel)</li>
                                        <li tabindex="0" onClick={this.handleClick}><i className="fa fa-map-marker"></i>부엉이 (Owl)</li>
                                        <li tabindex="0" onClick={this.handleClick}><i className="fa fa-codepen"></i>강아지 (Dog)</li>
                                        <li tabindex="0" onClick={this.handleClick}><i className="fa fa-dribbble"></i>고양이 (Cat)</li>
                                        <li tabindex="0" onClick={this.handleClick}><i className="fa fa-user"></i>쥐 (Mouse)</li>
                                        <li tabindex="0" onClick={this.handleClick}><i className="fa fa-cogs"></i>뱀 (Snake)</li>
                                    </ul>
                                <div className="bottom"></div>
                                <div className="menu-back"></div>
                                <div className="glass-reflection"></div>
                            </div>
                        </div>
                    </div>
                )
            case 22 :
                return (
                    <div>
                        <div>
                            <h2 className="SurveyTitle">1. 당신이 가장 좋아하는 동물은 무엇입니까?<br/><br/>What is your favorite animal?</h2>
                        </div>

                        <div className="container">
                            <input type="checkbox" className="toggle" id="toggle" checked="checked" /><label className="toggle" for="toggle"></label>
                            <div className="menu">
                                    <ul className="middle">
                                        <li tabindex="0" onClick={this.handleClick}><i className="fa fa-calendar"></i>상어 (Shark)</li>
                                        <li tabindex="0" onClick={this.handleClick}><i className="fa fa-camera"></i>독수리 (Eagle)</li>
                                        <li tabindex="0" onClick={this.handleClick}><i className="fa fa-check-square-o"></i>족재비 (Weasel)</li>
                                        <li tabindex="0" onClick={this.handleClick}><i className="fa fa-map-marker"></i>부엉이 (Owl)</li>
                                        <li tabindex="0" onClick={this.handleClick}><i className="fa fa-codepen"></i>강아지 (Dog)</li>
                                        <li tabindex="0" onClick={this.handleClick}><i className="fa fa-dribbble"></i>고양이 (Cat)</li>
                                        <li tabindex="0" onClick={this.handleClick}><i className="fa fa-user"></i>쥐 (Mouse)</li>
                                        <li tabindex="0" onClick={this.handleClick}><i className="fa fa-cogs"></i>뱀 (Snake)</li>
                                    </ul>
                                <div className="bottom"></div>
                                <div className="menu-back"></div>
                                <div className="glass-reflection"></div>
                            </div>
                        </div>
                    </div>
                )
            case 23 :
                return (
                    <div>
                        <div>
                            <h2 className="SurveyTitle">1. 당신이 가장 좋아하는 동물은 무엇입니까?<br/><br/>What is your favorite animal?</h2>
                        </div>

                        <div className="container">
                            <input type="checkbox" className="toggle" id="toggle" checked="checked" /><label className="toggle" for="toggle"></label>
                            <div className="menu">
                                    <ul className="middle">
                                        <li tabindex="0" onClick={this.handleClick}><i className="fa fa-calendar"></i>상어 (Shark)</li>
                                        <li tabindex="0" onClick={this.handleClick}><i className="fa fa-camera"></i>독수리 (Eagle)</li>
                                        <li tabindex="0" onClick={this.handleClick}><i className="fa fa-check-square-o"></i>족재비 (Weasel)</li>
                                        <li tabindex="0" onClick={this.handleClick}><i className="fa fa-map-marker"></i>부엉이 (Owl)</li>
                                        <li tabindex="0" onClick={this.handleClick}><i className="fa fa-codepen"></i>강아지 (Dog)</li>
                                        <li tabindex="0" onClick={this.handleClick}><i className="fa fa-dribbble"></i>고양이 (Cat)</li>
                                        <li tabindex="0" onClick={this.handleClick}><i className="fa fa-user"></i>쥐 (Mouse)</li>
                                        <li tabindex="0" onClick={this.handleClick}><i className="fa fa-cogs"></i>뱀 (Snake)</li>
                                    </ul>
                                <div className="bottom"></div>
                                <div className="menu-back"></div>
                                <div className="glass-reflection"></div>
                            </div>
                        </div>
                    </div>
                )
            case 24 :
                return (
                    <div>
                        <div>
                            <h2 className="SurveyTitle">1. 당신이 가장 좋아하는 동물은 무엇입니까?<br/><br/>What is your favorite animal?</h2>
                        </div>

                        <div className="container">
                            <input type="checkbox" className="toggle" id="toggle" checked="checked" /><label className="toggle" for="toggle"></label>
                            <div className="menu">
                                    <ul className="middle">
                                        <li tabindex="0" onClick={this.handleClick}><i className="fa fa-calendar"></i>상어 (Shark)</li>
                                        <li tabindex="0" onClick={this.handleClick}><i className="fa fa-camera"></i>독수리 (Eagle)</li>
                                        <li tabindex="0" onClick={this.handleClick}><i className="fa fa-check-square-o"></i>족재비 (Weasel)</li>
                                        <li tabindex="0" onClick={this.handleClick}><i className="fa fa-map-marker"></i>부엉이 (Owl)</li>
                                        <li tabindex="0" onClick={this.handleClick}><i className="fa fa-codepen"></i>강아지 (Dog)</li>
                                        <li tabindex="0" onClick={this.handleClick}><i className="fa fa-dribbble"></i>고양이 (Cat)</li>
                                        <li tabindex="0" onClick={this.handleClick}><i className="fa fa-user"></i>쥐 (Mouse)</li>
                                        <li tabindex="0" onClick={this.handleClick}><i className="fa fa-cogs"></i>뱀 (Snake)</li>
                                    </ul>
                                <div className="bottom"></div>
                                <div className="menu-back"></div>
                                <div className="glass-reflection"></div>
                            </div>
                        </div>
                    </div>
                )
            case 25 :
                return (
                    <div>
                        <div>
                            <h2 className="SurveyTitle">1. 당신이 가장 좋아하는 동물은 무엇입니까?<br/><br/>What is your favorite animal?</h2>
                        </div>

                        <div className="container">
                            <input type="checkbox" className="toggle" id="toggle" checked="checked" /><label className="toggle" for="toggle"></label>
                            <div className="menu">
                                    <ul className="middle">
                                        <li tabindex="0" onClick={this.handleClick}><i className="fa fa-calendar"></i>상어 (Shark)</li>
                                        <li tabindex="0" onClick={this.handleClick}><i className="fa fa-camera"></i>독수리 (Eagle)</li>
                                        <li tabindex="0" onClick={this.handleClick}><i className="fa fa-check-square-o"></i>족재비 (Weasel)</li>
                                        <li tabindex="0" onClick={this.handleClick}><i className="fa fa-map-marker"></i>부엉이 (Owl)</li>
                                        <li tabindex="0" onClick={this.handleClick}><i className="fa fa-codepen"></i>강아지 (Dog)</li>
                                        <li tabindex="0" onClick={this.handleClick}><i className="fa fa-dribbble"></i>고양이 (Cat)</li>
                                        <li tabindex="0" onClick={this.handleClick}><i className="fa fa-user"></i>쥐 (Mouse)</li>
                                        <li tabindex="0" onClick={this.handleClick}><i className="fa fa-cogs"></i>뱀 (Snake)</li>
                                    </ul>
                                <div className="bottom"></div>
                                <div className="menu-back"></div>
                                <div className="glass-reflection"></div>
                            </div>
                        </div>
                    </div>
                )
            case 26 :
                return (
                    <div>
                        <div>
                            <h2 className="SurveyTitle">1. 당신이 가장 좋아하는 동물은 무엇입니까?<br/><br/>What is your favorite animal?</h2>
                        </div>

                        <div className="container">
                            <input type="checkbox" className="toggle" id="toggle" checked="checked" /><label className="toggle" for="toggle"></label>
                            <div className="menu">
                                    <ul className="middle">
                                        <li tabindex="0" onClick={this.handleClick}><i className="fa fa-calendar"></i>상어 (Shark)</li>
                                        <li tabindex="0" onClick={this.handleClick}><i className="fa fa-camera"></i>독수리 (Eagle)</li>
                                        <li tabindex="0" onClick={this.handleClick}><i className="fa fa-check-square-o"></i>족재비 (Weasel)</li>
                                        <li tabindex="0" onClick={this.handleClick}><i className="fa fa-map-marker"></i>부엉이 (Owl)</li>
                                        <li tabindex="0" onClick={this.handleClick}><i className="fa fa-codepen"></i>강아지 (Dog)</li>
                                        <li tabindex="0" onClick={this.handleClick}><i className="fa fa-dribbble"></i>고양이 (Cat)</li>
                                        <li tabindex="0" onClick={this.handleClick}><i className="fa fa-user"></i>쥐 (Mouse)</li>
                                        <li tabindex="0" onClick={this.handleClick}><i className="fa fa-cogs"></i>뱀 (Snake)</li>
                                    </ul>
                                <div className="bottom"></div>
                                <div className="menu-back"></div>
                                <div className="glass-reflection"></div>
                            </div>
                        </div>
                    </div>
                )
            case 27 :
                return (
                    <div>
                        <div>
                            <h2 className="SurveyTitle">1. 당신이 가장 좋아하는 동물은 무엇입니까?<br/><br/>What is your favorite animal?</h2>
                        </div>

                        <div className="container">
                            <input type="checkbox" className="toggle" id="toggle" checked="checked" /><label className="toggle" for="toggle"></label>
                            <div className="menu">
                                    <ul className="middle">
                                        <li tabindex="0" onClick={this.handleClick}><i className="fa fa-calendar"></i>상어 (Shark)</li>
                                        <li tabindex="0" onClick={this.handleClick}><i className="fa fa-camera"></i>독수리 (Eagle)</li>
                                        <li tabindex="0" onClick={this.handleClick}><i className="fa fa-check-square-o"></i>족재비 (Weasel)</li>
                                        <li tabindex="0" onClick={this.handleClick}><i className="fa fa-map-marker"></i>부엉이 (Owl)</li>
                                        <li tabindex="0" onClick={this.handleClick}><i className="fa fa-codepen"></i>강아지 (Dog)</li>
                                        <li tabindex="0" onClick={this.handleClick}><i className="fa fa-dribbble"></i>고양이 (Cat)</li>
                                        <li tabindex="0" onClick={this.handleClick}><i className="fa fa-user"></i>쥐 (Mouse)</li>
                                        <li tabindex="0" onClick={this.handleClick}><i className="fa fa-cogs"></i>뱀 (Snake)</li>
                                    </ul>
                                <div className="bottom"></div>
                                <div className="menu-back"></div>
                                <div className="glass-reflection"></div>
                            </div>
                        </div>
                    </div>
                )
            case 28 :
                return (
                    <div>
                        <div>
                            <h2 className="SurveyTitle">1. 당신이 가장 좋아하는 동물은 무엇입니까?<br/><br/>What is your favorite animal?</h2>
                        </div>

                        <div className="container">
                            <input type="checkbox" className="toggle" id="toggle" checked="checked" /><label className="toggle" for="toggle"></label>
                            <div className="menu">
                                    <ul className="middle">
                                        <li tabindex="0" onClick={this.handleClick}><i className="fa fa-calendar"></i>상어 (Shark)</li>
                                        <li tabindex="0" onClick={this.handleClick}><i className="fa fa-camera"></i>독수리 (Eagle)</li>
                                        <li tabindex="0" onClick={this.handleClick}><i className="fa fa-check-square-o"></i>족재비 (Weasel)</li>
                                        <li tabindex="0" onClick={this.handleClick}><i className="fa fa-map-marker"></i>부엉이 (Owl)</li>
                                        <li tabindex="0" onClick={this.handleClick}><i className="fa fa-codepen"></i>강아지 (Dog)</li>
                                        <li tabindex="0" onClick={this.handleClick}><i className="fa fa-dribbble"></i>고양이 (Cat)</li>
                                        <li tabindex="0" onClick={this.handleClick}><i className="fa fa-user"></i>쥐 (Mouse)</li>
                                        <li tabindex="0" onClick={this.handleClick}><i className="fa fa-cogs"></i>뱀 (Snake)</li>
                                    </ul>
                                <div className="bottom"></div>
                                <div className="menu-back"></div>
                                <div className="glass-reflection"></div>
                            </div>
                        </div>
                    </div>
                )
            case 29 :
                return (
                    <div>
                        <div>
                            <h2 className="SurveyTitle">1. 당신이 가장 좋아하는 동물은 무엇입니까?<br/><br/>What is your favorite animal?</h2>
                        </div>

                        <div className="container">
                            <input type="checkbox" className="toggle" id="toggle" checked="checked" /><label className="toggle" for="toggle"></label>
                            <div className="menu">
                                    <ul className="middle">
                                        <li tabindex="0" onClick={this.handleClick}><i className="fa fa-calendar"></i>상어 (Shark)</li>
                                        <li tabindex="0" onClick={this.handleClick}><i className="fa fa-camera"></i>독수리 (Eagle)</li>
                                        <li tabindex="0" onClick={this.handleClick}><i className="fa fa-check-square-o"></i>족재비 (Weasel)</li>
                                        <li tabindex="0" onClick={this.handleClick}><i className="fa fa-map-marker"></i>부엉이 (Owl)</li>
                                        <li tabindex="0" onClick={this.handleClick}><i className="fa fa-codepen"></i>강아지 (Dog)</li>
                                        <li tabindex="0" onClick={this.handleClick}><i className="fa fa-dribbble"></i>고양이 (Cat)</li>
                                        <li tabindex="0" onClick={this.handleClick}><i className="fa fa-user"></i>쥐 (Mouse)</li>
                                        <li tabindex="0" onClick={this.handleClick}><i className="fa fa-cogs"></i>뱀 (Snake)</li>
                                    </ul>
                                <div className="bottom"></div>
                                <div className="menu-back"></div>
                                <div className="glass-reflection"></div>
                            </div>
                        </div>
                    </div>
                )
            case 30 :
                return (
                    <div>
                        <div>
                            <h2 className="SurveyTitle">1. 당신이 가장 좋아하는 동물은 무엇입니까?<br/><br/>What is your favorite animal?</h2>
                        </div>

                        <div className="container">
                            <input type="checkbox" className="toggle" id="toggle" checked="checked" /><label className="toggle" for="toggle"></label>
                            <div className="menu">
                                    <ul className="middle">
                                        <li tabindex="0" onClick={this.handleClick}><i className="fa fa-calendar"></i>상어 (Shark)</li>
                                        <li tabindex="0" onClick={this.handleClick}><i className="fa fa-camera"></i>독수리 (Eagle)</li>
                                        <li tabindex="0" onClick={this.handleClick}><i className="fa fa-check-square-o"></i>족재비 (Weasel)</li>
                                        <li tabindex="0" onClick={this.handleClick}><i className="fa fa-map-marker"></i>부엉이 (Owl)</li>
                                        <li tabindex="0" onClick={this.handleClick}><i className="fa fa-codepen"></i>강아지 (Dog)</li>
                                        <li tabindex="0" onClick={this.handleClick}><i className="fa fa-dribbble"></i>고양이 (Cat)</li>
                                        <li tabindex="0" onClick={this.handleClick}><i className="fa fa-user"></i>쥐 (Mouse)</li>
                                        <li tabindex="0" onClick={this.handleClick}><i className="fa fa-cogs"></i>뱀 (Snake)</li>
                                    </ul>
                                <div className="bottom"></div>
                                <div className="menu-back"></div>
                                <div className="glass-reflection"></div>
                            </div>
                        </div>
                    </div>
                )

            default :
                return (
                    <div>
                        <h1 className="Test_value">Final</h1>
                    </div>
                )
        }
    }

    render() {
        return <this.controlFunc />
    }
}

export default SurveyPage;
