# 팀명: Console 😀

## 팀 소개

[Front-End]

- 형광석
- 홍영란

[Back-End]

- (팀장) 박성택
- 박동혁

# 프로젝트명: Cheerleader

![Cheerleader](/cheerleader.png)

## 프로젝트 정보

### 0. 소개

랜덤으로 응원 메세지를 주고 받을 수 있는 서비스를 제공하는 웹 어플리케이션 입니다.

※ 배포 링크: https://cheerleader-cbe82.web.app/

### 1. 설치 및 사용 방법

(1) 코드 복사

> 본 레파지토리를 https://github.com/YounglanHong/FirstProject_Cheerleader 주소를 활용하여 로컬 환경에 clone 합니다.

```
git clone https://github.com/YounglanHong/FirstProject_Cheerleader
```

(2) 패키지 설치

```
npm install
```

(3) 실행

```
// cheerleader-client
cd client
npm start

// cheerleader-server
npm start
```

### 2. 디렉토리 구조

- cheerleader-client

```
├── src/
     └── components/
     |    ├──  GetMsg/
     |    ├──  Login/
     |    ├──  SendMsg/
     |    └──  Signup/
     |
     ├── css/
     ├── App.js
     ├── App.css
     ├── index
     └── index.css
```

- cheerleader-server

```
└── controller/
     └── messege/
     |    ├──  getMessage/
     |    ├──  getMessageList/
     |    ├──  index/
     |    └──  sendMessage/
     └── user/
     |    ├──  index/
     |    ├──  info/
     |    ├──  infoUpdate/
     |    ├──  logout/
     |    ├──  signin/
     |    ├──  signup/
     |    └──  withDrawal/
     |
     ├── index/
     |
     ├── migrations/
     |
     ├── models/
     |    ├──  index/
     |    ├──  messages/
     |    └──  users/
     |
     ├── routes/
     |    ├── message/
     |    └── user/
     |
     └── index
```

### 3. 주요 기능

  - 회원가입
  
  ![회원가입](./gif/회원가입.gif)
  
  - 유효성검사
  
  ![유효성검사](./gif/유효성검사.gif)
  
  - 로그인
  
  ![로그인](./gif/로그인.gif)
  
  - 메세지페이지
  
  ![메세지페이지](./gif/메세지페이지.gif)

  - 회원 정보 모달창으로 보기
  - 로그아웃, 회원탈퇴
  
  ![로그아웃,회원탈퇴](./gif/로그아웃&회원탈퇴.gif)
  

### 4. 사용 스택

- 프론트엔드

  - React & React Hook
  - Axios
  - Material-UI

- 백엔드

  - Node.js & Express
  - JWT
  - MySQl

- DB
  - AWS - S3
  - AWS - EC2
  - AWS - RDS
