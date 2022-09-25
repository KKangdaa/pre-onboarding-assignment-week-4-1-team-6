# 🎉 원티드 프리온보딩 프론트엔드 코스 5차 과제

## 과제 소개
- 목표 : API 서버와 통신해서 작동하는 댓글 프로젝트를 Redux를 통해 구현
- 작업기간 : 2022.09.16 ~ 2022.09.19

<br/>

## 구현 영상
https://user-images.githubusercontent.com/103626175/190916370-117346ec-f236-4bf7-915c-06d6e7347b95.mp4

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

레포지토리를 `clone` 합니다
```markdown
$ git clone https://github.com/Pre-HotSix/pre-onboarding-assignment-week-3-2-team-6
```
dependencies를 설치합니다
```markdown
$ npm install
```
env를 설정합니다
```markdown
$ 내려받은 프로젝트의 최상위 폴더 안에 .env 파일을 생성합니다.
REACT_APP_API_URL=http://localhost:4000/comments
```
api 서버를 실행합니다
```markdown
$ npm run api
```
프로젝트를 실행합니다
```markdown
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
    ├── containers
    ├── components
    ├── pages
    ├── routes
    ├── redux
    ├── styles
    ├── App.jsx
    └── index.js
```

|폴더|구분|
|:--|:--|
|apis|api함수들을 모아둔 폴더|
|containers|컴포넌트들에 대한 부모 Container모음|
|components|코드 재사용을 위한 컴포넌트 관리형 폴더|
|pages|url주소에 따른 페이지 구성 폴더|
|routes|라우팅 관련 처리 폴더|
|redux|redux를 활용한 폴더|
|styles|전역으로 사용하는 style 관리 폴더|

<br/>

## 과제범위

1. 예시 이미지와 같이 댓글 불러오기, 작성, 수정, 삭제가 동작하도록 기능 구현
    - 예시
        
        ![https://user-images.githubusercontent.com/12206933/83601436-8e15b780-a5ab-11ea-91ad-04a302579c90.gif](https://user-images.githubusercontent.com/12206933/83601436-8e15b780-a5ab-11ea-91ad-04a302579c90.gif)
        
2. 페이지네이션
3. 댓글 작성, 수정, 삭제 후 동작
    - 댓글 작성하고 난 뒤: 다른 페이지에 위치하고 있었더라도 1페이지로 이동, 입력 폼 초기화
    - 댓글 수정하고 난 뒤: 현재 보고있는 페이지 유지, 입력 폼 초기화
    - 삭제하고 난 뒤: 1페이지로 이동

## 요구사항

- Redux 환경설정은 자유롭게 진행
    - Redux-saga or Redux-thunk 자유롭게 선택 가능
    - 미들웨어 사용안하는 것도 가능
- Redux logger, Redux-Devtools 설정 필수
- Redux를 이용한 비동기 처리 필수
    
<br />

## 기술 스택

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) 
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white) 
![Styled Components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white) 
![Redux](https://img.shields.io/badge/redux-764ABC?style=for-the-badge&logo=redux&logoColor=white) 


<br />

## Best Practice

### 1. 컴포넌트에서 JSX 파일과 styled-component 파일을 분리했습니다.  

💡 이유 : styled-componet 파일이 길어지면서 한 파일 내에서 JSX 코드와 CSS 코드를 동시에 보기가 어려워져, 가독성을 위해 분리하였습니다. 추가적으로 style 컴포넌트에는 앞에 S.을 포함해 네이밍을 하여, 일반 컴포넌트와 구분하였습니다.

### 2. 어드민 페이지에서 동일한 layout을 Routes 파일에 적용했습니다.

💡 이유 : 최대한 코드 양을 줄이기 위해서 이며, 코드가 많아지면 빌드 속도 및 렌더링 속도가 저하되기 때문입니다. 또한, import의 빈도도 줄일수 있습니다.

### 3. 많은 컴포넌트, 코드를 export 해서 관리해야 하는 경우 index.js 파일을 만들어 import 경로를 줄였습니다.  

💡 이유 : import 경로가 길어지면 가독성이 떨어지고, 파일 추적이 불편하다는 단점이 있기때문입니다. 이를 줄이기 위해 각 root 폴더에 index.js 파일을 만들어 export default 핸들링을 했습니다.

### 4. 재사용 되는 함수, hooks들을 정의

💡 이유 : 모든 데이터를 받아오는 로직이나, 파람값을 가져오는 함수들은 재사용되기 때문에 정의해서 export후 여러페이지에서 재사용해 코드양을 줄였습니다.

### 5. redux 폴더내에 기능별로 파일을 분리한 후, index.js 파일에서 rootReducer 로 병합하였습니다.

💡 이유 : 직관적인 코드 작성을 위해, 구조중심이 아닌 기능중심으로 파일을 분리하였습니다.

### 6. redux 비동기처리로 data에 대한 start, success, error 를 나누어 관리했습니다.

💡 이유 : api 비동기처리에서 로딩 중 일때, 성공 혹은 실패했을 때에 따라 각각 후속 처리가 가능하고, 개발단계에서 logger 와 DevTools 에서 직관적으로 확인이 가능하기 때문에 나누어 관리했습니다.


