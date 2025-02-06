# Overist Resume Template

이 React 앱은 웹 전시 및 기업 제출용 이력서를 편리하게 관리하기 위해 만든 디자인 템플릿입니다.

## Features
- 이 프로젝트는 다양한 배포환경과 어울리도록 정적 html을 빌드할 수 있는 React 18을 기반으로 개발되었습니다.
- A4 사이즈 프린터 출력을 지원합니다.

## 폴더 구조
- `src/payload.ts` 에 데이터를 입력해주세요.

## 환경 설정

### 개발 환경
- Node.js: `v20.9.0`
- Yarn: `4.0.0`

### Yarn 4.0.0 설치
Node.js 버전이 `>= v16`인 경우 corepack으로 Yarn을 설정할 수 있습니다.

**1. Corepack을 통해 설치**
```bash
corepack enable
corepack prepare yarn@4.0.0 --activate
```

**2. 프로젝트 내 버전 지정**
```bash
yarn set version 4.0.0
```

## 사용법

### 의존성 패키지 설치
```bash
yarn install
```

### 로컬 개발서버 실행
```bash
yarn start
```

### 배포버전 빌드
```bash
yarn build
```