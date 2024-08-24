import { FC } from "react";

import {
  MainBannerBlock,
  SectionParentBlock,
  SectionOneBlock,
  SectionTwoBlock,
  SectionThreeBlock,
  SectionFourBlock,
  SectionFiveBlock,
  SectionSixBlock,
  SectionSevenBlock,
} from "../styled/main";

const Main: FC = () => {
  return (
    <>
      <MainBannerBlock id="main-banner">
        <div className="container">
          <div className="banner-wrap">
            <div className="banner-text">
              <p>Sseum-sseum-e</p>
              <h2>
                안녕하세요?
                <br />
                씀씀이에요
              </h2>
              <h4>
                씀씀이는 24시간 부모님 곁에서
                <br />
                정서 생활 인지 건강을 도와주는 AI돌봄 로봇입니다.
              </h4>
            </div>
            <div className="inquiry-wrap">
              <div className="inquiry-form">
                <form method="post">
                  <div className="form-group">
                    <label htmlFor="name">이름</label>

                    <input type="text" name="name" id="name" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="hand_phone">연락처</label>

                    <input type="text" name="hand_phone" id="hand_phone" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">이메일</label>

                    <input type="text" name="email" id="email" />
                  </div>

                  <div className="agree-area">
                    <div className="agree-item">
                      <div className="custom-checkbox">
                        <input
                          type="checkbox"
                          name="agree_1"
                          id="agree_1"
                          className="custom-control-input"
                        />
                        <label
                          htmlFor="agree_1"
                          className="custom-control-label"
                        >
                          개인정보 수집 및 이용에 동의합니다.
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="form-btn">
                    <button type="submit">문의하기</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </MainBannerBlock>

      <SectionParentBlock id="section">
        <SectionFourBlock id="section4">
          <div className="section-back">
            <div className="sec-text">
              <p>Sseum-sseum-e contact</p>

              <h3>돌봄 로봇 씀씀이를 만나보세요.</h3>
            </div>

            <div className="inquiry-btn">
              <button type="button">문의하러 가기 →</button>
            </div>
          </div>
        </SectionFourBlock>

        <SectionThreeBlock id="section3">
          <div className="container">
            <div className="sec-wrap">
              <div className="left-info">
                <div className="sec-title">
                  <p>Sseum-sseum-e</p>
                  <h4>
                    다정하고 사랑스러운
                    <br />
                    돌봄 로봇, 씀씀이
                  </h4>
                </div>
              </div>

              <div className="right-area">
                <div className="sec-top-text">
                  <p>
                    생명력과 에너지가 넘치는 씀씀이는 홀로 계신 부모님 곁에서
                    24시간을 함께 하며
                    <br />
                    사랑스러운 말투와 다양한 표현력으로 부모님의 정서 및 생활
                    관리를 지원합니다.
                  </p>
                </div>

                <div className="video-area">
                  <img
                    src="/images/main/use_it_video.png"
                    alt="씀씀이 소개 영상"
                  />
                </div>
              </div>
            </div>
          </div>
        </SectionThreeBlock>

        <SectionFiveBlock>
          <div className="sec-info">
            <div className="sec-text">
              <p>Sseum-sseum-e contact</p>

              <h3>AI 통화 말벗, 씀씀이</h3>
            </div>

            <div className="sec-image">
              <img src="/images/main/element_image.png" alt="씀씀이 케어" />
            </div>
          </div>
        </SectionFiveBlock>

        <SectionSixBlock>
          <div className="container">
            <div className="sec-content">
              <div className="sec-title">
                <h2>
                  복잡한 절차 필요 없이
                  <br />
                  <span className="text-bold">
                    전화 한통으로 지금 바로 사용할 수 있습니다.
                  </span>
                </h2>
              </div>

              <div className="sec-info">
                <div className="sec-item">
                  <div className="box">
                    <div className="icon">
                      <img
                        src="/images/icons/step_1.png"
                        alt="지금 사용하는 핸드폰으로 바로 가능!"
                      />
                    </div>

                    <div className="text">
                      <h4>지금 사용하는 핸드폰으로 바로 가능!</h4>
                      <p>
                        비싼 기기 장만할 필요없이, 지금 사용하는 핸드폰으로 바로
                        사용할 수 있어요.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="sec-item">
                  <div className="box">
                    <div className="icon">
                      <img
                        src="/images/icons/step_2.png"
                        alt="지금 사용하는 핸드폰으로 바로 가능!"
                      />
                    </div>

                    <div className="text">
                      <h4>위기 상황도 안심</h4>
                      <p>
                        통화 중 위기 상황 인지시 <br />
                        사회복지기관과 바로 연계해 드려요.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="sec-item">
                  <div className="box">
                    <div className="icon">
                      <img
                        src="/images/icons/step_3.png"
                        alt="지금 사용하는 핸드폰으로 바로 가능!"
                      />
                    </div>

                    <div className="text">
                      <h4>익숙한 목소리 제공</h4>
                      <p>
                        ‘목소리 학습'을 통해 자녀, 친구 등<br />
                        특별한 분의 목소리로 대화를 나눌 수 있어요.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="sec-item">
                  <div className="box">
                    <div className="icon">
                      <img
                        src="/images/icons/step_4.png"
                        alt="지금 사용하는 핸드폰으로 바로 가능!"
                      />
                    </div>

                    <div className="text">
                      <h4>전문적인 케어</h4>
                      <p>
                        ‘씀씀이'는 사회복지사 캐릭터로 설정되어 있어, 보다
                        전문적이고 따뜻한 말벗 서비스를 제공해요.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SectionSixBlock>

        {/* <SectionOneBlock id="section1">
          <div className="container">
            <div className="sec-wrap">
              <div className="left-info">
                <div className="sec-title">
                  <p>Sseum-sseum-e Story</p>
                  <h4>씀씀이 STORY</h4>
                </div>
              </div>

              <div className="right-area">
                <div className="chat-list">
                  <div className="chat-item right-chat">
                    <div className="chat-area">
                      <div className="chat-back">
                        <p>
                          생명력과 에너지가 넘치는 씀씀이는 홀로 계신 부모님
                          곁에서 24시간을 함께 하며 사랑스러운 말투와 다양한
                          표현력으로 부모님의 정서 및 생활 관리를 지원합니다.
                        </p>
                      </div>

                      <div className="msg-arrow right-arrow">
                        <img src="/images/icons/arrow-right.png" alt="메시지" />
                      </div>
                    </div>

                    <div className="user-icon">
                      <img src="/images/icons/user_1.png" alt="회원 1" />
                    </div>
                  </div>

                  <div className="chat-item left-chat">
                    <div className="user-icon"></div>

                    <div className="chat-area">
                      <div className="chat-back">
                        <p>
                          생명력과 에너지가 넘치는 씀씀이는 홀로 계신 부모님
                          곁에서 24시간을 함께 하며 사랑스러운 말투와 다양한
                          표현력으로 부모님의 정서 및 생활 관리를 지원합니다.
                        </p>
                      </div>

                      <div className="msg-arrow left-arrow">
                        <img src="/images/icons/arrow-left.png" alt="메시지" />
                      </div>
                    </div>
                  </div>

                  <div className="chat-item right-chat">
                    <div className="chat-area">
                      <div className="chat-back">
                        <p>
                          생명력과 에너지가 넘치는 씀씀이는 홀로 계신 부모님
                          곁에서 24시간을 함께 하며 사랑스러운 말투와 다양한
                          표현력으로 부모님의 정서 및 생활 관리를 지원합니다.
                        </p>
                      </div>

                      <div className="msg-arrow right-arrow">
                        <img src="/images/icons/arrow-right.png" alt="메시지" />
                      </div>
                    </div>

                    <div className="user-icon">
                      <img src="/images/icons/user_1.png" alt="회원 1" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SectionOneBlock>

        <SectionTwoBlock id="section2">
          <div className="section-back">
            <div className="container">
              <div className="sec-wrap">
                <div className="left-info">
                  <div className="sec-title">
                    <p>Sseum-sseum-e Story</p>
                    <h4>씀씀이 STORY</h4>
                  </div>
                </div>

                <div className="right-area">
                  <div className="sec-top-text">
                    <p>
                      씀씀이는 손주 같은 친근한 목소리로 일상적인 이야기와
                      다양한 콘텐츠로
                      <br />
                      따뜻한 감성을 공유해 부모님의 정서를 건강하게 케어합니다.
                    </p>
                  </div>

                  <div className="function-list">
                    <div className="function-item">
                      <div className="icon">
                        <img
                          src="/images/icons/function_1.png"
                          alt="일상관리"
                        />
                      </div>

                      <div className="text">
                        <p>일상관리</p>
                      </div>
                    </div>
                    <div className="function-item">
                      <div className="icon">
                        <img
                          src="/images/icons/function_2.png"
                          alt="치매 예방 프로그램"
                        />
                      </div>

                      <div className="text">
                        <p>치매 예방 프로그램</p>
                      </div>
                    </div>
                    <div className="function-item">
                      <div className="icon">
                        <img
                          src="/images/icons/function_3.png"
                          alt="시니어 콘텐츠"
                        />
                      </div>

                      <div className="text">
                        <p>시니어 콘텐츠</p>
                      </div>
                    </div>
                    <div className="function-item">
                      <div className="icon">
                        <img
                          src="/images/icons/function_4.png"
                          alt="음성메세지 전송"
                        />
                      </div>

                      <div className="text">
                        <p>음성메세지 전송</p>
                      </div>
                    </div>
                    <div className="function-item">
                      <div className="icon">
                        <img
                          src="/images/icons/function_5.png"
                          alt="스케줄 관리"
                        />
                      </div>

                      <div className="text">
                        <p>스케줄 관리</p>
                      </div>
                    </div>
                    <div className="function-item">
                      <div className="icon">
                        <img
                          src="/images/icons/function_6.png"
                          alt="건강정보제공"
                        />
                      </div>

                      <div className="text">
                        <p>건강정보제공</p>
                      </div>
                    </div>
                    <div className="function-item">
                      <div className="icon">
                        <img
                          src="/images/icons/function_7.png"
                          alt="애교와 칭찬"
                        />
                      </div>

                      <div className="text">
                        <p>애교와 칭찬</p>
                      </div>
                    </div>
                    <div className="function-item">
                      <div className="icon">
                        <img
                          src="/images/icons/function_8.png"
                          alt="인터랙션"
                        />
                      </div>

                      <div className="text">
                        <p>인터랙션</p>
                      </div>
                    </div>
                    <div className="function-item">
                      <div className="icon">
                        <img
                          src="/images/icons/function_9.png"
                          alt="안부확인"
                        />
                      </div>

                      <div className="text">
                        <p>안부확인</p>
                      </div>
                    </div>
                    <div className="function-item">
                      <div className="icon">
                        <img
                          src="/images/icons/function_10.png"
                          alt="활동모니터링"
                        />
                      </div>

                      <div className="text">
                        <p>활동모니터링</p>
                      </div>
                    </div>
                    <div className="function-item">
                      <div className="icon">
                        <img
                          src="/images/icons/function_11.png"
                          alt="안전관리"
                        />
                      </div>

                      <div className="text">
                        <p>안전관리</p>
                      </div>
                    </div>
                    <div className="function-item">
                      <div className="icon">
                        <img src="/images/icons/function_12.png" alt="통계" />
                      </div>

                      <div className="text">
                        <p>통계</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SectionTwoBlock> */}
      </SectionParentBlock>
    </>
  );
};

export default Main;
