# app_webview

Global One App for Webview GIT

1. [F/E Repository](#fe-repository)
2. [F/E 환경 구성](#fe-환경구성)
3. [디렉토리 구조](#디렉토리-구조)

## F/E Repository

React : 


## F/E 기술스택
<table border="1">
   <th align="center">CATEGORY</th>
   <th align="center" width="142px">STACK</th>
   <th align="center">ETC</th>
   <tr>
      <td rowspan="2" align="center">Common</td>
      <td> Vite</td>
      <td>CRA와 달리 웹팩이 아닌 esbuild라는 번들링 프로그램을 사용하며, 첫 번째 실행에서만 전체를 번들링하고 이후 변경된 부분만 새로 번들링하여 빌드 속도를 빠르게 구동할 수 있는 장점</td>
      <td> TypeScript</td>
      <td>컴파일 과정에서 타입을 지정하여 컴파일 에러를 예방할 수 있을뿐 아니라, 손쉬운 디버깅이 가능</td>
   </tr>
   <tr>
      <td rowspan="3" align="center">Frontend</td>
      <td> React.js</td>
      <td>가장 대중적인 자바스크립트 프레임워크</td>
   </tr>
   <tr>
      <td> React Query</td>
      <td>비동기 상태관리 도구이며, API 호출 코드로 비대해진 Store를 목적에 맞게 분리하고, 리액트 훅과 비슷한 직관적인 사용성을 가짐</td>
   </tr>
   <tr>
      <td> Zustand</td>
      <td>통신 결과에 대한 캐싱이 주 목적인 ReactQuery를 보조하기 위한 상태 관리 라이브러리로 가볍게 사용 가능</td>
   </tr>
</table>

<br/>

## F/E 환경구성

1. git 설치
2. Nodejs 설치
3. git clone

```
$ git clone <repository>
```

4. npm install

```
$ cd <repository 명>
$ npm install # package.json에 명시된 모든 모듈을 install합니다.
```

5. 로컬 서버 실행

```
$ npm run dev
```

## 디렉토리 구조

```
src/
├─  style/                    - 이미지 폰트, 스타일 등을 정의
├─  common/                   - 공통 컴포넌트를 정의
├─  hooks/                    - 공통 커스텀 hook 정의
├─  locale/                   - 다국어 처리
├─  pages/                    - 페이지에 대한 컴포넌트 정의
│     ├── [화면별]            
├─  services                  - 비즈니스 로직 훅 정의 
│     ├── api                 - 각 모듈 별로 B/E와 통신할 API 정의 
│     ├── query               - userQuery, useMutation 등 쿼리 훅  
├─  routes/index.js           - path에 어떤 컴포넌트를 표시할 것인지 정의
├─  stores/                   - 상태관리를 위해 각 모듈별로 정의
└─  utils/                    - 공통으로 사용할 유틸성 로직을 정의
└─  types/                    - ts 타입 
```
