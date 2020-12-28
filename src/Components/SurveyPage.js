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
                            <h2 className="SurveyTitle">1. 당신은 한 마리의 동물과 함께 여행을 준비합니다. 어떤 동물인가요?<br/><br/>You are prepared for a trip with one animal. Which animal is it?</h2>
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
                            <h2 className="SurveyTitle">2. 당신은 여행을 위해 소중한 한 가지 물건을 가져갑니다. 무엇인가요?<br/><br/>You take one valuable item with you for your trip. What is it?</h2>
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
                            <h2 className="SurveyTitle">3. 모든 준비가 끝난 당신은 여행을 출발합니다. 안개가 자욱한 길에 무엇인가 다가옵니다. 당신과 함께한 [동물]은(는) 겁에 질려있습니다. 당신은 어떤 행동을 하나요?<br/><br/>All ready, you set off on your journey. Something comes on the foggy road. [Animal] with you is terrified. What do you do?</h2>
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
                            <h2 className="SurveyTitle">4. 그것은 꼬리가 금으로 이루어진 뱀이었습니다. 그 꼬리는 비싼 값에 팔 수 있습니다. 하지만 그 꼬리는 뱀의 심장과도 같습니다. 당신은 어떻게 할건가요?<br/><br/>It was a snake with a gold tail. Its tail can be sold at a high price. But its tail is like the heart of a snake. What are you going to do?</h2>
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
                            <h2 className="SurveyTitle">5. 여행을 이어가던 중 배고파진 당신! 당신이 가장 좋아하는 음식의 냄새가 납니다. 하지만 당신의 [동물]은(는) 끔찍하게도 냄새를 싫어하네요. 어떻게 할껀가요?<br/><br/>You became hungry while continuing your trip! It smells of your favorite food. But your [animal] hates the smell horribly. How are you going to do it?</h2>
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
                            <h2 className="SurveyTitle">6. 걸음을 이어가자 끔찍한 냄새가 납니다. 하지만 당신은 알고있습니다. 당신의 [동물]이 가장 좋아하는 음식의 냄새라는 것을.. 어떻게 할건가요?<br/><br/>As I keep walking, I smell terrible. But you know. How do you know that your [animal] smells of your favorite food?</h2>
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
                            <h2 className="SurveyTitle">7. 다음 장소로 이동하기 위해 당신은 이동수단을 선택할 수 있습니다. 무엇을 타고가나요?<br/><br/>You can choose the mode of transportation to move to the next location. What do you ride?</h2>
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
                            <h2 className="SurveyTitle">8. 다음 장소에 도착한 당신! 당신과 [동물]은(는) 너무나 흥미로워합니다. 가장 먼저 무엇부터 하나요?<br/><br/>You arrived at the next place! You and [animal] are very interesting. What do you do first?</h2>
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
                            <h2 className="SurveyTitle">9. 당신과 [동물]은(는) 새로운 장소의 아름다운 밤을 만끽하려 합니다. 어디로 가나요?<br/><br/>You and [Animal] are about to enjoy a beautiful night in a new place. where are you going?</h2>
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
                            <h2 className="SurveyTitle">10. 여행의 하루가 마무리 됩니다. 숙소에 들어온 당신은 자기 직전까지 무엇을 하나요?<br/><br/>The day of the trip is over. What do you do right before bed when entering the accommodation?</h2>
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
                            <h2 className="SurveyTitle">11. 새로운 날이 밝았습니다. 준비를 마치고 나오려는 당신! 숙소를 나가기전 무엇을 하나요?<br/><br/>A new day has dawned. You are ready to come out! What do you do before leaving your accommodation?</h2>
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
                            <h2 className="SurveyTitle">12. 밖으로 나온 당신. 어제 밤과는 사뭇 다른 마을 분위기입니다. 식사를 하려는데 어떻게 하나요?<br/><br/>You out. It has a very different village atmosphere from last night. I want to eat, how do I do it?</h2>
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
                            <h2 className="SurveyTitle">13. 만족스러운 식사를 마치고 다음 장소로 이동하기 위해 걸음을 옮깁니다. 그때, 나무에 커다란 거미줄에 걸린 올빼미 한 마리가 있습니다. 당신은 어떻게 하나요?<br/><br/>After a satisfying meal, take steps to move to the next location. At that time, there is an owl caught in a large web on a tree. How do you do it?</h2>
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
                            <h2 className="SurveyTitle">14. 당신은 특별한 상점에 들어왔습니다. 여러 카테고리가 있네요. 가장 먼저 어디서 부터 보나요?<br/><br/>You have entered a special store. There are several categories. Where do you look first?</h2>
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
                            <h2 className="SurveyTitle">15. 상점을 둘러보던 중 당신이 가장 갖고싶어 하던 물건이 보입니다. 거래 조건이 특이하네요. 가장 소중한 물건과 교환할 수 있습니다. 어떻게 할껀가요?<br/><br/>While browsing the store, you will see the items you most wanted. The terms of the transaction are unusual. You can exchange it for the most valuable things. How are you going to do it?</h2>
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
                            <h2 className="SurveyTitle">16. 구경을 마치고 나온 당신 배가고프네요. 이 장소에서의 마지막 식사를 고민할 때 입니다. 하지만, 만족스러운 식당이 없네요. 어떻게 할껀가요?<br/><br/>You're hungry after watching. It's time to contemplate your last meal at this place. However, no restaurant is satisfactory. How are you going to do it?</h2>
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
                            <h2 className="SurveyTitle">17. 다음 장소로 이동하려는 당신. 마지막 여행지네요. 떠나기 전 당신은 사진 한 장을 남기려 합니다. 무엇을 찍나요?<br/><br/>You want to move to the next place. This is the last destination. Before you leave, you want to leave a picture. What do you shoot?</h2>
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
                            <h2 className="SurveyTitle">18. 마지막 장소로 이동하려는 당신. 그 곳은 바다 건너에 있다고 합니다. 당신의 [동물]은(는) 배멀미가 심합니다. 하지만 당신과 멀어지고 싶어하지 않아요. 당신은 어떻게 하나요?<br/><br/>You want to go to the last place. It is said to be across the sea. Your [animal] is seasick. But I don't want to get away from you. How do you do it?</h2>
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
                            <h2 className="SurveyTitle">19. 해질녘 배를 타고 노을을 보며 바다를 건너갑니다. 생각에 잠긴 당신, 무엇이 떠오르나요?<br/><br/>Take a boat at sunset and cross the sea while watching the sunset. Thinking you, what comes to mind?</h2>
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
                            <h2 className="SurveyTitle">20. 새로운 장소에 도착했습니다. 시간이 늦어 바로 숙소로 온 당신. 마지막 여행지에서 첫 출발을 위해 잠자기 전 당신은 무엇을 하나요?<br/><br/>You have arrived in a new place. You came to the hostel right away because it was late. What do you do before you go to bed for your first departure on your last trip?</h2>
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
                            <h2 className="SurveyTitle">21. 마지막 여행의 날이 시작되었습니다. 당신은 훌륭한 식사로 하루를 시작하려합니다. 어떤 식당을 가나요?<br/><br/>The day of the last trip has begun. You try to start your day with a great meal. Which restaurant do you go to?</h2>
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
                            <h2 className="SurveyTitle">22. 식사를 마치고 나온 당신은 신기한 상점에 들어섭니다. 그곳에는 앞서 보았던 특별한 거래 장치와 비슷한게 있네요. 이 장치는 앞에서 교환했던 물건을 넣으면 교환에 사용했던 소중한 물건을 다시 받을 수 있다고 합니다. 단, 4% 확률로 둘 다 잃을 수도 있다고 합니다. 96% 확률로 전부 얻을 수도 있겠네요. 당신은 어떻게 하나요?<br/><br/>After eating, you enter a mysterious store. There is something similar to the special trading device we saw earlier. This device is said to be able to receive valuable items used in the exchange again by inserting the items that were exchanged earlier. However, there is a 4% chance of losing both. 96% chance to get all. How do you do it?</h2>
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
                            <h2 className="SurveyTitle">23. 구경을 마치고 나온 당신은 같은 지역에서 온 한 사람을 만났습니다. 당신은 어떤 행동을 하나요?<br/><br/>After viewing, you met a person from the same area. What do you do?</h2>
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
                            <h2 className="SurveyTitle">24. 그 곳에서 알게 된 사람과 함께 마지막 여행을 즐깁니다. 당신의 [동물]도 그 사람을 엄청 좋아하네요. 둘은 여행지에서의 마지막 식사를 하려고 합니다. 어디를 가나요?<br/><br/>I enjoy my last trip with someone I know there. Your [animal] loves him too. The two are going to have their last meal at the destination. Where are you going?</h2>
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
                            <h2 className="SurveyTitle">25. 만족스러운 식사를 마치고 당신과 그 사람은 다시 집으로 돌아갈 역에 갑니다. 하지만 둘 중 한 명만 탑승할 수 있는 상황이네요. 당신은 어떻게 하나요?<br/><br/>After a satisfying meal, you and the person go back home to the station. However, only one of the two can board. How do you do it?</h2>
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
                            <h2 className="SurveyTitle">26. 늦음 밤 집으로 돌아온 당신. 오늘 하루를 정리하려 합니다. 마지막으로 무엇을 하나요?<br/><br/>You come home late at night. I want to organize my day. What do you do last?</h2>
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
                            <h2 className="SurveyTitle">27. 당신은 잠에 듭니다. 무슨 꿈을 꾸길 바라나요?<br/><br/>You fall asleep. What dream do you want to have?</h2>
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
