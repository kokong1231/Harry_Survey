import React, { Component } from 'react';
import '../App.css';
import '../App.scss';

class SurveyPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            page_change: 0,
            object: null,
            animal: null,
            gryffin: 0,
            slytherin: 0,
            hufflepuf: 0,
            ravenclaw: 0,
        };
    };

    handleClick = () => {
        this.setState(() => {
            return {page_change: this.state.page_change + 1}
        })
    };

    animalName = (v) => {
        this.setState(() => {
            return {animal: v,
                page_change: this.state.page_change + 1}
        })
    };

    objectName = (o) => {
        this.setState(() => {
            return {object: o,
                page_change: this.state.page_change + 1}
        })
    };

    gryffinPoint = () => {
        this.setState(() => {
            return {gryffin: this.state.gryffin + 1,
                page_change: this.state.page_change + 1}
        })
    };

    slytherinPoint = () => {
        this.setState(() => {
            return {slytherin: this.state.slytherin + 1,
                page_change: this.state.page_change + 1}
        })
    };

    hufflepufPoint = () => {
        this.setState(() => {
            return {hufflepuf: this.state.hufflepuf + 1,
                page_change: this.state.page_change + 1}
        })
    };

    ravenclawPoint = () => {
        this.setState(() => {
            return {ravenclaw: this.state.ravenclaw + 1,
                page_change: this.state.page_change + 1}
        })
    };

    thisRank = (a, b, c, d) => {
        const value_rank = [a, b, c, d]
        const dominame = ['그리핀도르', '슬리데린', '후플푸프', '래번클로']
        var final_rank = a
        var index_rank = 0

        value_rank.map((num, index) => {
            if ( final_rank < num) {
                return (final_rank = num, index_rank = index)
            }
        })

        return dominame[index_rank]
    };

    controlFunc = () => {
        switch ( this.state.page_change ) {
            case 0 :
                return (
                    <div>
                        <div>
                            <h2 className="SurveyTitle">1. 당신은 한 마리의 동물과 함께 여행을 준비합니다. 어떤 동물인가요?</h2>
                        </div>

                        <div className="container">
                            <input type="checkbox" className="toggle" id="toggle" checked="checked" /><label className="toggle" for="toggle"></label>
                            <div className="menu">
                                <ul className="middle">
                                    <li tabindex="0" onClick={() => {this.animalName('너구리');}}><i className="fa"></i>너구리</li>
                                    <li tabindex="0" onClick={() => {this.animalName('기니피그');}}><i className="fa"></i>기니피그</li>
                                    <li tabindex="0" onClick={() => {this.animalName('족제비');}}><i className="fa"></i>족제비</li>
                                    <li tabindex="0" onClick={() => {this.animalName('다람쥐');}}><i className="fa"></i>다람쥐</li>
                                    <li tabindex="0" onClick={() => {this.animalName('강아지');}}><i className="fa"></i>강아지</li>
                                    <li tabindex="0" onClick={() => {this.animalName('고양이');}}><i className="fa"></i>고양이</li>
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
                            <h2 className="SurveyTitle">2. 당신은 여행을 위해 소중한 한 가지 물건을 가져갑니다. 무엇인가요?</h2>
                        </div>

                        <div className="container">
                            <input type="checkbox" className="toggle" id="toggle" checked="checked" /><label className="toggle" for="toggle"></label>
                            <div className="menu">
                                    <ul className="middle">
                                        <li tabindex="0" onClick={() => {this.animalName('사진');}}><i className="fa"></i>소중한 사람과 함께한 움직이는 사진</li>
                                        <li tabindex="0" onClick={() => {this.animalName('책');}}><i className="fa"></i>힘들 때 이겨낼 수 있는 조언을 해주는 책</li>
                                        <li tabindex="0" onClick={() => {this.animalName('망원경');}}><i className="fa"></i>원하는 것을 보여주는 망원경</li>
                                        <li tabindex="0" onClick={() => {this.animalName('회중시계');}}><i className="fa"></i>특별한 순간을 기억하는 회중시계</li>
                                        <li tabindex="0" onClick={() => {this.animalName('모자');}}><i className="fa"></i>과거 경험을 다시 경험시켜주는 모자</li>
                                        <li tabindex="0" onClick={() => {this.animalName('향수');}}><i className="fa"></i>언제든 원하는 향으로 바뀌는 향수</li>
                                        <li tabindex="0" onClick={() => {this.animalName('소라고동');}}><i className="fa"></i>원하는 소리를 듣게 해주는 소라고동</li>
                                        <li tabindex="0" onClick={() => {this.animalName('목걸이');}}><i className="fa"></i>상대의 심장소리를 들울 수 있는 목걸이</li>
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
                            <h2 className="SurveyTitle">3. 모든 준비가 끝난 당신은 여행을 출발합니다. 안개가 자욱한 길에 무엇인가 다가옵니다. 당신과 함께한 {this.state.animal}는 겁에 질려있습니다. 당신은 어떤 행동을 하나요?</h2>
                        </div>

                        <div className="container">
                            <input type="checkbox" className="toggle" id="toggle" checked="checked" /><label className="toggle" for="toggle"></label>
                            <div className="menu">
                                    <ul className="middle">
                                        <li tabindex="0" onClick={this.hufflepufPoint}><i className="fa"></i>{this.state.animal}를 진정시킨다.</li>
                                        <li tabindex="0" onClick={this.gryffinPoint, this.ravenclawPoint}><i className="fa"></i>무엇인지 확인하러 간다.</li>
                                        <li tabindex="0" onClick={this.slytherinPoint}><i className="fa"></i>일단 숨는다.</li>
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
                            <h2 className="SurveyTitle">4. 그것은 꼬리가 금으로 이루어진 뱀이었습니다. 그 꼬리는 비싼 값에 팔 수 있습니다. 하지만 그 꼬리는 뱀의 심장과도 같습니다. 당신은 어떻게 할건가요?</h2>
                        </div>

                        <div className="container">
                            <input type="checkbox" className="toggle" id="toggle" checked="checked" /><label className="toggle" for="toggle"></label>
                            <div className="menu">
                                    <ul className="middle">
                                        <li tabindex="0" onClick={this.hufflepufPoint}><i className="fa"></i>살려준다.</li>
                                        <li tabindex="0" onClick={this.slytherinPoint}><i className="fa"></i>꼬리를 자른다.</li>
                                        <li tabindex="0" onClick={this.gryffinPoint, this.ravenclawPoint}><i className="fa"></i>뱀을 데려간다.</li>
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
                            <h2 className="SurveyTitle">5. 여행을 이어가던 중 배고파진 당신! 당신이 가장 좋아하는 음식의 냄새가 납니다. 하지만 당신의 {this.state.animal}는 끔찍하게도 냄새를 싫어하네요. 어떻게 할껀가요?</h2>
                        </div>

                        <div className="container">
                            <input type="checkbox" className="toggle" id="toggle" checked="checked" /><label className="toggle" for="toggle"></label>
                            <div className="menu">
                                    <ul className="middle">
                                        <li tabindex="0" onClick={this.hufflepufPoint, this.gryffinPoint}><i className="fa"></i>{this.state.animal}가 힘들어 한다. 그냥 갈길 간다.</li>
                                        <li tabindex="0" onClick={this.slytherinPoint, this.ravenclawPoint}><i className="fa"></i>{this.state.animal}를 맡겨두고 먹고온다.</li>
                                        <li tabindex="0" onClick={this.slytherinPoint}><i className="fa"></i>그냥 들어가서 먹는다.</li>
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
                            <h2 className="SurveyTitle">6. 걸음을 이어가자 끔찍한 냄새가 납니다. 하지만 당신은 알고있습니다. 당신의 {this.state.animal}가 가장 좋아하는 음식의 냄새라는 것을.. 어떻게 할건가요?</h2>
                        </div>

                        <div className="container">
                            <input type="checkbox" className="toggle" id="toggle" checked="checked" /><label className="toggle" for="toggle"></label>
                            <div className="menu">
                                    <ul className="middle">
                                        <li tabindex="0" onClick={this.slytherinPoint}><i className="fa"></i>참을 수 없다. 그냥 지나간다.</li>
                                        <li tabindex="0" onClick={this.gryffinPoint, this.hufflepufPoint, this.ravenclawPoint}><i className="fa"></i>참고 데려간다.</li>
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
                            <h2 className="SurveyTitle">7. 다음 장소로 이동하기 위해 당신은 이동수단을 선택할 수 있습니다. 무엇을 타고가나요?</h2>
                        </div>

                        <div className="container">
                            <input type="checkbox" className="toggle" id="toggle" checked="checked" /><label className="toggle" for="toggle"></label>
                            <div className="menu">
                                    <ul className="middle">
                                        <li tabindex="0" onClick={this.hufflepufPoint}><i className="fa"></i>느리지만 아름다운 풍경이 있는 기차</li>
                                        <li tabindex="0" onClick={this.gryffinPoint}><i className="fa"></i>빠르지만 엄청 흔들리는 하늘을 나는 차</li>
                                        <li tabindex="0" onClick={this.slytherinPoint}><i className="fa"></i>바로 갈 수 있는 순간이동 포탈</li>
                                        <li tabindex="0" onClick={this.ravenclawPoint}><i className="fa"></i>여러 사람과 함께하는 마차</li>
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
                            <h2 className="SurveyTitle">8. 다음 장소에 도착한 당신! 당신과 {this.state.animal}는 너무나 흥미로워합니다. 가장 먼저 무엇부터 하나요?</h2>
                        </div>

                        <div className="container">
                            <input type="checkbox" className="toggle" id="toggle" checked="checked" /><label className="toggle" for="toggle"></label>
                            <div className="menu">
                                    <ul className="middle">
                                        <li tabindex="0" onClick={this.gryffinPoint}><i className="fa"></i>의미있는 사진을 찍는다.</li>
                                        <li tabindex="0" onClick={this.hufflepufPoint}><i className="fa"></i>주변에 무슨 음식이 있는지 찾아본다.</li>
                                        <li tabindex="0" onClick={this.slytherinPoint}><i className="fa"></i>장소 분위기에 맞게 옷을 갈아입는다.</li>
                                        <li tabindex="0" onClick={this.ravenclawPoint}><i className="fa"></i>계획대로 바로 움직인다.</li>
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
                            <h2 className="SurveyTitle">9. 당신과 {this.state.animal}는 새로운 장소의 아름다운 밤을 만끽하려 합니다. 어디로 가나요?</h2>
                        </div>

                        <div className="container">
                            <input type="checkbox" className="toggle" id="toggle" checked="checked" /><label className="toggle" for="toggle"></label>
                            <div className="menu">
                                    <ul className="middle">
                                        <li tabindex="0" onClick={this.gryffinPoint}><i className="fa"></i>시끌벅적한 통나무 펍</li>
                                        <li tabindex="0" onClick={this.slytherinPoint, this.ravenclawPoint}><i className="fa"></i>클래식 음악이 흘러나오는 레스토랑</li>
                                        <li tabindex="0" onClick={this.gryffinPoint, this.hufflepufPoint}><i className="fa"></i>아름다운 밤하늘이 보이는 루프탑</li>
                                        <li tabindex="0" onClick={this.gryffinPoint, this.hufflepufPoint}><i className="fa"></i>신나는 분위기의 길거리 축제</li>
                                        <li tabindex="0" onClick={this.gryffinPoint}><i className="fa"></i>바다가 한눈에 보이는 칵테일집</li>
                                        <li tabindex="0" onClick={this.slytherinPoint, this.ravenclawPoint}><i className="fa"></i>반짝반짝 빛나는 게임장</li>
                                        <li tabindex="0" onClick={this.gryffinPoint, this.ravenclawPoint}><i className="fa"></i>긴장감이 흐르는 특별 연극</li>
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
                            <h2 className="SurveyTitle">10. 여행의 하루가 마무리 됩니다. 숙소에 들어온 당신은 자기 직전까지 무엇을 하나요?</h2>
                        </div>

                        <div className="container">
                            <input type="checkbox" className="toggle" id="toggle" checked="checked" /><label className="toggle" for="toggle"></label>
                            <div className="menu">
                                    <ul className="middle">
                                        <li tabindex="0" onClick={this.ravenclawPoint}><i className="fa"></i>내일 계획을 세운다.</li>
                                        <li tabindex="0" onClick={this.slytherinPoint}><i className="fa"></i>티비를 보며 잠에든다.</li>
                                        <li tabindex="0" onClick={this.ravenclawPoint, this.hufflepufPoint}><i className="fa"></i>일기를 쓴다.</li>
                                        <li tabindex="0" onClick={this.gryffinPoint}><i className="fa"></i>오늘 찍은 사진들을 정리한다.</li>
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
                            <h2 className="SurveyTitle">11. 새로운 날이 밝았습니다. 준비를 마치고 나오려는 당신! 숙소를 나가기전 무엇을 하나요?</h2>
                        </div>

                        <div className="container">
                            <input type="checkbox" className="toggle" id="toggle" checked="checked" /><label className="toggle" for="toggle"></label>
                            <div className="menu">
                                    <ul className="middle">
                                        <li tabindex="0" onClick={this.hufflepufPoint}><i className="fa"></i>어질러진 숙소를 정리한다.</li>
                                        <li tabindex="0" onClick={this.slytherinPoint}><i className="fa"></i>가져갈만한 물건이 있는지 본다.</li>
                                        <li tabindex="0" onClick={this.ravenclawPoint}><i className="fa"></i>사진을 찍는다.</li>
                                        <li tabindex="0" onClick={this.gryffinPoint}><i className="fa"></i>관리자가 보고 놀랄 이벤트를 남긴다.</li>
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
                            <h2 className="SurveyTitle">12. 밖으로 나온 당신. 어제 밤과는 사뭇 다른 마을 분위기입니다. 식사를 하려는데 어떻게 하나요?</h2>
                        </div>

                        <div className="container">
                            <input type="checkbox" className="toggle" id="toggle" checked="checked" /><label className="toggle" for="toggle"></label>
                            <div className="menu">
                                    <ul className="middle">
                                        <li tabindex="0" onClick={this.ravenclawPoint}><i className="fa"></i>어제 봐뒀던 식당을 간다.</li>
                                        <li tabindex="0" onClick={this.slytherinPoint}><i className="fa"></i>달라진 분위기가 맘에 안든다. 안간다.</li>
                                        <li tabindex="0" onClick={this.hufflepufPoint}><i className="fa"></i>주변에 간단한 음식을 포장한다.</li>
                                        <li tabindex="0" onClick={this.gryffinPoint}><i className="fa"></i>길가는 사람에게 맛있는 식당을 물어본다.</li>
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
                            <h2 className="SurveyTitle">13. 다음 장소로 이동하기 위해 걸음을 옮깁니다. 그때, 나무에 커다란 거미줄에 걸린 올빼미 한 마리가 있습니다. 당신은 어떻게 하나요?</h2>
                        </div>

                        <div className="container">
                            <input type="checkbox" className="toggle" id="toggle" checked="checked" /><label className="toggle" for="toggle"></label>
                            <div className="menu">
                                    <ul className="middle">
                                        <li tabindex="0" onClick={this.gryffinPoint, this.hufflepufPoint}><i className="fa"></i>구해주기 위해 나무를 올라간다.</li>
                                        <li tabindex="0" onClick={this.ravenclawPoint, this.slytherinPoint}><i className="fa"></i>거미가 무섭다. 도움을 요청한다.</li>
                                        <li tabindex="0" onClick={this.ravenclawPoint, this.hufflepufPoint}><i className="fa"></i>적당한 도구를 찾는다.</li>
                                        <li tabindex="0" onClick={this.slytherinPoint}><i className="fa"></i>혼자 잘 빠져나올 것이다. 그냥 간다.</li>
                                        <li tabindex="0" onClick={this.ravenclawPoint}><i className="fa"></i>어떻게 될지 지켜본다.</li>
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
                            <h2 className="SurveyTitle">14. 당신은 특별한 상점에 들어왔습니다. 여러 코너가 있네요. 가장 먼저 어디서 부터 보나요?</h2>
                        </div>

                        <div className="container">
                            <input type="checkbox" className="toggle" id="toggle" checked="checked" /><label className="toggle" for="toggle"></label>
                            <div className="menu">
                                    <ul className="middle">
                                        <li tabindex="0" onClick={this.slytherinPoint, this.hufflepufPoint}><i className="fa"></i>신기한 과자 코너</li>
                                        <li tabindex="0" onClick={this.ravenclawPoint}><i className="fa"></i>책 냄새나는 책 코너</li>
                                        <li tabindex="0" onClick={this.slytherinPoint, this.ravenclawPoint}><i className="fa"></i>이쁜 옷이 많은 옷 코너</li>
                                        <li tabindex="0" onClick={this.gryffinPoint, this.slytherinPoint}><i className="fa"></i>신기한 도구들이 있는 코너</li>
                                        <li tabindex="0" onClick={this.hufflepufPoint, this.gryffinPoint}><i className="fa"></i>낡은 물건들이 있는 골동품 코너</li>
                                        <li tabindex="0" onClick={this.hufflepufPoint, this.ravenclawPoint}><i className="fa"></i>아름다운 그림들이 있는 그림 코너</li>
                                        <li tabindex="0" onClick={this.gryffinPoint, this.slytherinPoint}><i className="fa"></i>신기한 동물들이 있는 동물 코너</li>
                                        <li tabindex="0" onClick={this.gryffinPoint}><i className="fa"></i>사람들이 잔뜩 모여있는 어느 코너</li>
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
                            <h2 className="SurveyTitle">15. 상점을 둘러보던 중 당신이 가장 갖고싶어 하던 물건이 보입니다. 거래 조건이 특이하네요. 가장 소중한 물건인 {this.state.object}과(와) 교환할 수 있습니다. 어떻게 할껀가요?</h2>
                        </div>

                        <div className="container">
                            <input type="checkbox" className="toggle" id="toggle" checked="checked" /><label className="toggle" for="toggle"></label>
                            <div className="menu">
                                    <ul className="middle">
                                        <li tabindex="0" onClick={this.ravenclawPoint, this.hufflepufPoint}><i className="fa"></i>갖고는 싶지만 참는다.</li>
                                        <li tabindex="0" onClick={this.slytherinPoint}><i className="fa"></i>지금 소중한건 저 물건이다. 내꺼다.</li>
                                        <li tabindex="0" onClick={this.ravenclawPoint, this.gryffinPoint}><i className="fa"></i>다른 사람이 하는걸 구경한다.</li>
                                        <li tabindex="0" onClick={this.ravenclawPoint}><i className="fa"></i>어떤 원리로 동작하는지 생각한다.</li>
                                        <li tabindex="0" onClick={this.gryffinPoint}><i className="fa"></i>소중하지 않는 물건을 넣어본다.</li>
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
                            <h2 className="SurveyTitle">16. 구경을 마치고 나온 당신 배가고프네요. 이 장소에서의 마지막 식사를 고민할 때 입니다. 하지만, 만족스러운 식당이 없네요. 어떻게 할껀가요?</h2>
                        </div>

                        <div className="container">
                            <input type="checkbox" className="toggle" id="toggle" checked="checked" /><label className="toggle" for="toggle"></label>
                            <div className="menu">
                                    <ul className="middle">
                                        <li tabindex="0" onClick={this.hufflepufPoint, this.slytherinPoint}><i className="fa"></i>가까운 곳으로 들어간다.</li>
                                        <li tabindex="0" onClick={this.gryffinPoint, this.ravenclawPoint}><i className="fa"></i>그나마 분위기가 좋은 곳으로 간다.</li>
                                        <li tabindex="0" onClick={this.gryffinPoint}><i className="fa"></i>사람이 많은 곳으로 간다.</li>
                                        <li tabindex="0" onClick={this.slytherinPoint}><i className="fa"></i>음식의 양이 많은 곳으로 간다.</li>
                                        <li tabindex="0" onClick={this.slytherinPoint}><i className="fa"></i>음식이 빨리나올 것 같은 곳으로 간다.</li>
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
                            <h2 className="SurveyTitle">17. 다음 장소로 이동하려는 당신. 마지막 여행지네요. 떠나기 전 당신은 사진 한 장을 남기려 합니다. 무엇을 찍나요?</h2>
                        </div>

                        <div className="container">
                            <input type="checkbox" className="toggle" id="toggle" checked="checked" /><label className="toggle" for="toggle"></label>
                            <div className="menu">
                                    <ul className="middle">
                                        <li tabindex="0" onClick={this.ravenclawPoint}><i className="fa"></i>마을 지도가 있는 게시판</li>
                                        <li tabindex="0" onClick={this.slytherinPoint}><i className="fa"></i>가장 높은 건물</li>
                                        <li tabindex="0" onClick={this.gryffinPoint}><i className="fa"></i>마을의 풍경</li>
                                        <li tabindex="0" onClick={this.hufflepufPoint}><i className="fa"></i>마을을 배경으로한 셀카</li>
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
                            <h2 className="SurveyTitle">18. 마지막 장소로 이동하려는 당신. 그 곳은 바다 건너에 있다고 합니다. 당신의 {this.state.animal}는 배멀미가 심합니다. 하지만 당신과 멀어지고 싶어하지 않아요. 당신은 어떻게 하나요?</h2>
                        </div>

                        <div className="container">
                            <input type="checkbox" className="toggle" id="toggle" checked="checked" /><label className="toggle" for="toggle"></label>
                            <div className="menu">
                                    <ul className="middle">
                                        <li tabindex="0" onClick={this.gryffinPoint, this.hufflepufPoint}><i className="fa"></i>곁에 두고 챙겨준다.</li>
                                        <li tabindex="0" onClick={this.ravenclawPoint, this.slytherinPoint}><i className="fa"></i>도와줄 수 있는 전문가에게 맡긴다.</li>
                                        <li tabindex="0" onClick={this.ravenclawPoint, this.gryffinPoint}><i className="fa"></i>쓸만한 약을 찾아본다.</li>
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
                            <h2 className="SurveyTitle">19. 해질녘 배를 타고 노을을 보며 바다를 건너갑니다. 생각에 잠긴 당신, 무엇이 떠오르나요?</h2>
                        </div>

                        <div className="container">
                            <input type="checkbox" className="toggle" id="toggle" checked="checked" /><label className="toggle" for="toggle"></label>
                            <div className="menu">
                                    <ul className="middle">
                                        <li tabindex="0" onClick={this.gryffinPoint, this.hufflepufPoint}><i className="fa"></i>소중한 사람</li>
                                        <li tabindex="0" onClick={this.gryffinPoint, this.ravenclawPoint}><i className="fa"></i>행복했던 순간</li>
                                        <li tabindex="0" onClick={this.slytherinPoint}><i className="fa"></i>좋아했던 옛 사랑</li>
                                        <li tabindex="0" onClick={this.ravenclawPoint}><i className="fa"></i>해가 바다 지평선에 언제 닿을까?</li>
                                        <li tabindex="0" onClick={this.gryffinPoint, this.ravenclawPoint}><i className="fa"></i>자아성찰</li>
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
                            <h2 className="SurveyTitle">20. 새로운 장소에 도착했습니다. 시간이 늦어 바로 숙소로 온 당신. 마지막 여행지에서 첫 출발을 위해 잠자기 전 당신은 무엇을 하나요?</h2>
                        </div>

                        <div className="container">
                            <input type="checkbox" className="toggle" id="toggle" checked="checked" /><label className="toggle" for="toggle"></label>
                            <div className="menu">
                                    <ul className="middle">
                                        <li tabindex="0" onClick={this.hufflepufPoint, this.slytherinPoint}><i className="fa"></i>피곤하다. 바로잔다.</li>
                                        <li tabindex="0" onClick={this.ravenclawPoint}><i className="fa"></i>계획을 철저히 세운다.</li>
                                        <li tabindex="0" onClick={this.gryffinPoint}><i className="fa"></i>사진을 정리한다.</li>
                                        <li tabindex="0" onClick={this.gryffinPoint, this.ravenclawPoint}><i className="fa"></i>일기를 쓴다.</li>
                                        <li tabindex="0" onClick={this.slytherinPoint}><i className="fa"></i>뭉친 몸을 풀어준다.</li>
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
                            <h2 className="SurveyTitle">21. 마지막 여행의 날이 시작되었습니다. 당신은 훌륭한 식사로 하루를 시작하려합니다. 어떤 식당을 가나요?</h2>
                        </div>

                        <div className="container">
                            <input type="checkbox" className="toggle" id="toggle" checked="checked" /><label className="toggle" for="toggle"></label>
                            <div className="menu">
                                    <ul className="middle">
                                        <li tabindex="0" onClick={this.ravenclawPoint}><i className="fa"></i>활력을 채워줄 건강식당</li>
                                        <li tabindex="0" onClick={this.gryffinPoint, this.ravenclawPoint}><i className="fa"></i>맛있을지 모르지만 특별한 식당</li>
                                        <li tabindex="0" onClick={this.slytherinPoint, this.hufflepufPoint}><i className="fa"></i>가장 유명한 식당</li>
                                        <li tabindex="0" onClick={this.hufflepufPoint}><i className="fa"></i>근처에 있는 식당</li>
                                        <li tabindex="0" onClick={this.slytherinPoint}><i className="fa"></i>음식 양이 많은 식당</li>
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
                            <h2 className="SurveyTitle">22. 식사를 마치고 나온 당신은 신기한 상점에 들어섭니다. 그곳에는 앞서 보았던 특별한 거래 장치와 비슷한게 있네요. 이 장치는 앞에서 교환해서 얻은 물건을 넣으면 {this.state.object}을(를) 다시 받을 수 있다고 합니다. 단, 4% 확률로 둘 다 잃을 수도 있다고 합니다. 96% 확률로 전부 얻을 수도 있겠네요. 당신은 어떻게 하나요?</h2>
                        </div>

                        <div className="container">
                            <input type="checkbox" className="toggle" id="toggle" checked="checked" /><label className="toggle" for="toggle"></label>
                            <div className="menu">
                                    <ul className="middle">
                                        <li tabindex="0" onClick={this.handleClick}><i className="fa"></i>앞에서 교환하지 않았다. 그냥 간다.</li>
                                        <li tabindex="0" onClick={this.gryffinPoint, this.ravenclawPoint}><i className="fa"></i>사람들이 하는걸 구경한다.</li>
                                        <li tabindex="0" onClick={this.gryffinPoint}><i className="fa"></i>걱정은 되지만 도전한다.</li>
                                        <li tabindex="0" onClick={this.ravenclawPoint, this.hufflepufPoint}><i className="fa"></i>다 잃을 수도 있다. 안한다.</li>
                                        <li tabindex="0" onClick={this.gryffinPoint, this.slytherinPoint}><i className="fa"></i>무조건 될거다. 도전한다.</li>
                                        <li tabindex="0" onClick={this.ravenclawPoint}><i className="fa"></i>두 기계의 원리를 생각한다.</li>
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
                            <h2 className="SurveyTitle">23. 구경을 마치고 나온 당신은 같은 지역에서 온 한 사람을 만났습니다. 당신은 어떤 행동을 하나요?</h2>
                        </div>

                        <div className="container">
                            <input type="checkbox" className="toggle" id="toggle" checked="checked" /><label className="toggle" for="toggle"></label>
                            <div className="menu">
                                    <ul className="middle">
                                        <li tabindex="0" onClick={this.gryffinPoint}><i className="fa"></i>반갑게 인사를 한다.</li>
                                        <li tabindex="0" onClick={this.ravenclawPoint}><i className="fa"></i>먼저 말걸어주길 기다린다.</li>
                                        <li tabindex="0" onClick={this.slytherinPoint}><i className="fa"></i>꼬이기 싫다. 그냥 간다.</li>
                                        <li tabindex="0" onClick={this.ravenclawPoint, this.hufflepufPoint}><i className="fa"></i>만반의 준비를 하고 다가간다.</li>
                                        <li tabindex="0" onClick={this.ravenclawPoint}><i className="fa"></i>어떤 사람일지 유심히 관찰한다.</li>
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
                            <h2 className="SurveyTitle">24. 그 곳에서 알게 된 사람과 함께 마지막 여행을 즐깁니다. 당신의 {this.state.animal}도 그 사람을 엄청 좋아하네요. 둘은 여행지에서의 마지막 식사를 하려고 합니다. 어디를 가나요?</h2>
                        </div>

                        <div className="container">
                            <input type="checkbox" className="toggle" id="toggle" checked="checked" /><label className="toggle" for="toggle"></label>
                            <div className="menu">
                                    <ul className="middle">
                                        <li tabindex="0" onClick={this.hufflepufPoint}><i className="fa"></i>그 사람이 좋아하는 걸 먹는다.</li>
                                        <li tabindex="0" onClick={this.slytherinPoint}><i className="fa"></i>내가 좋아하는 걸 먹는다.</li>
                                        <li tabindex="0" onClick={this.ravenclawPoint}><i className="fa"></i>따로 먹는다.</li>
                                        <li tabindex="0" onClick={this.gryffinPoint}><i className="fa"></i>걷가가 둘다 맘에 들어 하는 곳에 간다.</li>
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
                            <h2 className="SurveyTitle">25. 만족스러운 식사를 마치고 당신과 그 사람은 다시 집으로 돌아갈 역에 갑니다. 하지만 둘 중 한 명만 탑승할 수 있는 상황이네요. 당신은 어떻게 하나요?</h2>
                        </div>

                        <div className="container">
                            <input type="checkbox" className="toggle" id="toggle" checked="checked" /><label className="toggle" for="toggle"></label>
                            <div className="menu">
                                    <ul className="middle">
                                        <li tabindex="0" onClick={this.gryffinPoint}><i className="fa"></i>그 사람을 먼저 보낸다.</li>
                                        <li tabindex="0" onClick={this.ravenclawPoint}><i className="fa"></i>양해를 구하고 내가 먼저 간다.</li>
                                        <li tabindex="0" onClick={this.slytherinPoint}><i className="fa"></i>모르는척 나만 탄다.</li>
                                        <li tabindex="0" onClick={this.hufflepufPoint}><i className="fa"></i>둘 다 다음 배를 기다린다.</li>
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
                            <h2 className="SurveyTitle">26. 늦음 밤 집으로 돌아온 당신. 오늘 하루를 정리하려 합니다. 마지막으로 무엇을 하나요?</h2>
                        </div>

                        <div className="container">
                            <input type="checkbox" className="toggle" id="toggle" checked="checked" /><label className="toggle" for="toggle"></label>
                            <div className="menu">
                                    <ul className="middle">
                                        <li tabindex="0" onClick={this.gryffinPoint}><i className="fa"></i>함께한 그 사람에게 연락</li>
                                        <li tabindex="0" onClick={this.ravenclawPoint}><i className="fa"></i>일기를 쓴다.</li>
                                        <li tabindex="0" onClick={this.gryffinPoint, this.hufflepufPoint}><i className="fa"></i>찍은 사진들을 다시 본다.</li>
                                        <li tabindex="0" onClick={this.ravenclawPoint, this.slytherinPoint}><i className="fa"></i>다시 돌아갈 일상을 계획한다.</li>
                                        <li tabindex="0" onClick={this.slytherinPoint}><i className="fa"></i>바로 잠에 든다.</li>
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
                            <h2 className="SurveyTitle">27. 당신은 잠에 듭니다. 무슨 꿈을 꾸길 바라나요?</h2>
                        </div>

                        <div className="container">
                            <input type="checkbox" className="toggle" id="toggle" checked="checked" /><label className="toggle" for="toggle"></label>
                            <div className="menu">
                                    <ul className="middle">
                                        <li tabindex="0" onClick={this.ravenclawPoint}><i className="fa"></i>여행의 행복했던 순간</li>
                                        <li tabindex="0" onClick={this.gryffinPoint}><i className="fa"></i>소중한 사람과 함께한 순간</li>
                                        <li tabindex="0" onClick={this.slytherinPoint}><i className="fa"></i>스릴 넘치는 꿈</li>
                                        <li tabindex="0" onClick={this.hufflepufPoint}><i className="fa"></i>이루어질 수 없는 행복한 꿈</li>
                                    </ul>
                                <div className="bottom"></div>
                                <div className="menu-back"></div>
                                <div className="glass-reflection"></div>
                            </div>
                        </div>
                    </div>
                )

                // <h1 className="Test_value">{this.thisRank(this.state.gryffin, this.state.slytherin, this.state.hufflepuf, this.state.ravenclaw)}!</h1>
            default :
                if ( this.thisRank(this.state.gryffin, this.state.slytherin, this.state.hufflepuf, this.state.ravenclaw) === '그리핀도르' ) {
                    return (
                        <div className="final_page_griffin">
                            <h1 className="Test_value grifn">그리핀도르</h1>
                            <div className="Result_main">
                                당신은 그리핀도르와 어울리는 성향을 가졌군요.<br />
                                불사조의 기사단과 오러의 다수가 그리핀도르 출신으로 용감함과 정의를 가치있게 생각하는 사람들입니다.
                                <br /><br />
                                창립자인 고드릭 그리핀도르는 이렇게 말했습니다. '그 이름에 걸맞는 용기를 가진 아이들은 누구나 가르치도록 하자.'<br />
                                당신은 용기있고 기사도 정신이 두렷한 사람입니다.<br />
                                조금이라도 더 앞에 나서서 행동하지요.<br />
                                <br />
                                그리핀도르의 상징인 붉은색과 금색 처럼 당신은 용기있고 고귀한 사람입니다.
                                <div className="Result_sub">
                                    그리핀도르 대표 인물 : 해리포터, 시리우스 블랙, 론 위즐리, 헤르미온느 그레인저
                                </div>
                            </div>
                        </div>
                    )
                }

                else {
                    if ( this.thisRank(this.state.gryffin, this.state.slytherin, this.state.hufflepuf, this.state.ravenclaw) === '슬리데린' ) {
                        return (
                            <div className="final_page_slytherin">
                                <h1 className="Test_value sli">슬리데린</h1>
                                <div className="Result_main">
                                당신은 슬리데린과 어울리는 성향을 가졌군요.<br />
                                어둠의 마법사가 가장 많이 배출되었고, 순수혈통이 가장 많은 기숙사입니다.<br />
                                <br />
                                창립자인 살라자르 슬리데린는 이렇게 말했습니다. '가장 순수한 혈통을 지닌 이들만 가르치도록 하자.'<br />
                                당신은 야망을 갖고 명예와 권력을 중요하게 생각합니다.<br />
                                나의 행복과 이익을 위해서는 무엇이든 할 수 있습니다.<br />
                                <br />
                                어둠의 마법사가 가장 많이 배출된 기숙사이지만, 야망을 위해 당당히 걸어가는 이들은 높은 권력을 갖고 있습니다.<br />
                                <br />
                                슬리데린의 상징인 초록색과 은색처럼 차분하고 냉정한 판단을 가졌군요.
                                    <div className="Result_sub">
                                        슬리데린 대표 인물 : 드레이코 말포이, 세베루스 스네이프, 벨라트릭스 블랙, 톰 리들(볼드포트)
                                    </div>
                                </div>
                            </div>
                        )
                    }

                    else {
                        if ( this.thisRank(this.state.gryffin, this.state.slytherin, this.state.hufflepuf, this.state.ravenclaw) === '후플푸프' ) {
                            return (
                                <div className="final_page_hufflepuf">
                                    <h1 className="Test_value huf">후플푸프</h1>
                                    <div className="Result_main">
                                    당신은 후플푸프와 어울리는 성향을 가졌군요.<br />
                                    선량하고 옳다고 생각하는 일에는 망설임 없이 다가갑니다.<br />
                                    <br />
                                    창립자인 헬가 후플푸프는 이렇게 말했습니다. '나는 모든 아이들을 차별없이 가르칠 것이다.'<br />
                                    후플푸프 학생들은 정직하고 공평하며 성실합니다.<br />
                                    또한, 근성과 끈기가 엄청나지요.<br />
                                    모든 사람에게 편견없이 다가가고 올바른 판단을 내립니다.<br />
                                    <br />
                                    올바른 일을 위해 일하는 마법부 직원의 다수가 후플푸프 출신입니다.<br />
                                    <br />
                                    후플푸프의 상징인 노란색과 검은색처럼 모든 생명에게 밝고 명랑하게 다가가며 옳은 일인지 깊게 생각할 줄 알고있습니다.
                                        <div className="Result_sub">
                                            후플푸프 대표 인물 : 뉴트 스캐맨더, 세드릭 디고리, 한나 아보트
                                        </div>
                                    </div>
                                </div>
                            )
                        }

                        else {
                            return (
                                <div className="final_page_ravenclaw">
                                    <h1 className="Test_value rav">래번클로</h1>
                                    <div className="Result_main">
                                    당신은 래번클로와 어울리는 성향을 가졌군요.<br />
                                    똑똑하고 지혜로우며 현명합니다.<br />
                                    <br />
                                    창립자인 로웨나 래번클로는 이렇게 말했습니다. '가장 똑똑한 아이들만 가르치도록 하자.'<br />
                                    지혜롭고 현명한 당신은 독창성이 뛰어납니다.<br />
                                    창립이념과 같이 래번클로 학생들은 대부분 뛰어난 성적을 갖고있습니다.<br />
                                    또한 괴짜들이 많기로도 유명합니다. 사실 이들은 창의성이 매우 우수하고 다른 사람들보다 넓게 볼줄 아는 것입니다.<br />
                                    <br />
                                    래번클로의 상징인 파란색과 청동색은 마치 바다와 같은 넓고 깊은 지식을 갖고있습니다.
                                        <div className="Result_sub">
                                            후플푸프 대표 인물 : 루나 러브굿, 초 챙, 파드마 패틸, 마이클 코너
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    }
                }
        }
    }

    render() {
        return <this.controlFunc />
    }
}

export default SurveyPage;
