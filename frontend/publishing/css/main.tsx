import styled from "styled-components";

export const MainBannerBlock = styled.div`
  background-image: url("/images/main/main-banner.png");
  padding: 110px 36px;

  .banner-wrap {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .banner-text {
      display: flex;
      flex-direction: column;

      p {
        font-size: 1.8rem;
        color: #fe9801;
        font-weight: 900;
      }

      h2 {
        font-size: 6.4rem;
        font-weight: 900;
      }

      h4 {
        font-size: 2.4rem;
        font-weight: 400;
        margin-top: 24px;
      }
    }

    .inquiry-wrap {
      width: 684px;
      padding: 60px 36px;
      box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.12);
      border-radius: 12px;
      background-color: rgba(255, 255, 255, 0.5);

      .inquiry-form {
        backdrop-filter: blur(10px);

        .form-group {
          display: flex;
          align-items: center;
          margin-bottom: 16px;

          label {
            font-size: 2.2rem;
            font-weight: 500;
            margin-bottom: 0;
            flex: 1 1;
          }

          .col {
            width: 100%;
          }

          input {
            width: 530px;
            height: 50px;
            background-color: #fff;
            border-radius: 6px;
            border: 1px solid #ccc;
            font-size: 1.6rem;
          }
        }

        .agree-area {
          margin-top: 24px;
          margin-bottom: 60px;
          display: flex;
          justify-content: center;

          label {
            font-size: 2.2rem;
            font-weight: 500;
          }
        }

        .form-btn {
          text-align: center;

          button {
            background-color: #fe9801;
            font-size: 1.6rem;
            font-weight: 700;
            color: #fff;
            border-radius: 6px;
            height: 47px;
            width: 180px;
          }
        }
      }
    }
  }
`;

export const SectionParentBlock = styled.div`
  .sec-text {
    text-align: center;
    p {
      color: #fe9801;
      font-size: 1.8rem;
      font-weight: 900;
      margin-bottom: 12px;
    }

    h3 {
      font-size: 5.2rem;
      font-weight: 900;
      color: #fff;
    }
  }

  .sec-wrap {
    display: flex;
    justify-content: space-between;

    .left-info {
      flex: 0 1 402px;

      .sec-title {
        p {
          font-size: 1.8rem;
          font-weight: 900;
          color: #fe9801;
        }

        h4 {
          font-size: 4.6rem;
          font-weight: 900;
        }
      }
    }

    .right-area {
      flex: 1 1;

      .sec-top-text {
        margin-bottom: 40px;

        p {
          font-size: 2.2rem;
        }
      }
    }
  }
`;

export const SectionOneBlock = styled.section`
  background: linear-gradient(90deg, #dcf2de -2.12%, #f4eaae 104.41%);
  padding: 45px 80px;

  .chat-list {
    display: flex;
    flex-direction: column;
    gap: 40px 0;

    .chat-item {
      display: flex;
      align-items: flex-end;
      gap: 0 26px;
      position: relative;

      .user-icon {
        display: block;
        overflow: hidden;
        min-width: 80px;
        width: 80px;
        height: 80px;
        background-color: #fff;
        border-radius: 50%;
      }

      .chat-area {
        position: relative;

        .chat-back {
          border-radius: 100px;
          padding: 39px 45px;
          background-color: #fff;
          position: relative;
          z-index: 9;
        }

        .msg-arrow {
          position: absolute;
          bottom: 8px;

          &.left-arrow {
            left: -10px;
          }

          &.right-arrow {
            right: -10px;
          }
        }

        p {
          font-size: 2.2rem;
        }
      }
    }
  }
`;

export const SectionTwoBlock = styled.section`
  background-image: url("/images/main/section2_back.png");

  .section-back {
    background-color: rgba(220, 242, 222, 0.7);
    padding: 80px 0;
  }

  .function-list {
    display: flex;
    flex-flow: row wrap;
    margin: 0 -40px;
    gap: 60px 0;

    & > .function-item {
      padding: 0 40px;
      flex: 1 1 25%;
      text-align: center;

      .text {
        margin-top: 16px;

        p {
          font-size: 2.2rem;
          font-weight: 700;
        }
      }
    }
  }
`;

export const SectionThreeBlock = styled.section`
  padding: 80px 0;
  background-color: #fffdee;
`;

export const SectionFourBlock = styled.section`
  background-image: url("/images/main/section4_back.jpeg");

  .section-back {
    background-color: rgba(0, 0, 0, 0.5);
    padding: 120px 0;

    .inquiry-btn {
      text-align: center;
      margin-top: 40px;

      button {
        background-color: rgba(255, 255, 255, 0.3);
        color: #fff;
        font-size: 1.6rem;
        font-weight: 500;
        width: 196px;
        height: 55px;
        border: 1px solid #fff;
        border-radius: 6px;
      }
    }
  }
`;

export const SectionFiveBlock = styled.section`
  padding: 80px 0;

  .sec-text {
    margin-bottom: 90px;
  }

  .sec-image {
    text-align: center;
  }

  .sec-text {
    h3 {
      color: #333;
    }
  }
`;

export const SectionSixBlock = styled.section`
  background: linear-gradient(90deg, #dcf2de -2.12%, #f4eaae 104.41%);
  padding: 80px 0;

  .sec-title {
    text-align: center;
    margin-bottom: 90px;

    h2 {
      font-size: 4.6rem;
      font-weight: 500;

      .text-bold {
        font-weight: 900;
      }
    }
  }

  .sec-info {
    display: flex;
    gap: 24px 0;
    flex-flow: row wrap;
    margin: 0 -12px;

    & > .sec-item {
      padding: 0 12px;
      width: 50%;

      .box {
        background-color: #fff;
        padding: 40px 60px;
        display: flex;
        align-items: center;
        gap: 0 60px;
        border-radius: 4px;

        .text {
          h4 {
            font-size: 2rem;
            font-weight: 900;
            margin-bottom: 16px;
          }

          p {
            font-size: 1.8rem;
            color: #555555;
            line-height: 135%;
          }
        }
      }
    }
  }
`;

export const SectionSevenBlock = styled.section``;
