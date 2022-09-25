# 🎉 원티드 프리온보딩 프론트엔드 코스 6차 과제

## 과제 소개
- 목표 : 투자 관리 서비스의 관리자 기능 구현
- 작업기간 : 2022.09.20 ~ 2022.09.25

<br/>

## 구현 영상
authenticated 관련

https://user-images.githubusercontent.com/103626175/192113638-4cff6e87-1a59-4aeb-8c95-1de9c6017f40.mp4

계좌 관련

https://user-images.githubusercontent.com/103626175/192114152-28554bb8-0a3a-4d67-b074-300debe4e62e.mp4

사용자 관련

https://user-images.githubusercontent.com/103626175/192114167-6e8fe968-0131-49a5-bc33-777d1ade962b.mp4

<br/>

## 팀원들을 소개합니다.

|멤버|담당|포부|
|:--|:--|:--|
|[김승모(팀장)](https://github.com/endmoseung)|프론트엔드|프리온보딩 코스 수료후 관련기업 취업성공!|
|[손우영](https://github.com/dndud2906)|프론트엔드|프리온보딩 기반으로 하루빨리 이직|
|[이종호](https://github.com/devfrank9)|프론트엔드|원피스 완결 전에 오픈소스 컨트리뷰터 달기|
|[민유경](https://github.com/MINYUKYUNG)|프론트엔드|10월 안에 취직!|
|[강다현](https://github.com/KKangdaa)|프론트엔드|실무를 아는 신입개발자 되기|

<br/>

## Commit & Merge Convention

```
1. dev (개발) 브랜치를 생성한다.
2. 각자 주어진 작업에 대한 issue를 생성한다.
3. 생성된 issue 번호로 개별 branch 이름을 갖는다
4. 개별 branch에서 작업후 Git 컨벤션에 따라 커밋 및 PR을 한다.
5. 이때, PR은 dev(개발)로 한다.
6. 모든 issue close 및 작업사항 없을시 main으로 dev(개발) 브랜치를 PR한다.
7. 이후 작업 발생시 1~6을 반복한다.
```
<br />

## 실행 방법

1. 레포지토리를 `clone` 합니다
```markdown
$ git clone https://github.com/Pre-HotSix/pre-onboarding-assignment-week-4-1-team-6
```
2. server 더미 데이터를 생성 및 실행합니다
```markdown
$ cd server
$ npm run gen
$ npm start
```
3. dependencies를 설치하고, 프로젝트를 실행합니다
```markdown
$ cd client
$ npm install
$ npm start
```
<br/>

## 폴더 구조

```
root
├── .eslintrc
├── .vscode
├── .prettierrc
├── package-lock.json
├── package.json
├── public
|   ├── favicon.ico
|   └── index.html
└── src
    ├── apis
    ├── assets
    ├── constants
    ├── components
    ├── pages
    ├── routes
    ├── recoil
    ├── styles
    ├── hooks
    ├── utils
    ├── App.jsx
    └── index.js
```

|폴더|구분|
|:--|:--|
|apis|api함수들을 모아둔 폴더|
|assets|이미지들을 모아둔 폴더(폰트나 svg도 들어갈 수 있음)|
|constants|ant디자인 관련 로직 정의한 폴더|
|components|코드 재사용을 위한 컴포넌트 관리형 폴더|
|pages|url주소에 따른 페이지 구성 폴더|
|routes|라우팅 관련 처리 폴더|
|recoil|recoil를 활용한 폴더|
|styles|전역으로 사용하는 style 관리 폴더|
|hooks|재사용되는 커스텀훅을 정의한 폴더|
|utils|재사용되는 함수들을 정의한 폴더|

<br/>

## 과제범위

- 로그인
- Header
- Footer
- Sider
- Content
    - 계좌 목록
    - 계좌 상세
    - 사용자 목록
    - 사용자 상세
2. 레이아웃 구성
    
    ![https://user-images.githubusercontent.com/1831308/184299776-53e7c423-73d4-4b7e-9fcf-acaab20ece1a.png](https://user-images.githubusercontent.com/1831308/184299776-53e7c423-73d4-4b7e-9fcf-acaab20ece1a.png)
    
    | 이름 | 설명 |
    | --- | --- |
    | Header | 현재 보여지고 있는 페이지명과 로그인 사용자명을 보여줍니다. |
    | Sider | 페이지 메뉴가 표시됩니다. |
    | Footer | Copyright © December and Company Inc. 가 가운데 정렬로 들어가면 됩니다. |
3. 메뉴 구성
    
    
    | 이름 | 설명 |
    | --- | --- |
    | 계좌 목록 | 계좌 목록이 보여집니다. |
    |  | 계좌 목록에서 특정 계좌를 누르면 계좌의 상세 정보가 보여집니다. 이 화면에서는 계좌명 수정 등의 작업이 가능해야 합니다. <br/>계좌의 사용자명을 누르면 사용자 상세로 이동합니다. |
    | 사용자 | 사용자 목록이 보여집니다. |
    |  | 사용자 목록에서 사용자를 누르면 사용자의 상세 정보가 보여집니다. |
    | 로그아웃 | 로그아웃 처리되고 로그인 화면으로 이동합니다. |
4. 사용자 목록
    - 표기되어야 하는 정보
        - 고객명(name) : 가운데 글자 마스킹 필요, 두글자일 경우 성을 제외한 이름 마스킹 처리, 4글자 이상일 경우 마스킹 처리 후 앞뒤 한글자만 표기
            - 고객명을 누를 경우 사용자 상세화면으로 이동합니다.
        - 보유중인 계좌수(account_count) : (해당 API 호출 후 데이터를 정제하여 표기)
        - 이메일 주소 (email)
        - 주민등록상 성별코드 (gender_origin)
        - 생년월일 (yyyy-mm-dd) (birth_date)
        - 휴대폰 번호 (가운데 4자리 `***` 로 마스킹 필요) (phone_number)
        - 최근로그인 (last_login)
        - 혜택 수신 동의 여부 (해당 API 호출 후 데이터를 정제하여 표기) (allow_marketing_push)
        - 활성화 여부 (해당 API 호출 후 데이터를 정제하여 표기) (is_active)
        - 가입일 (created_at)
    - 구현되어야 하는 기능
        - 목록에서는 활성화 여부, 임직원 계좌 여부를 필터링 할 수 있어야 합니다.
        - 리스트 페이지에서는 검색이 가능해야 합니다.
            - `json-server` 의 Full-text Search API 를 사용하여 구현합니다.
            - 예시 : GET [http://localhost:3000/users?q=South](http://localhost:3000/users?q=South)
        - 페이지네이션이 되어야 합니다.
            - `json-server` 의 Paginate API 를 사용하여 구현합니다.
            - 예시 : GET [http://localhost:3000/users?\\_page=1&\\_limit=20](http://localhost:3000/users?%5C%5C_page=1&%5C%5C_limit=20)
        - 임의로 신규 사용자를 추가할 수 있어야 합니다.
        - 잘못 생성한 사용자를 삭제할 수 있어야 합니다.
        - 개명을 한 사용자를 위해 사용자명을 변경할 수 있어야 합니다.
5. 계좌 목록
    - 표기되어야 하는 정보
        - 고객명(user_name) : 고객ID 를 참조하여 실제 이름으로 보여져야 합니다.
            - 고객명을 누를 경우 사용자 상세화면으로 이동합니다.
        - 브로커명(broker_name) : 예시) OO증권, `brokers.json` 를 참조하여 실제 이름으로 보여져야 합니다.
        - 계좌번호(number) : 앞 뒤 각각 두글자를 제외하고 나머지는 글자수에 맞게 `*` 글자로 마스킹 처리가 필요합니다.
        - 계좌상태(status) : 예시) 운용중, `accountStatus.json` 를 참조하여 실제 이름으로 보여져야 합니다.
        - 계좌명(name) : 계좌명입니다.
        - 평가금액(assets) : 예시) 123,123,123
        - 입금금액(payments) : 예시) 123,123,123
        - 계좌활성화여부(is_active) : 계좌 활성화 여부
        - 계좌개설일(created_at) :
    - 구현되어야 하는 기능
        - 목록에서는 브로커명, 계좌 활성화 여부, 계좌 상태를 필터링 할 수 있어야 합니다.
        - 리스트 페이지에서는 검색이 가능해야 합니다.
            - `json-server` 의 Full-text Search API 를 사용하여 구현합니다.
            - 예시 : GET [http://localhost:3000/accounts?q=South](http://localhost:3000/accounts?q=South)
        - 페이지네이션이 되어야 합니다.
            - `json-server` 의 Paginate API 를 사용하여 구현합니다.
            - 예시 : GET [http://localhost:3000/accounts?_page=2&_limit=20](http://localhost:3000/accounts?%5C%5C_page=2&%5C%5C_limit=20)
6. 상세
    - 각 사용자, 계좌의 상세 페이지는 획득 가능한 대부분의 정보를 표시해주시면 됩니다.
7. 조건
    - Sider 메뉴에서는 현재 보고 있는 화면에 해당하는 메뉴가 하이라이트 되어야 합니다.
    - 새로고침을 해도 로그인 상태가 유지되어야 하며, 상태에 따라 기존에 머무르던 화면이 그대로 보여야 합니다.
    - 계좌 리스트에서 계좌번호를 누르면 계좌상세 화면으로 이동합니다.
    - 계좌 리스트에서 사용자 이름을 누르면 사용자 상세로 이동합니다.
    - 사용자 상세에서 사용자의 계좌목록이 보여야 합니다.
    - 계좌 목록에서 각 계좌 상태별로 필터링이 가능해야 합니다.
    - 수익률이 플러스인 계좌의 총자산 금액은 빨간색, 원금과 동일한 경우 검정색, 마이너스일 경우 파란색으로 보여줘야 합니다.
    - 계좌 목록에서 broker_id 에 해당하는 실제 브로커명 (OO투자증권) 이 보여야 합니다.
8. 예시
    
    > 이 화면은 임의로 생성한 테스트 데이터로 보여지는 단순 예시 화면으로, 실제와는 무관합니다. 
    예시로 만든 화면이며, 디자인 가이드가 아닙니다. 형식만 참고하여 개발을 진행해주세요.
    > 
    - 로그인 화면
        
        ![https://user-images.githubusercontent.com/1831308/184299811-8ec25452-21bc-4466-96fb-8d72f9de5acd.png](https://user-images.githubusercontent.com/1831308/184299811-8ec25452-21bc-4466-96fb-8d72f9de5acd.png)
        
    - 리스트 화면
        
        ![https://user-images.githubusercontent.com/1831308/184299994-2f2d402d-2056-4876-83ed-809cc9c067df.png](https://user-images.githubusercontent.com/1831308/184299994-2f2d402d-2056-4876-83ed-809cc9c067df.png)
        
    - 상세 화면
        
        ![https://user-images.githubusercontent.com/1831308/184299853-e586103b-131a-4950-be92-feabe7d973ab.png](https://user-images.githubusercontent.com/1831308/184299853-e586103b-131a-4950-be92-feabe7d973ab.png)
        
9. 추가 구현 사항
    - `brokerFormat.json` 의 형식에 맞춘 계좌번호가 표기 (예: 123-123-123123-10)
    - 상황별 예외처리
<br />

## 기술 스택

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white) ![React Query](https://img.shields.io/badge/-React%20Query-FF4154?style=for-the-badge&logo=react%20query&logoColor=white) ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black) ![Recoil](https://img.shields.io/badge/Recoil-007af4.svg?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyBpZD0iQ2FscXVlXzEiIGRhdGEtbmFtZT0iQ2FscXVlIDEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDI1NS4yMSA2MjMuOTEiPjxkZWZzPjxzdHlsZT4uY2xzLTF7ZmlsbDp3aGl0ZX08L3N0eWxlPjwvZGVmcz48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Im03NC42MiAyNzcuNDYgMS4yNC0uMTMgMzQuNzgtMy4yOC01My40Ny01OC42NkE5Ni40NyA5Ni40NyAwIDAgMSAzMiAxNTAuM0gzYTEyNS4zIDEyNS4zIDAgMCAwIDMyLjggODQuNTdaTTE3Ny4xMyAzNDdsLTM2IDMuNCA1My4zMiA1OC41MUE5Ni40MSA5Ni40MSAwIDAgMSAyMTkuNjMgNDc0aDI4LjkyYTEyNS4yOCAxMjUuMjggMCAwIDAtMzIuNzYtODQuNTdaIi8+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNMjUzLjY5IDIzMS42OGMtNi4zMy0zMS4zLTMwLjg5LTU0LjA5LTYyLjU3LTU4LjA3bC02LjM1LS43OWE0OS42MSA0OS42MSAwIDAgMS00My4zNS00OS4xM3YtMjBhNTIuNzUgNTIuNzUgMCAxIDAtMjguOTEtLjM2djIwLjM4YTc4LjU2IDc4LjU2IDAgMCAwIDY4LjY1IDc3LjgybDYuMzYuOGMyMy4yNCAyLjkyIDM0Ljc4IDIwIDM3LjgzIDM1LjFzLS45MyAzNS4zMi0yMS4yMiA0N2E3My44MSA3My44MSAwIDAgMS0zMC4wNiA5LjYybC05NS42NiA5YTEwMi40NSAxMDIuNDUgMCAwIDAtNDEuOCAxMy4zOEM5IDMzMi40NS00LjgxIDM2MyAxLjUyIDM5NC4yOXMzMC44OSA1NC4wOCA2Mi41NyA1OC4wNmw2LjM1LjhhNDkuNiA0OS42IDAgMCAxIDQzLjM1IDQ5LjEydjE4YTUyLjc1IDUyLjc1IDAgMSAwIDI4LjkxLjI2di0xOC4yNmE3OC41NSA3OC41NSAwIDAgMC02OC42NS03Ny44MWwtNi4zNi0uOGMtMjMuMjQtMi45Mi0zNC43OC0yMC4wNS0zNy44My0zNS4xMXMuOTMtMzUuMzIgMjEuMjItNDdhNzMuNjggNzMuNjggMCAwIDEgMzAuMDYtOS42M2w5NS42Ni05YTEwMi40NSAxMDIuNDUgMCAwIDAgNDEuOC0xMy4zOGMyNy42NS0xNi4wMiA0MS40LTQ2LjU0IDM1LjA5LTc3Ljg2WiIvPjwvc3ZnPg==&logoColor=white) ![axios](https://img.shields.io/badge/Axios-5A29E4.svg?style=for-the-badge&logo=Axios&logoColor=white) ![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white) ![Ant-Design](https://img.shields.io/badge/-AntDesign-%230170FE?style=for-the-badge&logo=ant-design&logoColor=white)  


<br />

## Best Practice

### 1. authenticated를 routes 내에서 처리했습니다.  

💡 이유 : page내에서 authenticated를 처리하면 페이지마다 처리해야하는 번거로움 + 페이지 깜빡이는 현상이 발생하지만, routes 내에서 직접 처리함으로써 해결했습니다.

### 2. 어드민 페이지에서 동일한 layout을 Routes 파일에 적용했습니다.

💡 이유 : 최대한 코드 양을 줄이기 위해서 이며, 코드가 많아지면 빌드 속도 및 렌더링 속도가 저하되기 때문입니다. 또한, import의 빈도도 줄일수 있습니다.

### 3. 많은 컴포넌트, 코드를 export 해서 관리해야 하는 경우 index.js 파일을 만들어 import 경로를 줄였습니다.  

💡 이유 : import 경로가 길어지면 가독성이 떨어지고, 파일 추적이 불편하다는 단점이 있기때문입니다. 이를 줄이기 위해 각 root 폴더에 index.js 파일을 만들어 export default 핸들링을 했습니다.

### 4. 재사용 되는 함수, hooks들을 정의해서 사용했습니다.

💡 이유 : 모든 데이터를 받아오는 로직이나 파람값을 가져오는 함수들은 재사용되기 때문에, 정의해서 export후 여러페이지에서 재사용해 코드양을 줄였습니다.

### 5. recoil과 react-query로 상태관리를 했습니다.

💡 이유 : 서버 데이터 상태 관리와 클라이언트 데이터 상태 관리를 분리하기 위해, 서버 데이터관리는 react-query를, 클라이언트 데이터관리는 recoil을 사용했습니다.

### 6. params로 페이지네이션, 검색을 관리해서 언제든 도메인에 접근 가능하게 했습니다.

💡 이유 : 특정 페이지의 링크를 통해서도 접근할 수 있고, Query String으로 정보를 얻어 사용할 수도 있기 때문입니다.

### 7. Tailwind CSS를 사용해서 CSS 적용을 하였습니다.

💡 이유 : 클래스명으로 선언을 함으로써 간편하게 사용이 가능하며, HTML와 CSS 파일을 별도로 관리할 필요가 없습니다. 또한, 일관된 디자인과 스타일과 쉽고 자유로운 커스텀이 가능합니다. 추가적으로 Visual Studio Code의 확장 프로그램으로 Tailwind CSS IntelliSense를 설치하면, 클래스 자동완성 기능도 사용할 수 있습니다.


